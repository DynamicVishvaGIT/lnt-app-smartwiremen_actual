(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verification-verification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/custom-otp-input/custom-otp-input.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custom-otp-input/custom-otp-input.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"otp-container\">\n  <input\n    *ngFor=\"let otpDigit of otpArray; let i = index\"\n    type=\"text\"\n    maxlength=\"1\"\n    [value]=\"otpArray[i]\"\n    (input)=\"onInput($event, i)\"\n    (keydown)=\"onKeydown($event, i)\"\n    (paste)=\"onPaste($event)\"\n    (focus)=\"onInputFocus($event.target)\"\n  />\n</div>\n<!-- [(ngModel)]=\"otpArray[i]\" -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n</ion-header>\n<ion-content>\n  <div style=\"margin-top: 10%;text-align:center;\">\n    <p style=\"color:black;font-size: large;font-weight: 800;\">OTP</p>\n  </div>\n  <div style=\"margin-top:15%;text-align:start;margin-left: 15px;\">\n    <p style=\"color:black;font-size: large;font-weight: 800;\">Verify with OTP</p>\n    <p style=\"color:black\">OTP sent to your mobile no.  +91 {{mobile_no}}</p>\n  </div>\n  <div class=\"ion-text-center\">\n    <a >Change</a>\n  </div>\n  <div style=\"margin-top:10%;margin-left: -153px;\">\n    <app-custom-otp-input [length]=\"4\" (otpChange)=\"handleOtpChange($event)\" #otpInput></app-custom-otp-input>\n    <!-- <ng-otp-input #ngOtpInput\n    [config]=\"{\n      allowNumbersOnly: true,\n      length: 5,\n      isPasswordInput: false,\n      disableAutoFocus: false,\n      placeholder:'',\n      inputStyles: {\n      'color':'#ffff',\n      'text-align':'center',\n      'background': '#071947',\n      'width': '50px',\n      'height': '50px',\n      'border-radius':'8px'\n      }\n    }\"> \n    </ng-otp-input> -->\n    <p class=\"resend_otp\"><span style=\"color:#0000;font-size: smaller;\">Resend OTP in 30s</span></p>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\" style=\"padding: 10px;background: #ffff;\">\n  <ion-toolbar position=\"bottom\">\n    <ion-button color=\"primary\" class=\"login-btn\" (click)=\"verifyOTP()\">Verify</ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Mobile Number Verification</ion-title>\n    <ion-buttons slot=\"end\"><ion-button  (click)=\"doLogout()\" class=\"logoutbtn\"><ion-icon name=\"md-log-out\"></ion-icon></ion-button></ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n      <h4>{{ mobile_no }}</h4>\n      <h6>{{ 'mobile_no_verification' | translate }}</h6>\n    </ion-col>\n  </ion-row>\n\n  <form (ngSubmit)=\"submitOTPForm()\" *ngIf=\"otp_send\">\n   \n      <ion-input  type=\"number\" placeholder=\"{{ 'enter_otp' | translate }}\" class=\"otp-input\" [(ngModel)]=\"inputCode\" name=\"inputCode\"></ion-input>\n  \n    <ion-button class=\"btn-create\" style=\"--color: #ffffff;\"  expand=\"block\" type=\"submit\">{{ 'verify' | translate }}</ion-button>\n</form>\n\n<ion-card *ngIf=\"timer && otp_send\" class=\"card_timer no-padding\">\n  <ion-card-content class=\"no-padding\">\n    <ion-button  *ngIf=\"timeInSeconds && timeInSeconds > 0\" size=\"large\" expand=\"block\" fill=\"clear\" class=\"timer-button x-large\">{{ 'time_left' | translate }} : {{timer.displayTime}}</ion-button>\n  </ion-card-content>\n</ion-card>\n<ion-button  *ngIf=\"!otp_send\" class=\"btn-create\"   expand=\"block\" (click)=\"sendOTP()\" color=\"secondary\">{{ 'send_otp' | translate }}</ion-button>\n</ion-content> -->\n");

/***/ }),

