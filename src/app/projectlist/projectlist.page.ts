import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../providers/api-service/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.page.html',
  styleUrls: ['./projectlist.page.scss'],
})
export class ProjectlistPage implements OnInit {
  projects_list;
  loading: any = {};
  tran_please_wait:string = "Please Wait";
  constructor(
    private apiService: ApiService,
    public loadingCtrl: LoadingController,
    public router:Router
  ) { }

  ngOnInit() {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectlistPage');
    this.loadProjectList()
  }
  ionViewWillEnter(){
    this.loadProjectList();
  }
  loadProjectList(){
    this.presentLoading()
    

    this.apiService.projectList().subscribe(
      data => {
        this.loadingCtrl.dismiss();
        
        this.projects_list=data;
        console.log('dta',data)
      },
      error => {
        this.loadingCtrl.dismiss();

        console.log(error)}
    );
  }
  goToProjectdetails(project_id){
    this.router.navigate(['projectdetail',project_id])
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
