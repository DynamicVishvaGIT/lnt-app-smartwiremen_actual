(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scancounterboy-scancounterboy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/scancounterboy/scancounterboy.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scancounterboy/scancounterboy.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Scan Counter Boy</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"ion-padding-top ion-padding-horizontal\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: start;margin-left: -10px;\" (click)=\"goBack()\">\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"8\" style=\"text-align: center;\">\n          <strong class=\"header\" style=\"color:#131313;\">Scan Counter Boy</strong>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <form (ngSubmit)=\"submitCounterBoyForm()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label class=\"ion-label\">Select Country Boy</ion-label>\n          <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n            <ion-select name=\"counterboyid\" [(ngModel)]=\"counterboyid\" placeholder=\"Select Counter Boy\" class=\"ion-select\">\n              <!-- <ion-select-option >\n                None\n              </ion-select-option> -->\n              <ion-select-option value=\"{{counterboy.id}}\" *ngFor=\"let counterboy of counterboy_list\" >\n                {{counterboy.name}} \n              </ion-select-option>\n            </ion-select>          \n          </ion-item> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-button class=\"btn-create\" type=\"submit\" style=\"width: 94%;margin-top: 10px;\">{{ 'submit' | translate }}</ion-button>\n      </ion-row>\n    </ion-grid>\n    <!-- <ion-row>\n      <ion-item class=\"ion-margin-bottom\" >\n        <ion-label ><ion-icon slot=\"start\" name=\"list\"></ion-icon></ion-label>\n        <ion-select placeholder=\"Select Counter Boy\" [(ngModel)]=\"counterboyid\" name=\"counterboyid\">\n          <ion-select-option value=\"{{counterboy.id}}\" *ngFor=\"let counterboy of counterboy_list\">\n            {{counterboy.name}} \n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-row>\n    <ion-button class=\"btn-create\" type=\"submit\">{{ 'submit' | translate }}</ion-button> -->\n    <ion-row class=\"or\">\n      <ion-col><h2>{{ 'or' | translate }}</h2></ion-col>\n    </ion-row>\n</form>\n  <br>\n  <ion-button class=\"btn-create\"   (click)=\"scanCode()\" color=\"secondary\"><ion-icon style=\"margin-right: 8px;\" name=\"scan-sharp\"></ion-icon>{{ 'scan_code' | translate }}</ion-button>\n  <br>\n  <br>\n  <ion-card *ngIf=\"scannedCode\">\n    <ion-card-content>\n      {{ 'result_form_scan' | translate }} : {{ scannedCode }}\n    </ion-card-content>\n  </ion-card>\n\n  <br>\n  <ion-card *ngIf=\"counterboy\" style=\"width: 90%;\">\n    <ion-card-content>\n    Last counter boy scanned   \n    <br>\n    <b>{{counterboy.name}} </b>\n    <br>\n    <b>{{counterboy.mobile_no}} </b>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/scancounterboy/scancounterboy-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/scancounterboy/scancounterboy-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ScancounterboyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScancounterboyPageRoutingModule", function() { return ScancounterboyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _scancounterboy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scancounterboy.page */ "./src/app/scancounterboy/scancounterboy.page.ts");




const routes = [
    {
        path: '',
        component: _scancounterboy_page__WEBPACK_IMPORTED_MODULE_3__["ScancounterboyPage"]
    }
];
let ScancounterboyPageRoutingModule = class ScancounterboyPageRoutingModule {
};
ScancounterboyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ScancounterboyPageRoutingModule);



/***/ }),

/***/ "./src/app/scancounterboy/scancounterboy.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/scancounterboy/scancounterboy.module.ts ***!
  \*********************************************************/
/*! exports provided: ScancounterboyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScancounterboyPageModule", function() { return ScancounterboyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _scancounterboy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scancounterboy-routing.module */ "./src/app/scancounterboy/scancounterboy-routing.module.ts");
/* harmony import */ var _scancounterboy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scancounterboy.page */ "./src/app/scancounterboy/scancounterboy.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let ScancounterboyPageModule = class ScancounterboyPageModule {
};
ScancounterboyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _scancounterboy_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScancounterboyPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_scancounterboy_page__WEBPACK_IMPORTED_MODULE_6__["ScancounterboyPage"]]
    })
], ScancounterboyPageModule);



/***/ }),