/***/ "./src/app/custom-otp-input/custom-otp-input.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/custom-otp-input/custom-otp-input.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".otp-container {\n  display: flex;\n  justify-content: space-between;\n  max-width: 132px;\n  margin: 0 auto;\n}\n\n.otp-container input {\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  font-size: 18px;\n  margin: 0 5px;\n  border-radius: 10px;\n  border: none;\n  background-color: #d8e6ef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLW90cC1pbnB1dC9jdXN0b20tb3RwLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tLW90cC1pbnB1dC9jdXN0b20tb3RwLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm90cC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC8vIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMzJweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBcbiAgLm90cC1jb250YWluZXIgaW5wdXQge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZTZlZjs7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/custom-otp-input/custom-otp-input.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/custom-otp-input/custom-otp-input.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomOtpInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomOtpInputComponent", function() { return CustomOtpInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CustomOtpInputComponent = class CustomOtpInputComponent {
    constructor() {
        this.length = 4;
        this.otpChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.otpArray = [];
    }
    ngOnInit() {
        this.otpArray = Array(this.length).fill('');
    }
    onInput(event, index) {
        const input = event.target;
        const value = input.value.slice(0, 1);
        // console.log(`Input event at index ${index}: ${value}`);
        // this.otpArray[index] = value;
        // input.value = value; // Ensure the input field value is updated correctly
        // if (value && index < this.length - 1) {
        //   this.focusNextInput(index);
        // }
        if (value && index == 0) {
            // this.otpArray[index] = '';
            // input.value = ''; // Clear the current input field
            this.otpArray[index] = value;
            input.value = this.otpArray[index];
            this.otpArray[index + 1] = '';
            input.value = this.otpArray[index + 1];
            this.focusNextInput(index - 1);
        }
        else if (index > 0) {
            if (value && index < this.length - 1) {
                this.otpArray[index] = value;
                input.value = this.otpArray[index];
                this.otpArray[index + 1] = '';
                input.value = this.otpArray[index + 1];
                this.focusNextInput(index);
            }
            else if (value && index == this.length - 1) {
                this.otpArray[index] = value;
                input.value = this.otpArray[index];
                // this.otpArray[index + 1] = '';
                // input.value = this.otpArray[index+1];
                // this.focusNextInput(index);
            }
        }
        this.emitOtpChange();
    }
    // onInput(event: Event, index: number): void {
    //   console.log(index);
    //     const input = event.target as HTMLInputElement;
    //     console.log(input.value);
    //     const value = input.value;
    //     if (input.value.length > 1) {
    //       input.value = input.value.slice(0, 1);
    //     }
    //     console.log(this.length)
    //     if (index < this.length - 1 && value) {
    //       this.focusNextInput(index);
    //     }
    //     else if (index <= this.length && !value){
    //       this.focusPreviousInput(index+1);
    //     }
    //     this.emitOtpChange();
    // }
    onKeydown(event, index) {
        // console.log(index);
        // console.log(this.otpArray[index]);
        // console.log(index);
        // console.log(this.otpArray[index]);
        if (event.key === 'Backspace') {
            event.preventDefault();
            const input = event.target;
            if (input.value) {
                this.otpArray[index] = '';
                input.value = ''; // Clear the current input field
                this.focusPreviousInput(index + 1);
            }
            else if (index > 0) {
                this.focusPreviousInput(index);
                this.otpArray[index - 1] = '';
                const previousInput = document.querySelectorAll('input')[index - 1];
                if (previousInput) {
                    previousInput.value = ''; // Clear the previous input field
                    setTimeout(() => {
                        previousInput.focus();
                        previousInput.select(); // Select the previous input field after a brief delay
                    }, 0);
                }
            }
            this.emitOtpChange();
        }
    }
    // onKeydown(event: KeyboardEvent, index: number): void {
    //   if (event.key === 'Backspace') {
    //     if (index==this.length-1) {alert('1');
    //       const input = event.target as HTMLInputElement;
    //       input.value = '';
    //       this.focusPreviousInput(index);
    //     } 
    //     else if (index > 0) {
    //       this.otpArray[index - 1] = '';
    //       this.focusPreviousInput(index - 1);
    //     }
    //     this.emitOtpChange();
    //   }
    //   if (event.key === 'Backspace' && !this.otpArray[index] && index > 0) {
    //     this.otpArray[index - 1] = '';
    //     this.focusPreviousInput(index);
    //     this.emitOtpChange();
    //   }
    // }
    onPaste(event) {
        var _a;
        event.preventDefault();
        const pastedData = ((_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.getData('text')) || '';
        const otpValues = pastedData.split('').slice(0, this.length);
        this.otpArray = otpValues.concat(Array(this.length - otpValues.length).fill(''));
        this.emitOtpChange();
    }
    focusNextInput(index) {
        const nextInput = document.querySelectorAll('input')[index + 1];
        if (nextInput) {
            nextInput.focus();
            setTimeout(() => {
                nextInput.select(); // Select the previous input field after a brief delay
            }, 0);
        }
    }
    focusPreviousInput(index) {
        // console.log(index);
        const previousInput = document.querySelectorAll('input')[index - 1];
        if (previousInput) {
            previousInput.focus();
            setTimeout(() => {
                previousInput.select(); // Select the previous input field after a brief delay
            }, 0);
        }
    }
    onInputFocus(target) {
        if (target instanceof HTMLInputElement) {
            setTimeout(() => {
                target.select(); // Select the focused input field after a brief delay
            }, 0);
        }
    }
    emitOtpChange() {
        console.log('Current OTP Array:', this.otpArray);
        // this.otpChange.emit(this.otpArray.join(''));
    }
};
CustomOtpInputComponent.ctorParameters = () => [];
CustomOtpInputComponent.propDecorators = {
    length: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    otpChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
CustomOtpInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom-otp-input',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./custom-otp-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/custom-otp-input/custom-otp-input.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./custom-otp-input.component.scss */ "./src/app/custom-otp-input/custom-otp-input.component.scss")).default]
    })
], CustomOtpInputComponent);



