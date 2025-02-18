(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~order-confirmation-order-confirmation-module~redeem-redeem-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-confirmation/order-confirmation.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-confirmation/order-confirmation.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ 'order_confirmation' | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n    \t<ion-button  (click)=\"close_popup()\"><ion-icon slot=\"start\" color=\"light\" name=\"close-circle\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n    {{ 'order_details' | translate }}\n  </ion-card-title>\n  <ion-row>\n    <ion-col size=\"4\"  >{{ 'product_name' | translate }}</ion-col>\n    <ion-col size=\"8\"  >{{ gift.gift_name }}</ion-col>\n    \n    <ion-col size=\"4\" >{{ 'qty' | translate }}</ion-col>\n    <ion-col size=\"8\" >{{ gift.qty }}</ion-col>\n  </ion-row>\n</ion-card-content>\n</ion-card>\n<form (ngSubmit)=\"submitOTPForm()\" *ngIf=\"otp_send\">\n  <ion-item class=\"otp-input-main\">\n    <ion-input type=\"number\" placeholder=\"{{ 'enter_otp' | translate }}\" class=\"otp-input\" [(ngModel)]=\"inputCode\" name=\"inputCode\"></ion-input>\n  </ion-item>\n  <ion-button class=\"btn-create\" type=\"submit\"  expand=\"full\" type=\"submit\">{{ 'verify' | translate }}</ion-button>\n</form>\n\n<ion-button *ngIf=\"!otp_send\" class=\"btn-create\"  expand=\"full\"  (click)=\"sendOTP()\" color=\"secondary\">{{ 'confirm_order' | translate }}</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/order-confirmation/order-confirmation.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/order-confirmation/order-confirmation.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --padding-right: 0;\n  --border-bottom: none;\n}\n\n.otp-input {\n  border-radius: 30px;\n  background-color: #f5f5f5;\n  margin-bottom: 10px !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  --padding-start: 8px !important;\n}\n\n.btn-create {\n  --box-shadow: none;\n  --border-radius: 30px;\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  --padding-left: 25px;\n  --padding-right: 25px;\n  --border-radius: 30px;\n  --color: #fff;\n}\n\n.card_timer {\n  box-shadow: none;\n}\n\n.no-padding {\n  padding: 0px;\n}\n\n.card_timer .button-inner {\n  text-transform: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItY29uZmlybWF0aW9uL29yZGVyLWNvbmZpcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUdGOztBQURBO0VBRUUsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7QUFLRjs7QUFIQTtFQUNFLHVCQUFBO0FBTUYiLCJmaWxlIjoic3JjL2FwcC9vcmRlci1jb25maXJtYXRpb24vb3JkZXItY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXJpZ2h0OiAwO1xuICAtLWJvcmRlci1ib3R0b206IG5vbmU7XG59XG4ub3RwLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcbn1cbi5idG4tY3JlYXRlIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIC0tcGFkZGluZy10b3A6IDI1cHg7XG4gIC0tcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAtLXBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cbi5jYXJkX3RpbWVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uY2FyZF90aW1lciAuYnV0dG9uLWlubmVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/order-confirmation/order-confirmation.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/order-confirmation/order-confirmation.page.ts ***!
  \***************************************************************/
/*! exports provided: OrderConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationPage", function() { return OrderConfirmationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let OrderConfirmationPage = class OrderConfirmationPage {
    constructor(toastCtrl, loadingCtrl, apiService, translate, route, router, modalCtrl) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.translate = translate;
        this.route = route;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.error = null;
        this.loading = {};
        this.inputCode = null;
        this.msg = null;
        this.timeInSeconds = 10;
        this.otp_send = false;
        this.gift = null;
        this.tran_please_wait = 'Please Wait';
        this.tran_required_otp = 'Enter OTP';
        this.tran_went_wrong = 'Something went wrong, please try again later.';
        this.tran_otp_send = 'OTP Sent Successfully';
        this.tran_order_success = "Gift Order Created Successfully";
        this.gift = this.route.snapshot.paramMap.get('gift');
        this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
        this.translate.get('enter_otp').subscribe(res => { this.tran_required_otp = res; });
        this.translate.get('went_wrong').subscribe(res => { this.tran_went_wrong = res; });
        this.translate.get('otp_send').subscribe(res => { this.tran_otp_send = res; });
        this.translate.get('order_success').subscribe(res => { this.tran_order_success = res; });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.apiService.home().subscribe(data => {
            this.user_id = data['id'];
        }, error => this.handleError(error));
    }
    initTimer() {
        if (!this.timeInSeconds) {
            this.timeInSeconds = 0;
        }
        this.timer = {
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    }
    submitOTPForm() {
        this.msg = null;
        if (this.inputCode == '' || this.inputCode == null) {
            this.presentToast(this.tran_required_otp);
        }
        else {
            this.verifyOTP(this.inputCode);
        }
    }
    verifyOTP(code) {
        const loading = this.presentLoading();
        this.apiService.verify_otp(code).subscribe(data => this.verifyOTPHandleResponse(data), error => this.handleError(error));
    }
    sendOTP() {
        const loading = this.presentLoading();
        console.log(this.gift['gift_ref_code'], this.gift_code_array);
        this.apiService.send_order_otp().subscribe(data => this.handleResponse(data), error => this.handleError(error));
    }
    verifyOTPHandleResponse(data) {
        this.loadingCtrl.dismiss();
        if (data.success == true) {
            let obj = data.otp_response;
            if (obj.statusCode == 900 || obj.statusCode == 952) {
                const loading = this.presentLoading();
                if (this.isInArray(this.gift['gift_ref_code'], this.gift_code_array)) {
                    this.apiService.user_bank_upi().subscribe(data => {
                        console.log(data);
                    }, error => {
                        console.log(error);
                    });
                }
                this.apiService.redeemGift(this.gift).subscribe(data => this.handleReedemGiftResponse(data), error => this.handleError(error, true));
            }
            else {
                this.msg = obj.reason;
                this.presentToast(this.msg);
            }
            if (obj.statusCode == 951) {
                this.otp_send = false;
            }
        }
    }
    handleReedemGiftResponse(data) {
        this.loadingCtrl.dismiss();
        let toast = this.toastCtrl.create({
            message: '',
            duration: 1000,
            position: 'middle'
        });
        this.close_popup();
        this.presentToast(this.tran_order_success).then(() => {
            this.router.navigate(['orders']);
            this.apiService.nextGift().subscribe(data => {
                console.log('next gift', data);
                if (data['point'] !== 0) {
                    var notification_obj = { "heading": "SMARTWIREMEN", "message": "You need " + data['point'] + " points to get " + data['gift_name'], "url": "", "user_id": this.user_id };
                }
                else {
                    var notification_obj = { "heading": "SMARTWIREMEN", "message": "Your next gift would be " + data['gift_name'], "url": "", "user_id": this.user_id };
                }
                // var notification_obj={"heading":"SMARTWIREMEN","message":"You need "+data['point']+" points to get "+data['gift_name'],"url":"","user_id":this.user_id}
                this.apiService.sendNotification(notification_obj).subscribe(data => {
                    console.log(data);
                }, error => {
                    console.log(error);
                });
            }, error => {
                console.log('err', error);
            });
        });
    }
    handleResponse(data) {
        this.loadingCtrl.dismiss();
        if (data.success == true) {
            let obj = data.otp_response;
            if (obj.statusCode == 900 || obj.statusCode == 952 || obj.statusCode == 957) {
                this.msg = this.tran_otp_send;
                this.otp_send = true;
            }
            else {
                this.msg = this.tran_went_wrong;
            }
            if (obj.statusCode == 951) {
                this.otp_send = false;
            }
            this.presentToast(this.msg);
        }
    }
    handleError(error, redirect = false) {
        console.log(error);
        this.loadingCtrl.dismiss();
        let errorMsg = '';
        if (error.status == 401) {
            errorMsg = error.error.message;
        }
        else {
            errorMsg = error.error.error;
        }
        let toast = this.toastCtrl.create({
            message: '',
            duration: 3000,
            position: 'middle'
        });
        if (errorMsg != '') {
            this.presentToast(errorMsg);
        }
        if (redirect == true) {
            this.close_popup();
        }
    }
    close_popup() {
        this.modalCtrl.dismiss();
    }
    startTimer() {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    }
    pauseTimer() {
        this.timer.runTimer = false;
    }
    resumeTimer() {
        this.startTimer();
    }
    timerTick() {
        setTimeout(() => {
            if (!this.timer.runTimer) {
                return;
            }
            this.timer.secondsRemaining--;
            this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
            if (this.timer.secondsRemaining > 0) {
                this.timerTick();
            }
            else {
                this.timer.hasFinished = true;
                this.otp_send = false;
            }
        }, 1000);
    }
    getSecondsAsDigitalClock(inputSeconds) {
        const secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        const hours = Math.floor(secNum / 3600);
        const minutes = Math.floor((secNum - (hours * 3600)) / 60);
        const seconds = secNum - (hours * 3600) - (minutes * 60);
        let hoursString = '';
        let minutesString = '';
        let secondsString = '';
        hoursString = (hours < 10) ? '0' + hours : hours.toString();
        minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
        secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
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
                duration: 1000,
                position: 'middle'
            });
            toast.present();
        });
    }
    isInArray(gift_ref_code, array_to_search) {
        var length = array_to_search.length;
        for (var i = 0; i < length; i++) {
            if (array_to_search[i] == gift_ref_code)
                return true;
        }
        return false;
    }
};
OrderConfirmationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
OrderConfirmationPage.propDecorators = {
    gift_code_array: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
OrderConfirmationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-confirmation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-confirmation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-confirmation/order-confirmation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-confirmation.page.scss */ "./src/app/order-confirmation/order-confirmation.page.scss")).default]
    })
], OrderConfirmationPage);



/***/ })

}]);
//# sourceMappingURL=default~order-confirmation-order-confirmation-module~redeem-redeem-module-es2015.js.map