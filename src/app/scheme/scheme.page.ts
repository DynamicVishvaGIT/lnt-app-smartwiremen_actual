import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../providers/api-service/api.service';
import {  LoadingController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { EventsService } from '../providers/events-service/events.service';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.page.html',
  styleUrls: ['./scheme.page.scss'],
})
export class SchemePage implements OnInit {
  loading: any = {};
  items = [];
  refresher = null;
  tran_please_wait:string = 'Please Wait';
  constructor(

    private apiService: ApiService,
    private loadingCtrl: LoadingController,
    public translate: TranslateService,
    public menuCtrl: MenuController,
    public router:Router,
    public events:EventsService
  ) { 
    this.menuCtrl.enable(true, 'myMenu');
    this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
  }

  ngOnInit() {
    this.presentLoading()
 
    
    this.loadSchemes2();
  }
  ionViewDidLoad() {
  
  }

  doRefresh(event) {
    this.loadSchemes(event);
      
  }

  loadSchemes(event){
    this.apiService.schemes().subscribe(
        data => {
          event.target.complete()
          console.log(data)
          this.handleResponse(data)
        },
        error => {
          event.target.complete()
          this.handleError(error)
        }
      );
  }
  loadSchemes2(){
    this.apiService.schemes().subscribe(
        data => {
          console.log(data)
          this.handleResponse(data)
        },
        error => {
          this.handleError(error)
        }
      );
  }

  handleResponse(data) {
    this.items = data.schemes;
    console.log(data)
    this.loadingCtrl.dismiss();

  }

  handleError(error) {
    console.log(error)
    this.loadingCtrl.dismiss();

  }

  itemSelected(item){
    this.events.sharingValue = item;

    this.router.navigate(['scheme-detail'])
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
  goBack(){
    this.router.navigate(['home'])
  }
}