/***/ }),

/***/ "./src/app/share/share.module.ts":
/*!***************************************!*\
  !*** ./src/app/share/share.module.ts ***!
  \***************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _custom_otp_input_custom_otp_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-otp-input/custom-otp-input.component */ "./src/app/custom-otp-input/custom-otp-input.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let ShareModule = class ShareModule {
};
ShareModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _custom_otp_input_custom_otp_input_component__WEBPACK_IMPORTED_MODULE_3__["CustomOtpInputComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]
        ],
        exports: [
            _custom_otp_input_custom_otp_input_component__WEBPACK_IMPORTED_MODULE_3__["CustomOtpInputComponent"]
        ]
    })
], ShareModule);



/***/ }),

/***/ "./src/app/verification/verification-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/verification/verification-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VerificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageRoutingModule", function() { return VerificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verification.page */ "./src/app/verification/verification.page.ts");




const routes = [
    {
        path: '',
        component: _verification_page__WEBPACK_IMPORTED_MODULE_3__["VerificationPage"]
    }
];
let VerificationPageRoutingModule = class VerificationPageRoutingModule {
};
VerificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerificationPageRoutingModule);



/***/ }),

/***/ "./src/app/verification/verification.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/verification/verification.module.ts ***!
  \*****************************************************/
/*! exports provided: VerificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function() { return VerificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _verification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verification-routing.module */ "./src/app/verification/verification-routing.module.ts");
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verification.page */ "./src/app/verification/verification.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");









let VerificationPageModule = class VerificationPageModule {
};
VerificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verification_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerificationPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"]
            // NgOtpInputModule
        ],
        declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_6__["VerificationPage"]]
    })
], VerificationPageModule);



/***/ }),

