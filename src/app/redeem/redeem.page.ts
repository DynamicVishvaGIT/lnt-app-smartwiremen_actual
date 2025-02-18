import { Component, OnInit ,ViewChild} from '@angular/core';
import { ToastController, LoadingController, ModalController, MenuController, AlertController } from '@ionic/angular';
import { ApiService } from '../providers/api-service/api.service';
import { TranslateService } from '@ngx-translate/core';
import { OrderConfirmationPage } from '../order-confirmation/order-confirmation.page';
import { SearchPipe } from '../pipes/search.pipe';
import { IonInfiniteScroll } from '@ionic/angular';
import { SheetState } from 'ion-bottom-sheet';

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.page.html',
  styleUrls: ['./redeem.page.scss'],
  providers:[SearchPipe]
})
export class RedeemPage implements OnInit {
  loading: any = {};
  tran_went_wrong:string = 'Something went wrong, please try again later.';

  gifts : any = [];
  current_page : number = 1;
  last_page : number = 0;
  next_page_url = null;
  last_page_url = null;
  sheetState=SheetState.Bottom;
  minimumHeight=0;
  dockedHeight=400;
  title='Edit'
  // qty : number = 0;
  items = [];
  terms;
  selected_gift : any = null;
  refresher = null;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  
  tran_please_wait:string = "Please Wait";
  tran_required_qty:string = "Please Enter Quantity";
  tran_order_success:string = "Gift Order Created Successfully";
  gift_quantity;
  quantity;
  user_id;
  restricted_array;
  gift_code_array=[];
  parent_id: Object;
  profileFormField = {
	
    account_holder_name: null,
    bank_name: null,
    branch_name: null,
    account_number: null,
    ifsc_code: null,
    upi_id:null, 
  };
  upi=false;
  bank=false;
  constructor(
    private toastCtrl: ToastController,
    private apiService: ApiService,
    private loadingCtrl: LoadingController,
    public translate: TranslateService,
    public modalCtrl: ModalController,
    public menuCtrl: MenuController,
    // public alertController:AlertController
  ) { 
    this.menuCtrl.enable(true, 'myMenu');
    this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
    this.translate.get('required_qty').subscribe(res => { this.tran_required_qty = res; });
    this.translate.get('order_success').subscribe(res => { this.tran_order_success = res; });
    // this.qty = 0;
   
  
    
  }

  ngOnInit() {
    console.log('inside2')

    this.presentLoading()
    
  
    this.loadGifts2();
    this.apiService.addRestriction().subscribe(
      data => {
        this.restricted_array=data;
        for(let i=0;i<this.restricted_array.length;i++){
          this.gift_code_array.push(this.restricted_array[i]['bank'])
        }
        console.log('gift',this.gift_code_array)
      },
      error => this.handleError(error)
    );
  }
  ionViewWillEnter() {
    console.log('inside')
   
    this.apiService.home().subscribe(
      data => {
        this.user_id=data['id']
      },
      error => this.handleError(error)
    );
    this.apiService.addRestriction().subscribe(
      data => {
        this.restricted_array=data;
        for(let i=0;i<this.restricted_array.length;i++){
          this.gift_code_array.push(this.restricted_array[i]['bank'])
        }
        this.items.forEach(element => {
          for(let i=0;i<this.gift_code_array.length;i++){
           if(element.gift_ref_code == this.gift_code_array[i]){
             this.gift_quantity = 1;
           }
          }
       }); 
        console.log('gift',this.gift_code_array)
      },
      error => this.handleError(error)
    );
    this.loadParentId();
  }
  loadParentId() {
    this.apiService.parentId().subscribe(
      data => {

        this.parent_id = data;
        console.log('dta', data)
      },
      error => console.log(error)
    );
  }
  async presentOrderConfirmationModal() {
    const modal = await this.modalCtrl.create({
      component: OrderConfirmationPage,
      cssClass: 'my-custom-class',
      componentProps:{
        'gift' : this.selected_gift,
        'gift_code_array':this.gift_code_array
      }
    });
    return await modal.present();
  }
  

  doRefresh(event) {
    this.loadGifts(event);
     
  }

  loadGifts(event){
  	this.apiService.gifts(this.current_page).subscribe(
        data => {
          event.target.complete()
          this.handleResponse(data)
        },
        error => {
          event.target.complete()
          
          this.handleError(error)
        }
      );
  }
  loadGifts2(){
  	this.apiService.gifts(this.current_page).subscribe(
        data => {
          this.handleResponse(data)
        },
        error => {
          
          this.handleError(error)
        }
      );
  }

