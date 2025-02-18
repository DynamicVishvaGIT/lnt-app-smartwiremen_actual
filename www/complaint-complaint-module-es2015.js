(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaint-complaint-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/complaint/complaint.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/complaint/complaint.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-content [fullscreen]=\"true\">\n    <div class=\"ion-padding-top ion-padding-horizontal\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\" style=\"text-align: start;margin-left: -26px;\">\n            <ion-menu-button></ion-menu-button>\n          </ion-col>\n          <ion-col size=\"8\" style=\"text-align: center;\">\n            <strong class=\"header\" style=\"color:#131313;\">{{ 'submit_ticket' | translate }}</strong>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class=\"gap\">\n      <form (ngSubmit)=\"ticketForm()\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"ion-label\">Select Issue Type</ion-label>\n              <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n                <ion-select [(ngModel)]=\"ticketFormField.ticket_category_id\" name=\"ticket_category_id\" placeholder=\"{{ 'select_issue_type' | translate }}\" class=\"ion-select\">\n                  <ion-select-option *ngFor=\"let item of issue_types;\" value=\"{{item.id}}\">{{item.category_name}}</ion-select-option>\n                </ion-select>          \n              </ion-item> \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"ion-label\">Email</ion-label>\n              <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n                <ion-input type=\"text\" [(ngModel)]=\"ticketFormField.your_email\" name=\"your_email\" placeholder=\"{{ 'enter_email' | translate }}\" class=\"ion-input\">\n                </ion-input>\n              </ion-item> \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"ion-label\">Contact Number</ion-label>\n              <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n                <ion-input type=\"tel\" [(ngModel)]=\"ticketFormField.your_contact_no\" maxLength=\"10\" name=\"your_contact_no\" placeholder=\"{{ 'enter_con_number' | translate }}\" class=\"ion-input\">\n                </ion-input>\n              </ion-item> \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"ion-label\">Message</ion-label>\n              <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n                <ion-textarea rows=\"5\" autosize type=\"text\" [(ngModel)]=\"ticketFormField.message\" name=\"message\" placeholder=\"{{ 'enter_msg' | translate }}\" class=\"ion-textarea\">\n                </ion-textarea>\n              </ion-item> \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-button class=\"btn-create\" type=\"submit\">{{ 'submit' | translate }}</ion-button>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </div>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n  </ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title >{{ 'submit_ticket' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row class=\"app-icon-container\">\n  </ion-row>\n  <ion-list>\n    <ion-grid>\n      <form (ngSubmit)=\"ticketForm()\">\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\" lines=\"none\">\n            <ion-label ><ion-icon slot=\"start\" name=\"list\"></ion-icon></ion-label>\n            <ion-select [(ngModel)]=\"ticketFormField.ticket_category_id\" name=\"ticket_category_id\" placeholder=\"{{ 'select_issue_type' | translate }}\">\n              <ion-select-option *ngFor=\"let item of issue_types;\" value=\"{{item.id}}\">{{item.category_name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\" lines=\"none\">\n            <ion-label ><ion-icon slot=\"start\" name=\"person\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"ticketFormField.your_email\" name=\"your_email\" placeholder=\"{{ 'enter_email' | translate }}\"></ion-input>\n          </ion-item>\n        </ion-row>\n        \n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\" lines=\"none\">\n            <ion-label ><ion-icon slot=\"start\" name=\"call-sharp\"></ion-icon></ion-label>\n            <ion-input type=\"tel\" [(ngModel)]=\"ticketFormField.your_contact_no\" maxLength=\"10\" name=\"your_contact_no\" placeholder=\"{{ 'enter_con_number' | translate }}\"></ion-input>\n          </ion-item>\n        </ion-row>\n        \n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\" lines=\"none\">\n              <ion-label ><ion-icon slot=\"start\" name=\"chatbox-ellipses\"></ion-icon></ion-label>\n              <ion-textarea rows=\"5\" autosize class=\"textarea\" type=\"text\" [(ngModel)]=\"ticketFormField.message\" name=\"message\" placeholder=\"{{ 'enter_msg' | translate }}\"></ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-button type=\"submit\" class=\"login-btn\" color=\"secondary\" expand=\"block\" >\n          <ion-icon slot=\"start\" name=\"send\"></ion-icon> {{ 'submit' | translate }}\n        </ion-button>\n      </form>\n  </ion-grid>\n</ion-list>\n</ion-content> -->\n");

