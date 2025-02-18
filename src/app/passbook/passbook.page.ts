import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';
import { ApiService } from '../providers/api-service/api.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
TranslateService
@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.page.html',
  styleUrls: ['./passbook.page.scss'],
})
export class PassbookPage implements OnInit {
  loading: any = {};
  items = [];
  refresher = null;
  tran_please_wait:string = 'Please Wait'
  constructor(
    private apiService: ApiService,
    private loadingCtrl: LoadingController,
    public translate: TranslateService,
    public menuCtrl: MenuController,
    public toastController:ToastController,
    public router:Router
  ) { 
    this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });

  }

  ngOnInit() {
    const loading = this.presentLoading()
    
    this.loadPassbookDetails1();
  }

  ionViewDidLoad() {
    
  }
  
  doRefresh(event) {
    this.loadPassbookDetails2(event);
    
  }

  loadPassbookDetails1(){
    this.apiService.passbookDetails().subscribe(
      data => this.handleResponse2(data),
      error => this.handleError2(error)
    );
  }
  loadPassbookDetails2(event){
    this.apiService.passbookDetails().subscribe(
      data => this.handleResponse(data,event),
      error => this.handleError(error,event)
    );
  }

  handleResponse(data,event) {
    this.items = data;
    event.target.complete() 
    this.loadingCtrl.dismiss();

  }

  handleError(error,event) {
    console.log(error)
    event.target.complete() 
  }
  handleResponse2(data) {
    this.items = data;
    this.loadingCtrl.dismiss();

  }

  handleError2(error) {
    console.log(error)
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
    const toast = await this.toastController.create({
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


