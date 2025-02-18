(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scanretailer-scanretailer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/scanretailer/scanretailer.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scanretailer/scanretailer.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Scan Retailer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <form (ngSubmit)=\"submitRetailerForm()\">\n    <ion-row>\n      <ion-item class=\"ion-margin-bottom\" >\n        <ion-label ><ion-icon slot=\"start\" name=\"list\"></ion-icon></ion-label>\n        <ion-select placeholder=\"Select Retailer\" [(ngModel)]=\"retailerid\" name=\"retailerid\">\n          <ion-select-option value=\"{{retailer.id}}\" *ngFor=\"let retailer of retailer_list\">{{retailer.first_name}} {{retailer.last_name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-row>\n    <ion-button class=\"btn-create\" type=\"submit\">{{ 'submit' | translate }}</ion-button>\n    <ion-row class=\"or\">\n      <ion-col><h2>{{ 'or' | translate }}</h2></ion-col>\n    </ion-row>\n</form>\n  <br>\n  <ion-button class=\"btn-create \"   (click)=\"scanCode()\" color=\"secondary\"><ion-icon style=\"margin-right: 8px;\" name=\"scan-sharp\"></ion-icon>{{ 'scan_code' | translate }}</ion-button>\n  <br>\n  <ion-card *ngIf=\"scannedCode\">\n    <ion-card-content>\n      {{ 'result_form_scan' | translate }} : {{ scannedCode }}\n    </ion-card-content>\n  </ion-card>\n\n  <br>\n  <ion-card *ngIf=\"retailer\">\n    <ion-card-content>\n    Last Retailer scanned   \n    <br>\n    <b>{{retailer.first_name}} {{retailer.last_name}}</b>\n    <br>\n\n    <b>{{retailer.username}} </b>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/scanretailer/scanretailer-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/scanretailer/scanretailer-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ScanretailerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanretailerPageRoutingModule", function() { return ScanretailerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _scanretailer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scanretailer.page */ "./src/app/scanretailer/scanretailer.page.ts");




const routes = [
    {
        path: '',
        component: _scanretailer_page__WEBPACK_IMPORTED_MODULE_3__["ScanretailerPage"]
    }
];
let ScanretailerPageRoutingModule = class ScanretailerPageRoutingModule {
};
ScanretailerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ScanretailerPageRoutingModule);



/***/ }),

/***/ "./src/app/scanretailer/scanretailer.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/scanretailer/scanretailer.module.ts ***!
  \*****************************************************/
/*! exports provided: ScanretailerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanretailerPageModule", function() { return ScanretailerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _scanretailer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scanretailer-routing.module */ "./src/app/scanretailer/scanretailer-routing.module.ts");
/* harmony import */ var _scanretailer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scanretailer.page */ "./src/app/scanretailer/scanretailer.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let ScanretailerPageModule = class ScanretailerPageModule {
};
ScanretailerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _scanretailer_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScanretailerPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_scanretailer_page__WEBPACK_IMPORTED_MODULE_6__["ScanretailerPage"]]
    })
], ScanretailerPageModule);



/***/ }),