/***/ "./src/app/scancounterboy/scancounterboy.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/scancounterboy/scancounterboy.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none;\n  background-color: #EFF3F6;\n}\n\n.or ion-col h2 {\n  text-align: center;\n  display: inline-block;\n  line-height: 50px;\n  margin-top: 15px !important;\n  font-size: 16px;\n  color: #131313;\n}\n\n.qr-input-main {\n  padding: 0 !important;\n}\n\n.item-md.item-block .item-inner {\n  padding-right: 0;\n  border-bottom: none;\n}\n\n.qr-input {\n  border-radius: 30px;\n  background-color: #f5f5f5;\n  margin-bottom: 10px !important;\n  width: 100% !important;\n  max-width: 100% !important;\n}\n\n.btn-create {\n  --box-shadow: none;\n  --border-radius: 30px;\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  --padding-left: 25px;\n  --padding-right: 25px;\n  width: 93%;\n  --color: #ffffff;\n}\n\n.or {\n  text-align: center;\n  width: 100%;\n}\n\nion-select::part(icon) {\n  margin-left: 295px !important;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NhbmNvdW50ZXJib3kvc2NhbmNvdW50ZXJib3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQVFFO0VBSUUsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFFQSxlQUFBO0VBQ0EsY0FBQTtBQVRKOztBQVlFO0VBQ0UscUJBQUE7QUFUSjs7QUFZRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFZRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFUSjs7QUFZRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQVRKOztBQVdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBUko7O0FBMEJFO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtBQXZCSiIsImZpbGUiOiJzcmMvYXBwL3NjYW5jb3VudGVyYm95L3NjYW5jb3VudGVyYm95LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGM0Y2O1xufVxuLy8gaW9uLWl0ZW0ge1xuLy8gICAgIC0tYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgIH1cbiAgLm9yIGlvbi1jb2wgaDIge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gICAgLy8gd2lkdGg6IDUwcHg7XG4gICAgLy8gaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMxMzEzMTM7XG4gIH1cbiAgXG4gIC5xci1pbnB1dC1tYWluIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuICBcbiAgLnFyLWlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5idG4tY3JlYXRlIHtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMjVweDtcbiAgICAtLXBhZGRpbmctbGVmdDogMjVweDtcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDkzJTtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIC5vciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC8vIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgLy8gICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbiAgLy8gICBjb2xvcjogI2E5YTlhOTtcbiAgLy8gICBmb250LXNpemU6IDIycHg7XG4gIC8vIH1cbiAgLy8gLml0ZW0tc2VsZWN0IGlvbi1sYWJlbCB7XG4gIC8vICAgLXdlYmtpdC1ib3gtZmxleDogaW5pdGlhbDtcbiAgLy8gICAtd2Via2l0LWZsZXg6IGluaXRpYWw7XG4gIC8vICAgLW1zLWZsZXg6IGluaXRpYWw7XG4gIC8vICAgZmxleDogaW5pdGlhbDtcbiAgLy8gICBtYXgtd2lkdGg6IDIwMHB4O1xuICAvLyB9XG4gIC8vIGlvbi1zZWxlY3Qge1xuICAvLyAgIHdpZHRoOiAxMDAlO1xuICAvLyAgIG1heC13aWR0aDogMTAwJTtcbiAgLy8gfVxuICBpb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgICBtYXJnaW4tbGVmdDogMjk1cHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/scancounterboy/scancounterboy.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/scancounterboy/scancounterboy.page.ts ***!
  \*******************************************************/
/*! exports provided: ScancounterboyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScancounterboyPage", function() { return ScancounterboyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let ScancounterboyPage = class ScancounterboyPage {
    constructor(barcodeScanner, toastCtrl, loadingCtrl, apiService, translate, menuCtrl, router) {
        this.barcodeScanner = barcodeScanner;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.translate = translate;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.tran_please_wait = 'Please Wait';
        this.tran_required_counterboy = 'Please Select Counter Boy';
        this.loading = {};
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.lastCounterBoy();
        this.userCounterBoyList();
    }
    scanCode() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.scannedCode = barcodeData.text;
            if (this.scannedCode != '' && this.scannedCode != null) {
                this.applyQrcode(this.scannedCode);
            }
        }, (err) => {
            console.log('Error: ', err);
        });
    }
    applyQrcode(username) {
        this.presentLoading();
        this.apiService.mapCounterBoy(username).subscribe(data => this.handleResponse(data), error => this.handleError(error));
    }
    handleResponse(data) {
        console.log(data);
        this.loadingCtrl.dismiss();
        if (data) {
            this.presentToast("Counter Boy mapped successfully");
        }
        this.scannedCode = '';
        this.lastCounterBoy();
        this.userCounterBoyList();
        // this.apiService.checkActivity().subscribe(data=>{
        //   console.log('check successful',data)
        // },error=>{
        //   console.log('err',error)
        // })
    }
    handleError(error) {
        console.log(error);
        this.loadingCtrl.dismiss();
        let errorMsg = '';
        if (error.status == 401) {
            errorMsg = error.error.message;
        }
        else {
            errorMsg = error.error.error;
        }
        if (errorMsg != '') {
            this.presentToast(errorMsg);
        }
    }
    lastCounterBoy() {
        this.apiService.lastCounterBoy().subscribe(data => {
            this.counterboy = data['counter_boy'];
        }, error => console.log(error));
    }
    userCounterBoyList() {
        this.apiService.userCounterBoyList().subscribe(data => {
            console.log('dta', data);
            this.counterboy_list = data;
        }, error => console.log(error));
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                spinner: 'crescent',
                message: this.tran_please_wait + '...',
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
    }
    goBack() {
        this.router.navigate(['home']);
    }
    submitCounterBoyForm() {
        console.log(this.counterboyid);
        if (this.counterboyid == '' || this.counterboyid == null) {
            this.presentToast(this.tran_required_counterboy);
        }
        else {
            this.presentLoading();
            this.apiService.mapCounterBoyManual(this.counterboyid).subscribe(data => this.handleResponse(data), error => this.handleError(error));
        }
    }
    doRefresh(event) {
        this.lastCounterBoy();
        this.userCounterBoyList();
        event.target.complete();
    }
};
ScancounterboyPage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ScancounterboyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scancounterboy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./scancounterboy.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/scancounterboy/scancounterboy.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./scancounterboy.page.scss */ "./src/app/scancounterboy/scancounterboy.page.scss")).default]
    })
], ScancounterboyPage);



/***/ })

}]);
//# sourceMappingURL=scancounterboy-scancounterboy-module-es2015.js.map