(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projectdetail-projectdetail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdetail/projectdetail.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectdetail/projectdetail.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Project Lead Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"project_detail\">\n    <ion-card>\n    \n      <ion-row class=\"card-heading\" >\n        <ion-col size=\"10\" >\n          <div class=\"ion-text-start\"><strong >Project Details</strong></div>\n        </ion-col>\n      </ion-row>\n    \n      <ion-card-content >\n        <ion-row class=\"ion-margin-bottom\">\n          <p>Project Name ::  <b>{{project_detail.pr_name}}</b></p>  \n          \n        </ion-row>\n  \n        <ion-row class=\"ion-margin-bottom\">\n          <p>Address 1 :: <b>{{project_detail.add_1}}</b></p>\n        </ion-row>\n      \n  \n        <ion-row class=\"ion-margin-bottom\">\n          <p>Address 2 :: <b>{{project_detail.add_2}}</b></p>\n        </ion-row>\n  \n       <ion-row class=\"ion-margin-bottom\">\n         <p>Contact :: <b>{{project_detail.pr_contact}}</b></p>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <!-- </ion-card>\n    <ion-card>\n    \n      <ion-row class=\"card-heading\" >\n        <ion-col size=\"10\" >\n          <div class=\"ion-text-start\"><strong >Project Influencer</strong></div>\n        </ion-col>\n       \n      </ion-row>\n    \n      <ion-card-content >\n       \n        <ion-row class=\"ion-margin-bottom\">\n          <p>Contractor Name :: <b>{{project_detail.pr_contractor}}</b></p>\n        </ion-row>\n        <ion-row class=\"ion-margin-bottom\">\n          <p>Builder Name :: <b>{{project_detail.pr_builder}}</b></p>\n        </ion-row>\n        <ion-row class=\"ion-margin-bottom\">\n          <p>Developer Name :: <b>{{project_detail.pr_developer}}</b></p>\n         \n        </ion-row>\n        <ion-row class=\"ion-margin-bottom\">\n          <p>Architect & Interior Designer Name :: <b>{{project_detail.pr_achitect}}</b></p>\n        </ion-row>\n        <ion-row class=\"ion-margin-bottom\">\n          <p>Consultant Name :: <b>{{project_detail.pr_consultant}}</b></p>\n        </ion-row>\n        <ion-row class=\"ion-margin-bottom\">\n          <p>House Owner Name :: <b>{{project_detail.pr_houseowner}}</b></p>\n       \n        </ion-row>\n        <ion-row class=\"ion-margin-bottom\">\n          <p>Decision Maker Name :: <b>{{project_detail.pr_decmaker}}</b></p>\n        </ion-row>\n        <ion-row class=\"ion-margin-bottom\">\n          <p>Retailer/Distributor Name :: <b>{{project_detail.pr_retailers_distributors}}</b></p>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card>\n    \n      <ion-row class=\"card-heading\" >\n        <ion-col size=\"10\" >\n          <div class=\"ion-text-start\"><strong >Approximate Value of Requirement</strong></div>\n        </ion-col>\n        \n      </ion-row>\n    \n      <ion-card-content >\n        <ion-row class=\"ion-margin-bottom\">\n          <p>Oris Name :: <b>{{project_detail.Oris}}</b></p>\n        </ion-row>\n  \n        <ion-row class=\"ion-margin-bottom\">\n          <p>Tripper :: <b>{{project_detail.tripper}}</b></p>\n        </ion-row>\n        <ion-row class=\"ion-margin-bottom\">\n          <p>Englaze :: <b>{{project_detail.englaze}}</b></p>\n        </ion-row>\n  \n       <ion-row class=\"ion-margin-bottom\">\n         <p>Entice :: <b>{{project_detail.entice}}</b></p>\n        </ion-row>\n       <ion-row class=\"ion-margin-bottom\">\n         <p>Engem :: <b>{{project_detail.engem}}</b></p>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    \n    \n    <ion-card>\n    \n      <ion-row class=\"card-heading\" >\n        <ion-col size=\"10\" >\n          <div class=\"ion-text-start\"><strong >Project Status </strong></div>\n        </ion-col>\n       \n      </ion-row>\n    \n      <ion-card-content >\n        <div *ngIf=\"project_detail.pr_status=='Won'\">\n        <ion-row class=\"ion-margin-bottom\">\n          <p><b><b></b>{{project_detail.pr_status}}</b> </p> \n           </ion-row>\n          <ion-row class=\"ion-margin-bottom\">\n          <p>Name of Retailer/PTP/DSP :: <b>{{project_detail.won_ptp_dsp}}</b></p>  \n          </ion-row>\n          <ion-row class=\"ion-margin-bottom\">\n          <p>Value :: <b>{{project_detail.won_value}}</b></p>  \n          </ion-row>\n          <ion-row class=\"ion-margin-bottom\">\n          <p>Order Routed :: <b>{{project_detail.won_routed}}</b></p>  \n          </ion-row>\n        </div>\n        <div *ngIf=\"project_detail.pr_status=='Lost'\">\n        <ion-row class=\"ion-margin-bottom\">\n          <p><b><b></b>{{project_detail.pr_status}}</b> </p> \n           </ion-row>\n          <ion-row class=\"ion-margin-bottom\">\n          <p>Name of competitor who has won :: <b>{{project_detail.lost_name}}</b></p>  \n          </ion-row>\n          <ion-row class=\"ion-margin-bottom\">\n          <p>Value :: <b>{{project_detail.lost_value}}</b></p>  \n          </ion-row>\n         \n        </div>\n        <div *ngIf=\"project_detail.pr_status=='In Progress'\">\n        <ion-row class=\"ion-margin-bottom\">\n          <p><b><b></b>{{project_detail.pr_status}}</b> </p> \n           </ion-row>\n        </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content >\n          <ion-row class=\"ion-margin-bottom\">\n          <p>Competitor Name :: <b>{{competition}}</b></p> \n        </ion-row>\n  \n          <ion-row class=\"ion-margin-bottom\"> \n              <p>Project Classification :: <b>{{project_detail.pr_classification}}</b></p> \n            </ion-row>\n          <ion-row class=\"ion-margin-bottom\">\n            <p>Stage of Project :: <b>{{project_detail.pr_stage}}</b></p> \n          </ion-row>\n          <ion-row class=\"ion-margin-bottom\">\n            <p>Chances of Winning :: <b>{{project_detail.pr_chances}}</b></p> \n          </ion-row>\n          <ion-row class=\"ion-margin-bottom\">\n            <p>Tentative Order Transition Month :: <b>{{project_detail.order_month}}</b></p>\n           </ion-row>\n          <ion-row class=\"ion-margin-bottom\"><p>Project Source :: <b>{{project_detail.pr_source}}</b></p> \n          </ion-row>\n         \n        </ion-card-content>\n    </ion-card> -->\n  </div>\n  </ion-content>\n  \n");

