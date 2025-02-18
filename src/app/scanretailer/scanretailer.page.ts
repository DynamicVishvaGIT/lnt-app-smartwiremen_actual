import { Component, OnInit } from '@angular/core';
import {  ToastController, LoadingController, MenuController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../providers/api-service/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-scanretailer',
  templateUrl: './scanretailer.page.html',
  styleUrls: ['./scanretailer.page.scss'],
})
export class ScanretailerPage implements OnInit {
  tran_please_wait:string = 'Please Wait';
  tran_required_retailerid:string = 'Please Select Retailer';
  scannedCode: string;
  loading: any = {};
  retailer_list;
  retailer;
  retailerid;
  constructor(
    private barcodeScanner: BarcodeScanner,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private apiService: ApiService,
    public translate: TranslateService,
    public menuCtrl: MenuController,
    public router:Router
    ) {

      this.menuCtrl.enable(true, 'myMenu');
      this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
    }



  ngOnInit() {
    this.lastRetailer()
    this.userRetailerList()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanretailerPage');
    
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

  applyQrcode(code){
    this.presentLoading()


      this.apiService.mapRetailer(code).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
}

handleResponse(data) {

  console.log(data)
  this.loadingCtrl.dismiss();
  let msg = data.message;

  this.presentToast(msg);
  
  this.scannedCode = null;

  this.lastRetailer()
  this.userRetailerList()
  this.apiService.checkActivity().subscribe(data=>{
    console.log('check successful',data)
    
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

  if(errorMsg != ''){
    this.presentToast(errorMsg);
  }
}
lastRetailer(){
  this.apiService.lastRetailer().subscribe(
    data => {
      console.log('dta', data)

      this.retailer = data['retailer'];
    },
    error => console.log(error)
  );
}
userRetailerList(){
  this.apiService.userRetailerList().subscribe(
    data => {
      console.log('dta', data)

      this.retailer_list = data;
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

submitRetailerForm(){

console.log(this.retailerid)
  if (this.retailerid == '' || this.retailerid == null) {
    this.presentToast(this.tran_required_retailerid);
  }else{
    this.presentLoading()
    this.apiService.mapRetailerManual(this.retailerid).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
}
doRefresh(event){
  this.lastRetailer()
  this.userRetailerList()
  event.target.complete()
}
}

