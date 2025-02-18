import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, MenuController, AlertController } from '@ionic/angular';
import { ApiService } from '../providers/api-service/api.service';
import { TokenService } from '../providers/token-service/token.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { EventsService } from '../providers/events-service/events.service';

@Component({
  selector: 'app-kyca',
  templateUrl: './kyca.page.html',
  styleUrls: ['./kyca.page.scss'],
})
export class KycaPage implements OnInit {
  kychidden = false;
  kycahidden = false;
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
  ) { }

  goBack(){
    this.router.navigate(['home'])
    
  }
  ionViewDidEnter() {
    this.fetchKyc()
  }
  fetchKyc(){
    
    this.apiService.fetchKyc().subscribe(
      data => {

        this.kyc_status = data;
        console.log('dta',data)

        // this.kyc_status.aadhar_img = this.kyc_status[0]['aadhar_img'];
        // this.kyc_status.aadhar_no = this.kyc_status[0]['aadhar_no'];
        // this.kyc_status.cancel_check_img = this.kyc_status[0]['cancel_check_img'];
        // this.kyc_status.cancel_check_no = this.kyc_status[0]['cancel_check_no'];
        // this.kyc_status.linked_phonenumber = this.kyc_status[0]['linked_phonenumber'];
        // this.kyc_status.pan_card_img = this.kyc_status[0]['pan_card_img'];
        // this.kyc_status.pan_card_no = this.kyc_status[0]['pan_card_no'];
        this.loadingCtrl.dismiss();
      },
      error => console.log(error)
    );
  }
  async presentAlert(message) {
    const alert = await this.alertController.create({
      
      header: message,
      buttons: ['OK'],
      mode:"ios"
    });
  
    await alert.present();
  }
  ngOnInit() {
    this.presentLoading()
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
}