/***/ }),

/***/ "./src/app/complaint/complaint-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/complaint/complaint-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ComplaintPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintPageRoutingModule", function() { return ComplaintPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _complaint_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complaint.page */ "./src/app/complaint/complaint.page.ts");




const routes = [
    {
        path: '',
        component: _complaint_page__WEBPACK_IMPORTED_MODULE_3__["ComplaintPage"]
    }
];
let ComplaintPageRoutingModule = class ComplaintPageRoutingModule {
};
ComplaintPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComplaintPageRoutingModule);



/***/ }),

/***/ "./src/app/complaint/complaint.module.ts":
/*!***********************************************!*\
  !*** ./src/app/complaint/complaint.module.ts ***!
  \***********************************************/
/*! exports provided: ComplaintPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintPageModule", function() { return ComplaintPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _complaint_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complaint-routing.module */ "./src/app/complaint/complaint-routing.module.ts");
/* harmony import */ var _complaint_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complaint.page */ "./src/app/complaint/complaint.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let ComplaintPageModule = class ComplaintPageModule {
};
ComplaintPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _complaint_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComplaintPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_complaint_page__WEBPACK_IMPORTED_MODULE_6__["ComplaintPage"]]
    })
], ComplaintPageModule);



/***/ }),

/***/ "./src/app/complaint/complaint.page.scss":
/*!***********************************************!*\
  !*** ./src/app/complaint/complaint.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none;\n  background-color: #EFF3F6;\n}\n\n.gap {\n  margin-top: 10px;\n  padding-left: 10px;\n}\n\n.btn-create {\n  --box-shadow: none;\n  --border-radius: 10px;\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  --padding-left: 25px;\n  --padding-right: 25px;\n  width: 100%;\n  color: #fff;\n  text-transform: none;\n  width: 94%;\n  margin-top: 43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGxhaW50L2NvbXBsYWludC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9jb21wbGFpbnQvY29tcGxhaW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGM0Y2O1xufVxuLmdhcHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmJ0bi1jcmVhdGUge1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgLS1wYWRkaW5nLXRvcDogMjVweDtcbiAgLS1wYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIC0tcGFkZGluZy1yaWdodDogMjVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgd2lkdGg6IDk0JTtcbiAgbWFyZ2luLXRvcDogNDNweDtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGlvbi1pdGVtIHtcbi8vICAgLS1ib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbi8vICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuLy8gICAtLWJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbi8vICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuLy8gaW9uLWl0ZW0gaW9uLWljb24ge1xuLy8gICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbi8vICAgY29sb3I6ICM5Mjk0OWM7XG4vLyB9XG4vLyBpb24taWNvbiB7XG4vLyAgIG1hcmdpbi1yaWdodDogOHB4O1xuLy8gfVxuLy8gaW9uLWxpc3Qge1xuLy8gICBib3JkZXItYm90dG9tOiBub25lO1xuLy8gfVxuLy8gLmxvZ2luLWJ0biB7XG4vLyAgIC0tYm94LXNoYWRvdzogMCAwIDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4vLyAgIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4vLyAgIC0tcGFkZGluZy10b3A6IDI1cHg7XG4vLyAgIC0tcGFkZGluZy1sZWZ0OiAyNXB4O1xuLy8gICAtLXBhZGRpbmctcmlnaHQ6IDI1cHg7XG4vLyAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbi8vIH1cbi8vIC5jZW50ZXIge1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyB9XG4vLyAuaXRlbS1zZWxlY3QgaW9uLWxhYmVsIHtcbi8vICAgLXdlYmtpdC1ib3gtZmxleDogaW5pdGlhbDtcbi8vICAgLXdlYmtpdC1mbGV4OiBpbml0aWFsO1xuLy8gICAtbXMtZmxleDogaW5pdGlhbDtcbi8vICAgZmxleDogaW5pdGlhbDtcbi8vICAgbWF4LXdpZHRoOiAyMDBweDtcbi8vIH1cbi8vIGlvbi1zZWxlY3Qge1xuLy8gICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuLy8gICBtYXgtd2lkdGg6IDEwMCU7XG4vLyAgIC0tcGFkZGluZy1zdGFydDogMDtcbi8vIH1cbi8vIGlvbi10aXRsZSB7XG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gICB0ZXh0LWFsaWduOiBsZWZ0O1xuLy8gICBwYWRkaW5nLWxlZnQ6IDA7XG4vLyB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/complaint/complaint.page.ts":
/*!*********************************************!*\
  !*** ./src/app/complaint/complaint.page.ts ***!
  \*********************************************/
