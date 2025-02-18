import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../providers/api-service/api.service';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.page.html',
  styleUrls: ['./advertising.page.scss'],
})
export class AdvertisingPage implements OnInit {
  fetch_ads: any = [];

  constructor(
    private apiService: ApiService,
    private router:Router,
    private modalController:ModalController
  ) { }

  ngOnInit() {
    this.ads()
  }

  ads(){
    
    this.apiService.fetchAds().subscribe(
      data => {
        this.fetch_ads = data;
        // console.log(this.fetch_ads.length);
        // var fetch_size = this.fetch_ads.length - 1;
        // console.log(fetch_size);
        // this.fetch_ads = data[fetch_size];
        // console.log('ads', this.fetch_ads)
      },
      error => console.log(error)
    );
  }
  dissmisModal(){
    this.modalController.dismiss();
  }
}
