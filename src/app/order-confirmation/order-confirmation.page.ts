import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastController, LoadingController, MenuController, ModalController } from '@ionic/angular';
import { ApiService } from '../providers/api-service/api.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface CountdownTimer {
  seconds: number;
  secondsRemaining: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;
}
@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.page.html',
  styleUrls: ['./order-confirmation.page.scss'],
})
export class OrderConfirmationPage implements OnInit {
  error = null;
  responseData : any;
  loading: any = {};
  inputCode = null;
  msg = null; 
  timeInSeconds: number = 10;
  timer: CountdownTimer;
  otp_send: boolean = false;
  mobile_no:any;
  gift : any = null;
  user_id;
  @Input() gift_code_array;
  
  tran_please_wait:string = 'Please Wait';
  tran_required_otp:string = 'Enter OTP';
  tran_went_wrong:string = 'Something went wrong, please try again later.';
  tran_otp_send:string = 'OTP Sent Successfully';
  tran_order_success:string = "Gift Order Created Successfully";
  constructor(
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private apiService: ApiService,
    public translate: TranslateService,
    public route:ActivatedRoute,
    public router:Router,
    public modalCtrl:ModalController,
  ) { 
    this.gift=this.route.snapshot.paramMap.get('gift')
    this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
    this.translate.get('enter_otp').subscribe(res => { this.tran_required_otp = res; });
    this.translate.get('went_wrong').subscribe(res => { this.tran_went_wrong = res; });
    this.translate.get('otp_send').subscribe(res => { this.tran_otp_send = res; });
    this.translate.get('order_success').subscribe(res => { this.tran_order_success = res; });
  }

  ngOnInit() {

  }
  ionViewDidEnter(){
    this.apiService.home().subscribe(
      data => {
        this.user_id=data['id']
      },
      error => this.handleError(error)
    );
    
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

  submitOTPForm(){
  
    
    this.msg = null;

    if (this.inputCode == '' || this.inputCode == null) {
      this.presentToast(this.tran_required_otp)
    }else{
      this.verifyOTP(this.inputCode);
    }
  }

  verifyOTP(code){
	
      const loading=this.presentLoading()

      
        this.apiService.verify_otp(code).subscribe(
          data => this.verifyOTPHandleResponse(data),
          error => this.handleError(error)
        );
   
  }

  sendOTP(){
    const loading=this.presentLoading()
    console.log(this.gift['gift_ref_code'],this.gift_code_array)

   
        this.apiService.send_order_otp().subscribe(
          data => this.handleResponse(data),
          error => this.handleError(error)
        );
     
  }

  verifyOTPHandleResponse(data) {
	this.loadingCtrl.dismiss();
    if (data.success == true) {    	
	    let obj = data.otp_response;
	    if(obj.statusCode == 900 || obj.statusCode == 952){

        const loading=this.presentLoading()
        if(this.isInArray(this.gift['gift_ref_code'],this.gift_code_array)){
          this.apiService.user_bank_upi().subscribe(data=>{
            console.log(data)
          },error=>{
            console.log(error)
          })
    
        }
		     
		        this.apiService.redeemGift(this.gift).subscribe(
		          data => this.handleReedemGiftResponse(data),
		          error => this.handleError(error,true)
		        );
  		

	    }else{
        this.msg = obj.reason;
		
        this.presentToast(this.msg)
		
	    }

	    if(obj.statusCode == 951){
	    	this.otp_send = false;
	    }
	}
  }

  handleReedemGiftResponse(data) {
    this.loadingCtrl.dismiss();
    let toast = this.toastCtrl.create({
      message: '',
      duration: 1000,
      position: 'middle'
    });
    this.close_popup();
 
    this.presentToast(this.tran_order_success).then(()=>{
      this.router.navigate(['orders'])
      this.apiService.nextGift().subscribe(data=>{
        console.log('next gift',data)
        if(data['point'] !==0){
          var notification_obj={"heading":"SMARTWIREMEN","message":"You need "+data['point']+" points to get "+data['gift_name'],"url":"","user_id":this.user_id}
  
        }
        else{
          var notification_obj={"heading":"SMARTWIREMEN","message":"Your next gift would be "+data['gift_name'],"url":"","user_id":this.user_id}
  
        }
        // var notification_obj={"heading":"SMARTWIREMEN","message":"You need "+data['point']+" points to get "+data['gift_name'],"url":"","user_id":this.user_id}
        this.apiService.sendNotification(notification_obj).subscribe(data=>{
          console.log(data)
        },error=>{
          console.log(error)
        })
        
      },error=>{
        console.log('err',error)
      })
    })



  }

  handleResponse(data) {
	this.loadingCtrl.dismiss();
    if (data.success == true) {
    	
	    let obj = data.otp_response;
	    if(obj.statusCode == 900 || obj.statusCode == 952 || obj.statusCode == 957){
	        this.msg = this.tran_otp_send;
  			this.otp_send = true;
	    }else{
	        this.msg = this.tran_went_wrong;
	    }

      if(obj.statusCode == 951){
        this.otp_send = false;
      }

   
      this.presentToast(this.msg)
	
    }
  }

  handleError(error,redirect = false) {
    console.log(error)
    this.loadingCtrl.dismiss();
    let errorMsg = '';
    if(error.status == 401){
      errorMsg = error.error.message;
    }else{
      errorMsg = error.error.error;
    }
    
    let toast = this.toastCtrl.create({
      message: '',
      duration: 3000,
      position: 'middle'
    });

    if(errorMsg != ''){
      this.presentToast(errorMsg)
    
    }
    if(redirect == true){
    	this.close_popup();
    }
  }

  close_popup() {
   	this.modalCtrl.dismiss();
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
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      message: this.tran_please_wait+'...',
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1000,
      position:'middle'
    });
    toast.present();
  }
  isInArray(gift_ref_code, array_to_search) {
    var length = array_to_search.length;
    for (var i = 0; i < length; i++) {
    if (array_to_search[i] == gift_ref_code)
     return true;
    }
    return false;
   }
}