/***/ }),

/***/ "./src/app/projectdetail/projectdetail-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/projectdetail/projectdetail-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ProjectdetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectdetailPageRoutingModule", function() { return ProjectdetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _projectdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectdetail.page */ "./src/app/projectdetail/projectdetail.page.ts");




const routes = [
    {
        path: '',
        component: _projectdetail_page__WEBPACK_IMPORTED_MODULE_3__["ProjectdetailPage"]
    }
];
let ProjectdetailPageRoutingModule = class ProjectdetailPageRoutingModule {
};
ProjectdetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProjectdetailPageRoutingModule);



/***/ }),

/***/ "./src/app/projectdetail/projectdetail.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/projectdetail/projectdetail.module.ts ***!
  \*******************************************************/
/*! exports provided: ProjectdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectdetailPageModule", function() { return ProjectdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _projectdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectdetail-routing.module */ "./src/app/projectdetail/projectdetail-routing.module.ts");
/* harmony import */ var _projectdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projectdetail.page */ "./src/app/projectdetail/projectdetail.page.ts");







let ProjectdetailPageModule = class ProjectdetailPageModule {
};
ProjectdetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _projectdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectdetailPageRoutingModule"]
        ],
        declarations: [_projectdetail_page__WEBPACK_IMPORTED_MODULE_6__["ProjectdetailPage"]]
    })
], ProjectdetailPageModule);



/***/ }),

/***/ "./src/app/projectdetail/projectdetail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/projectdetail/projectdetail.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-heading {\n  height: 40px;\n  padding: 7px;\n  background-color: #01294c;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdGRldGFpbC9wcm9qZWN0ZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0ZGV0YWlsL3Byb2plY3RkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGluZyB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEyOTRjO1xuICBjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/projectdetail/projectdetail.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/projectdetail/projectdetail.page.ts ***!
  \*****************************************************/
/*! exports provided: ProjectdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectdetailPage", function() { return ProjectdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let ProjectdetailPage = class ProjectdetailPage {
    constructor(apiService, loadingCtrl, route, router) {
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.router = router;
        this.loading = {};
        this.tran_please_wait = "Please Wait";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        console.log('ionViewDidLoad ProjectdetailPage');
        var pr_id = this.route.snapshot.paramMap.get('project_id');
        console.log('pr_id', pr_id);
        if (pr_id) {
            this.loadProjectDetails(pr_id);
        }
    }
    loadProjectDetails(pr_id) {
        this.presentLoading();
        this.apiService.projectDetails(pr_id).subscribe(data => {
            this.loadingCtrl.dismiss();
            this.project = data;
            this.project_detail = this.project.project[0];
            // this.competition=this.project.Competition
            console.log('loadProjectDetails', data);
        }, error => {
            this.loadingCtrl.dismiss();
            console.log('error', error);
        });
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
    goBack() {
        this.router.navigate(['projectlist']);
    }
};
ProjectdetailPage.ctorParameters = () => [
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ProjectdetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projectdetail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./projectdetail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdetail/projectdetail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./projectdetail.page.scss */ "./src/app/projectdetail/projectdetail.page.scss")).default]
    })
], ProjectdetailPage);



/***/ })

}]);
//# sourceMappingURL=projectdetail-projectdetail-module-es2015.js.map