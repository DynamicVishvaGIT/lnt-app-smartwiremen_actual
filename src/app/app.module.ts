import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { TranslateService } from '@ngx-translate/core';
import { TokenService } from './providers/token-service/token.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FileTransfer} from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { IonicSelectableModule } from 'ionic-selectable';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { PushNotificationProvider } from './providers/push-notification/push-notification';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { IonBottomSheetModule } from 'ion-bottom-sheet';
// import { DatePickerModule } from 'ionic4-date-picker';
@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    IonicSelectableModule,
    IonBottomDrawerModule,
    BrowserAnimationsModule,
    NgxQRCodeModule,
    IonBottomSheetModule,
    // DatePickerModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    NgxQRCodeModule,
    BarcodeScanner,
    TokenService,
    OneSignal,
    Camera,
    FileTransfer,
    File,
    FileOpener,
    AppVersion,
    PushNotificationProvider,
    DatePicker,
    AppMinimize,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  default_lang:any;
  constructor(
    public translate: TranslateService, public token: TokenService
  ) {
    this.default_lang = token.getLang() ?  token.getLang() : 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(this.default_lang);
  }
}
