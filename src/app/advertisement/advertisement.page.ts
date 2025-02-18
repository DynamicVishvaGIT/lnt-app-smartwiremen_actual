import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.page.html',
  styleUrls: ['./advertisement.page.scss'],
})
export class AdvertisementPage implements OnInit {
  save_username: string;
  loading: any;
  timeleft = 5;
  countdown;
  counter;
  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    console.log('ionViewDidLoad AdvertisementPage');
  //   setTimeout(() => {
  //     // this.navCtrl.popToRoot();
  //     // might try this instead
  //     this.viewCtrl.dismiss();
  // }, 5000);
    this.startcountdown()
 
  }
  closeDrawer() {
    this.modalCtrl.dismiss();
    // this.drawerState=0;
  }
  startcountdown(){
    this.counter = 5;
    console.log(this.counter)
    const interval = setInterval(() => {
      console.log(this.counter);
      this.counter--;
        
      if (this.counter <= 0 ) {
        clearInterval(interval);
        this.modalCtrl.dismiss();

      }
    }, 1000);
  }
}
