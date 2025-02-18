import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController, LoadingController, MenuController } from '@ionic/angular';
import { ApiService } from '../providers/api-service/api.service';
import { TranslateService } from '@ngx-translate/core';
import { TokenService } from '../providers/token-service/token.service';
import { ActivatedRoute,Router } from '@angular/router';
import { CustomOtpInputComponent } from '../custom-otp-input/custom-otp-input.component';
import { EventsService } from '../providers/events-service/events.service';

export interface CountdownTimer {
  seconds: number;
  secondsRemaining: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;
}

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  @ViewChild('otpInput') otpInput!: CustomOtpInputComponent;

  error = null;
  responseData : any;
  loading: any = {};
  inputCode = null;
  msg = null; 
  timeInSeconds: number = 10;
  timer: CountdownTimer;
  otp_send: boolean = false;
  mobile_no:any;
  
  tran_please_wait:string = 'Please Wait';
  tran_required_otp:string = 'Enter OTP';
  tran_went_wrong:string = 'Something went wrong, please try again later.';
  tran_otp_send:string = 'OTP Sent Successfully';
  userstatus_data;
  userstatus: any;

  constructor(
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private apiService: ApiService,
    public tokenService: TokenService,
    public translate: TranslateService,
    public menuCtrl: MenuController,
    private route: ActivatedRoute,
    private router:Router,
    public eventService: EventsService
  ) { 
    this.menuCtrl.enable(false);
  	this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
    this.translate.get('enter_otp').subscribe(res => { this.tran_required_otp = res; });
    this.translate.get('went_wrong').subscribe(res => { this.tran_went_wrong = res; });
    this.translate.get('otp_send').subscribe(res => { this.tran_otp_send = res; });
  }

  ngOnInit() {
    this.mobile_no=this.route.snapshot.paramMap.get('mobile_no');
    this.sendOTP();
  }
  // ionViewWillEnter(){
  //   this.mobile_no=this.route.snapshot.paramMap.get('mobile_no');
    
  // }
  doLogout(){
    this.tokenService.remove();
    this.router.navigate(['login'])
 }

 initTimer() {
   if (!this.timeInSeconds) { this.timeInSeconds = 0; }

   this.timer = <CountdownTimer>{
     seconds: this.timeInSeconds,
     runTimer: false,
     hasStarted: false,
     hasFinished: false,
     secondsRemaining: this.timeInSeconds
   };

   this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
 }

//  submitOTPForm(){
   
//    this.msg = null;

//    if (this.inputCode == '' || this.inputCode == null) {
//      this.presentToast(this.tran_required_otp,1000)
    
//    }else{
//      this.verifyOTP(this.inputCode);
//    }
//  }

 verifyOTP(){
  const enteredOtp = this.otpInput.otpArray.join('');
  console.log('Verifying OTP:', enteredOtp);
  const loading=this.presentLoading()
    this.apiService.verify_otp(enteredOtp).subscribe(
      data => this.verifyOTPHandleResponse(data),
      error => this.handleError(error)
    );
  
    
 }

 sendOTP(){
 const loading=this.presentLoading()
    this.apiService.send_otp().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
     
 }

 verifyOTPHandleResponse(data) {
  console.log('3')

 this.loadingCtrl.dismiss();
   if (data.success == true) {   
     console.log(data) 	
     let obj = data.otp_response;
     if(obj.statusCode == 900 || obj.statusCode == 952 || obj.statusCode == 957){
         this.msg = obj.reason;
         // if(this.userstatus=='1'){
          //  this.navCtrl.setRoot(TabsPage)
          // this.eventService.getEvent().subscribe(user => {
          //   // Publish the user details
          //   this.eventService.publish(user);
          // });
           this.router.navigate(['home'])
           this.inputCode=''
       //   }
       //   else{
       //    this.navCtrl.setRoot(MaintenancePage)
           
       // }
     }else{
         this.msg = obj.reason;
     }

     if(obj.statusCode == 951){
       this.otp_send = false;
     }

   
     this.presentToast(this.msg,3000)
    
   }
 }

 handleResponse(data) {
   console.log('1')
 this.loadingCtrl.dismiss();
   if (data.success == true) {
     
     let obj = data.otp_response;
     if(obj.statusCode == 900 || obj.statusCode == 952 || obj.statusCode == 957){
         this.msg = this.tran_otp_send;
       this.otp_send = true;
     }else{
         this.msg = this.tran_went_wrong;
       this.otp_send = false;
     }
     this.presentToast(this.msg,3000)
     
     
   }
   /*this.initTimer();
   this.startTimer();*/
 }

 handleError(error) {
   console.log(error)
   console.log('2')

   this.loadingCtrl.dismiss();
   let errorMsg = '';
   if(error.status == 401){
     errorMsg = error.error.message;
   }else{
     errorMsg = error.error.error;
   }


   if(errorMsg != ''){
   this.presentToast(errorMsg,3000)

     
   }
 }

 startTimer() {
   this.timer.hasStarted = true;
   this.timer.runTimer = true;
   this.timerTick();
 }

 pauseTimer() {
   this.timer.runTimer = false;
 }

 resumeTimer() {
   this.startTimer();
 }

 timerTick() {
   setTimeout(() => {
     if (!this.timer.runTimer) { return; }
     this.timer.secondsRemaining--;
     this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
     if (this.timer.secondsRemaining > 0) {
       this.timerTick();
     } else {
       this.timer.hasFinished = true;
       this.otp_send = false;
     }
   }, 1000);
 }

 getSecondsAsDigitalClock(inputSeconds: number) {
   const secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
   const hours = Math.floor(secNum / 3600);
   const minutes = Math.floor((secNum - (hours * 3600)) / 60);
   const seconds = secNum - (hours * 3600) - (minutes * 60);
   let hoursString = '';
   let minutesString = '';
   let secondsString = '';
   hoursString = (hours < 10) ? '0' + hours : hours.toString();
   minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
   secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
   return hoursString + ':' + minutesString + ':' + secondsString;
 }
 async presentToast(message,duration) {
  const toast = await this.toastCtrl.create({
    message: message,
    duration: duration,
    position:'middle'
  });
  toast.present();
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
ionViewDidLeave(){
  this.otp_send=false;
}

handleOtpChange(otp: string): void {
  console.log('OTP:', otp);
}
// verifyOtp(): void {
//   console.log(this.otpInput);
//   const enteredOtp = this.otpInput.otpArray.join('');
//   console.log('Verifying OTP:', enteredOtp);
//   // Implement your verification logic here using enteredOtp
// }
}


