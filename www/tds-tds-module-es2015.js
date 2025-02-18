(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tds-tds-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tds/tds.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tds/tds.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>TDS </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <br> -->\n  \n  <ion-row class=\"heading-info\" style=\"background: #09467a;\">\n    <ion-col size=\"4\"  class=\"home-header-img\">\n      <img src=\"../assets/imgs/avatar2.png\" /> \n      <!-- <img src=\"\" />  -->\n    </ion-col>\n    <ion-col size=\"8\"  class=\"home-header-info\">\n      <br>\n      <h3>Total Points <span> {{userInfo.points}}</span></h3>\n      <h3>TDS Points <span> {{fetchtdspoint.tdsbalance}}</span></h3>\n      <!-- <h3>TDS Points <span> 800</span></h3> -->\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <br><br>\n    <ion-col size=\"12\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <div class=\"info\" style=\"border-radius: 52px;padding: 4px !important;\" (click)=\"goTds()\">\n            <ion-chip color=\"secondary\" style=\"width: 96%;\">\n              <ion-icon name=\"document-text-outline\"></ion-icon>\n              <ion-label>{{kyc_status.tds_value}}% TDS Slab</ion-label>\n            </ion-chip>\n          </div>\n        </ion-col> \n        <ion-col size=\"6\">\n          <div class=\"info\" style=\"border-radius: 52px;padding: 4px !important;\" [hidden]=kychidden>\n            <!-- <h2>TDS Verified<span></span></h2> -->\n            <ion-chip color=\"danger\" style=\"width: 96%;\">\n              <ion-icon name=\"close-circle-outline\"></ion-icon>\n              <ion-label>{{kyc_status.kyc_status}}</ion-label>\n            </ion-chip>\n          </div>\n          <div class=\"info\" style=\"border-radius: 52px;padding: 4px !important;\" (click)=\"goBack()\" [hidden]=kycnthidden>\n            <!-- <h2>TDS Verified<span></span></h2> -->\n            <ion-chip color=\"danger\" style=\"width: 96%;\">\n              <ion-icon name=\"close-circle-outline\"></ion-icon>\n              <ion-label>{{kyc_status.kyc_status}}</ion-label>\n            </ion-chip>\n          </div>\n          <div class=\"info\" style=\"border-radius: 52px;padding: 4px !important;\" (click)=\"goKyca()\" [hidden]=kycahidden>\n            <!-- <h2>TDS Verified<span></span></h2> -->\n            <ion-chip color=\"success\" style=\"width: 96%;\">\n              <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n              <ion-label>KYC Approved</ion-label>\n            </ion-chip>\n          </div>\n        </ion-col> \n      </ion-row>\n    </ion-col>\n    <br>\n  </ion-row> \n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-list>\n        <ion-list-header> \n          <h5>TDS Certificate</h5>\n        </ion-list-header>\n        <div *ngIf=\"fetchtds?.length > 0; else loggedOut\">\n        <ion-card  *ngFor=\"let tds of fetchtds\">\n          <!-- <a class=\"ion-home color-primary item\" href=\"https://smartwiremen.com/storage/tdscert/{{tds.quarterly_pdf}}\" (click)=\" return false;\">  -->\n            <ion-item (click)=\"openTDS(tds)\">\n                <ion-avatar slot=\"start\">\n                  <img src=\"../assets/imgs/download.png\" style=\"border-radius: 0;\"/>\n                </ion-avatar>\n                <ion-label>\n                  <h2>{{tds.date_quarterly}} </h2>\n                  <h3>Download TDS Certificate here</h3>\n                </ion-label>\n            </ion-item>\n          <!-- </a> -->\n         </ion-card>\n        </div>\n        <ng-template #loggedOut>\n          <ion-card>\n            <ion-item>\n              <ion-label>\n                <h3>No TDS Certificate available</h3>\n              </ion-label>\n            </ion-item>\n          </ion-card>\n        </ng-template>\n        <!--<ion-card (click)=\"downTds()\">\n          <ion-item>\n              <ion-avatar slot=\"start\">\n                <img src=\"../assets/imgs/download.png\" style=\"border-radius: 0;\"/>\n              </ion-avatar>\n              <ion-label>\n                <h2>Apr - Jun 2022</h2>\n                <h3>Download TDS Certificate here</h3>\n              </ion-label>\n          </ion-item>\n        </ion-card>\n        <ion-card (click)=\"downTds()\">\n          <ion-item>\n              <ion-avatar slot=\"start\">\n                <img src=\"../assets/imgs/download.png\" style=\"border-radius: 0;\"/>\n              </ion-avatar>\n              <ion-label>\n                <h2>Jul - Sep 2022</h2>\n                <h3>Download TDS Certificate here</h3>\n              </ion-label>\n          </ion-item>\n        </ion-card>\n        <ion-card (click)=\"downTds()\">\n          <ion-item>\n              <ion-avatar slot=\"start\">\n                <img src=\"../assets/imgs/download.png\" style=\"border-radius: 0;\"/>\n              </ion-avatar>\n              <ion-label>\n                <h2>Oct - Des 2022</h2>\n                <h3>Download TDS Certificate here</h3>\n              </ion-label>\n          </ion-item>\n        </ion-card> -->\n\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tds/tds-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/tds/tds-routing.module.ts ***!
  \*******************************************/
/*! exports provided: TdsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdsPageRoutingModule", function() { return TdsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tds_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tds.page */ "./src/app/tds/tds.page.ts");




