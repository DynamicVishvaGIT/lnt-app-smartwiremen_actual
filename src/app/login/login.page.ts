import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ToastController,LoadingController, MenuController} from '@ionic/angular';
import { ApiService } from '../providers/api-service/api.service';
import { TokenService } from '../providers/token-service/token.service';
import { PushNotificationProvider } from '../providers/push-notification/push-notification';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { EventsService } from '../providers/events-service/events.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  error = null;
  responseData : any;
  loading: any = {};
  loginFormField = {
    username: '',
    password: ''
  }
  save_username;
  tran_please_wait:string = 'Please Wait';
  tran_required_mobile_no:string = 'Please Enter Your Mobile No';
  tran_required_password:string = 'Please Enter Your Password';  

  constructor(

    private toastController: ToastController,
    public loadingCtrl: LoadingController,
    private apiService: ApiService,
    public token: TokenService,
    public translate: TranslateService,
    public pushNotification: PushNotificationProvider,
    public menuCtrl: MenuController,
    public router:Router,
    public events:EventsService,
    public changeDetector:ChangeDetectorRef
    
  ) {
    this.menuCtrl.enable(false);
    this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
    this.translate.get('required_mobile_no').subscribe(res => { this.tran_required_mobile_no = res; });
    this.translate.get('required_password').subscribe(res => { this.tran_required_password = res; });
    this.listenToUserEvents()
    console.log('a',this.save_username)
  }
  ngOnInit(){

  }
  // ionViewDidEnter(){
  //   // this.listenToUserEvents()
  // }
  async presentToast(message) {
    
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position:'middle'
    });
    toast.present();
  }
  listenToUserEvents() {
    console.log('1',this.save_username)

    this.events.getEvent().subscribe(data=>{
      if(data){
      if(data.name=='user:login'){
        this.token.handle(data.params.access_token);
        this.pushNotification.init();

        if(data.params.primary_verify == 0 || this.save_username == '' || this.save_username == null){
          this.router.navigate(['verification',data.params.username])
        }else{
          console.log('111')

          this.router.navigate(['tabs'])
        }
      }
      else if (data.name=='user:login-failed'){
        this.loadingCtrl.dismiss();

      }
    }
    })
  }

  ionViewWillEnter() {
  this.save_username= localStorage.getItem('save_username');

    console.log('2',this.save_username)
    // check for token 
    /*let accesstoken = this.token.get();

    if(accesstoken != '' && accesstoken != null){
      
      this.loading = this.loadingCtrl.create({
          spinner: 'crescent',
          content: this.tran_please_wait+'...',
          dismissOnPageChange: true
        });

        this.loading.present().then(() => {
           this.apiService.refresh_access_token().subscribe(
            data => this.handleResponse(data),
            err => {
              this.loading.dismiss();
            }            
          );
       });
    }*/
    if(this.save_username != '' && this.save_username != null){
      const loading=this.presentLoading()

           this.apiService.login({'username' : this.save_username, password : ''}).subscribe(
            data => this.handleResponse(data),
            error => {
              this.loadingCtrl.dismiss();
              if(error.status == 401){
                this.token.remove();
              }
            }
          );
    }

  }

  goSignup() {
    // this.navCtrl.push(ProfilePage);
    // this.navCtrl.setRoot(ProjectLeadPage);
    // this.navCtrl.setRoot(PassbookPage);
    this.router.navigate(['signup'])
  }
  
  goHome() {
    // this.navCtrl.push(TabsPage);
  }

  loginForm(){
  
    if (this.loginFormField.username == '' || this.loginFormField.username == null) {
      this.presentToast(this.tran_required_mobile_no)

    }else{
      const loading=this.presentLoading()

      

           this.apiService.login(this.loginFormField).subscribe(
             
            data => {
              
              this.handleResponse(data)
              this.loginFormField = {
                username: '',
                password: ''
              }
            },
            error => {
              
              this.handleError(error)}
          );
    }
  }

  handleResponse(data) {
    console.log('3')
    this.loadingCtrl.dismiss()

    this.events.publish({name:'user:login',params:data})
    // this.listenToUserEvents()
    this.apiService.firstLogin().then(data=>{
      console.log('successful',data)
      
    }).catch(error=>{
      console.log('err',error)

    })
  }

  handleError(error) {
    console.log('4')
    this.loadingCtrl.dismiss()

    this.events.publish({name:'user:login-failed',params:''});
    let errorMsg = '';
    if(error.status == 401){
      errorMsg = error.error['error'];
    }
    // else if(error.status = 412){
    //   errorMsg = error.error.error;
    // }
    
    else{
      // errorMsg = error.error.error;
      errorMsg = error.error['error'];

    }
    this.presentToast(errorMsg)

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

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
}

ionViewDidLeave() {
    this.menuCtrl.enable(true);
}
}
