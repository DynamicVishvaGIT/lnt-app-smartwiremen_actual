import { Component, OnInit ,ViewChild} from '@angular/core';
import {  ModalController, LoadingController, ToastController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { TranslateService } from '@ngx-translate/core';
import { DrawerState } from 'ion-bottom-drawer';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ApiService } from '../providers/api-service/api.service';
import { EventsService } from '../providers/events-service/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-lead',
  templateUrl: './project-lead.page.html',
  styleUrls: ['./project-lead.page.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('0.25s ease-out', 
                    style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 300, opacity: 1 }),
            animate('0.25s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class ProjectLeadPage implements OnInit {
  projectNameClicked: boolean = true;
  projectInfluencerClicked: boolean = false;
  projectClassificationClicked: boolean = false;
  projectStageClicked: boolean = false;
  valueRequirementClicked: boolean = false;
  competitorClicked: boolean = false;
  chancesofWinningClicked: boolean = false;
  transitionMonthClicked: boolean = false;
  projectStatusClicked: boolean = false;
  projectSourceClicked: boolean = false;
  consultants: any;
  architects: any;
  builders: any;
  distributors: any;
  contractors: any;
  decisionmakers: any;
  developers: any;
  houseowners: any;
  competitions: any;
  project_stages: any;
  project_sources: any;
  dockedHeight = 500;
  drawerState: DrawerState=0;
  disableDrag: boolean = true;
  minimumHeight = 500;
  @ViewChild('cityComponent') cityComponent: IonicSelectableComponent;
  states: any;
  cities: any[];
  showDiv:boolean=false;
  productLeadFormField = {
    pr_name: null,
    add_1: null,
    add_2: null,
    pr_contact: null,
    pr_contractor: null,
    pr_builder: null,
    pr_developer: null,
    pr_architect: null,
    pr_consultant: null,
    pr_houseowner: null,
    pr_retailers_distributors: null,
    pr_decmaker: null,
    pr_classification: null,
    pr_stage: null,
    tripper: null,
    englaze: null,
    entice: null,
    engem: null,
    competition: null,
    pr_chances: null,
    order_month: null,
    pr_status: null,
    pr_source: null,
    oris: null,
    lost_name: null,
    lost_value: null,
    won_value: null,
    won_routed: null,
    won_ptp_dsp: null,
    

  };
  addLeadFormField = {
    username: null,
    first_name: null,
    last_name: null,

  };
  tran_please_wait: string = 'Please Wait';
  tran_required_mobile_no: string = "Please Enter Your Mobile No";
  tran_required_first_name: string = "Please Enter Your First Name";
  tran_required_last_name: string = "Please Enter Your Last Name";

  tran_required_project_name: string = "Please Enter Project Name";
  tran_required_addr: string = "Please Enter Address";
  tran_required_contact: string = "Please Enter Contact Number";
  tran_required_project_classification: string = "Please Select Project Classification";
  tran_required_project_stage: string = "Please Select Project Stage";
  tran_required_competiton: string = "Please Select Competitor Name";
  tran_required_chances: string = "Please Select Chances of Winning";
  tran_required_date: string = "Please Select Order Month Date";
  tran_required_project_status: string = "Please Select Project Status";
  tran_required_lost_name: string = "Please Enter Competitor Name Who Has Won";
  tran_required_lost_value: string = "Please Enter Lost Value";
  tran_required_won_value: string = "Please Enter Won Value";
  tran_required_won_routed: string = "Please Select Order Routed";
  tran_required_won_ptp_dsp: string = "Please Enter  Name of Retailer/PTP/DSP";
  public pincode_pattern = "[0-9]{6}"
  loading: any;
  type;
  type2;
  today;
  parent_id: Object;
  constructor(
    private apiService: ApiService,
    public modalCtrl: ModalController,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public events: EventsService,
    public translate: TranslateService,
    public router:Router
  ) { 
    this.today = new Date().toISOString();
    this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
    this.translate.get('required_project_name').subscribe(res => { this.tran_required_project_name = res; });
    this.translate.get('required_addr').subscribe(res => { this.tran_required_addr = res; });
    this.translate.get('required_contact').subscribe(res => { this.tran_required_contact = res; });
    this.translate.get('required_project_classification').subscribe(res => { this.tran_required_project_classification = res; });
    this.translate.get('required_project_stage').subscribe(res => { this.tran_required_project_stage = res; });
    this.translate.get('required_competiton').subscribe(res => { this.tran_required_competiton = res; });
    this.translate.get('required_chances').subscribe(res => { this.tran_required_chances = res; });
    this.translate.get('required_date').subscribe(res => { this.tran_required_date = res; });
    this.translate.get('required_project_status').subscribe(res => { this.tran_required_project_status = res; });
    this.translate.get('required_first_name').subscribe(res => { this.tran_required_first_name = res; });
    this.translate.get('required_last_name').subscribe(res => { this.tran_required_last_name = res; });
    this.translate.get('required_mobile_no').subscribe(res => { this.tran_required_mobile_no = res; });
    this.translate.get('required_lost_name').subscribe(res => { this.tran_required_lost_name = res; });
    this.translate.get('required_lost_value').subscribe(res => { this.tran_required_lost_value = res; });
    this.translate.get('required_won_value').subscribe(res => { this.tran_required_won_value = res; });
    this.translate.get('required_won_routed').subscribe(res => { this.tran_required_won_routed = res; });
    this.translate.get('required_won_ptp_dsp').subscribe(res => { this.tran_required_won_ptp_dsp = res; });
  }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.loadConsultantArchitectBuilder();
    this.loadDistributorsContractorDecisionmaker();
    this.loadDeveloperHouseowner();
    this.loadCompetition();
    this.loadProjectStage();
    this.loadProjectSource();
    this.loadParentId();
}
  ionViewDidLoad() {
    // this.loadConsultantArchitectBuilder()
    // this.loadDistributorsContractorDecisionmaker()
    // this.loadDeveloperHouseowner()
    // this.loadCompetition()
    // this.loadProjectStage()
    // this.loadProjectSource()
    // this.loadParentId()
  }
  loadConsultantArchitectBuilder() {
    this.apiService.consultant_architect_builder().subscribe(
      data => {

        this.consultants = data['consultant'];
        this.architects = data['architect'];
        this.builders = data['builder'];
        console.log('dta', data)
      },
      error => console.log(error)
    );
  }
  loadDistributorsContractorDecisionmaker() {
    this.apiService.distributors_contractor_decisionmaker().subscribe(
      data => {

        this.distributors = data['distributors'];
        this.contractors = data['contractor'];
        this.decisionmakers = data['decisionmaker_'];
        console.log('dta', data)
      },
      error => console.log(error)
    );
  }
  loadDeveloperHouseowner() {
    this.apiService.developer_houseowner().subscribe(
      data => {

        this.developers = data['developer'];
        this.houseowners = data['houseowner'];
        console.log('dta', data)
      },
      error => console.log(error)
    );
  }
  loadCompetition() {
    this.apiService.competition().subscribe(
      data => {

        this.competitions = data;
        console.log('dta', data)
      },
      error => console.log(error)
    );
  }
  loadProjectStage() {
    this.apiService.project_stage().subscribe(
      data => {

        this.project_stages = data;
        console.log('dta', data)
      },
      error => console.log(error)
    );
  }
  loadProjectSource() {
    this.apiService.project_source().subscribe(
      data => {

        this.project_sources = data;
        console.log('dta', data)
      },
      error => console.log(error)
    );
  }
  loadParentId() {
    this.apiService.parentId().subscribe(
      data => {

        this.parent_id = data;
        console.log('dta', data)
      },
      error => console.log(error)
    );
  }
  openDrawer(type1,type2) {
    this.type=type1
    this.type2=type2
    // const addLeadUserModal = this.modalCtrl.create(AddLeadDrawerPage, {'type':type1}, { cssClass: "auto-height", showBackdrop: true });
    // addLeadUserModal.onDidDismiss(data => {
    //   if(data){
    //   if((type2=='contractor')||(type2=='decisionmaker')||(type2=='distributor')){
    //     this.loadDistributorsContractorDecisionmaker()
    //   }
    //   else if((type2=='builder') || (type2=='architect')||(type2=='consultant')){
    //     this.loadConsultantArchitectBuilder()
    //   }
    //   else if((type2=='developer')||(type2=='houseowner')){
    //     this.loadDeveloperHouseowner()
    //   }
    //   }
      

    // });
    // addLeadUserModal.present();
    this.showDiv=true;
    this.drawerState=1;
  }
  closeDrawer(data) {
    this.showDiv=false;
       if(data){
      if((this.type2=='contractor')||(this.type2=='decisionmaker')||(this.type2=='distributor')){
        this.loadDistributorsContractorDecisionmaker()
      }
      else if((this.type2=='builder') || (this.type2=='architect')||(this.type2=='consultant')){
        this.loadConsultantArchitectBuilder()
      }
      else if((this.type2=='developer')||(this.type2=='houseowner')){
        this.loadDeveloperHouseowner()
      }
      }
  }
  toggleSection(heading) {
    if (heading == 'project_name') {
      this.projectNameClicked = !this.projectNameClicked;
    }
    else if (heading == 'project_influencer') {
      this.projectInfluencerClicked = !this.projectInfluencerClicked;
    }
    else if (heading == 'project_classification') {
      this.projectClassificationClicked = !this.projectClassificationClicked;
    }
    else if (heading == 'project_stage') {
      this.projectStageClicked = !this.projectStageClicked;
    }
    else if (heading == 'value_requirement') {
      this.valueRequirementClicked = !this.valueRequirementClicked;
    }
    else if (heading == 'competitor') {
      this.competitorClicked = !this.competitorClicked;
    }
    else if (heading == 'chances_of_winning') {
      this.chancesofWinningClicked = !this.chancesofWinningClicked;
    }
    else if (heading == 'transition_month') {
      this.transitionMonthClicked = !this.transitionMonthClicked;
    }
    else if (heading == 'project_status') {
      this.projectStatusClicked = !this.projectStatusClicked;
    }
    else if (heading == 'project_source') {
      this.projectSourceClicked = !this.projectSourceClicked;
    }
  }
 
  productLeadForm() {
    console.log('1')
    if(this.parent_id){
    
    if (this.productLeadFormField.pr_name == '' || this.productLeadFormField.pr_name == null) {
      this.presentToast(this.tran_required_project_name);
      
    } else if (this.productLeadFormField.add_1 == '' || this.productLeadFormField.add_1 == null) {
      this.presentToast(this.tran_required_addr);
      
    } else if (this.productLeadFormField.pr_contact == '' || this.productLeadFormField.pr_contact == null) {
      this.presentToast(this.tran_required_contact);
      
    }
    else{

      this.presentLoading()
   
      var projectFormValues = {
        'pr_name': this.productLeadFormField.pr_name,
        'add_1': this.productLeadFormField.add_1,
        'add_2': this.productLeadFormField.add_2,
        'pr_contact': this.productLeadFormField.pr_contact,
        'pr_contractor': '',
        'pr_builder': '',
        'pr_developer': '',
        'pr_architect': '',
        'pr_consultant': '',
        'pr_houseowner': '',
        'pr_retailers_distributors': '',
        'pr_decmaker': '',
        'pr_classification': '',
        'pr_stage': '',
        'tripper': '',
        'englaze': '',
        'entice': '',
        'engem': '',
        'competition': '',
        'pr_chances': '',
        'order_month': '',
        'pr_status': '',
        'pr_source': '',
        'oris': '',
        'lost_name': '',
        'lost_value': '',
        'won_value': '',
        'won_routed': '',
        'won_ptp_dsp': '',
        "parent_id": this.parent_id['id'],
      };
      console.log('projectFormValues', projectFormValues)
      this.apiService.addProject(projectFormValues).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
    }
    
  }
  else{
    this.presentToast("You are not mapped to ISO")
    this.loadingCtrl.dismiss()

  }
  }
  // productLeadForm() {
  //   console.log('1')
  //   if(this.parent_id){

   
    
  //   if (this.productLeadFormField.pr_name == '' || this.productLeadFormField.pr_name == null) {
  //     this.presentToast(this.tran_required_project_name);
      
  //   } else if (this.productLeadFormField.add_1 == '' || this.productLeadFormField.add_1 == null) {
  //     this.presentToast(this.tran_required_addr);
      
  //   } else if (this.productLeadFormField.pr_contact == '' || this.productLeadFormField.pr_contact == null) {
  //     this.presentToast(this.tran_required_contact);
      
  //   }
  //   else if (this.productLeadFormField.pr_classification == '' || this.productLeadFormField.pr_classification == null) {
  //     this.presentToast(this.tran_required_project_classification);
      
  //   }
  //   else if (this.productLeadFormField.pr_stage == '' || this.productLeadFormField.pr_stage == null) {
  //     this.presentToast(this.tran_required_project_stage);
      
  //   }
    
  //   else if (this.productLeadFormField.competition == '' || this.productLeadFormField.competition == null) {
  //     this.presentToast(this.tran_required_competiton);
      
  //   }
  //   else if (this.productLeadFormField.order_month == '' || this.productLeadFormField.order_month == null) {
  //     this.presentToast(this.tran_required_date);
      
  //   }
  //   else if (this.productLeadFormField.pr_status == '' || this.productLeadFormField.pr_status == null) {
  //     this.presentToast(this.tran_required_project_status);
      
  //   }
  //   else if (this.productLeadFormField.pr_status !== '' || this.productLeadFormField.pr_status !== null) {
  //     console.log('2')
  //    if(this.productLeadFormField.pr_status =='Won' ){
  //     console.log('3')

  //     if(this.productLeadFormField.won_value == '' || this.productLeadFormField.won_value == null){
  //       this.presentToast(this.tran_required_won_value);
        
  //     }
  //     else if(this.productLeadFormField.won_routed == '' || this.productLeadFormField.won_routed == null){
  //       this.presentToast(this.tran_required_won_routed);
        
  //     }
  //     else if(this.productLeadFormField.won_ptp_dsp == '' || this.productLeadFormField.won_ptp_dsp == null){
  //       this.presentToast(this.tran_required_won_ptp_dsp);
        
  //     }
  //     else {
  //       console.log('4')
  //       if(this.productLeadFormField.order_month){
  //         this.productLeadFormField.order_month=(this.productLeadFormField.order_month).split('T')[0]
  //       }
  //     this.presentLoading()
  
  //           if (this.productLeadFormField.pr_status=='Won'){
  //             this.productLeadFormField.lost_name=null
  //             this.productLeadFormField.lost_value=null
  //           }
  //           else if(this.productLeadFormField.pr_status=='Lost'){
  //             this.productLeadFormField.won_value=null
  //             this.productLeadFormField.won_routed=null
  //             this.productLeadFormField.won_ptp_dsp=null
  //           }
  //           else{
  //             this.productLeadFormField.lost_name=null
  //             this.productLeadFormField.lost_value=null
  //             this.productLeadFormField.won_value=null
  //             this.productLeadFormField.won_routed=null
  //             this.productLeadFormField.won_ptp_dsp=null
  //           }
  //           if(this.productLeadFormField.order_month){
  //             this.productLeadFormField.order_month=(this.productLeadFormField.order_month).split('T')[0]
  //           }
  //           var projectFormValues = {
  //             'pr_name': this.productLeadFormField.pr_name,
  //             'add_1': this.productLeadFormField.add_1,
  //             'add_2': this.productLeadFormField.add_2,
  //             'pr_contact': this.productLeadFormField.pr_contact,
  //             'pr_contractor': this.productLeadFormField.pr_contractor,
  //             'pr_builder': this.productLeadFormField.pr_builder,
  //             'pr_developer': this.productLeadFormField.pr_developer,
  //             'pr_architect': this.productLeadFormField.pr_architect,
  //             'pr_consultant': this.productLeadFormField.pr_consultant,
  //             'pr_houseowner': this.productLeadFormField.pr_houseowner,
  //             'pr_retailers_distributors': this.productLeadFormField.pr_retailers_distributors,
  //             'pr_decmaker': this.productLeadFormField.pr_decmaker,
  //             'pr_classification': this.productLeadFormField.pr_classification,
  //             'pr_stage': this.productLeadFormField.pr_stage,
  //             'tripper': this.productLeadFormField.tripper,
  //             'englaze': this.productLeadFormField.englaze,
  //             'entice': this.productLeadFormField.entice,
  //             'engem': this.productLeadFormField.engem,
  //             'competition': this.productLeadFormField.competition.join(),
  //             'pr_chances': this.productLeadFormField.pr_chances,
  //             'order_month': this.productLeadFormField.order_month,
  //             'pr_status': this.productLeadFormField.pr_status,
  //             'pr_source': this.productLeadFormField.pr_source,
  //             'oris': this.productLeadFormField.oris,
  //             "lost_name": this.productLeadFormField.lost_name,
  //             "lost_value": this.productLeadFormField.lost_value,
  //             "won_value": this.productLeadFormField.won_value,
  //             "won_routed": this.productLeadFormField.won_routed,
  //             "won_ptp_dsp": this.productLeadFormField.won_ptp_dsp,
  //             "parent_id": this.parent_id['id'],

  //           };
         
  //         console.log('projectFormValues', projectFormValues)
  //         this.apiService.addProject(projectFormValues).subscribe(
  //           data => this.handleResponse(data),
  //           error => this.handleError(error)
  //         );
  //     }
  //    }
  //    else if(this.productLeadFormField.pr_status =='Lost' ){
  //     console.log('5')

  //     if(this.productLeadFormField.lost_value == '' || this.productLeadFormField.lost_value == null){
  //       this.presentToast(this.tran_required_lost_value);
        
  //     }
  //     else if(this.productLeadFormField.lost_name == '' || this.productLeadFormField.lost_name == null){
  //       this.presentToast(this.tran_required_lost_name);
        
  //     }
  //     else {
  //       console.log('6')
  //       this.presentLoading()
       
  
  //           if (this.productLeadFormField.pr_status=='Won'){
  //             this.productLeadFormField.lost_name=null
  //             this.productLeadFormField.lost_value=null
  //           }
  //           else if(this.productLeadFormField.pr_status=='Lost'){
  //             this.productLeadFormField.won_value=null
  //             this.productLeadFormField.won_routed=null
  //             this.productLeadFormField.won_ptp_dsp=null
  //           }
  //           else{
  //             this.productLeadFormField.lost_name=null
  //             this.productLeadFormField.lost_value=null
  //             this.productLeadFormField.won_value=null
  //             this.productLeadFormField.won_routed=null
  //             this.productLeadFormField.won_ptp_dsp=null
  //           }
  //           if(this.productLeadFormField.order_month){
  //             this.productLeadFormField.order_month=(this.productLeadFormField.order_month).split('T')[0]
  //           }
  //           var projectFormValues = {
  //             'pr_name': this.productLeadFormField.pr_name,
  //             'add_1': this.productLeadFormField.add_1,
  //             'add_2': this.productLeadFormField.add_2,
  //             'pr_contact': this.productLeadFormField.pr_contact,
  //             'pr_contractor': this.productLeadFormField.pr_contractor,
  //             'pr_builder': this.productLeadFormField.pr_builder,
  //             'pr_developer': this.productLeadFormField.pr_developer,
  //             'pr_architect': this.productLeadFormField.pr_architect,
  //             'pr_consultant': this.productLeadFormField.pr_consultant,
  //             'pr_houseowner': this.productLeadFormField.pr_houseowner,
  //             'pr_retailers_distributors': this.productLeadFormField.pr_retailers_distributors,
  //             'pr_decmaker': this.productLeadFormField.pr_decmaker,
  //             'pr_classification': this.productLeadFormField.pr_classification,
  //             'pr_stage': this.productLeadFormField.pr_stage,
  //             'tripper': this.productLeadFormField.tripper,
  //             'englaze': this.productLeadFormField.englaze,
  //             'entice': this.productLeadFormField.entice,
  //             'engem': this.productLeadFormField.engem,
  //             'competition': this.productLeadFormField.competition.join(),
  //             'pr_chances': this.productLeadFormField.pr_chances,
  //             'order_month': this.productLeadFormField.order_month,
  //             'pr_status': this.productLeadFormField.pr_status,
  //             'pr_source': this.productLeadFormField.pr_source,
  //             'oris': this.productLeadFormField.oris,
  //             "lost_name": this.productLeadFormField.lost_name,
  //             "lost_value": this.productLeadFormField.lost_value,
  //             "won_value": this.productLeadFormField.won_value,
  //             "won_routed": this.productLeadFormField.won_routed,
  //             "won_ptp_dsp": this.productLeadFormField.won_ptp_dsp,
  //             "parent_id": this.parent_id['id']

  //           };
         
  //         console.log('projectFormValues', projectFormValues)
  //         this.apiService.addProject(projectFormValues).subscribe(
  //           data => this.handleResponse(data),
  //           error => this.handleError(error)
  //         );
  //     }

  //    }
  //    else {
  //     console.log('7')

  //     this.presentLoading()

  //         if (this.productLeadFormField.pr_status=='Won'){
  //           this.productLeadFormField.lost_name=null
  //           this.productLeadFormField.lost_value=null
  //         }
  //         else if(this.productLeadFormField.pr_status=='Lost'){
  //           this.productLeadFormField.won_value=null
  //           this.productLeadFormField.won_routed=null
  //           this.productLeadFormField.won_ptp_dsp=null
  //         }
  //         else{
  //           this.productLeadFormField.lost_name=null
  //           this.productLeadFormField.lost_value=null
  //           this.productLeadFormField.won_value=null
  //           this.productLeadFormField.won_routed=null
  //           this.productLeadFormField.won_ptp_dsp=null
  //         }
  //         if(this.productLeadFormField.order_month){
  //           this.productLeadFormField.order_month=(this.productLeadFormField.order_month).split('T')[0]
  //         }
  //         var projectFormValues = {
  //           'pr_name': this.productLeadFormField.pr_name,
  //           'add_1': this.productLeadFormField.add_1,
  //           'add_2': this.productLeadFormField.add_2,
  //           'pr_contact': this.productLeadFormField.pr_contact,
  //           'pr_contractor': this.productLeadFormField.pr_contractor,
  //           'pr_builder': this.productLeadFormField.pr_builder,
  //           'pr_developer': this.productLeadFormField.pr_developer,
  //           'pr_architect': this.productLeadFormField.pr_architect,
  //           'pr_consultant': this.productLeadFormField.pr_consultant,
  //           'pr_houseowner': this.productLeadFormField.pr_houseowner,
  //           'pr_retailers_distributors': this.productLeadFormField.pr_retailers_distributors,
  //           'pr_decmaker': this.productLeadFormField.pr_decmaker,
  //           'pr_classification': this.productLeadFormField.pr_classification,
  //           'pr_stage': this.productLeadFormField.pr_stage,
  //           'tripper': this.productLeadFormField.tripper,
  //           'englaze': this.productLeadFormField.englaze,
  //           'entice': this.productLeadFormField.entice,
  //           'engem': this.productLeadFormField.engem,
  //           'competition': this.productLeadFormField.competition.join(),
  //           'pr_chances': this.productLeadFormField.pr_chances,
  //           'order_month': this.productLeadFormField.order_month,
  //           'pr_status': this.productLeadFormField.pr_status,
  //           'pr_source': this.productLeadFormField.pr_source,
  //           'oris': this.productLeadFormField.oris,
  //           "lost_name": this.productLeadFormField.lost_name,
  //           "lost_value": this.productLeadFormField.lost_value,
  //           "won_value": this.productLeadFormField.won_value,
  //           "won_routed": this.productLeadFormField.won_routed,
  //           "won_ptp_dsp": this.productLeadFormField.won_ptp_dsp,
  //           "parent_id": this.parent_id['id']

  //         };
       
  //       console.log('projectFormValues', projectFormValues)
  //       this.apiService.addProject(projectFormValues).subscribe(
  //         data => this.handleResponse(data),
  //         error => this.handleError(error)
  //       );
  //   }
  //   }
  //   else {
  //     console.log('7')

  //    this.presentLoading()

  //         if (this.productLeadFormField.pr_status=='Won'){
  //           this.productLeadFormField.lost_name=null
  //           this.productLeadFormField.lost_value=null
  //         }
  //         else if(this.productLeadFormField.pr_status=='Lost'){
  //           this.productLeadFormField.won_value=null
  //           this.productLeadFormField.won_routed=null
  //           this.productLeadFormField.won_ptp_dsp=null
  //         }
  //         else{
  //           this.productLeadFormField.lost_name=null
  //           this.productLeadFormField.lost_value=null
  //           this.productLeadFormField.won_value=null
  //           this.productLeadFormField.won_routed=null
  //           this.productLeadFormField.won_ptp_dsp=null
  //         }
  //         if(this.productLeadFormField.order_month){
  //           this.productLeadFormField.order_month=(this.productLeadFormField.order_month).split('T')[0]
  //         }
  //         var projectFormValues = {
  //           'pr_name': this.productLeadFormField.pr_name,
  //           'add_1': this.productLeadFormField.add_1,
  //           'add_2': this.productLeadFormField.add_2,
  //           'pr_contact': this.productLeadFormField.pr_contact,
  //           'pr_contractor': this.productLeadFormField.pr_contractor,
  //           'pr_builder': this.productLeadFormField.pr_builder,
  //           'pr_developer': this.productLeadFormField.pr_developer,
  //           'pr_architect': this.productLeadFormField.pr_architect,
  //           'pr_consultant': this.productLeadFormField.pr_consultant,
  //           'pr_houseowner': this.productLeadFormField.pr_houseowner,
  //           'pr_retailers_distributors': this.productLeadFormField.pr_retailers_distributors,
  //           'pr_decmaker': this.productLeadFormField.pr_decmaker,
  //           'pr_classification': this.productLeadFormField.pr_classification,
  //           'pr_stage': this.productLeadFormField.pr_stage,
  //           'tripper': this.productLeadFormField.tripper,
  //           'englaze': this.productLeadFormField.englaze,
  //           'entice': this.productLeadFormField.entice,
  //           'engem': this.productLeadFormField.engem,
  //           'competition': this.productLeadFormField.competition.join(),
  //           'pr_chances': this.productLeadFormField.pr_chances,
  //           'order_month': this.productLeadFormField.order_month,
  //           'pr_status': this.productLeadFormField.pr_status,
  //           'pr_source': this.productLeadFormField.pr_source,
  //           'oris': this.productLeadFormField.oris,
  //           "lost_name": this.productLeadFormField.lost_name,
  //           "lost_value": this.productLeadFormField.lost_value,
  //           "won_value": this.productLeadFormField.won_value,
  //           "won_routed": this.productLeadFormField.won_routed,
  //           "won_ptp_dsp": this.productLeadFormField.won_ptp_dsp,
  //           "parent_id": this.parent_id['id']

  //         };
       
  //       console.log('projectFormValues', projectFormValues)
  //       this.apiService.addProject(projectFormValues).subscribe(
  //         data => this.handleResponse(data),
  //         error => this.handleError(error)
  //       );
  //   }
  // }
  // else{
  //   this.presentToast("You are not mapped to ISO")
  //   this.loadingCtrl.dismiss()

  // }
  // }
  handleResponse(data) {
    this.events.publish({name:'project:success',params:data});
    this.loadingCtrl.dismiss()
    console.log('here')
  
    this.presentProjectLeadToast("Project lead has been added successfully")
    
  }

  handleError(error) {
    this.loadingCtrl.dismiss()

    this.events.publish({name:'project:failed',params:''});
    let errorMsg = '';
    if(error.status == 401){
      errorMsg = error.error.message;
    }
    else if(error.status == 500){
      errorMsg = error.error.message;

    }
    else{
      errorMsg = error.error.error;
    }
   
    this.presentToast(errorMsg);
    
  }
  addLeadForm() {
    

    if (this.addLeadFormField.first_name == '' || this.addLeadFormField.first_name == null) {
      this.presentToast(this.tran_required_first_name);
      
    } else if (this.addLeadFormField.last_name == '' || this.addLeadFormField.last_name == null) {
      this.presentToast(this.tran_required_last_name);
      
    } else if (this.addLeadFormField.username == '' || this.addLeadFormField.username == null) {
      this.presentToast(this.tran_required_mobile_no);
      
    }

    else {

     this.presentLoading()
        var addLeadFormValues = {
          'mob': this.addLeadFormField.username,
          'name': this.addLeadFormField.first_name + " "+ this.addLeadFormField.last_name,
          'type':this.type
        };


        console.log('addLeadFormValues', addLeadFormValues)
        this.apiService.addLeadUser(addLeadFormValues).subscribe(
          data => {
            
            this.handleLeadResponse(data);
            
          },
          error => this.handleLeadError(error)
        );
    }
  }

  handleLeadResponse(data) {
    this.loadingCtrl.dismiss()
    console.log('here',data)

    this.presentToast(data)
    
    this.closeDrawer('success')
  }
  handleLeadError(error) {
    this.loadingCtrl.dismiss()
    console.log(error)
    this.events.publish({name:'addLeadUser:failed',params:''});
    let errorMsg = '';
    if (error.status == 401) {
      errorMsg = error.error;
    } else {
      errorMsg = error.error;
    }
   
    this.presentToast(errorMsg);
    
  }
  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position:'middle'
    });
    toast.present();
  }
  async presentProjectLeadToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position:'middle'
    });
    toast.present();
    toast.onDidDismiss().then(()=>{
      this.router.navigate(['projectlist'])
    })
    
  }
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      message: this.tran_please_wait+'...',
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  goBack(){
    this.router.navigate(['home'])
  }
  ionViewDidLeave(){
    this.productLeadFormField = {
      pr_name: null,
      add_1: null,
      add_2: null,
      pr_contact: null,
      pr_contractor: null,
      pr_builder: null,
      pr_developer: null,
      pr_architect: null,
      pr_consultant: null,
      pr_houseowner: null,
      pr_retailers_distributors: null,
      pr_decmaker: null,
      pr_classification: null,
      pr_stage: null,
      tripper: null,
      englaze: null,
      entice: null,
      engem: null,
      competition: null,
      pr_chances: null,
      order_month: null,
      pr_status: null,
      pr_source: null,
      oris: null,
      lost_name: null,
      lost_value: null,
      won_value: null,
      won_routed: null,
      won_ptp_dsp: null,
      
  
    };
    this.addLeadFormField = {
      username: null,
      first_name: null,
      last_name: null,
  
    };
  }
}

