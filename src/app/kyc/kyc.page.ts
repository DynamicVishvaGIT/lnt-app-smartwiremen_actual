// import { Component, OnInit } from '@angular/core';
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
  selector: 'app-kyc',
  templateUrl: './kyc.page.html',
  styleUrls: ['./kyc.page.scss'],
})
export class KycPage implements OnInit {
  disabled = true;
  showKycForm = false;
  showKycFormdistwo = true;
  showKycFormdisone = true;
  tc = null;
  profile_pic:any;
  pan_card_img:any;
  base64pancardImage:any;
  pancardBlob: Blob;
  
  aadhar_card_img:any;
  base64aadharcardImage:any;
  aadharcardBlob: Blob;
  
  cancel_cheque_img:any;
  base64cancelchequeImage:any;
  cancelchequeBlob: Blob;

  accessToken:any;
  kycFormField = {
		linked_phonenumber: null,
    pan_card_no: null,
    aadhar_no: null,
    cancel_check_no: null,
    terms_condition:null,
    terms_conditions:null,
    pan_card_img: null,
    aadhar_card_img: null,
    cancel_cheque_img:null,
  };
  tran_please_wait:string = "Please Wait";
  tran_required_linked_phonenumber:string = "Enter Pan & Aadhar link Phone Number";
  tran_required_pan_card_no:string = "Enter Pan Card Number";
  tran_required_pan_card_img:string = "Please Select Pan Card Image.";
  tran_required_aadhar_no:string = "Enter Aadhar Card Number";
  tran_required_cancel_check_no:string = "Enter Cancel Cheque Number";
  tran_required_aadhar_card_img:string = "Aadhar Card Image is Required";
  tran_kyc_updated:string = "KYC Successfully Uploaded";

