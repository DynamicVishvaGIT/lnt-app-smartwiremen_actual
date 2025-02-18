(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scheme-detail-scheme-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/scheme-detail/scheme-detail.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scheme-detail/scheme-detail.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ scheme.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <img src=\"https://smartwiremen.com/storage/scheme_images/{{ scheme.scheme_image }}\" *ngIf=\"scheme.scheme_image\"/>\n  <ion-row  *ngIf=\"scheme.scheme_pdf\">\n    <ion-col size=\"12\" class=\"ion-text-right\" class=\"ion-no-padding\">\n      <ion-button color=\"secondary\"  size=\"small\" (click)=\"showPDF()\"><ion-icon name=\"cloud-download-sharp\"></ion-icon> Scheme Information PDF</ion-button>\n    </ion-col>\n  </ion-row>\n  <p style=\"white-space: pre-line; margin-top: 0px;\">\n\t\t{{ scheme.description }}\n\t</p>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/scheme-detail/scheme-detail-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/scheme-detail/scheme-detail-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SchemeDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeDetailPageRoutingModule", function() { return SchemeDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _scheme_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheme-detail.page */ "./src/app/scheme-detail/scheme-detail.page.ts");




const routes = [
    {
        path: '',
        component: _scheme_detail_page__WEBPACK_IMPORTED_MODULE_3__["SchemeDetailPage"]
    }
];
let SchemeDetailPageRoutingModule = class SchemeDetailPageRoutingModule {
};
SchemeDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SchemeDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/scheme-detail/scheme-detail.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/scheme-detail/scheme-detail.module.ts ***!
  \*******************************************************/
/*! exports provided: SchemeDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeDetailPageModule", function() { return SchemeDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _scheme_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scheme-detail-routing.module */ "./src/app/scheme-detail/scheme-detail-routing.module.ts");
/* harmony import */ var _scheme_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scheme-detail.page */ "./src/app/scheme-detail/scheme-detail.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let SchemeDetailPageModule = class SchemeDetailPageModule {
};
SchemeDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _scheme_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["SchemeDetailPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_scheme_detail_page__WEBPACK_IMPORTED_MODULE_6__["SchemeDetailPage"]]
    })
], SchemeDetailPageModule);



/***/ }),

/***/ "./src/app/scheme-detail/scheme-detail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/scheme-detail/scheme-detail.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVtZS1kZXRhaWwvc2NoZW1lLWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/scheme-detail/scheme-detail.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/scheme-detail/scheme-detail.page.ts ***!
  \*****************************************************/
/*! exports provided: SchemeDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeDetailPage", function() { return SchemeDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/events-service/events.service */ "./src/app/providers/events-service/events.service.ts");







let SchemeDetailPage = class SchemeDetailPage {
    constructor(menuCtrl, transfer, file, fileOpener, toastCtrl, loadingCtrl, events) {
        this.menuCtrl = menuCtrl;
        this.transfer = transfer;
        this.file = file;
        this.fileOpener = fileOpener;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.loading = {};
        this.tran_please_wait = 'Please Wait';
        this.menuCtrl.enable(true, 'myMenu');
        this.scheme = this.events.sharingValue;
    }
    ngOnInit() {
    }
    ionViewDidLoad() {
    }
    showPDF() {
        let path = null;
        if (this.scheme && this.scheme.scheme_pdf) {
            let toast = this.toastCtrl.create({
                message: '',
                duration: 1000,
                position: 'middle'
            });
            this.presentLoading('Downloading...');
            path = this.file.externalDataDirectory;
            const transfer = this.transfer.create();
            transfer.download('http://smartwiremen.com/storage/scheme_pdfs/' + this.scheme.scheme_pdf, path + this.scheme.scheme_pdf).then(entry => {
                this.loadingCtrl.dismiss();
                let url = entry.toURL();
                this.presentLoading('Opening file...');
                this.fileOpener.open(url, 'application/pdf')
                    .then(() => {
                    this.loadingCtrl.dismiss();
                })
                    .catch(e => {
                    this.loadingCtrl.dismiss();
                    this.presentToast('File Open failed!');
                });
            }).catch(e => {
                this.loadingCtrl.dismiss();
                this.presentToast('Download failed!');
            });
        }
    }
    presentLoading(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                spinner: 'crescent',
                message: message,
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
};
SchemeDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__["FileOpener"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"] }
];
SchemeDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scheme-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./scheme-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/scheme-detail/scheme-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./scheme-detail.page.scss */ "./src/app/scheme-detail/scheme-detail.page.scss")).default]
    })
], SchemeDetailPage);



/***/ })

}]);
//# sourceMappingURL=scheme-detail-scheme-detail-module-es2015.js.map