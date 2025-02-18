import { ApiService } from './providers/api-service/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { IonTabs, ModalController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { TokenService } from './providers/token-service/token.service';
import { AdvertisementPage } from './advertisement/advertisement.page';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { EventsService } from './providers/events-service/events.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  selectedPath = '';
  selected:boolean = false;
  public appPages = [
    {
      title: 'Dashboard',
      url: '/home',
      icon: 'home-outline'
    },
    {
      title: 'Gift Redeem',
      url: '/redeem',
      icon: 'gift-outline'
    },
    {
      title: 'Scan Code',
      url: '/scancode',
      icon: 'barcode-outline'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person-outline'
    }
  ];
  @ViewChild('myTabs',{ static: false }) tabs: IonTabs;
  selectedTab: string;
  activeTabName: string;
  tab_name: any;
  userstatus_data: any;
  userstatus: any;
  loginStatus: boolean;
  displayProfileData = {first_name: '', last_name: '', email: '', avatar: ''};

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router:Router,
    public tokenService:TokenService,
    public modalController: ModalController,
    public appMinimize:AppMinimize,
    public apiService:ApiService,
    public events: EventsService
  ) {
    this.selectedPath = window.location.pathname;
    this.initializeApp();
    this.platform.backButton.subscribeWithPriority(9999, () => {
      if ((this.router.url.includes('folder'))|| (this.router.url.includes('home')) || (this.router.url.includes('login')) || (this.router.url.includes('maintenance'))) {
        this.appMinimize.minimize();
      }
      else if  (this.router.url.includes('verification') || this.router.url.includes('signup')) {
        this.router.navigate(['login'])
      }
       
      else if  ((this.router.url.includes('complaint')) ||(this.router.url.includes('language')) ||(this.router.url.includes('notification')) ||(this.router.url.includes('order-confirmation')) ||(this.router.url.includes('orders')) ||(this.router.url.includes('passbook')) ||(this.router.url.includes('project-lead')) ||(this.router.url.includes('projectlist')) ||(this.router.url.includes('quiz'))   ||(this.router.url.includes('scanretailer')) || (this.router.url.includes('scheme')) ) {
        this.router.navigate(['home'])
      }

      else if  (this.router.url.includes('quizdetails')) {
        this.router.navigate(['home'])
      }
      else if  (this.router.url.includes('projectdetail')) {
        this.router.navigate(['projectlist'])
      }
       
    });
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#f4b404')
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
      
      // this.presentAdvertisementModal()
    });
  }

  // ionViewDidEnter() {
  //   this.events.getEvent().subscribe((data) => {
  //     console.log('data',data)
  //     if(data){
  //       if(data.name=='update:profiledata'){
  //         this.displayProfileData.first_name = data.params.first_name;
  //         this.displayProfileData.last_name = data.params.last_name;
  //         this.displayProfileData.email = data.params.email;
  //         this.displayProfileData.avatar = data.params.avatar;
  //       }
  //   }
  //   });
  // }
 
  async presentAdvertisementModal() {
    const modal = await this.modalController.create({
      component: AdvertisementPage,
    });
    return await modal.present();
  }
  ngOnInit() {
    this.events.getEvent().subscribe((data) => {
      console.log('data',data)
      if(data){
        if(data.name=='update:userdata'){
          this.displayProfileData.first_name = data.params.first_name;
          this.displayProfileData.last_name = data.params.last_name;
          this.displayProfileData.email = data.params.email;
          this.displayProfileData.avatar = data.params.avatar;
        }
    }
    console.log(this.displayProfileData);
    });
    this.selectedPath = window.location.pathname;
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  goPassbook(){
    this.selectedPath = '/passbook';
    this.router.navigate(['passbook'])
  }

  goOrders(){
    this.selectedPath = '/orders';
    this.router.navigate(['orders'])
  }
  
  changeLanguage(){
    this.selectedPath = '/language';
    this.router.navigate(['language'])
  }

 
  notificationLog(){
    this.selectedPath = '/notification';
    this.router.navigate(['notification'])
  }
  goToQuiz(){
    this.selectedPath = '/quiz';
    this.router.navigate(['quiz'])
  }
  goToAddCounterBoy(){
    this.selectedPath = '/scancounterboy';
    this.router.navigate(['scancounterboy'])
  }
  goTds(){
    this.selectedPath = '/tds';
    this.router.navigate(['tds'])
  }
  
  doLogout(){
    this.selectedPath = '/logout';
    this.router.navigate(['login']).then(data=>{
      this.tokenService.remove()
    })
  }
  goToProjectList(){
    this.selectedPath = '/projectlist';
    this.router.navigate(['projectlist'])
  
  }
  getSelectedTab(): void {
    this.selected = true;
    this.activeTabName = this.tabs.getSelected();
    this.tab_name=this.activeTabName
  }
  openPage(page) {
    this.selectedPath = page.url;
   this.router.navigate([page.url])
  }
}
