import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, MenuController, AlertController } from '@ionic/angular';
import { ApiService } from '../providers/api-service/api.service';
import { TokenService } from '../providers/token-service/token.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { EventsService } from '../providers/events-service/events.service';

@Component({
  selector: 'app-tds',
  templateUrl: './tds.page.html',
  styleUrls: ['./tds.page.scss'],
})
export class TdsPage implements OnInit {
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
  fetchtds;
  fetchtdspoint: any = [];
  kyc_status: any = [];
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
    public alertController:AlertController
  ) { 
    this.menuCtrl.enable(true);
    this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
  }

  ngOnInit() {
    this.presentLoading()
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true);
    this.apiService.home().subscribe(
     data => this.handleResponse(data),
     error => this.handleError(error)
   );
    this.events.getEvent().subscribe(data=>{
     if(data){
     if(data.name=='update:userdata'){
       this.userInfo.first_name = data.params.first_name;
       this.userInfo.last_name = data.params.last_name;
       this.userInfo.level = data.params.level;
       this.userInfo.points = data.params.points;
       this.userInfo.avatar = data.params.avatar;
       localStorage.setItem('save_username', data.params.username);
     }
   }
   })
   this.userfetchKycstatus()
   this.userfetchTds()
   this.userfetchTdspoints()
   }

   userfetchKycstatus(){
    this.apiService.userfetchKycstatus().subscribe(
      data => {
        this.kyc_status = data;

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
          // this.openDis()
       }else if(this.kyc_status[0]['kyc_status'] == "1"){
          this.kyc_status.kyc_status = 'KYC Pending';
          this.kychidden = false;
          this.kycahidden = true;
          this.kycnthidden = true;
       }else if(this.kyc_status[0]['kyc_status'] == "3"){
         // this.presentAlert("You have already played this game")
          this.kyc_status.kyc_status = 'KYC Rejected';
          this.kychidden = true;
          this.kycahidden = true;
          this.kycnthidden = false;
          // this.openDis()
       }else{
         this.kychidden = true;
          this.kycahidden = false;
          this.kycnthidden = true;
       }
        
      },
      error => console.log(error)
    );
  }

  userfetchTds(){
    this.apiService.userfetchTds().subscribe(
      data => {
        // console.log('userfetchTds', data)
  
        this.fetchtds = data;
      },
      error => console.log(error)
      );
  }
  userfetchTdspoints(){
    this.apiService.userfetchTdspoints().subscribe(
      data => {
        
  
        this.fetchtdspoint = data;
        // console.log('userfetchTdspoints', data)
  //       this.valid_for_game=data['tdspoint']['tdsbalance'];
  // this.game_status=data['game']['status'];
  // this.game_valid=data['valid'];
        // this.fetchtdspoint.tdsbalance = ;
        // console.log('tds',  this.fetchtdspoint['tdsbalance'])
      },
      error => console.log(error)
      );
  }
  
   handleResponse(data) {
    this.events.publish({name:'update:userdata',params:data})
    this.loadingCtrl.dismiss();
  }
  goKyca() {
    this.router.navigate(['kyca'])
   }
   goKyc() {
    this.router.navigate(['kyc'])
   }
   goTds() {
    this.router.navigate(['tds'])
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
  //  console.log('Loading dismissed!');
 }
 async presentToast(message) {
  const toast = await this.toastCtrl.create({
    message: message,
    duration: 3000,
    position:'middle'
  });
  toast.present();
}
async presentAlert(message) {
  const alert = await this.alertController.create({
    
    header: message,
    buttons: ['OK'],
    mode:"ios"
  });

  await alert.present();
}
goBack(){
  this.router.navigate(['home'])
}
openTDS(tds){
  window.open('https://smartwiremen.com/storage/tdscert/'+tds.quarterly_pdf, '_system', 'location=yes'); 
}
}
