import { Component, OnInit, ViewChild } from '@angular/core';
import {   ToastController, LoadingController,  MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { FormBuilder } from '@angular/forms';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ApiService } from '../providers/api-service/api.service';
import { TokenService } from '../providers/token-service/token.service';
import { EventsService } from '../providers/events-service/events.service';
import { PushNotificationProvider } from '../providers/push-notification/push-notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  error = null;
  responseData : any;
  loading: any = {};
  states: any = [];
  public pincode_pattern="[0-9]{6}"
  @ViewChild('cityComponent') cityComponent: IonicSelectableComponent;
  cities: any = [];
  signupFormField = {
    username: null,
    email: null,
    first_name: null,
    last_name: null,
    password: null,
    state: null,
    city: null,
    other_city: null,
    profile_pic: null,
    pincode:null,
    date_of_birth:null
  };

  tran_please_wait:string = 'Please Wait';
  tran_required_mobile_no:string = "Please Enter Your Mobile No";
  tran_required_email:string = "Please Enter Your Email";
  tran_required_first_name:string = "Please Enter Your First Name";
  tran_required_last_name:string = "Please Enter Your Last Name";
  tran_required_state:string = "Please Select Your State";
  tran_required_city:string = "Please Select Your City";
  tran_required_password:string = "Please Enter Your Password";
  tran_required_pincode:string = "Please Enter Your PIN Code";
  userstatus_data: any;
  userstatus: any;
  otherCityForm: any;
  othercity: { id: number; name: any; };
  constructor(

    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private apiService: ApiService,
    public events: EventsService,
    public token: TokenService,
    public translate: TranslateService,
    public pushNotification: PushNotificationProvider,
    public menuCtrl: MenuController,
    public formBuilder: FormBuilder,
    private datePicker: DatePicker,
    public router:Router
  ) {
    this.menuCtrl.enable(false);
    this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
    this.translate.get('required_first_name').subscribe(res => { this.tran_required_first_name = res; });
    this.translate.get('required_last_name').subscribe(res => { this.tran_required_last_name = res; });
    this.translate.get('required_mobile_no').subscribe(res => { this.tran_required_mobile_no = res; });
    // this.translate.get('required_email').subscribe(res => { this.tran_required_email = res; });
    this.translate.get('required_state').subscribe(res => { this.tran_required_state = res; });
    this.translate.get('required_pincode').subscribe(res => { this.tran_required_pincode = res; });
    this.translate.get('required_city').subscribe(res => { this.tran_required_city = res; });
    // this.translate.get('required_password').subscribe(res => { this.tran_required_password = res; });
    
    this.listenToUserEvents();
    this.otherCityForm = this.formBuilder.group({
      other_city: [''],
    });
   }

  ngOnInit() {
    this.loadStates();
  }
  loadStates(){
    this.apiService.states().subscribe(
      data => this.handleStates(data),
      error => console.log(error)
    );
  }

  handleStates(data){
    this.states = data.states;
  }

  changeState($event) {
    this.cities = [];
    console.log('state',$event)
    this.loadCities($event.value['id']);

  }

  loadCities(state_id){
    this.apiService.cities(state_id).subscribe(
      data =>{ this.handleCities(data);
      
      },
      error => console.log(error)
    );
  }

  handleCities(data){
    this.cities = data.cities;
  }
  
  
  listenToUserEvents() {
    this.events.getEvent().subscribe(data=>{
      if(data.name=='signup:success'){
        this.token.handle(data.access_token);
        this.pushNotification.init();
        if(data.primary_verify == 0){
          this.router.navigate(['verification',data.params.username])
        }
        else{
          this.router.navigate(['login'])
        }
      }
    })

    this.events.getEvent().subscribe((data) => {
      if(data.name=='signup:failed'){
       this.loadingCtrl.dismiss()
      }
        
    });
  }

  ionViewDidLoad() {
   
   
  }

  goLogin() {
    this.router.navigate(['login'])
  }
  
  signupForm(){
 

    if(this.signupFormField.first_name == '' || this.signupFormField.first_name == null){
      this.presentToast(this.tran_required_first_name);
    }else if(this.signupFormField.last_name == '' || this.signupFormField.last_name == null){
      this.presentToast(this.tran_required_last_name);
    }else if (this.signupFormField.username == '' || this.signupFormField.username == null) {
      this.presentToast(this.tran_required_mobile_no);
    }
    else if (this.signupFormField.state == '' || this.signupFormField.state == null) {
      this.presentToast(this.tran_required_state);
    }
    else if (this.signupFormField.city == '' || this.signupFormField.city == null) {
      this.presentToast(this.tran_required_city);
    }
    else if (this.signupFormField.pincode == '' || this.signupFormField.pincode == null) {
      this.presentToast(this.tran_required_pincode);
    }
    else{
      this.presentLoading()
    

        if(this.signupFormField.city.id==0){
        var signupFormValues = {
          'username': this.signupFormField.username,
          'email': null,
          'first_name': this.signupFormField.first_name,
          'last_name': this.signupFormField.last_name,
          'password': null,
          'state': this.signupFormField.state.id,
          'city': null,
          'other_city':this.signupFormField.city.name,
          'profile_pic': null,
          'pincode':this.signupFormField.pincode,
        };
      }
      else{
        var signupFormValues = {
          'username': this.signupFormField.username,
          'email': null,
          'first_name': this.signupFormField.first_name,
          'last_name': this.signupFormField.last_name,
          'password': null,
          'state': this.signupFormField.state.id,
          'city': this.signupFormField.city.id,
          'other_city':null,
          'profile_pic': null,
          'pincode':this.signupFormField.pincode,
        };
      }
        console.log('signupFormValues',signupFormValues)
        this.apiService.signup(signupFormValues).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }
  }

  handleResponse(data) {
    this.loadingCtrl.dismiss()
    this.events.publish({name:'signup:success',params:data});
    this.signupFormField = {
      username: null,
      email: null,
      first_name: null,
      last_name: null,
      password: null,
      state: null,
      city: null,
      other_city: null,
      profile_pic: null,
      pincode:null,
      date_of_birth:null
    };
  }

  handleError(error) {
    this.loadingCtrl.dismiss()

    this.events.publish({name:'signup:failed',params:''});
    let errorMsg = '';
    if(error.status == 401){
      errorMsg = error.error.message;
    }else{
      errorMsg = error.error.error;
    }

    this.presentToast(errorMsg);
  }
  cityChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
   
  }
  onAddCity(event: {
    component: IonicSelectableComponent
  }) {
   
    this.otherCityForm.reset();

   
    this.otherCityForm.get('other_city').setValue(event.component.searchText);
  
    event.component.showAddItemTemplate();
  }

  addCity() {
    
  
    this.signupFormField.city = ({
      id: 0,
      name: this.otherCityForm.get('other_city').value
  });

  this.otherCityForm.reset();
  this.cityComponent.hideAddItemTemplate();
  this.cityComponent.close();
  }
  onSearchFail(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    if (event.component.hasSearchText) {
      // Clean form.
      this.otherCityForm.reset();
  
      // Copy search text to port name field, so
      // user doesn't have to type again.
      this.otherCityForm.get('other_city').setValue(event.component.searchText);
  
      // Show form.
      event.component.showAddItemTemplate();
    }
  }
  onSearchSuccess(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    // Hide form.
    event.component.hideAddItemTemplate();
  }

  openDateDailog(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => this.formatDate(date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
        
    this.signupFormField.date_of_birth = [year, month, day].join('-');
  }
  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
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
  textOnlyValidation(event: any) {
    const pattern = /[a-zA-Z ]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
   
      event.preventDefault();
    }
  }
}