/***/ "./src/app/scanretailer/scanretailer.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/scanretailer/scanretailer.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --border: none !important;\n  --box-shadow: none !important;\n  --border-radius: 30px !important;\n  --background: #f5f5f5 !important;\n  width: 100%;\n}\n\n.or ion-col h2 {\n  background-color: #111;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  display: inline-block;\n  line-height: 50px;\n  margin-top: 15px !important;\n  border-radius: 50%;\n  font-size: 16px;\n  color: #fff;\n}\n\n.qr-input-main {\n  padding: 0 !important;\n}\n\n.item-md.item-block .item-inner {\n  padding-right: 0;\n  border-bottom: none;\n}\n\n.qr-input {\n  border-radius: 30px;\n  background-color: #f5f5f5;\n  margin-bottom: 10px !important;\n  width: 100% !important;\n  max-width: 100% !important;\n}\n\n.btn-create {\n  --box-shadow: none;\n  --border-radius: 30px;\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  --padding-left: 25px;\n  --padding-right: 25px;\n  width: 100%;\n  --color: #ffffff;\n}\n\n.or {\n  text-align: center;\n  width: 100%;\n}\n\nion-item ion-icon {\n  margin-top: 5px !important;\n  color: #a9a9a9;\n  font-size: 22px;\n}\n\n.item-select ion-label {\n  flex: initial;\n  max-width: 200px;\n}\n\nion-select {\n  width: 100%;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NhbnJldGFpbGVyL3NjYW5yZXRhaWxlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFFRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUdGOztBQURBO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBO0VBSUUsYUFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQU1GIiwiZmlsZSI6InNyYy9hcHAvc2NhbnJldGFpbGVyL3NjYW5yZXRhaWxlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIC0tYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm9yIGlvbi1jb2wgaDIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucXItaW5wdXQtbWFpbiB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5xci1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tY3JlYXRlIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIC0tcGFkZGluZy10b3A6IDI1cHg7XG4gIC0tcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAtLXBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuLm9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1pdGVtIGlvbi1pY29uIHtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYTlhOWE5O1xuICBmb250LXNpemU6IDIycHg7XG59XG4uaXRlbS1zZWxlY3QgaW9uLWxhYmVsIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogaW5pdGlhbDtcbiAgLXdlYmtpdC1mbGV4OiBpbml0aWFsO1xuICAtbXMtZmxleDogaW5pdGlhbDtcbiAgZmxleDogaW5pdGlhbDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/scanretailer/scanretailer.page.ts":
/*!***************************************************!*\
  !*** ./src/app/scanretailer/scanretailer.page.ts ***!
  \***************************************************/
/*! exports provided: ScanretailerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanretailerPage", function() { return ScanretailerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let ScanretailerPage = class ScanretailerPage {
    constructor(barcodeScanner, toastCtrl, loadingCtrl, apiService, translate, menuCtrl, router) {
        this.barcodeScanner = barcodeScanner;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.translate = translate;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.tran_please_wait = 'Please Wait';
        this.tran_required_retailerid = 'Please Select Retailer';
        this.loading = {};
        this.menuCtrl.enable(true, 'myMenu');
        this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
    }
    ngOnInit() {
        this.lastRetailer();
        this.userRetailerList();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ScanretailerPage');
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
    applyQrcode(code) {
        this.presentLoading();
        this.apiService.mapRetailer(code).subscribe(data => this.handleResponse(data), error => this.handleError(error));
    }
    handleResponse(data) {
        console.log(data);
        this.loadingCtrl.dismiss();
        let msg = data.message;
        this.presentToast(msg);
        this.scannedCode = null;
        this.lastRetailer();
        this.userRetailerList();
        this.apiService.checkActivity().subscribe(data => {
            console.log('check successful', data);
        }, error => {
            console.log('err', error);
        });
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
    lastRetailer() {
        this.apiService.lastRetailer().subscribe(data => {
            console.log('dta', data);
            this.retailer = data['retailer'];
        }, error => console.log(error));
    }
    userRetailerList() {
        this.apiService.userRetailerList().subscribe(data => {
            console.log('dta', data);
            this.retailer_list = data;
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
    submitRetailerForm() {
        console.log(this.retailerid);
        if (this.retailerid == '' || this.retailerid == null) {
            this.presentToast(this.tran_required_retailerid);
        }
        else {
            this.presentLoading();
            this.apiService.mapRetailerManual(this.retailerid).subscribe(data => this.handleResponse(data), error => this.handleError(error));
        }
    }
    doRefresh(event) {
        this.lastRetailer();
        this.userRetailerList();
        event.target.complete();
    }
};
ScanretailerPage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ScanretailerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scanretailer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./scanretailer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/scanretailer/scanretailer.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./scanretailer.page.scss */ "./src/app/scanretailer/scanretailer.page.scss")).default]
    })
], ScanretailerPage);



/***/ })

}]);
//# sourceMappingURL=scanretailer-scanretailer-module-es2015.js.map