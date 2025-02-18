import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../providers/api-service/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.page.html',
  styleUrls: ['./projectdetail.page.scss'],
})
export class ProjectdetailPage implements OnInit {
  project_detail;
  project: any;
  competition: any;
  loading: any = {};
  tran_please_wait:string = "Please Wait";
  constructor(
    private apiService: ApiService, public loadingCtrl: LoadingController,public route:ActivatedRoute,public router:Router
  ) { }

  ngOnInit() {
   
  }
  ionViewWillEnter(){
    console.log('ionViewDidLoad ProjectdetailPage');
    var pr_id=this.route.snapshot.paramMap.get('project_id')
    console.log('pr_id',pr_id);
    if (pr_id){
      this.loadProjectDetails(pr_id)
    }
  }

  loadProjectDetails(pr_id){
    this.presentLoading()

    this.apiService.projectDetails(pr_id).subscribe(
      data => {
        this.loadingCtrl.dismiss();

        this.project=data
        this.project_detail=this.project.project[0]
        // this.competition=this.project.Competition
        console.log('loadProjectDetails',data)
      },
      error =>{
        this.loadingCtrl.dismiss();
        console.log('error',error)
      } 
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
  goBack(){
    this.router.navigate(['projectlist'])
  }
}