  handleResponse(data) {
    console.log('gifttttttttttttt',data)
     data.gifts.forEach(element => {
       for(let i=0;i<this.gift_code_array.length;i++){
        if(element.gift_ref_code == this.gift_code_array[i]){
          this.gift_quantity = 1;
        }
       }
    }); 
    this.items = data.gifts;
   
    // this.refresher = null;
    this.loadingCtrl.dismiss();

  }

  handleError(error) {
    console.log(error)
    this.loadingCtrl.dismiss()
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
		  this.loadGifts2();
		  infiniteScroll.target.complete();
    }, 500);
	 if(this.current_page == this.last_page){
    this.infiniteScroll.disabled
	 }
	}

  incrementQty(item) {
    if(isNaN(item.qty)){
      item.qty = 1;
    }else{
      item.qty += 1;
    }
  }

  decrementQty(item) {
    if(item.qty-1 < 0 ){
      item.qty = 0
    }else{
      item.qty -= 1;
    }
  }

  orderGift(gift){
    console.log(this.restricted_array)
    if(this.parent_id){
    this.selected_gift = gift;
   
    console.log(gift,this.gift_code_array)
    if(this.isInArray(gift.gift_ref_code,this.gift_code_array)){
      this.gift_quantity = 1;
      gift['qty']=1
    }
    else{
      this.quantity = gift.qty ? gift.qty : 0;
     
    }
   

    
    if(this.quantity  == 0){
        this.presentToast(this.tran_required_qty);
    }else{

      this.presentLoading()
      console.log(gift)
        this.apiService.home().subscribe((data)=>{
          console.log(data)
      if(this.isInArray(gift.gift_ref_code,this.gift_code_array)){
         for(let j=0;j<this.restricted_array.length;j++){
           if(this.restricted_array[j]['upi']=='bank'){
            if(this.restricted_array[j]['bank']==gift.gift_ref_code){

            if(data['account_holder_name'] && data['bank_name'] && data['branch_name'] && data['account_number'] && data['ifsc_code']){
            //  this.presentBankAlertConfirm(data,gift)
              gift['upi']=null;
              gift['account_holder_name']=data['account_holder_name'];
              gift['bank_name']=data['bank_name'];
              gift['branch_name']=data['branch_name'];
              gift['account_number']=data['account_number'];
              gift['ifsc_code']=data['ifsc_code'];
 
              this.apiService.validatePurchase().subscribe((data)=>{
                this.apiService.redeemGiftOTP(gift).subscribe(
                  data => this.handleReedemGiftResponse(data),
                  error => this.handleReedemGiftError(error)
                );
              },(error)=>{
                console.log(error)
                this.loadingCtrl.dismiss();
                this.presentToast(error.error.error);
                
              })
            }else {
              this.loadingCtrl.dismiss();
              this.presentToast("Please update bank details from your profile!!");
            }
          }
           }
           else if(this.restricted_array[j]['upi']=='upi'){

        console.log('5555555555555555555555555555555555555555555555555555555555555555')
        if(this.restricted_array[j]['bank']==gift.gift_ref_code){

            if(data['upi_id']){
          // this.presentUPIAlertConfirm(data['upi_id'],gift)
              gift['upi']=data['upi_id'];
              gift['account_holder_name']=null;
              gift['bank_name']=null;
              gift['branch_name']=null;
              gift['account_number']=null;
              gift['ifsc_code']=null;
              this.apiService.validatePurchase().subscribe((data)=>{
                this.apiService.redeemGiftOTP(gift).subscribe(
                  data => this.handleReedemGiftResponse(data),
                  error => this.handleReedemGiftError(error)
                );
              },(error)=>{
                this.loadingCtrl.dismiss();
                this.presentToast(error.error.error);
           
                
              })
            }else{
              this.loadingCtrl.dismiss();
              this.presentToast("Please update UPI ID from your profile!!");
             
            }
          }
           }
          
         }
        }
        else{
        console.log('666666666666666666666666666666666666666666666666666666666666666666666666')

          this.apiService.redeemGiftOTP(gift).subscribe(
            data => this.handleReedemGiftResponse(data),
            error => this.handleReedemGiftError(error)
          );
      } 
         
          
        },(err)=>{console.log(err)})
    }
  }
  else{
    this.presentToast("You are not mapped to ISO")
    this.loadingCtrl.dismiss()

  }
  }

  handleReedemGiftResponse(data) {
    this.loadingCtrl.dismiss();
    /*let toast = this.toastCtrl.create({
      message: '',
      duration: 1000,
      position: 'middle'
    });*/
    
    this.presentOrderConfirmationModal();

    /*this.selected_gift.qty = 0;
    this.presentToast(this.tran_order_success);
    toast.present();*/
    this.apiService.checkActivity().subscribe(data=>{
      console.log('check successful',data)
      
    },error=>{
      console.log('err',error)
    })
  
  }

  handleReedemGiftError(error) {
    this.loadingCtrl.dismiss();
    let toast = this.toastCtrl.create({
      message: '',
      duration: 1000,
      position: 'middle'
    });

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
  isInArray(gift_ref_code, array_to_search) {
    var length = array_to_search.length;
    for (var i = 0; i < length; i++) {
    if (array_to_search[i] == gift_ref_code)
     return true;
    }
    return false;
   }
   ionViewDidLeave(){
    //  this.loadGifts2()
   }
  //  async presentBankAlertConfirm(data,gift) {
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     backdropDismiss:false,
  //     header: 'Do you want to  change current bank details  ?',
  //     message: 'Account holder name : <b>'+data['account_holder_name']+'</b><br>'+'Bank Name : <b>'+data['bank_name']+'</b><br>Branch Name : <b>'+data['branch_name']+'</b><br>'+'Account No. : <b>'+data['account_number']+'</b><br>IFSC Code : <b>'+data['ifsc_code'],
  //     buttons: [
  //       {
  //         text: 'NO',
  //         role: 'cancel',
  //         cssClass: 'primary',
  //         handler: (blah) => {
  //           this.redeemGift(gift)
  //           console.log('Confirm Cancel: blah');
  //         }
  //       }, {
  //         text: 'YES',
  //         handler: () => {
  //           this.bank=true;
  //           this.upi=false;
  //           this.dockedHeight=700
	
  //             this.profileFormField.account_holder_name= data['account_holder_name'],
  //             this.profileFormField.bank_name= data['bank_name'],
  //             this.profileFormField.branch_name= data['branch_name'],
  //             this.profileFormField.account_number= data['account_number'],
  //             this.profileFormField.ifsc_code= data['ifsc_code'],
            

  //           this.sheetState=SheetState.Docked
  //           console.log('Confirm Okay');
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }
  //  async presentUPIAlertConfirm(data,gift) {
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Do you want to  change current UPI ID  ?',
  //     message:'UPI ID : <b>'+data+'</b>',
  //     backdropDismiss:false,
  //     buttons: [
  //       {
  //         text: 'NO',
  //         role: 'cancel',
  //         cssClass: 'primary',
  //         handler: (blah) => {
  //           this.redeemGift(gift)
  //           console.log('Confirm Cancel: blah');
  //         }
  //       }, {
  //         text: 'YES',
  //         handler: () => {
  //           this.upi=true;
  //           this.bank=false;
  //           this.dockedHeight=350
  //           this.profileFormField.upi_id=data
  //           this.sheetState=SheetState.Docked

  //           console.log('Confirm Okay');
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }
  redeemGift(gift){
    this.apiService.validatePurchase().subscribe((data)=>{
      this.apiService.redeemGiftOTP(gift).subscribe(
        data => this.handleReedemGiftResponse(data),
        error => this.handleReedemGiftError(error)
      );
      },(error)=>{
        this.loadingCtrl.dismiss();
        this.presentToast(error.error.error);
      })
  }
  closeDrawer(){
    this.sheetState=SheetState.Bottom
  }
  submitBankDetails(){
    var profileFormField={

    'account_holder_name': this.profileFormField.account_holder_name,
    'bank_name': this.profileFormField.bank_name,
    'branch_name': this.profileFormField.branch_name,
    'account_number': this.profileFormField.account_number,
    'ifsc_code': this.profileFormField.ifsc_code,
    }
    console.log('bank',profileFormField)

    this.apiService.edit_bank(profileFormField).subscribe(
      data => {
        this.loadingCtrl.dismiss();
        if(data){
          this.presentToast('Bank Details updated successfully');
        }else{
          this.presentToast(this.tran_went_wrong);
        }
        
      },
      error => this.handleError(error)
    );
  }
  submitUPI(){
      var profileFormField={
        'upi': this.profileFormField.upi_id,
      }
      console.log('upi',profileFormField)
      this.apiService.edit_upi(profileFormField).subscribe(
        data => {
          this.loadingCtrl.dismiss();
          if(data){
            this.presentToast('UPI ID updated successfully');
          }else{
            this.presentToast(this.tran_went_wrong);
          }
          
        },
        error => this.handleError(error)
      );
  }
}
