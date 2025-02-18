import { Component, OnInit } from '@angular/core';
import {  MenuController, ToastController, LoadingController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { EventsService } from '../providers/events-service/events.service';

@Component({
  selector: 'app-scheme-detail',
  templateUrl: './scheme-detail.page.html',
  styleUrls: ['./scheme-detail.page.scss'],
})
export class SchemeDetailPage implements OnInit {
  scheme : any;
  loading: any = {};
  tran_please_wait:string = 'Please Wait';
  constructor(
  
    public menuCtrl: MenuController,
    private transfer: FileTransfer,
    private file: File,
    private fileOpener: FileOpener,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public events:EventsService
  ) { 
    this.menuCtrl.enable(true, 'myMenu');
    this.scheme = this.events.sharingValue;
  
 
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    
  }

  showPDF(){
    let path = null;
    if(this.scheme && this.scheme.scheme_pdf){

      let toast = this.toastCtrl.create({
        message: '',
        duration: 1000,
        position: 'middle'
      });
      this.presentLoading('Downloading...')
   
      
      
      path = this.file.externalDataDirectory;
      const transfer = this.transfer.create();

      transfer.download('http://smartwiremen.com/storage/scheme_pdfs/' + this.scheme.scheme_pdf, path + this.scheme.scheme_pdf).then(entry => {
      
      this.loadingCtrl.dismiss();
        
      let url = entry.toURL();
      this.presentLoading('Opening file...')
 

        this.fileOpener.open(url, 'application/pdf')
        .then(() => {
          this.loadingCtrl.dismiss();
        })
        .catch(e => {
          this.loadingCtrl.dismiss();
          this.presentToast('File Open failed!')
        });
      
      }).catch(e => {
        this.loadingCtrl.dismiss();
        this.presentToast('Download failed!')
      });
    }
  }
  async presentLoading(message) {
    const loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      message: message,
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
}