/*! exports provided: ComplaintPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintPage", function() { return ComplaintPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/token-service/token.service */ "./src/app/providers/token-service/token.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/events-service/events.service */ "./src/app/providers/events-service/events.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let ComplaintPage = class ComplaintPage {
    constructor(apiService, translate, loadingCtrl, events, menuCtrl, token, toastCtrl, router) {
        this.apiService = apiService;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.token = token;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.error = null;
        this.loading = {};
        this.issue_types = [];
        this.ticketFormField = {
            ticket_category_id: null,
            your_email: null,
            your_contact_no: null,
            message: null,
        };
        this.tran_please_wait = "Please Wait";
        this.tran_required_issue_type = "Please Select Issue Type";
        this.tran_required_email = "Please Enter Your Email";
        this.tran_required_contact_no = "Please Enter Your Contact No";
        this.tran_required_message = "Please Enter Message";
        this.tran_ticket_created = "Ticket Created Successfully";
        this.menuCtrl.enable(true);
        this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
        this.translate.get('required_issue_type').subscribe(res => { this.tran_required_issue_type = res; });
        this.translate.get('required_email').subscribe(res => { this.tran_required_email = res; });
        this.translate.get('required_contact_no').subscribe(res => { this.tran_required_contact_no = res; });
        this.translate.get('required_message').subscribe(res => { this.tran_required_message = res; });
        this.translate.get('ticket_created').subscribe(res => { this.tran_ticket_created = res; });
    }
    ngOnInit() {
        this.loadIssueTypes();
    }
    loadIssueTypes() {
        this.apiService.loadTypes().subscribe(data => this.handleIssueTypes(data), error => console.log(error));
    }
    handleIssueTypes(data) {
        this.issue_types = data.issue_types;
    }
    ionViewDidLoad() {
    }
    ticketForm() {
        let toast = this.toastCtrl.create({
            message: '',
            duration: 1000,
            position: 'middle'
        });
        if (this.ticketFormField.ticket_category_id == '' || this.ticketFormField.ticket_category_id == null) {
            this.presentToast(this.tran_required_issue_type);
        }
        else if (this.ticketFormField.your_email == '' || this.ticketFormField.your_email == null) {
            this.presentToast(this.tran_required_email);
        }
        else if (this.ticketFormField.your_contact_no == '' || this.ticketFormField.your_contact_no == null) {
            this.presentToast(this.tran_required_contact_no);
        }
        else if (this.ticketFormField.message == '' || this.ticketFormField.message == null) {
            this.presentToast(this.tran_required_message);
        }
        else {
            const loading = this.presentLoading();
            this.apiService.submitTicket(this.ticketFormField).subscribe(data => {
                this.ticketFormField.ticket_category_id = '';
                this.ticketFormField.your_email = '';
                this.ticketFormField.your_contact_no = '';
                this.ticketFormField.message = '';
                this.loadingCtrl.dismiss();
                this.presentToast(this.tran_ticket_created);
            }, error => this.handleError(error));
        }
    }
    handleError(error) {
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
};
ComplaintPage.ctorParameters = () => [
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
ComplaintPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-complaint',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./complaint.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/complaint/complaint.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./complaint.page.scss */ "./src/app/complaint/complaint.page.scss")).default]
    })
], ComplaintPage);



/***/ })

}]);
//# sourceMappingURL=complaint-complaint-module-es2015.js.map