  tran_went_wrong:string = 'Something went wrong, please try again later.';
  

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
    private pancardfile: File,
    private aadharcardfile: File,
    private cancelchequefile: File,
    private file: File,
    public formBuilder: FormBuilder,
    public cf : ChangeDetectorRef,
    private datePicker: DatePicker,
    public router:Router
  ) {
    this.events.getEvent().subscribe((data) => {
      console.log('data',data)
      if(data){
      if(data.name=='update:kycdata'){
        

        this.kycFormField.linked_phonenumber = data.params.linked_phonenumber;
        this.kycFormField.pan_card_no = data.params.pan_card_no;
        this.kycFormField.aadhar_no = data.params.aadhar_no;
        this.kycFormField.cancel_check_no = data.params.cancel_check_no;
        this.kycFormField.terms_condition = data.params.terms_condition;
        this.kycFormField.terms_conditions = data.params.terms_conditions;

        this.pan_card_img = data.params.pan_card_img;
        this.aadhar_card_img = data.params.aadhar_card_img;
        this.cancel_cheque_img = data.params.cancel_cheque_img;

        
      }
    }
    });
    
    

  }
  getpancardImage(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.pancardfile.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
        entry.file(pancardfile => {
          console.log(pancardfile);
          this.pan_card_img=pancardfile.name
          this.base64pancardImage = (<any>window).Ionic.WebView.convertFileSrc(imageData);
          // this.base64pancardImage = this.camera.DestinationType.DATA_URL;
          this.cf.detectChanges();
          this.pancardreadFile(pancardfile);
        });
      });
    //  this.profile_pic = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      this.base64pancardImage = null;
    });
  }
  pancardreadFile(pancardfile: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.pancardBlob = new Blob([reader.result], {
        type: pancardfile.type
      });
     console.log("name",pancardfile.name)
     
    };
    reader.readAsArrayBuffer(pancardfile);
  }
  getaadharcardImage(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.aadharcardfile.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
        entry.file(aadharcardfile => {
          console.log(aadharcardfile);
          this.aadhar_card_img=aadharcardfile.name
          this.base64aadharcardImage = (<any>window).Ionic.WebView.convertFileSrc(imageData);
          this.cf.detectChanges();
          this.aadharcardreadFile(aadharcardfile);
        });
      });
    //  this.profile_pic = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      this.base64aadharcardImage = null;
    });
  }
  aadharcardreadFile(aadharcardfile: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.aadharcardBlob = new Blob([reader.result], {
        type: aadharcardfile.type
      });
     console.log("name",aadharcardfile.name)
    };
    reader.readAsArrayBuffer(aadharcardfile);
  }
  getcancelchequeImage(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.cancelchequefile.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
        entry.file(cancelchequefile => {
          console.log(cancelchequefile);
          this.cancel_cheque_img=cancelchequefile.name
          this.base64cancelchequeImage = (<any>window).Ionic.WebView.convertFileSrc(imageData);
          this.cf.detectChanges();
          this.cancelchequereadFile(cancelchequefile);
        });
      });
    //  this.profile_pic = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      this.base64cancelchequeImage = null;
    });
  }
  cancelchequereadFile(cancelchequefile: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.cancelchequeBlob = new Blob([reader.result], {
        type: cancelchequefile.type
      });
     console.log("name",cancelchequefile.name)
    };
    reader.readAsArrayBuffer(cancelchequefile);
  }
  showKyc(){    
      
      this.showKycForm = true;
      this.showKycFormdisone = true;
      this.showKycFormdistwo = true;

      if(this.kycFormField.pan_card_no != null){
        console.log(this.kycFormField.pan_card_no)  
        if(this.pancardBlob == null){
          this.presentToast(this.tran_required_pan_card_img);
          this.showKycForm = false;
          this.showKycFormdisone = true;
          this.showKycFormdistwo = true;
        }else{
          if(this.kycFormField.pan_card_no == '' || this.kycFormField.pan_card_no == null){
            console.log('2')  
            this.showKycFormdistwo = false;
            this.showKycForm = true;
            this.showKycFormdisone = true;
          }else{
            console.log('1')
            this.showKycForm = true;
            this.showKycFormdisone = false;
            this.showKycFormdistwo = true;
          }
        }
      }else{
        if(this.kycFormField.aadhar_no == '' || this.kycFormField.aadhar_no == null){
          console.log('number')  
          this.presentToast(this.tran_required_aadhar_no);
          this.showKycForm = false;
          this.showKycFormdisone = true;
          this.showKycFormdistwo = true;
        }else if(this.aadharcardBlob == null){
          this.presentToast(this.tran_required_aadhar_card_img);
          this.showKycForm = false;
          this.showKycFormdisone = true;
          this.showKycFormdistwo = true;
        }else{
          if(this.kycFormField.pan_card_no == '' || this.kycFormField.pan_card_no == null){
            console.log('two')  
            this.showKycFormdistwo = false;
            this.showKycForm = true;
            this.showKycFormdisone = true;
          }else{
            console.log('one')
            this.showKycForm = true;
            this.showKycFormdisone = false;
            this.showKycFormdistwo = true;
          }
        }
        
      }
      
    
    
  }
  checkKyc(){
    this.disabled = false;
    // console.log(this.kycFormField.terms_condition)
    if(this.kycFormField.terms_condition == true){
      // console.log(this.kycFormField.terms_condition)
      this.disabled = false;
      this.tc = "10"
      // console.log(this.kycFormField.terms_condition)
    }else{
      this.disabled = true;
    }
  }
  checkKyctwo(){
    this.disabled = false;
    // console.log(this.kycFormField.terms_condition)
    if(this.kycFormField.terms_conditions == true){
      // console.log(this.kycFormField.terms_condition)
      this.disabled = false;
      this.tc = "20"
      // console.log(this.kycFormField.terms_conditions)
    }else{
      this.disabled = true;
    }
  }
  kycForm(){
    console.log(this.kycFormField.pan_card_no)
    if(this.kycFormField.aadhar_no == '' || this.kycFormField.aadhar_no == null){
      this.presentToast(this.tran_required_aadhar_no);
    }else if(this.aadharcardBlob == null){
      this.presentToast(this.tran_required_aadhar_card_img);
    }else{

      
      this.presentLoading()
        
        // var kycFormField = {
        //   'linked_phonenumber': this.kycFormField.linked_phonenumber,
        //   'pan_card_no': this.kycFormField.pan_card_no,
        //   'aadhar_no': this.kycFormField.aadhar_no,
        //   'cancel_check_no':this.kycFormField.cancel_check_no,
        //   'terms_condition':this.tc,
          
        //   'oldpan_card_img':this.pan_card_img,
        //   'pan_card_img':this.pan_card_img,
        //   'base64pancardImage':this.base64pancardImage,

        //   'oldaadhar_card_img':this.aadhar_card_img,
        //   'aadhar_card_img':this.aadhar_card_img,
        //   'base64aadharcardImage':this.base64aadharcardImage,

        //   'oldcancel_cheque_img':this.cancel_cheque_img,
        //   'cancel_cheque_img':this.cancel_cheque_img,
        //   'base64cancelchequeImage':this.base64cancelchequeImage,

        //   'chunkedMode': false,
        //   'mimeType': "multipart/form-data",
        //   // enctype

        // };
        let uploadUrl = 'https://smartwiremen.com/api/auth/uploadKyc';
        const formData = new FormData();
        formData.append('linked_phonenumber', this.kycFormField.linked_phonenumber);
        formData.append('pan_card_no', this.kycFormField.pan_card_no);
        formData.append('aadhar_no', this.kycFormField.aadhar_no);
        formData.append('cancel_check_no', this.kycFormField.cancel_check_no);
        formData.append('terms_condition', this.tc);

        if(this.pancardBlob == null){
          formData.append('pan_card_img', null);
        }else{
          formData.append('pan_card_img', this.pancardBlob, this.pan_card_img);
        }
        if(this.cancelchequeBlob == null){
          formData.append('cancel_cheque_img', null);
        }else{
          formData.append('cancel_cheque_img', this.cancelchequeBlob, this.cancel_cheque_img);
        }
        
        formData.append('aadhar_card_img', this.aadharcardBlob, this.aadhar_card_img);
        
        
        formData.append('token', this.token.get());

        console.log('add',this.aadharcardBlob)
        this.apiService.uploadKyc(uploadUrl,formData).subscribe(
          data => {
            this.loadingCtrl.dismiss();
            if(data){
              this.presentToast(this.tran_kyc_updated);
              this.router.navigate(['success'])
              this.showKycForm = false;
              this.showKycFormdistwo = true;
              this.showKycFormdisone = true;
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
      this.events.publish({name:'update:kycdata',params:data});
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

  
  // takePhoto(){
  //   const options: CameraOptions = {
  //     quality: 70,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     correctOrientation: true
     
  //   }

  //   this.camera.getPicture(options).then((imageData) => {
  //   //  this.profile_pic = 'data:image/jpeg;base64,' + imageData;
  //    this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
  //     entry.file(file => {
  //       console.log(file);
  //       this.file_name=file.name
  //       this.base64Image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
  //       this.cf.detectChanges();
  //       this.readFile(file);
  //     });
  //   });
  //   }, (err) => {
  //    this.base64Image = null;      
  //   });
  // }

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

 
  

  



  goBack(){
    this.router.navigate(['home'])
  }
  ngOnInit() {
    // this.showKycFormdistwo = false;
    // this.showKycFormdisone = false;
    
  }
}
