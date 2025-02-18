import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-disclaimermodal',
  templateUrl: './disclaimermodal.page.html',
  styleUrls: ['./disclaimermodal.page.scss'],
})
export class DisclaimermodalPage implements OnInit {

  constructor(
    private router:Router,
    private modalController:ModalController
  ) { }

  ngOnInit() {
  }
  goKyc() {
    this.router.navigate(['kyc'])
    this.modalController.dismiss();
  }
   
  dissmissModal(){
    this.modalController.dismiss();
  }
}