/***/ "./src/app/verification/verification.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/verification/verification.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #ffff;\n}\n\n.new-background-color {\n  --background: var(--ion-color-primary);\n}\n\n.otp-submit-button {\n  margin-left: 37%;\n  margin-top: 22px;\n}\n\n#header-icons {\n  text-align: right;\n}\n\n#header-icons ion-icon {\n  color: #50537a;\n  font-size: 1.5rem;\n}\n\n.header {\n  color: #50537a;\n  font-size: medium;\n  font-family: \"Alef\";\n  margin-top: 2px;\n}\n\n.image-round {\n  background-color: #CECECE;\n  border: 2px solid #FAFAFA;\n  border-radius: 50%;\n  display: block;\n  height: 120px;\n  margin: 0 auto;\n  width: 120px;\n}\n\n.resend_otp {\n  text-align: right;\n  margin-top: 15px;\n  margin-right: 59px;\n}\n\n.login-btn {\n  width: 100%;\n  --border-radius: 9px;\n  margin-left: 0px;\n  font-family: \"Poppins-Regular\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDSSxtQkFBQTtBQVZKOztBQWFBO0VBQ0ksc0NBQUE7QUFWSjs7QUFZQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFUSjs7QUFZQTtFQUNJLGlCQUFBO0FBVEo7O0FBVUk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFSUjs7QUFXQTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVRKOztBQWFBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBNUNTO0VBNkNULGNBQUE7RUFDQSxZQTlDUztBQW9DYjs7QUFhQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVZKOztBQWFBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQVZKIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaW1hZ2Utc2l6ZTogMTIwcHg7XG5cbi8vIGlvbi1jb250ZW50IHtcbi8vICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MTk0Nztcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vIH1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmY7XG4gIH1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLm90cC1zdWJtaXQtYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMzclO1xuICAgIG1hcmdpbi10b3A6IDIycHg7XG59XG5cbiNoZWFkZXItaWNvbnN7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgaW9uLWljb257XG4gICAgICAgIGNvbG9yOiM1MDUzN2E7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgfVxuLmhlYWRlciB7XG4gICAgLy8gZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6ICM1MDUzN2E7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgZm9udC1mYW1pbHk6IFwiQWxlZlwiO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAvLyBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4uaW1hZ2Utcm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRUNFQ0U7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZBRkFGQTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAkaW1hZ2Utc2l6ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogJGltYWdlLXNpemU7XG59XG5cbi5yZXNlbmRfb3RwIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNTlweDtcbn1cblxuLmxvZ2luLWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbn1cblxuXG5cblxuXG5cbi8vIC5vdHAtaW5wdXQtbWFpbiB7XG4vLyAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbi8vIH1cbi8vIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwO1xuLy8gICBib3JkZXItYm90dG9tOiBub25lO1xuLy8gfVxuLy8gLm90cC1pbnB1dCB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4vLyAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbi8vICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbi8vICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4vLyB9XG4vLyAuYnRuLWNyZWF0ZSB7XG4vLyAgIC0tYm94LXNoYWRvdzogbm9uZTtcbi8vICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuLy8gICAtLXBhZGRpbmctYm90dG9tOiAyNXB4O1xuLy8gICAtLXBhZGRpbmctdG9wOiAyNXB4O1xuLy8gICAtLXBhZGRpbmctbGVmdDogMjVweDtcbi8vICAgLS1wYWRkaW5nLXJpZ2h0OiAyNXB4O1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cbi8vIC5jYXJkX3RpbWVyIHtcbi8vICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuLy8gICBib3gtc2hhZG93OiBub25lO1xuLy8gfVxuLy8gLm5vLXBhZGRpbmcge1xuLy8gICBwYWRkaW5nOiAwcHg7XG4vLyB9XG4vLyAuY2FyZF90aW1lciAuYnV0dG9uLWlubmVyIHtcbi8vICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4vLyB9XG4vLyAubG9nb3V0YnRuIHtcbi8vICAgZm9udC1zaXplOiAyNXB4O1xuLy8gfVxuXG4vLyBpb24taWNvbixcbi8vIGlvbi10aXRsZSB7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vIH1cbi8vIGlvbi1pdGVtIHtcbi8vICAgLS1wYWRkaW5nLXJpZ2h0OiAwO1xuLy8gICAtLWJvcmRlci1ib3R0b206IG5vbmU7XG4vLyB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/verification/verification.page.ts":
/*!***************************************************!*\
  !*** ./src/app/verification/verification.page.ts ***!
  \***************************************************/
/*! exports provided: VerificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPage", function() { return VerificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/token-service/token.service */ "./src/app/providers/token-service/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/events-service/events.service */ "./src/app/providers/events-service/events.service.ts");