const routes = [
    {
        path: '',
        component: _tds_page__WEBPACK_IMPORTED_MODULE_3__["TdsPage"]
    }
];
let TdsPageRoutingModule = class TdsPageRoutingModule {
};
TdsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TdsPageRoutingModule);



/***/ }),

/***/ "./src/app/tds/tds.module.ts":
/*!***********************************!*\
  !*** ./src/app/tds/tds.module.ts ***!
  \***********************************/
/*! exports provided: TdsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdsPageModule", function() { return TdsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tds_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tds-routing.module */ "./src/app/tds/tds-routing.module.ts");
/* harmony import */ var _tds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tds.page */ "./src/app/tds/tds.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let TdsPageModule = class TdsPageModule {
};
TdsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tds_routing_module__WEBPACK_IMPORTED_MODULE_5__["TdsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_tds_page__WEBPACK_IMPORTED_MODULE_6__["TdsPage"]]
    })
], TdsPageModule);



/***/ }),

/***/ "./src/app/tds/tds.page.scss":
/*!***********************************!*\
  !*** ./src/app/tds/tds.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home-header-info h2 {\n  font-size: 18px;\n  margin-bottom: 10px;\n  color: #fff;\n  font-weight: 300;\n}\n\n.kyc-hide {\n  display: none !important;\n}\n\n.home-header-info h2 span {\n  font-weight: 500;\n}\n\n.home-header-info h3 {\n  font-size: 14px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  font-weight: 300;\n  background-color: rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  border-radius: 4px;\n  color: #fff;\n}\n\n.home-header-info h3 span {\n  float: right;\n  padding-right: 7px;\n  font-weight: 500;\n}\n\n.home-header-img img {\n  margin-top: 18px;\n  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n  width: 90px;\n  height: 90px;\n  background-color: #fff;\n  padding: 3px;\n  margin-bottom: 18px;\n}\n\n.home-header-info {\n  text-align: left !important;\n}\n\n.info {\n  background: #ffffff;\n  padding: 25px 15px;\n  border-radius: 3px;\n  transition: all 0.3s ease;\n  float: left;\n  width: 100%;\n  color: #333;\n  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n\na:-webkit-any-link {\n  color: -webkit-link;\n  cursor: pointer;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGRzL3Rkcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLHdCQUFBO0FBRUo7O0FBQUU7RUFDRSxnQkFBQTtBQUdKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBR0o7O0FBQUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUFFO0VBQ0UsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUFFO0VBQ0UsMkJBQUE7QUFHSjs7QUFERTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUtKIiwiZmlsZSI6InNyYy9hcHAvdGRzL3Rkcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1oZWFkZXItaW5mbyBoMiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICAua3ljLWhpZGV7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5ob21lLWhlYWRlci1pbmZvIGgyIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgXHJcbiAgLmhvbWUtaGVhZGVyLWluZm8gaDMge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmhvbWUtaGVhZGVyLWluZm8gaDMgc3BhbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAuaG9tZS1oZWFkZXItaW1nIGltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gIH1cclxuICBcclxuICAuaG9tZS1oZWFkZXItaW5mbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbmZvIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIGE6LXdlYmtpdC1hbnktbGluayB7XHJcbiAgICBjb2xvcjogLXdlYmtpdC1saW5rO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/tds/tds.page.ts":
/*!*********************************!*\
  !*** ./src/app/tds/tds.page.ts ***!
  \*********************************/
/*! exports provided: TdsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdsPage", function() { return TdsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/token-service/token.service */ "./src/app/providers/token-service/token.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/events-service/events.service */ "./src/app/providers/events-service/events.service.ts");








