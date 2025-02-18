import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../providers/events-service/events.service';
import { ApiService } from '../providers/api-service/api.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.page.html',
  styleUrls: ['./view-order.page.scss'],
})
export class ViewOrderPage implements OnInit {
  view_order : any;
  id;
  constructor(
   
    public menuCtrl: MenuController,
    public route:ActivatedRoute,
    public router:Router,
    public events:EventsService,
    public apiService:ApiService
  ) {
    this.menuCtrl.enable(true, 'myMenu');
  	
   }

  ngOnInit() {
  }
  openUrl(url){
    window.open(url, '_system'); 
 }
 goBack(){
   this.router.navigate(['orders'])
 }
 ionViewDidEnter(){
  this.route.paramMap.subscribe(params => {
    this.id = params.get("id") 
    console.log(this.id)
   this.apiService.order_details(this.id).subscribe(data=>{
     console.log(data)
     this.view_order=data;
   },err=>{
     console.log(err)
     
   })
  })
 }
}
