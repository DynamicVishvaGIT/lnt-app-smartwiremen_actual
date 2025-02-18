import { Component, OnInit } from '@angular/core';
import {  ToastController, LoadingController, MenuController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ApiService } from '../providers/api-service/api.service';
import { TranslateService } from '@ngx-translate/core';
import { EventsService } from '../providers/events-service/events.service';

@Component({
  selector: 'app-scancode',
  templateUrl: './scancode.page.html',
  styleUrls: ['./scancode.page.scss'],
})
export class ScancodePage implements OnInit {
  error = null;
  responseData : any;
  loading: any = {};

  qrData = null;
  inputCode = null;
  scannedCode = null;
  user_id;
  tran_please_wait:string = 'Please Wait';
  tran_required_promocode:string = 'Please Enter Promo Code';
  counterboy: any;
  counterboyid;
  counterboy_list;
  tran_required_counterboy:string = 'Please Select Counter Boy';

  constructor(
    private barcodeScanner: BarcodeScanner,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private apiService: ApiService,
    private events: EventsService,
    public translate: TranslateService,
    public menuCtrl: MenuController
  ) { 
    this.menuCtrl.enable(true, 'myMenu');
    this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
    this.translate.get('required_promocode').subscribe(res => { this.tran_required_promocode = res; });
    this.apiService.home().subscribe(
      data => {
        this.user_id=data['id']
      },
      error => this.handleError(error)
    );
  }
  ionViewDidEnter(){
    this.lastCounterBoy()
    this.userCounterBoyList()
  }
  lastCounterBoy(){
    this.apiService.lastCounterBoy().subscribe(
      data => {
        console.log('counterboy', data)
        this.counterboy = data['counter_boy'];
      },
      error => console.log(error)
    );
  }
  
  userCounterBoyList(){
    this.apiService.userCounterBoyList().subscribe(
      data => {
        console.log('dta', data)
        this.counterboy_list = data;
      },
      error => console.log(error)
      );
  }
  submitCounterBoyForm(){

    console.log(this.counterboyid)
      if (this.counterboyid == '' || this.counterboyid == null) {
        this.presentToast(this.tran_required_counterboy);
      }else{
        this.presentLoading()
        this.apiService.mapCounterBoyManual(this.counterboyid).subscribe(
          data => this.handleCounterBoyResponse(data),
          error => this.handleCounterBoyError(error)
        );
      }
    }
  ngOnInit() {
  }
  handleCounterBoyResponse(data) {

    console.log(data)
    this.loadingCtrl.dismiss();
  
    if(data){
      this.presentToast("Counter Boy mapped successfully");
    }
    
    this.scannedCode = '';
  
    this.lastCounterBoy()
    this.userCounterBoyList()
    // this.apiService.checkActivity().subscribe(data=>{
    //   console.log('check successful',data)
      
    // },error=>{
    //   console.log('err',error)
    // })
    
  }
  
  handleCounterBoyError(error) {
    console.log(error)
    this.loadingCtrl.dismiss();
    let errorMsg = '';
    if(error.status == 401){
      errorMsg = error.error.message;
    }else{
      errorMsg = error.error.error;
    }
  
    if(errorMsg != ''){
      this.presentToast(errorMsg);
    }
  }
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      if(this.scannedCode != '' && this.scannedCode != null){
        this.applyQrcodetest(this.scannedCode);
      }
    }, (err) => {
        console.log('Error: ', err);
    });
  }

  submitQrcodeForm(){
    let toast = this.toastCtrl.create({
      message: '',
      duration: 1000,
      position: 'middle'
    });

    if (this.inputCode == '' || this.inputCode == null) {
      this.presentToast(this.tran_required_promocode);
    }else{
      this.applyQrcodetest(this.inputCode);
    }
  }

  applyQrcode(code){
     this.presentLoading()

        this.apiService.submitQrCode(code).subscribe(
          data => this.handleResponse(data,code),
          error => this.handleError(error)
        );
  }
  applyQrcodetest(code){

        this.apiService.submitQrCodeTest(code,this.counterboy.id).subscribe(
          data => console.log('a',data),
          error => this.handleError(error)
        );
  }

  handleResponse(data,code) {

    console.log(data)
    this.loadingCtrl.dismiss();
    let msg = data.message;

    this.presentToast(msg);
    this.qrData = null;
    this.inputCode = null;
    this.scannedCode = null;

    this.apiService.home().subscribe(
        data => this.events.publish({name:'update:userdata',params:data})
    );
    this.apiService.checkRetailerID(code).subscribe(data=>{
      console.log('check successful',data)
      
    },error=>{
      console.log('err',error)
    })
    this.apiService.checkActivity().subscribe(data=>{
      console.log('check successful',data)
      
    },error=>{
      console.log('err',error)
    })
    this.apiService.nextGift().subscribe(data=>{
      console.log('next gift',data)
      if(data['point'] !==0){
        var notification_obj={"heading":"SMARTWIREMEN","message":"You need "+data['point']+" points to get "+data['gift_name'],"url":"","user_id":this.user_id}

      }
      else{
        var notification_obj={"heading":"SMARTWIREMEN","message":"Your next gift would be "+data['gift_name'],"url":"","user_id":this.user_id}
        
      }
      this.apiService.sendNotification(notification_obj).subscribe(data=>{
        console.log(data)
      },error=>{
        console.log(error)
      })
      
    },error=>{
      console.log('err',error)
    })
  }

  handleError(error) {
    console.log(error)
    this.loadingCtrl.dismiss();
    let errorMsg = '';
    if(error.status == 401){
      errorMsg = error.error.message;
    }else{
      errorMsg = error.error.error;
    }
    let toast = this.toastCtrl.create({
      message: '',
      duration: 3000,
      position: 'middle'
    });
    if(errorMsg != ''){
      this.presentToast(errorMsg);
    }
  }
  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position:'middle'
    });
    toast.present();
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
  doRefresh(event){
    this.lastCounterBoy()
    this.userCounterBoyList()
    event.target.complete()
  }
}
