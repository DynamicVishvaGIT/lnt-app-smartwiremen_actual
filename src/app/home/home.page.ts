import { AdvertisingPage } from './../advertising/advertising.page';
import { DisclaimermodalPage } from './../disclaimermodal/disclaimermodal.page';

import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, MenuController, AlertController } from '@ionic/angular';
import { ApiService } from '../providers/api-service/api.service';
import { TokenService } from '../providers/token-service/token.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { EventsService } from '../providers/events-service/events.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  tdshidden = true;
  kychidden = true;
  kycahidden = true;
  kycnthidden = true;
  error = null;
  responseData : any;
  loading: any = {};
  refresher = null;
  valid_for_game;
  userInfo = {
    first_name : '',
    last_name : '',
    level : '',
    points : '',
    avatar : '',
  };
  parent_id;
  kyc_status: any = [];
  fetch_ads: any = [];
  tran_please_wait:string = 'Please Wait';
  game_status: any;
  game_valid: any;
  
  
  constructor(
  
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private apiService: ApiService,
    public tokenService: TokenService,
    public translate: TranslateService,
    public menuCtrl: MenuController,
    private router:Router,
    public events:EventsService,
    public alertController:AlertController,
    private modalController:ModalController

  ) { 
    this.menuCtrl.enable(true);
    this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
   
    
  }

  ngOnInit() {
    console.log('insid')
    this.menuCtrl.enable(true);
  
    this.presentLoading()
 
   
    let goto_scheme_page = localStorage.getItem('goto_scheme_page');
    if(goto_scheme_page == '1'){
      localStorage.removeItem('goto_scheme_page');
      this.router.navigate(['scheme'])

    }
    this.loadParentId()
    // this.userfetchKycstatus()
    
    // this.apiService.userfetchKycstatus().subscribe(
    //   data => {

    //     // this.kyc_status = JSON.stringify(data);
    //     this.kyc_status = data;
        
    //     console.log('dta', data)
    //     if(this.kyc_status[0]['kyc_status'] == null){
    //       this.openDis()
    //     }else if(this.kyc_status[0]['kyc_status'] == "3"){
    //       this.openDis()
    //     }else{
          
    //     }
        
    //   },
    //   error => console.log(error)
    // );
    // this.ads()
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
  doLogout(){
    this.tokenService.remove();
    this.router.navigate(['login'])
 }

 goRedeem() {
  this.router.navigate(['redeem'])

 }
 goKyca() {
  this.router.navigate(['kyca'])
 }
 
 goTds() {
  this.apiService.userfetchKycstatus().subscribe(
    data => {
      this.kyc_status = data;
      if(this.kyc_status[0]['kyc_status'] == "2"){
        this.router.navigate(['tds'])
      }else{
        if(this.kyc_status[0]['tds_value'] == null || this.kyc_status[0]['tds_value'] == ''){
          this.kyc_status.tds_value = '20';
        }else{
          this.kyc_status.tds_value = this.kyc_status[0]['tds_value'];
        }

        if(this.kyc_status[0]['remark'] === null || this.kyc_status[0]['remark'] === ''){}else{
          this.presentAlert(this.kyc_status[0]['remark'])
        }

        if(this.kyc_status[0]['kyc_status'] == null){
           this.kyc_status.kyc_status = 'KYC Not Uploaded';
           this.kychidden = true;
           this.kycahidden = true;
           this.kycnthidden = false;
          //  this.openDis()
        }else if(this.kyc_status[0]['kyc_status'] == "1"){
           this.kyc_status.kyc_status = 'KYC Pending';
           this.kychidden = false;
           this.kycahidden = true;
           this.kycnthidden = true;
          //  this.goTds()
        }else if(this.kyc_status[0]['kyc_status'] == "3"){
          // this.presentAlert("You have already played this game")
           this.kyc_status.kyc_status = 'KYC Rejected';
           this.kychidden = true;
           this.kycahidden = true;
           this.kycnthidden = false;
          //  this.openDis()
        }else{
          this.kychidden = true;
           this.kycahidden = false;
           this.kycnthidden = true;
        }
      }
    },
    error => console.log(error)
  );
 }

 goComplaint() {
  this.router.navigate(['complaint'])

 }

 goScheme() {
  this.router.navigate(['scheme'])

 }

 goScancode() {
  this.router.navigate(['scancode'])

 }
 
 goOrders(){
  this.router.navigate(['orders'])

 }

 goProfile(){
  this.router.navigate(['profile'])

 }
 goToProjectLead(){
   if(this.parent_id){
    this.router.navigate(['project-lead'])

   }
   else{
    this.presentToast("You are not mapped to ISO")
   }

}
goToProjectList(){
  this.router.navigate(['projectlist'])

}
goToScanRetailer(){
  this.router.navigate(['scanretailer'])

}
goToScanCounterBoy(){
  this.router.navigate(['scancounterboy'])

}
goToDirectTransfer(){
  this.router.navigate(['direct-transfer'])
}
 changeLanguage(){
  this.router.navigate(['language'])
 }

 doRefresh(event) {
   console.log('here66')

   this.apiService.home().subscribe(
     data =>{ 
      event.target.complete(); 
      this.handleResponse(data)},
     error =>{ 
      event.target.complete(); 
       
      this.handleError(error)}
   );
   this.apiService.validForGame().subscribe(data=>{
    console.log('valid',data)
  this.valid_for_game=data['game']['attempt'];
  this.game_status=data['game']['status'];
  this.game_valid=data['valid'];
  })
 }

 ionViewDidEnter() {
   console.log('here000')
   this.menuCtrl.enable(true);
   this.apiService.home().subscribe(
    data => this.handleResponse(data),
    error => this.handleError(error)
  );
   this.events.getEvent().subscribe(data=>{
    console.log(data)
    if(data){
    if(data.name=='update:userdata'){
      console.log(data.params)
      this.userInfo.first_name = data.params.first_name;
      this.userInfo.last_name = data.params.last_name;
      this.userInfo.level = data.params.level;
      this.userInfo.points = data.params.points;
      this.userInfo.avatar = data.params.avatar;
      localStorage.setItem('save_username', data.params.username);
    }
  }
  })
  this.apiService.validForGame().subscribe(data=>{
    console.log('valid',data)
  this.valid_for_game=data['game']['attempt'];
  this.game_status=data['game']['status'];
  this.game_valid=data['valid'];
  
  })
  
  this.userfetchKycstatus()
  }

  
  userfetchKycstatus(){
    // console.log('herekyc')
    // this.apiService.userfetchKycstatus().subscribe(
    //   data => {
    //     console.log(data)
    //     // console.log('dta', data)
    //     // this.kyc_status = data;
    //   },
    //   error => console.log(error)
    //   );
    this.apiService.userfetchKycstatus().subscribe(
      data => {

        // this.kyc_status = JSON.stringify(data);
        this.kyc_status = data;
        // this.kyc_status.kyc_status = this.kyc_status[0]['kyc_status'];
        
        
        // console.log('kyc',data)
        // this.kyc_status.kyc_status = data.params.kyc_status;
        // console.log('herekyc1')

        if(this.kyc_status[0]['tds_value'] == null || this.kyc_status[0]['tds_value'] == ''){
          this.kyc_status.tds_value = '20';
        }else{
          this.kyc_status.tds_value = this.kyc_status[0]['tds_value'];
        }

        if(this.kyc_status[0]['remark'] === null || this.kyc_status[0]['remark'] === ''){}else{
          this.presentAlert(this.kyc_status[0]['remark'])
        }

        if(this.kyc_status[0]['redeem_point'] >= Number(this.kyc_status[0]['tdsredeem'])){
          if(this.kyc_status[0]['kyc_status'] == null){
              this.tdshidden = false;
              this.kyc_status.kyc_status = 'KYC Not Uploaded';
              this.kychidden = true;
              this.kycahidden = true;
              this.kycnthidden = false;
            //  console.log('kyc 1')
              if(this.kyc_status[0]['redeem_point'] >= Number(this.kyc_status[0]['tdsredeem'])){
              // console.log('kyc 2')
              this.openDis()
              }
            //  this.openDis()
          }else if(this.kyc_status[0]['kyc_status'] == "1"){
              this.tdshidden = false;
              this.kyc_status.kyc_status = 'KYC Pending';
              this.kychidden = false;
              this.kycahidden = true;
              this.kycnthidden = true;
            //  this.goTds()
          }else if(this.kyc_status[0]['kyc_status'] == "3"){
            // this.presentAlert("You have already played this game")
              this.tdshidden = false;
              this.kyc_status.kyc_status = 'KYC Rejected';
              this.kychidden = true;
              this.kycahidden = true;
              this.kycnthidden = false;
              if(this.kyc_status[0]['redeem_point'] >= Number(this.kyc_status[0]['tdsredeem'])){
              // console.log('kyc 3')
              this.openDis()
              }
          }else{
              this.tdshidden = false;
              this.kychidden = true;
              this.kycahidden = false;
              this.kycnthidden = true;
          }
          
        }else{
          this.tdshidden = true;
          this.kychidden = true;
          this.kycahidden = true;
          this.kycnthidden = true;
        }

        
        
      },
      error => console.log(error)
    );
  }
 handleResponse(data) {
   console.log('here68')
   this.events.publish({name:'update:userdata',params:data})
   
  //  if(this.refresher != null){
  //    this.refresher.complete();
  //  }
  //  this.refresher = null;

   this.loadingCtrl.dismiss();
 }

 handleError(error) {
   this.loadingCtrl.dismiss();
   let errorMsg = '';
   if(error.status == 401){
     errorMsg = error.error.message;
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
  // console.log('advertising')
    
    this.ads()
}
async presentToast(message) {
  const toast = await this.toastCtrl.create({
    message: message,
    duration: 3000,
    position:'middle'
  });
  toast.present();
}
callISO(){
  window.open('tel:'+this.parent_id.username, '_system');
}
callCenter(){
  window.open('tel:18002091212', '_system');
}
async presentAlert(message) {
  const alert = await this.alertController.create({
    
    header: message,
    buttons: ['OK'],
    mode:"ios"
  });

  await alert.present();
}
async openDis() {
  const modal = await this.modalController.create({
    component: DisclaimermodalPage
    // presentingElement: await this.modalController.getTop()
  });
  await modal.present();
}
async advertising() {
  const modal = await this.modalController.create({
    component: AdvertisingPage,
    presentingElement: await this.modalController.getTop() 
  });
  await modal.present();
}

ads(){
  this.apiService.fetchAds().subscribe(
    data => {
      // console.log('fetchAds', data);
      // console.log(data[length]);
      this.fetch_ads = data;
      // console.log(this.fetch_ads.length);
      // var fetch_size = this.fetch_ads.length - 1;
      // console.log(fetch_size);
      // this.fetch_ads = data[fetch_size];
      
      var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
      var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0,-14);
      // console.log(new Date().toISOString());
      // console.log(localISOTime);


      var startDate = new Date(this.fetch_ads['start_dates']); //YYYY-MM-DD
      var endDate = new Date(this.fetch_ads['end_dates']); //YYYY-MM-DD
      // console.log(startDate);


      function formatDate(date) {

        var day = date.getDate();
        var month = date.getMonth()+1;
        var year = date.getFullYear();

        return year + '-' + month + '-' + day;
      }

      
      var getDateArray = function(start, end) {
          var arr = new Array();
          var dt = new Date(start);
          while (dt <= end) {
              arr.push(formatDate(new Date(dt)));
              dt.setDate(dt.getDate() + 1);
          }
          return arr;
      }
      
      var dateArr = getDateArray(startDate, endDate);
      // console.log(startDate, endDate, dateArr );
      for(let i = 0; i <= dateArr.length; i++){
        if(dateArr[i] === localISOTime){
          this.advertising()
        }
      }
      // console.log(dateArr.length)
    },
    error => console.log(error)
  );
  
}


goToQuiz(){
  console.log(this.game_status,this.game_valid,this.valid_for_game)
  if(this.game_status=='Inactive' && ( (this.valid_for_game=="0" || this.valid_for_game=="1" ||this.valid_for_game=="2" ))){
      this.router.navigate(['quiz'],{queryParams:{'attempt':this.valid_for_game}})
  }
  else if((this.valid_for_game=="1" || this.valid_for_game=="2" ||this.valid_for_game=="3") &&(this.game_status=='Active')){
    this.presentAlert("You have already played this game")

  }
  else if (this.valid_for_game=="3" && this.game_status=="Inactive"){
    this.presentAlert("You have already played this game")

  }
  else if (this.valid_for_game=="3" && this.game_status=="Active"){
    this.presentAlert("You have already played this game")

  }
  else{
      this.presentAlert("You have already played this game")
  }
}


}
