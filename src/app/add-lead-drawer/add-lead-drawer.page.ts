import { Component, OnInit } from '@angular/core';
import {  LoadingController,ToastController,ModalController } from '@ionic/angular';
import { ApiService } from '../providers/api-service/api.service';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder } from '@angular/forms';
import { EventsService } from '../providers/events-service/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-lead-drawer',
  templateUrl: './add-lead-drawer.page.html',
  styleUrls: ['./add-lead-drawer.page.scss'],
})
export class AddLeadDrawerPage implements OnInit {
  addLeadFormField = {
    username: null,
    first_name: null,
    last_name: null,
  };
  tran_please_wait: string = 'Please Wait';
  tran_required_mobile_no: string = "Please Enter Your Mobile No";
  tran_required_first_name: string = "Please Enter Your First Name";
  tran_required_last_name: string = "Please Enter Your Last Name";


  states: any;
  cities: any[];
  loading: any;
  type;
  sectionHeight: string;
  inputBottom: string;
  docHeight: number;
  constructor(
   
    private apiService: ApiService,
    public translate: TranslateService,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public events: EventsService,
    public formBuilder: FormBuilder,
    private route:ActivatedRoute,
    public modalCtrl:ModalController
  ) {
    this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
    this.translate.get('required_first_name').subscribe(res => { this.tran_required_first_name = res; });
    this.translate.get('required_last_name').subscribe(res => { this.tran_required_last_name = res; });
    this.translate.get('required_mobile_no').subscribe(res => { this.tran_required_mobile_no = res; });
   }

  ngOnInit() {
    this.type=this.route.snapshot.paramMap.get('type');

  }
  ionViewDidLoad() {
    // this.keyboard.onKeyboardShow().subscribe(data=>{
    //   if(data){
    //     this.sectionHeight = 85 + '%';
    //     this.inputBottom = 0 + '%';
    //   }
    //   else {
    //     this.docHeight = document.body.clientHeight;
    //     this.sectionHeight = ((this.docHeight - data.keyboardHeight - (document.getElementById('toptoolbar').clientHeight + document.getElementById('inputchat').clientHeight)) / this.docHeight) * 100 + '%';
    //     this.inputBottom = data.keyboardHeight / this.docHeight * 100 + '%';
    // }
    // })
  }

  dismissModal() {
    this.modalCtrl.dismiss()
  }

  closeDrawer(data) {
    this.modalCtrl.dismiss()

    // this.drawerState=0;
  }
  addLeadForm() {
    

    if (this.addLeadFormField.first_name == '' || this.addLeadFormField.first_name == null) {
      
      this.presentToast(this.tran_required_first_name)
      
    } else if (this.addLeadFormField.last_name == '' || this.addLeadFormField.last_name == null) {
      
      this.presentToast(this.tran_required_last_name)

    } else if (this.addLeadFormField.username == '' || this.addLeadFormField.username == null) {
      
      this.presentToast(this.tran_required_mobile_no)

    }

    else {
      this.presentLoading().then(()=>{
        var signupFormValues = {
          'mob': this.addLeadFormField.username,
          'name': this.addLeadFormField.first_name + " "+ this.addLeadFormField.last_name,
          'type':this.type
        };


        console.log('signupFormValues', signupFormValues)
        this.apiService.addLeadUser(signupFormValues).subscribe(
          data => {
            this.handleResponse(data);
            
          },
          error => this.handleError(error)
        );
      })
      

     
    }
  }

  handleResponse(data) {
    this.loadingCtrl.dismiss()
    console.log('here')
    
    this.presentToast(data)
    this.closeDrawer('success')
  }
  handleError(error) {
    this.loadingCtrl.dismiss()
    this.events.publish({name:'addLeadUser:failed',params:''})

    let errorMsg = '';
    if (error.status == 401) {
      errorMsg = error.error.message;
    } else {
      errorMsg = error.error.error;
    }
   
    this.presentToast(errorMsg)
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
  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position:'middle'

    });
    toast.present();
  }
}
