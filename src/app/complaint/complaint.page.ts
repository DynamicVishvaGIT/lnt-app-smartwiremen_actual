import { Component, OnInit } from '@angular/core';
import {ToastController, LoadingController, MenuController } from '@ionic/angular';
import { ApiService } from '../providers/api-service/api.service';
import { TokenService } from '../providers/token-service/token.service';
import { TranslateService } from '@ngx-translate/core';
import { EventsService } from '../providers/events-service/events.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.page.html',
  styleUrls: ['./complaint.page.scss'],
})
export class ComplaintPage implements OnInit {
  error = null;
	responseData : any;
	loading: any = {};
	issue_types: any = [];
	ticketFormField = {
		ticket_category_id: null,
    your_email: null,
		your_contact_no: null,
		message: null,
	};
  
  tran_please_wait:string = "Please Wait";
  tran_required_issue_type:string = "Please Select Issue Type";
  tran_required_email:string = "Please Enter Your Email";
  tran_required_contact_no:string = "Please Enter Your Contact No";
  tran_required_message:string = "Please Enter Message";
  tran_ticket_created:string = "Ticket Created Successfully";
  constructor(
    private apiService: ApiService,
    public translate: TranslateService,
    public loadingCtrl: LoadingController,
    public events: EventsService,
    public menuCtrl: MenuController,
    public token: TokenService,
    private toastCtrl: ToastController,
    public router:Router


  ) { 
    this.menuCtrl.enable(true);
    this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });  
    this.translate.get('required_issue_type').subscribe(res => { this.tran_required_issue_type = res; });  
    this.translate.get('required_email').subscribe(res => { this.tran_required_email = res; });  
    this.translate.get('required_contact_no').subscribe(res => { this.tran_required_contact_no = res; });  
    this.translate.get('required_message').subscribe(res => { this.tran_required_message = res; });  
    this.translate.get('ticket_created').subscribe(res => { this.tran_ticket_created = res; });  
  }

  ngOnInit() {
    this.loadIssueTypes();
  }
  loadIssueTypes(){
    this.apiService.loadTypes().subscribe(
     data => this.handleIssueTypes(data),
     error => console.log(error)
   );       
 }

 handleIssueTypes(data){
   this.issue_types = data.issue_types;
 }

 ionViewDidLoad() {
   
 }

 ticketForm(){
   let toast = this.toastCtrl.create({
     message: '',
     duration: 1000,
     position: 'middle'
   });

   if (this.ticketFormField.ticket_category_id == '' || this.ticketFormField.ticket_category_id == null) {
     this.presentToast(this.tran_required_issue_type)
    
   }else if(this.ticketFormField.your_email == '' || this.ticketFormField.your_email == null){
    this.presentToast(this.tran_required_email)

   
   }else if(this.ticketFormField.your_contact_no == '' || this.ticketFormField.your_contact_no == null){
    this.presentToast(this.tran_required_contact_no)

   }else if(this.ticketFormField.message == '' || this.ticketFormField.message == null){
    this.presentToast(this.tran_required_message)
   
   }
   else
   {     
    const loading=this.presentLoading()
    

       this.apiService.submitTicket(this.ticketFormField).subscribe(
         data => {
           this.ticketFormField.ticket_category_id = '';
           this.ticketFormField.your_email = '';
           this.ticketFormField.your_contact_no = '';
           this.ticketFormField.message = '';
           this.loadingCtrl.dismiss();
           this.presentToast(this.tran_ticket_created)
       
         },
         error => this.handleError(error)
       );
   }
 }
 handleError(error) {
   this.loadingCtrl.dismiss();
   let errorMsg = '';
   if(error.status == 401){
     errorMsg = error.error.message;
   }else{
     errorMsg = error.error.error;
   }
 
   if(errorMsg != ''){
    this.presentToast(errorMsg)

   }
   else{
    this.presentToast('')

   }
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
goBack(){
  this.router.navigate(['home'])
}
}