let VerificationPage = class VerificationPage {
    constructor(toastCtrl, loadingCtrl, apiService, tokenService, translate, menuCtrl, route, router, eventService) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.tokenService = tokenService;
        this.translate = translate;
        this.menuCtrl = menuCtrl;
        this.route = route;
        this.router = router;
        this.eventService = eventService;
        this.error = null;
        this.loading = {};
        this.inputCode = null;
        this.msg = null;
        this.timeInSeconds = 10;
        this.otp_send = false;
        this.tran_please_wait = 'Please Wait';
        this.tran_required_otp = 'Enter OTP';
        this.tran_went_wrong = 'Something went wrong, please try again later.';
        this.tran_otp_send = 'OTP Sent Successfully';
        this.menuCtrl.enable(false);
        this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
        this.translate.get('enter_otp').subscribe(res => { this.tran_required_otp = res; });
        this.translate.get('went_wrong').subscribe(res => { this.tran_went_wrong = res; });
        this.translate.get('otp_send').subscribe(res => { this.tran_otp_send = res; });
    }
    ngOnInit() {
        this.mobile_no = this.route.snapshot.paramMap.get('mobile_no');
        this.sendOTP();
    }
    // ionViewWillEnter(){
    //   this.mobile_no=this.route.snapshot.paramMap.get('mobile_no');
    // }
    doLogout() {
        this.tokenService.remove();
        this.router.navigate(['login']);
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
    //  submitOTPForm(){
    //    this.msg = null;
    //    if (this.inputCode == '' || this.inputCode == null) {
    //      this.presentToast(this.tran_required_otp,1000)
    //    }else{
    //      this.verifyOTP(this.inputCode);
    //    }
    //  }
    verifyOTP() {
        const enteredOtp = this.otpInput.otpArray.join('');
        console.log('Verifying OTP:', enteredOtp);
        const loading = this.presentLoading();
        this.apiService.verify_otp(enteredOtp).subscribe(data => this.verifyOTPHandleResponse(data), error => this.handleError(error));
    }
    sendOTP() {
        const loading = this.presentLoading();
        this.apiService.send_otp().subscribe(data => this.handleResponse(data), error => this.handleError(error));
    }
    verifyOTPHandleResponse(data) {
        console.log('3');
        this.loadingCtrl.dismiss();
        if (data.success == true) {
            console.log(data);
            let obj = data.otp_response;
            if (obj.statusCode == 900 || obj.statusCode == 952 || obj.statusCode == 957) {
                this.msg = obj.reason;
                // if(this.userstatus=='1'){
                //  this.navCtrl.setRoot(TabsPage)
                // this.eventService.getEvent().subscribe(user => {
                //   // Publish the user details
                //   this.eventService.publish(user);
                // });
                this.router.navigate(['home']);
                this.inputCode = '';
                //   }
                //   else{
                //    this.navCtrl.setRoot(MaintenancePage)
                // }
            }
            else {
                this.msg = obj.reason;
            }
            if (obj.statusCode == 951) {
                this.otp_send = false;
            }
            this.presentToast(this.msg, 3000);
        }
    }
    handleResponse(data) {
        console.log('1');
        this.loadingCtrl.dismiss();
        if (data.success == true) {
            let obj = data.otp_response;
            if (obj.statusCode == 900 || obj.statusCode == 952 || obj.statusCode == 957) {
                this.msg = this.tran_otp_send;
                this.otp_send = true;
            }
            else {
                this.msg = this.tran_went_wrong;
                this.otp_send = false;
            }
            this.presentToast(this.msg, 3000);
        }
        /*this.initTimer();
        this.startTimer();*/
    }
    handleError(error) {
        console.log(error);
        console.log('2');
        this.loadingCtrl.dismiss();
        let errorMsg = '';
        if (error.status == 401) {
            errorMsg = error.error.message;
        }
        else {
            errorMsg = error.error.error;
        }
        if (errorMsg != '') {
            this.presentToast(errorMsg, 3000);
        }
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
    presentToast(message, duration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: duration,
                position: 'middle'
            });
            toast.present();
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
    ionViewDidLeave() {
        this.otp_send = false;
    }
    handleOtpChange(otp) {
        console.log('OTP:', otp);
    }
};
VerificationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"] }
];
VerificationPage.propDecorators = {
    otpInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['otpInput',] }]
};
VerificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./verification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./verification.page.scss */ "./src/app/verification/verification.page.scss")).default]
    })
], VerificationPage);



/***/ })

}]);
//# sourceMappingURL=verification-verification-module-es2015.js.map