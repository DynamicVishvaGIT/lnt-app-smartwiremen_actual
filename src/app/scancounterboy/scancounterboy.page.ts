import { Component, OnInit } from '@angular/core';
import {  ToastController, LoadingController, MenuController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../providers/api-service/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-scancounterboy',
  templateUrl: './scancounterboy.page.html',
  styleUrls: ['./scancounterboy.page.scss'],
})
export class ScancounterboyPage implements OnInit {
  tran_please_wait:string = 'Please Wait';
  tran_required_counterboy:string = 'Please Select Counter Boy';
  scannedCode: string;
  loading: any = {};
  counterboy_list;
  counterboy;
  counterboyid;
  constructor(
    private barcodeScanner: BarcodeScanner,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private apiService: ApiService,
    public translate: TranslateService,
    public menuCtrl: MenuController,
    public router:Router
  ) {

   }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.lastCounterBoy()
    this.userCounterBoyList()
  }
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      if(this.scannedCode != '' && this.scannedCode != null){
        this.applyQrcode(this.scannedCode);
      }
    }, (err) => {
        console.log('Error: ', err);
    });
  }

  applyQrcode(username){
    this.presentLoading()
    this.apiService.mapCounterBoy(username).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
}

handleResponse(data) {

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

handleError(error) {
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
lastCounterBoy(){
  this.apiService.lastCounterBoy().subscribe(
    data => {
      
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

submitCounterBoyForm(){

console.log(this.counterboyid)
  if (this.counterboyid == '' || this.counterboyid == null) {
    this.presentToast(this.tran_required_counterboy);
  }else{
    this.presentLoading()
    this.apiService.mapCounterBoyManual(this.counterboyid).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
}
doRefresh(event){
  this.lastCounterBoy()
    this.userCounterBoyList()
    event.target.complete()
}
}
