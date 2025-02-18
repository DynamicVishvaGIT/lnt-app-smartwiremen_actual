import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController,ToastController } from '@ionic/angular';
import { ApiService } from '../providers/api-service/api.service';
import { TranslateService } from '@ngx-translate/core';
import { EventsService } from '../providers/events-service/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  loading: any = {};
  items = [];
  refresher = null;
  tran_please_wait:string = 'Please Wait';	
  terms;
  
  constructor(
    private apiService: ApiService,
    private loadingCtrl: LoadingController,
    public translate: TranslateService,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public events:EventsService,
    public router:Router
  ) {
    this.menuCtrl.enable(true, 'myMenu');
    this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
   }

  ngOnInit() {
    this.presentLoading()
    
    this.loadOrders();
  }
  ionViewDidEnter() {
    this.loadOrders();
  
  }
  
  doRefresh(event) {
    this.loadOrders();
    event.target.complete()   
  }

  loadOrders(){
    this.apiService.orders().subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );

    this.apiService.home().subscribe(
      data => {

        this.events.publish({name:'update:userdata',params:data});
      }
    );

  }

  handleResponse(data) {
    this.loadingCtrl.dismiss();

    this.items = data.orders;
    // if(this.refresher != null){
    //   this.refresher.complete();
    // }
    // this.refresher = null;
    this.loadingCtrl.dismiss();

  }

  handleError(error) {
    this.loadingCtrl.dismiss();

    console.log(error)
  }

  itemSelected(item){
    // this.events.sharingValue = item;

    this.router.navigate(['view-order',item.id])
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
      duration: 1000,
      position:'middle'
    });
    toast.present();
  }
  goBack(){
    this.router.navigate(['home'])
  }
}