let TdsPage = class TdsPage {
    constructor(toastCtrl, loadingCtrl, apiService, tokenService, translate, menuCtrl, router, events, alertController) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.tokenService = tokenService;
        this.translate = translate;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.events = events;
        this.alertController = alertController;
        this.kychidden = true;
        this.kycahidden = true;
        this.kycnthidden = true;
        this.error = null;
        this.loading = {};
        this.refresher = null;
        this.userInfo = {
            first_name: '',
            last_name: '',
            level: '',
            points: '',
            avatar: '',
        };
        this.fetchtdspoint = [];
        this.kyc_status = [];
        this.tran_please_wait = 'Please Wait';
        this.menuCtrl.enable(true);
        this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
    }
    ngOnInit() {
        this.presentLoading();
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(true);
        this.apiService.home().subscribe(data => this.handleResponse(data), error => this.handleError(error));
        this.events.getEvent().subscribe(data => {
            if (data) {
                if (data.name == 'update:userdata') {
                    this.userInfo.first_name = data.params.first_name;
                    this.userInfo.last_name = data.params.last_name;
                    this.userInfo.level = data.params.level;
                    this.userInfo.points = data.params.points;
                    this.userInfo.avatar = data.params.avatar;
                    localStorage.setItem('save_username', data.params.username);
                }
            }
        });
        this.userfetchKycstatus();
        this.userfetchTds();
        this.userfetchTdspoints();
    }
    userfetchKycstatus() {
        this.apiService.userfetchKycstatus().subscribe(data => {
            this.kyc_status = data;
            if (this.kyc_status[0]['tds_value'] == null || this.kyc_status[0]['tds_value'] == '') {
                this.kyc_status.tds_value = '20';
            }
            else {
                this.kyc_status.tds_value = this.kyc_status[0]['tds_value'];
            }
            if (this.kyc_status[0]['remark'] === null || this.kyc_status[0]['remark'] === '') { }
            else {
                this.presentAlert(this.kyc_status[0]['remark']);
            }
            if (this.kyc_status[0]['kyc_status'] == null) {
                this.kyc_status.kyc_status = 'KYC Not Uploaded';
                this.kychidden = true;
                this.kycahidden = true;
                this.kycnthidden = false;
                // this.openDis()
            }
            else if (this.kyc_status[0]['kyc_status'] == "1") {
                this.kyc_status.kyc_status = 'KYC Pending';
                this.kychidden = false;
                this.kycahidden = true;
                this.kycnthidden = true;
            }
            else if (this.kyc_status[0]['kyc_status'] == "3") {
                // this.presentAlert("You have already played this game")
                this.kyc_status.kyc_status = 'KYC Rejected';
                this.kychidden = true;
                this.kycahidden = true;
                this.kycnthidden = false;
                // this.openDis()
            }
            else {
                this.kychidden = true;
                this.kycahidden = false;
                this.kycnthidden = true;
            }
        }, error => console.log(error));
    }
    userfetchTds() {
        this.apiService.userfetchTds().subscribe(data => {
            // console.log('userfetchTds', data)
            this.fetchtds = data;
        }, error => console.log(error));
    }
    userfetchTdspoints() {
        this.apiService.userfetchTdspoints().subscribe(data => {
            this.fetchtdspoint = data;
            // console.log('userfetchTdspoints', data)
            //       this.valid_for_game=data['tdspoint']['tdsbalance'];
            // this.game_status=data['game']['status'];
            // this.game_valid=data['valid'];
            // this.fetchtdspoint.tdsbalance = ;
            // console.log('tds',  this.fetchtdspoint['tdsbalance'])
        }, error => console.log(error));
    }
    handleResponse(data) {
        this.events.publish({ name: 'update:userdata', params: data });
        this.loadingCtrl.dismiss();
    }
    goKyca() {
        this.router.navigate(['kyca']);
    }
    goKyc() {
        this.router.navigate(['kyc']);
    }
    goTds() {
        this.router.navigate(['tds']);
    }
    handleError(error) {
        this.loadingCtrl.dismiss();
        let errorMsg = '';
        if (error.status == 401) {
            errorMsg = error.error.message;
        }
        if (errorMsg != '') {
            this.presentToast(errorMsg);
        }
        else {
            this.presentToast('');
        }
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                spinner: 'crescent',
                message: this.tran_please_wait + '...',
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            //  console.log('Loading dismissed!');
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
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: message,
                buttons: ['OK'],
                mode: "ios"
            });
            yield alert.present();
        });
    }
    goBack() {
        this.router.navigate(['home']);
    }
    openTDS(tds) {
        window.open('https://smartwiremen.com/storage/tdscert/' + tds.quarterly_pdf, '_system', 'location=yes');
    }
};
TdsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
TdsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tds',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tds.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tds/tds.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tds.page.scss */ "./src/app/tds/tds.page.scss")).default]
    })
], TdsPage);



/***/ })

}]);
//# sourceMappingURL=tds-tds-module-es2015.js.map