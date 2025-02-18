import { Component, OnInit, ViewChild } from '@angular/core';
import {  ToastController, LoadingController, MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { IonicSelectableComponent } from 'ionic-selectable';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer} from '@ionic-native/file-transfer/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core'; 
import { ApiService } from '../providers/api-service/api.service';
import { TokenService } from '../providers/token-service/token.service';
import { EventsService } from '../providers/events-service/events.service';
import { DatePicker } from '@ionic-native/date-picker/ngx';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  showEditProfile = false;
  showChangePhoto = false;

  loading: any = {};
	states: any = [];
  cities: any = [];
  professions: any = [];
	professional_qualifications: any = [];
  @ViewChild('cityComponent') cityComponent: IonicSelectableComponent;
  profile_pic:any;
  file_name:any;
  base64Image:any;
  imgBlob: Blob;
  accessToken:any;
  status = 'personal';
  

  displayProfileField = {
    username: null,
    first_name: null,
    last_name: null,
    date_of_birth: null,
    email: null,
    id_proof: null,
    profession: null,
    professional_qualification : null,
    state_name: null,
    city_name: null,
    address_line_1: null,
    address_line_2: null,
    address_line_3: null,
    pincode: null,
    avatar: null,
    account_holder_name: null,
    bank_name: null,
    branch_name: null,
    account_number: null,
    ifsc_code: null,
    upi_id:null, 
    account_image:null, 
  };

  profileFormField = {
		first_name: null,
    last_name: null,
    date_of_birth: null,
    email: null,
    id_proof: null,
    profession: null,
    professional_qualification : null,
		state: null,
    city: null,
    state_id: null,
    city_id: null,
    address_line_1: null,
    address_line_2: null,
    address_line_3: null,
    pincode: null,
    avatar: null,
    account_holder_name: null,
    bank_name: null,
    branch_name: null,
    account_number: null,
    ifsc_code: null,
    upi_id:null, 
  };

  tran_please_wait:string = "Please Wait";
  /*tran_required_mobile_no:string = "Please Enter Your Mobile No";
  tran_required_email:string = "Please Enter Your Email";*/
  tran_required_first_name:string = "Please Enter Your First Name";
  tran_required_last_name:string = "Please Enter Your Last Name";

  tran_profile_updated:string = "Profile Updated Successfully";
  tran_required_old_password:string = "Please Enter Your Old Password";
  tran_required_new_password:string = "Please Enter Your New Password";
  /*tran_password_change_success:string = "Your password has been changed";
  tran_password_change_error:string = "Your password has not been changed";*/
  tran_required_state:string = "Please Select Your State";
  tran_required_city:string = "Please Select Your City";
  tran_went_wrong:string = 'Something went wrong, please try again later.';
  tran_required_image:string = 'Please Choose Image';
  tran_required_date_of_birth:string = "Please Enter Date Of Birth";

  tran_required_account_holder_name:string = "Please Enter Account Holder Name";
  tran_required_bank_name:string = "Please Enter Bank Name";
  tran_required_branch_name:string = "Please Enter Branch Name";
  tran_required_account_number:string = "Please Enter Account Number";
  tran_required_ifsc_code:string = "Please Enter IFSC Code";
  
  otherCityForm: any;
  othercity: any;
  today:any;

  isAccountHolderNameAvailable:any = false;
  isBankNameAvailabale:any = false ;
  isBranchNameAvailabale:any = false;
  isAccountNumberAvailable:any = false;
  isIFSCCodeAvailable:any = false
  isUPIIdAvailable:any = false;

  isBankUpload:any = false;
  constructor(
   
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private apiService: ApiService,
    public events: EventsService,
    public token: TokenService,
    public translate: TranslateService,
    public menuCtrl: MenuController,
    private camera: Camera,
    private transfer: FileTransfer,
    private file: File,
    public formBuilder: FormBuilder,
    public cf : ChangeDetectorRef,
    private datePicker: DatePicker,
    public router:Router

  ) { 
    this.today = new Date().toISOString();
    this.showEditProfile = false;
    this.showChangePhoto = false;
    this.menuCtrl.enable(true, 'myMenu');
    this.otherCityForm = this.formBuilder.group({
      other_city: [''],
    });
    /*this.translate.get('required_mobile_no').subscribe(res => { this.tran_required_mobile_no = res; });
    this.translate.get('required_email').subscribe(res => { this.tran_required_email = res; });*/
    this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; console.log(res)});
    this.translate.get('required_first_name').subscribe(res => { this.tran_required_first_name = res; });
    this.translate.get('required_last_name').subscribe(res => { this.tran_required_last_name = res; });
    this.translate.get('required_state').subscribe(res => { this.tran_required_state = res; });
    this.translate.get('required_city').subscribe(res => { this.tran_required_city = res; });
    this.translate.get('profile_updated').subscribe(res => { this.tran_profile_updated = res; });
    this.translate.get('required_old_password').subscribe(res => { this.tran_required_old_password = res; });
    this.translate.get('required_new_password').subscribe(res => { this.tran_required_new_password = res; });
    this.translate.get('went_wrong').subscribe(res => { this.tran_went_wrong = res; });
    this.translate.get('required_image').subscribe(res => { this.tran_required_image = res; });
    this.translate.get('required_date_of_birth').subscribe(res => { this.tran_required_date_of_birth = res;console.log(res) });

    this.translate.get('required_account_holder_name').subscribe(res => { this.tran_required_account_holder_name = res; });
    this.translate.get('required_bank_name').subscribe(res => { this.tran_required_bank_name = res; });
    this.translate.get('required_branch_name').subscribe(res => { this.tran_required_branch_name = res; });
    this.translate.get('required_account_number').subscribe(res => { this.tran_required_account_number = res; });
    this.translate.get('required_ifsc_code').subscribe(res => { this.tran_required_ifsc_code = res; }); 

  	this.events.getEvent().subscribe((data) => {
      console.log('data',data)
      if(data){
      if(data.name=='update:profiledata'){
        this.displayProfileField.username = data.params.username;
        this.displayProfileField.first_name = data.params.first_name;
        this.displayProfileField.last_name = data.params.last_name;
        this.displayProfileField.date_of_birth = data.params.date_of_birth;
        this.displayProfileField.email = data.params.email;
        this.displayProfileField.id_proof = data.params.id_proof;
        this.displayProfileField.profession = data.params.profession_name;
        this.displayProfileField.professional_qualification = data.params.professional_qualification_name;
        this.displayProfileField.state_name = data.params.state_name;
        if(data.city != null){
          this.displayProfileField.city_name = data.params.city_name;
          this.othercity=null;

        }
        else{

          this.displayProfileField.city_name = data.params.city_name;
          this.othercity=data.params.other_city
        }
        this.displayProfileField.address_line_1 = data.params.address_line_1;
        this.displayProfileField.address_line_2 = data.params.address_line_2;
        this.displayProfileField.address_line_3 = data.params.address_line_3;
        this.displayProfileField.pincode = data.params.pincode;
        this.displayProfileField.avatar = data.params.avatar;
        this.displayProfileField.account_holder_name = data.params.account_holder_name;
        this.displayProfileField.bank_name = data.params.bank_name;
        this.displayProfileField.branch_name = data.params.branch_name;
        this.displayProfileField.account_number = data.params.account_number;
        this.displayProfileField.ifsc_code = data.params.ifsc_code;
        this.displayProfileField.upi_id = data.params.upi_id; 
        this.displayProfileField.account_image=data.params.account_image

        this.profileFormField.first_name = data.params.first_name;
        this.profileFormField.last_name = data.params.last_name;
        this.profileFormField.date_of_birth = data.params.date_of_birth;
        this.profileFormField.email = data.params.email;
        this.profileFormField.id_proof = data.params.id_proof;
        this.profileFormField.profession = data.params.profession;
        this.profileFormField.professional_qualification = data.params.professional_qualification;

        this.profileFormField.state_id = data.params.state;
        
        this.profileFormField.city_id = data.params.city;

        this.profileFormField.address_line_1 = data.params.address_line_1;
        this.profileFormField.address_line_2 = data.params.address_line_2;
        this.profileFormField.address_line_3 = data.params.address_line_3;
        this.profileFormField.pincode = data.params.pincode;

        this.profileFormField.account_holder_name = data.params.account_holder_name;
        this.profileFormField.bank_name = data.params.bank_name;
        this.profileFormField.branch_name = data.params.branch_name;
        this.profileFormField.account_number = data.params.account_number;
        this.profileFormField.ifsc_code = data.params.ifsc_code;
        this.profileFormField.upi_id = data.params.upi_id;

        this.isAccountHolderNameAvailable = data.params.account_holder_name ? true : false;
        this.isBankNameAvailabale = data.params.bank_name ? true : false ;
        this.isBranchNameAvailabale = data.params.branch_name ? true : false;
        this.isAccountNumberAvailable = data.params.account_number ? true : false;
        this.isIFSCCodeAvailable = data.params.ifsc_code ? true : false;
        this.isUPIIdAvailable = data.params.upi_id ? true : false;

        
        this.loadStates();      
        this.loadProfession();
        this.loadProfQualifications();
      }
    }
    });
  // }
  }

  ngOnInit() {
    
  }

  statusTab(status:string) {
    if(status == 'personal'){
      this.status = 'personal';
    }
    else{
      this.status = 'other';
    }
  }
  loadProfession(){
    this.apiService.professions().subscribe(
      data => this.handleProfession(data),
      error => console.log(error)
    );
  }
  
  handleProfession(data){
    this.professions = data.professions;
  }

  loadProfQualifications(){
    this.apiService.prof_qualifications().subscribe(
      data => this.handleProfQualifications(data),
      error => console.log(error)
    );
  }

  handleProfQualifications(data){
    this.professional_qualifications = data.prof_qualifications;
  }

  loadStates(){
    this.apiService.states().subscribe(
      data => this.handleStates(data),
      error => console.log(error)
    );
  }

  handleStates(data){
    this.states = data.states;
    
    var selectedItem = this.states.find(
      t => t.id == this.profileFormField.state_id
    );
    var indexNo = this.states.indexOf(selectedItem);
    if (indexNo != -1) {
      this.profileFormField.state = this.states[indexNo];
    }

    if(this.profileFormField.state){
      this.loadCities(this.profileFormField.state.id);
    }
  }

  changeState(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    this.cities = [];
    this.profileFormField.city = null;
    this.profileFormField.city_id = null;
    this.profileFormField.state_id = event.value.id;
    this.loadCities(event.value.id);
  }

  changeCity(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    this.profileFormField.city_id = event.value.id;
    
  }
  goKyc(){
    this.router.navigate(['kyc'])
  }
  goKyca(){
    this.router.navigate(['kyca'])
  }

  loadCities(state_id){
  	this.apiService.cities(state_id).subscribe(
      data => this.handleCities(data),
      error => console.log(error)
    );
  }

  handleCities(data){
    // if(this.othercity==null){
      this.cities = data.cities;
      var selectedItem = this.cities.find(
        t => t.id == this.profileFormField.city_id
      );
      var indexNo = this.cities.indexOf(selectedItem);
      if (indexNo != -1) {
        this.profileFormField.city = this.cities[indexNo];
      }
    // }
    else{
      this.profileFormField.city={'name':this.othercity,'id':'0',}
    }
   
  }

  loadEditProfile(){
   
    this.presentLoading()
      this.apiService.home().subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
  }

  ionViewWillEnter() {
    this.loadEditProfile();
  }

  showEdit(){    
    this.loadEditProfile();
    this.showEditProfile = true;
  }

  showProfile(){
    this.showEditProfile = false;  
    this.showChangePhoto = false;  
  }
  // goKyc(){
  //   this.router.navigate(['orders'])
  // }

  showPhoto(isBankUpload){
    if(isBankUpload){
      this.isBankUpload = true;
    }else {
      this.isBankUpload = false;
    }
    this.showChangePhoto = true;
  }

  profileForm(){
   

    if(this.profileFormField.first_name == '' || this.profileFormField.first_name == null){
      
      this.presentToast(this.tran_required_first_name);

    }
    else if(this.profileFormField.last_name == '' || this.profileFormField.last_name == null){

      this.presentToast(this.tran_required_last_name);
    }
    else if(this.profileFormField.state == '' || this.profileFormField.state == null){
      this.presentToast(this.tran_required_state);
    }else if(this.profileFormField.city == '' || this.profileFormField.city == null){
      this.presentToast(this.tran_required_city);
    }else if(this.profileFormField.date_of_birth == '' || this.profileFormField.date_of_birth == null){
      this.presentToast(this.tran_required_date_of_birth);
    }else if(!this.profileFormField.upi_id && (!this.profileFormField.account_holder_name || !this.profileFormField.bank_name || !this.profileFormField.branch_name || !this.profileFormField.account_number || !this.profileFormField.ifsc_code)){
      if(this.profileFormField.account_holder_name == '' || this.profileFormField.account_holder_name == null){
        this.presentToast(this.tran_required_account_holder_name);
      }else if(this.profileFormField.bank_name == '' || this.profileFormField.bank_name == null){
        this.presentToast(this.tran_required_bank_name);
      }else if(this.profileFormField.branch_name == '' || this.profileFormField.branch_name == null){
        this.presentToast(this.tran_required_branch_name);
      }else if(this.profileFormField.account_number == '' || this.profileFormField.account_number == null){
        this.presentToast(this.tran_required_account_number);
      }else if(this.profileFormField.ifsc_code == '' || this.profileFormField.ifsc_code == null){
        this.presentToast(this.tran_required_ifsc_code);
      } 
    } else{

      this.presentLoading()
      if(this.profileFormField.date_of_birth ){
        this.profileFormField.date_of_birth =(this.profileFormField.date_of_birth ).split('T')[0]
      }
      if(this.profileFormField.city.id==0){
        
        var profileFormField = {
          'email': this.profileFormField.email,
          'first_name': this.profileFormField.first_name,
          'last_name': this.profileFormField.last_name,
          'date_of_birth':this.profileFormField.date_of_birth,
          'password': null,
          'state_id': this.profileFormField.state.id,
          'state_name':this.profileFormField.state.name,
          'city_id': null,
          'city_name':null,
          'other_city':this.profileFormField.city.name,
          'profile_pic': null,
          'pincode':this.profileFormField.pincode,
          'address_line_1': this.profileFormField.address_line_1,
          'address_line_2': this.profileFormField.address_line_2,
          'address_line_3': this.profileFormField.address_line_3,
          'account_holder_name': this.profileFormField.account_holder_name,
          'bank_name': this.profileFormField.bank_name,
          'branch_name': this.profileFormField.branch_name,
          'account_number': this.profileFormField.account_number,
          'ifsc_code': this.profileFormField.ifsc_code,
          'upi_id': this.profileFormField.upi_id,
          'photo':'',
          'profession':this.profileFormField.profession,
          'professional_qualification':this.profileFormField.professional_qualification,
          'bank_details_upload':null, 
        };
      }
      else{
        var profileFormField = {
          'email': this.profileFormField.email,
          'first_name': this.profileFormField.first_name,
          'last_name': this.profileFormField.last_name,
          'date_of_birth':this.profileFormField.date_of_birth,
          'password': null,
          'state_id': this.profileFormField.state.id,
          'city_id': this.profileFormField.city.id,
          'state_name':this.profileFormField.state.name,
          'city_name':this.profileFormField.city.name,
          'other_city':null,
          'profile_pic': null,
          'pincode':this.profileFormField.pincode,
          'address_line_1': this.profileFormField.address_line_1,
          'address_line_2': this.profileFormField.address_line_2,
          'address_line_3': this.profileFormField.address_line_3,
          'account_holder_name': this.profileFormField.account_holder_name,
          'bank_name': this.profileFormField.bank_name,
          'branch_name': this.profileFormField.branch_name,
          'account_number': this.profileFormField.account_number,
          'ifsc_code': this.profileFormField.ifsc_code,
          'upi_id': this.profileFormField.upi_id,
          'photo':'',
          'profession':this.profileFormField.profession,
          'professional_qualification':this.profileFormField.professional_qualification,
          'bank_details_upload':null, 
        };
      }
      console.log('edit',profileFormField)
        this.apiService.updateProfile(profileFormField).subscribe(
          data => {
            this.loadingCtrl.dismiss();
            if(data){
              this.loadEditProfile();
              this.showProfile();
              this.presentToast(this.tran_profile_updated);
            }else{
              this.presentToast(this.tran_went_wrong);
            }
            
          },
          error => this.handleError(error)
        );
    }
  }

  handleResponse(data) {
    this.loadingCtrl.dismiss()
      this.events.publish({name:'update:profiledata',params:data});
      console.log()
	    this.events.publish({name:'update:userdata',params:data});
	}

	handleError(error) {
    this.loadingCtrl.dismiss()
    
		let errorMsg = '';
		if(error.status == 401){
		  errorMsg = error.error.message;
		}else{
      errorMsg = error.error.error;
    }
		
		if(errorMsg != ''){
		  this.presentToast(errorMsg);
		}
	}

  takePhoto(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
     
    }

    this.camera.getPicture(options).then((imageData) => {
    //  this.profile_pic = 'data:image/jpeg;base64,' + imageData;
     this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
      entry.file(file => {
        console.log(file);
        this.file_name=file.name
        this.base64Image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
        this.cf.detectChanges();
        this.readFile(file);
      });
    });
    }, (err) => {
     this.base64Image = null;      
    });
  }

  getImage(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
        entry.file(file => {
          console.log(file);
          this.file_name=file.name
          this.base64Image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
          this.cf.detectChanges();
          this.readFile(file);
        });
      });
    //  this.profile_pic = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      this.base64Image = null;
    });
  }

  readFile(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.imgBlob = new Blob([reader.result], {
        type: file.type
      });
     console.log("name",file.name)
     
     
    };
    reader.readAsArrayBuffer(file);
  }

  uploadImage(){
   

    /* const fileTransfer: FileTransferObject = this.transfer.create();
    let random = Math.floor(Math.random() * 100);
    let token_val = this.token.get();
    let options: FileUploadOptions = {
       fileKey: 'photo',
       fileName: 'photo_'+random+'.jpg',
       chunkedMode:false,
       httpMethod:'post',
       mimeType:'image/jpeg',
       params : {'token':token_val}
    } */
    let uploadUrl = this.isBankUpload ? 'https://smartwiremen.com/api/auth/uploadbankdetails' : 'https://smartwiremen.com/api/auth/uploadImage';
    
    console.log("uploadUrl=========",uploadUrl);
    if( this.imgBlob == null){
      this.presentToast(this.tran_required_image);
      
    }else{
      
     this.presentLoading()
      
      const formData = new FormData();
      formData.append('photo', this.imgBlob, this.file_name);
      formData.append('token', this.token.get());
      // let token = this.token.get();
      // this.accessToken = token;
      // console.log(formData, this.imgBlob, this.file_name);
      this.apiService.uploadImage(uploadUrl,formData).subscribe(data=>{
        this.handleUploadResponse()
      },error=>{
        this.handleUploadError(error)
      })
      
      /* this.loading.present().then(() => {

        return fileTransfer.upload(this.profile_pic, uploadUrl, options).then((data) => {
              this.loading.dismiss();
              this.loadEditProfile();
              this.showProfile();
              this.presentToast(this.tran_profile_updated);
              toast.present();
              this.profile_pic = null;
            }, (err) => {
              this.presentToast(this.tran_went_wrong);
              toast.present();
              this.loading.dismiss();
           });
        
      }); */
    }
  }
  addCity() {
    
  
    this.profileFormField.city = {
      
      name: this.otherCityForm.get('other_city').value,
      id: 0
  };

  this.otherCityForm.reset();
  this.cityComponent.hideAddItemTemplate();
  // this.cityComponent.confirm();
  // this.cityComponent.close();
  this.cityComponent._close()
  // this.cityComponent.hideAddItemTemplate();
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
  handleUploadResponse() {
    this.loadingCtrl.dismiss()
    console.log('here')
   
    this.presentToast("Bank details upload successfully")
    
  }

  handleUploadError(error) {
    this.loadingCtrl.dismiss()
  
    let errorMsg = '';
    if(error.status == 401){
      errorMsg = error.error.message;
    }else{
      errorMsg = error.error.error;
    }
    let toast = this.toastCtrl.create({
      message: 'Bank details upload failed',
      duration: 3000,
      position: 'middle'
    });
    this.presentToast("Bank details upload failed");
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
      duration: 3000,
      position:'middle'
    });
    toast.present();
  }
  openDateDialog(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: 5,
      maxDate:new Date()

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
    this.profileFormField.date_of_birth = [year, month, day].join('-');
  }
  dateSelected(event){
    console.log(event)
  }
}
