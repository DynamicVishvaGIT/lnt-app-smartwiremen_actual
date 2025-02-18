(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projectlist-projectlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectlist/projectlist.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectlist/projectlist.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Project Lead List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let project of projects_list\">\n    <ion-card-content>\n    <p>\n      {{project.pr_name}}\n    </p>\n        <!-- <p>{{project.pr_stage}}</p>\n        <ion-row>\n          <ion-col size=\"6\">\n            <p><ion-icon name=\"calendar\"></ion-icon> {{project.order_month}}</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"ion-text-end\">{{project.pr_status}}</p>\n          </ion-col>\n        </ion-row> -->\n        <div class=\"submit-btn\">\n          <ion-button color=\"secondary\"    expand=\"block\" (click)=\"goToProjectdetails(project.pr_id)\">\n            VIEW PROJECT\n           </ion-button>\n          </div>\n    </ion-card-content>\n  </ion-card> \n  <ion-card class=\"no-records\" *ngIf=\"projects_list?.length == 0\">\n    <ion-label style=\"text-align: center;font-weight: bold;\">No Records Found</ion-label>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/projectlist/projectlist-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/projectlist/projectlist-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProjectlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectlistPageRoutingModule", function() { return ProjectlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _projectlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectlist.page */ "./src/app/projectlist/projectlist.page.ts");




const routes = [
    {
        path: '',
        component: _projectlist_page__WEBPACK_IMPORTED_MODULE_3__["ProjectlistPage"]
    }
];
let ProjectlistPageRoutingModule = class ProjectlistPageRoutingModule {
};
ProjectlistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProjectlistPageRoutingModule);



/***/ }),

/***/ "./src/app/projectlist/projectlist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/projectlist/projectlist.module.ts ***!
  \***************************************************/
/*! exports provided: ProjectlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectlistPageModule", function() { return ProjectlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _projectlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectlist-routing.module */ "./src/app/projectlist/projectlist-routing.module.ts");
/* harmony import */ var _projectlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projectlist.page */ "./src/app/projectlist/projectlist.page.ts");







let ProjectlistPageModule = class ProjectlistPageModule {
};
ProjectlistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _projectlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectlistPageRoutingModule"]
        ],
        declarations: [_projectlist_page__WEBPACK_IMPORTED_MODULE_6__["ProjectlistPage"]]
    })
], ProjectlistPageModule);



/***/ }),

/***/ "./src/app/projectlist/projectlist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/projectlist/projectlist.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  margin-top: 5px !important;\n  color: #0a4f8b;\n}\n\n.no-records {\n  text-align: center;\n  padding: 16px;\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdGxpc3QvcHJvamVjdGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RsaXN0L3Byb2plY3RsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMGE0ZjhiO1xufVxuLm5vLXJlY29yZHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/projectlist/projectlist.page.ts":
/*!*************************************************!*\
  !*** ./src/app/projectlist/projectlist.page.ts ***!
  \*************************************************/
/*! exports provided: ProjectlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectlistPage", function() { return ProjectlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let ProjectlistPage = class ProjectlistPage {
    constructor(apiService, loadingCtrl, router) {
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.loading = {};
        this.tran_please_wait = "Please Wait";
    }
    ngOnInit() {
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ProjectlistPage');
        this.loadProjectList();
    }
    ionViewWillEnter() {
        this.loadProjectList();
    }
    loadProjectList() {
        this.presentLoading();
        this.apiService.projectList().subscribe(data => {
            this.loadingCtrl.dismiss();
            this.projects_list = data;
            console.log('dta', data);
        }, error => {
            this.loadingCtrl.dismiss();
            console.log(error);
        });
    }
    goToProjectdetails(project_id) {
        this.router.navigate(['projectdetail', project_id]);
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
        this.router.navigate(['home']);
    }
};
ProjectlistPage.ctorParameters = () => [
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ProjectlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projectlist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./projectlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectlist/projectlist.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./projectlist.page.scss */ "./src/app/projectlist/projectlist.page.scss")).default]
    })
], ProjectlistPage);



/***/ })

}]);
//# sourceMappingURL=projectlist-projectlist-module-es2015.js.map