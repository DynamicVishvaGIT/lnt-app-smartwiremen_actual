(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["redeem-redeem-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/redeem/redeem.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/redeem/redeem.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t\t<ion-refresher-content></ion-refresher-content>\n  \t</ion-refresher>\n    <div class=\"ion-padding-top ion-padding-horizontal\">\n      \t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"2\" style=\"text-align: start;margin-left: -26px;\">\n\t\t\t\t\t<ion-menu-button></ion-menu-button>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"8\" style=\"text-align: center;\">\n\t\t\t\t\t<strong class=\"header\" style=\"color:#131313;\">{{ 'gift_redeem' | translate }}</strong>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n      \t</ion-grid>\n    </div>\n\t<ion-searchbar class=\"custom\" name=\"search\" [(ngModel)]=\"terms\" placeholder=\"{{ 'search_gifts' | translate }}\" mode=\"ios\"></ion-searchbar>\n\t<div class=\"gift-card-gap\" *ngIf=\"items && restricted_array && gift_code_array\">  <!--ion-padding-horizontal-->\n\t\t<ion-card class=\"ion-margin-bottom gift-card border-left-color\" mode=\"ios\" *ngFor=\"let gift of items | search : terms; let i = index;\" >\n\t\t  \t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"3\" class=\"border-right\">\n\t\t\t\t\t\t<div [ngClass]=\"(gift.gift_name.charAt(0) === 'G' || gift.gift_name.charAt(0) === 'g')?'img-container':''\">\n\t\t\t\t\t\t\t<img src=\"../../assets/imgs/no-image.png\" *ngIf=\"!gift?.gift_image\" alt=\"\" [ngClass]=\"(gift.gift_name.charAt(0) === 'G' || gift.gift_name.charAt(0) === 'g')?'img-googlepay-card':'img-gift-card'\">     \n\t\t\t\t\t\t\t<img src=\"https://smartwiremen.com/storage/gift_images/{{ gift?.gift_image }}\" *ngIf=\"gift?.gift_image\" alt=\"\" [ngClass]=\"(gift.gift_name.charAt(0) === 'G' || gift.gift_name.charAt(0) === 'g')?'img-googlepay-card':'img-gift-card'\">\n\t\t\t\t\t\t</div> \n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"9\">\n\t\t\t\t\t\t<ion-grid style=\"margin-top: -11px;margin-left: -8px;\">\n\t\t\t\t\t\t\t<ion-row class=\"text-header-align\">\n\t\t\t\t\t\t\t\t<ion-col size=\"9\" class=\"ion-text-wrap\" style=\"text-align:start;\">\n\t\t\t\t\t\t\t\t\t<span style=\"font-size: small;\">{{ 'product_name' | translate }}</span>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<ion-row class=\"text-body-align\" style=\"margin-top: -8px;\">\n\t\t\t\t\t\t\t\t<ion-col size=\"9\" class=\"ion-text-wrap\" style=\"text-align:start;\">\n\t\t\t\t\t\t\t\t\t<span style=\"font-size: 14px;color:black;font-weight: 500;\">{{ gift?.gift_name }}</span>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<ion-row class=\"text-header-align\">\n\t\t\t\t\t\t\t\t<ion-col size=\"6\" style=\"text-align:start;\">\n\t\t\t\t\t\t\t\t\t<span style=\"font-size: small;\">{{ 'point' | translate }}</span>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size=\"6\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t<span style=\"margin-left: -63px;font-size: small;\"> {{ 'qty' | translate }}</span>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<ion-row class=\"text-body-align\" style=\"margin-top: -8px;\">\n\t\t\t\t\t\t\t\t<ion-col size=\"6\" style=\"text-align: start;\">\n\t\t\t\t\t\t\t\t\t<span style=\"font-size: 14px;color:black;font-weight: 500;\">{{ gift?.points }}</span>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size=\"6\" style=\"text-align: center;\" *ngIf=\"isInArray(gift?.gift_ref_code, gift_code_array);\">\n\t\t\t\t\t\t\t\t\t<div style=\"margin-left: -34px;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"counter\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"down\"><ion-icon name=\"remove-circle\" disabled></ion-icon></span>   <!--(click)=\"counter('-',rindex, sponsorship)\"-->\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" readonly [(ngModel)]=\"gift_quantity\" name=\"qty_{{i}}\" [value]=\"gift_quantity\" class=\"input-focused\">  <!--value=\"{{sponsorship.quantity}}\" [(ngModel)]=\"sponsorship.quantity\"-->\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"up\"><ion-icon name=\"add-circle\" disabled></ion-icon></span>  <!--(click)=\"counter('+', rindex, sponsorship)\"-->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size=\"6\" style=\"text-align: center;\" *ngIf=\"!isInArray(gift?.gift_ref_code, gift_code_array);\">\n\t\t\t\t\t\t\t\t\t<div style=\"margin-left: -34px;\">  <!--style=\"margin-left: -23px;\"-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"counter\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"down\" (click)=\"decrementQty(gift)\"><ion-icon name=\"remove-circle\"></ion-icon></span>   <!--(click)=\"counter('-',rindex, sponsorship)\"-->\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" readonly [(ngModel)]=\"gift.qty\" name=\"qty_{{i}}\" [value]=\"gift.qty\" class=\"input-focused\">  <!--value=\"{{sponsorship.quantity}}\" [(ngModel)]=\"sponsorship.quantity\"-->\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"up\" (click)=\"incrementQty(gift)\"><ion-icon name=\"add-circle\"></ion-icon></span>  <!--(click)=\"counter('+', rindex, sponsorship)\"-->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<ion-row class=\"text-header-align\" style=\"margin-top: -13px;\">\n\t\t\t\t\t\t\t\t<ion-col size=\"6\" style=\"text-align:start;\">\n\t\t\t\t\t\t\t\t\t<span style=\"font-size: small;\">{{ 'total' | translate }}</span>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col style=\"margin-top:10px\" size=\"6\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<ion-row class=\"text-body-align\" style=\"margin-top: -8px;\">\n\t\t\t\t\t\t\t\t<ion-col size=\"6\" style=\"text-align: start;\" *ngIf=\"isInArray(gift?.gift_ref_code, gift_code_array);\">\n\t\t\t\t\t\t\t\t\t<span style=\"font-size: 14px;color:black;font-weight: 500;\">{{gift.points}}</span>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size=\"6\" style=\"text-align: start;\" *ngIf=\"!isInArray(gift?.gift_ref_code, gift_code_array);\">\n\t\t\t\t\t\t\t\t\t<span style=\"font-size: 14px;color:black;font-weight: 500;\">{{ (gift.qty ? gift.qty : 0) * gift.points}}</span>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size=\"6\" style=\"margin-top: -13px;\">  <!--text-align: center;-->\n\t\t\t\t\t\t\t\t\t<ion-button style=\"width: 76px; --color: white;\" color=\"primary\" size=\"small\" (click)=\"orderGift(gift)\">\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"cart-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t{{ 'buy' | translate }}\n\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-card>\n\t</div>\n</ion-content>\n<ion-bottom-sheet [(state)]=\"sheetState\" [(dockedHeight)]=\"dockedHeight\"[title]=\"title\">\n  \t<div *ngIf=\"upi\">\n\t\t<ion-row>\n\t\t\t<ion-label class=\"ion-label\">UPI ID</ion-label>\n\t\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom ion-item\" style=\"margin-top: 8px;\"> <!--class=\"item-input-redeem\"-->\n\t\t\t\t<ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n\t\t\t\t<ion-input  type=\"text\" [(ngModel)]=\"profileFormField.upi_id\" name=\"upi_id\" placeholder=\"{{ 'upi_id' | translate }} e.g 1234567890@sbi\" class=\"ion-input\"></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-row> \n\t\t<ion-button  class=\"update-btn\" (click)=\"submitUPI()\">Submit</ion-button>\n  \t</div>\n  \t<div *ngIf=\"bank\">\n\t\t<ion-row>\n\t\t\t<ion-label class=\"ion-label\">Account Holder Name</ion-label>\n\t\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom ion-item\" style=\"margin-top: 8px;\">\n\t\t  \t\t<!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n\t\t  \t\t<ion-input type=\"text\" [(ngModel)]=\"profileFormField.account_holder_name\"  name=\"account_holder_name\" placeholder=\"{{ 'account_holder_name' | translate }}\" class=\"ion-input\"></ion-input>\n\t\t\t</ion-item>\n\t  \t</ion-row>\n\t  \t<ion-row>\n\t\t\t<ion-label class=\"ion-label\">Bank Name</ion-label>\n\t\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom ion-item\" style=\"margin-top: 8px;\">\n\t\t  \t\t<!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n\t\t  \t\t<ion-input type=\"text\" [(ngModel)]=\"profileFormField.bank_name\"  name=\"bank_name\" placeholder=\"{{ 'bank_name' | translate }}\" class=\"ion-input\"></ion-input>\n\t\t\t</ion-item>\n\t  \t</ion-row>\n\t  \t<ion-row>\n\t\t\t<ion-label class=\"ion-label\">Branch Name</ion-label>\n\t\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom ion-item\" style=\"margin-top: 8px;\">\n\t\t  \t\t<!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n\t\t  \t\t<ion-input type=\"text\" [(ngModel)]=\"profileFormField.branch_name\"  name=\"branch_name\" placeholder=\"{{ 'branch_name' | translate }}\" class=\"ion-input\"></ion-input>\n\t\t\t</ion-item>\n\t  \t</ion-row>\n\t  \t<ion-row>\n\t\t\t<ion-label class=\"ion-label\">Account Number</ion-label>\n\t\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom ion-item\" style=\"margin-top: 8px;\">\n\t\t  \t\t<!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n\t\t  \t\t<ion-input type=\"text\" [(ngModel)]=\"profileFormField.account_number\"  name=\"account_number\" placeholder=\"{{ 'account_number' | translate }}\" class=\"ion-input\"></ion-input>\n\t\t\t</ion-item>\n\t  \t</ion-row>\n\t  \t<ion-row>\n\t\t\t<ion-label class=\"ion-label\">IFSC Code</ion-label>\n\t\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom ion-item\" style=\"margin-top: 8px;\">\n\t\t  \t\t<!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n\t\t  \t\t<ion-input type=\"text\" [(ngModel)]=\"profileFormField.ifsc_code\"  name=\"ifsc_code\" placeholder=\"{{ 'ifsc_code' | translate }} e.g SBIN0123456\" class=\"ion-input\"></ion-input>\n\t\t\t</ion-item>\n\t  \t</ion-row>\n\t  \t<ion-button  class=\"btn-create\" (click)=\"submitBankDetails()\">Submit</ion-button>\n\t</div>\n</ion-bottom-sheet>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>{{ 'gift_redeem' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"redeem-page ion-no-padding\" >\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t    <ion-refresher-content>\n\t    </ion-refresher-content>\n  \t</ion-refresher>\n\t<ion-searchbar name=\"search\" [(ngModel)]=\"terms\" placeholder=\"{{ 'search_gifts' | translate }}\"></ion-searchbar>\n\t\n\t<div class=\"list-header ion-no-padding ion-no-margin\">\n\t<ion-row style=\"width: 100%;\">\n\t<ion-col size=\"4\" >{{ 'product_name' | translate }}</ion-col>\n\t\n\t<ion-col size=\"3\" >{{ 'qty' | translate }}</ion-col>\n\t<ion-col size=\"3\" class=\"ion-text-center\">{{ 'total' | translate }}</ion-col>\n\t<ion-col size=\"2\" class=\"ion-text-center\">{{ 'buy' | translate }}</ion-col>\n\t</ion-row>\n\t</div>\n\t<div *ngIf=\"items && restricted_array && gift_code_array\" class=\"list-content ion-no-padding\">\n\t\t<ion-item class=\"ion-no-padding\" *ngFor=\"let gift of items | search : terms; let i = index;\">\n\t\t\t<ion-row style=\"width: 100%;\">\n\t\t\t\t<ion-col size=\"4\" class=\"product_name\"> \n\t\t\t\t\t{{ gift?.gift_name }} <br/> {{ 'point' | translate }} : {{ gift?.points }}\n\t\t\t\t<ion-img  src=\"../../assets/imgs/no-image.png\" width=\"100\" *ngIf=\"!gift?.gift_image\"></ion-img>\n\t\t\t\t<ion-img src=\"https://smartwiremen.com/storage/gift_images/{{ gift?.gift_image }}\" width=\"100\" *ngIf=\"gift?.gift_image\"></ion-img>\n\t\t\t\t</ion-col>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\n\t\t\t\t<ion-col style=\"margin-top: 8px;\" *ngIf=\"isInArray(gift?.gift_ref_code, gift_code_array);\" size=\"3\" class=\"ion-no-padding\">\n\t\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"4\" style=\"padding-left: 0;\">\n\t\t\t\t\t<ion-icon disabled color=\"success\" size=\"large\" name=\"add-circle-sharp\"  class=\"ion-no-padding\"></ion-icon>\n\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t<ion-input readonly  type=\"number\" [(ngModel)]=\"gift_quantity\" name=\"qty_{{i}}\"  class=\"qty_input\"></ion-input>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t<ion-icon disabled color=\"danger\" size=\"large\" name=\"remove-circle\"  class=\"ion-no-padding\"></ion-icon>\n\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t\t\n\t\t\t\t\t\n\t    \t\t</ion-col>\n\t\t\t\t<ion-col style=\"margin-top: 8px;\" *ngIf=\"!isInArray(gift?.gift_ref_code, gift_code_array);\" size=\"3\" class=\"ion-no-padding\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"4\" style=\"padding-left: 0;\">\n\t\t\t\t\t\t<ion-icon color=\"success\" size=\"large\"  name=\"add-circle-sharp\" (click)=\"incrementQty(gift)\" class=\"ion-no-padding\"></ion-icon>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<ion-input readonly  type=\"number\" [(ngModel)]=\"gift.qty\" name=\"qty_{{i}}\"  class=\"qty_input\"></ion-input>\n\t\t\t\t\t\t\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"large\" name=\"remove-circle\" (click)=\"decrementQty(gift)\" class=\"ion-no-padding\"></ion-icon>\n\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\n\t\t\t\t\t\n\t\t\t\t\n\t    \t\t</ion-col>\n\t\t\t\t<ion-col style=\"margin-top: 16px;\" *ngIf=\"isInArray(gift?.gift_ref_code, gift_code_array);\" size=\"3\" class=\"ion-text-center\">\n\t\t\t\t\t<span class=\"ion-text-center\">{{gift.points}}</span>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col style=\"margin-top: 16px;\" *ngIf=\"!isInArray(gift?.gift_ref_code, gift_code_array);\" size=\"3\" class=\"ion-text-center\"><span style=\"margin-left: 22px;\">{{ (gift.qty ? gift.qty : 0) * gift.points}}</span></ion-col>\n\t\t\t\t<ion-col size=\"2\"><ion-button  fill=\"clear\"  size=\"large\" color=\"primary\" (click)=\"orderGift(gift)\"><ion-icon  name=\"cart\"></ion-icon></ion-button></ion-col>\n\t\t\t</ion-row>\n\t\t</ion-item>\t\n\t</div>\n</ion-content>\n<ion-bottom-sheet \n    [(state)]=\"sheetState\" \n\t[(dockedHeight)]=\"dockedHeight\"\n\t[title]=\"title\"\n  >\n  <div *ngIf=\"upi\">\n\t<ion-row>\n\t\t<ion-label class=\"form-label\">UPI ID</ion-label>\n\n\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom\" class=\"item-input-redeem\">\n\t\t  <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n\t\t  <ion-input  type=\"text\" [(ngModel)]=\"profileFormField.upi_id\" name=\"upi_id\" placeholder=\"{{ 'upi_id' | translate }} e.g 1234567890@sbi\" ></ion-input>\n\t\t</ion-item>\n\t  </ion-row> \n\t  <ion-button  class=\"update-btn\" (click)=\"submitUPI()\">Submit</ion-button>\n\n  </div>\n  <div *ngIf=\"bank\">\n\t<ion-row>\n\t\t<ion-label class=\"form-label\">Account Holder Name</ion-label>\n\n\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom\" class=\"item-input-redeem\">\n\t\t  <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"profileFormField.account_holder_name\"  name=\"account_holder_name\" placeholder=\"{{ 'account_holder_name' | translate }}\"></ion-input>\n\t\t</ion-item>\n\t  </ion-row>\n\n\t  <ion-row>\n\t\t<ion-label class=\"form-label\">Bank Name</ion-label>\n\n\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom\" class=\"item-input-redeem\">\n\t\t  <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"profileFormField.bank_name\"  name=\"bank_name\" placeholder=\"{{ 'bank_name' | translate }}\"></ion-input>\n\t\t</ion-item>\n\t  </ion-row>\n\n\t  <ion-row>\n\t\t<ion-label class=\"form-label\">Branch Name</ion-label>\n\n\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom\" class=\"item-input-redeem\">\n\t\t  <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"profileFormField.branch_name\"  name=\"branch_name\" placeholder=\"{{ 'branch_name' | translate }}\"></ion-input>\n\t\t</ion-item>\n\t  </ion-row>\n\n\t  <ion-row>\n\t\t<ion-label class=\"form-label\">Account Number</ion-label>\n\n\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom\" class=\"item-input-redeem\">\n\t\t  <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"profileFormField.account_number\"  name=\"account_number\" placeholder=\"{{ 'account_number' | translate }}\"></ion-input>\n\t\t</ion-item>\n\t  </ion-row>\n\n\t  <ion-row>\n\t\t<ion-label class=\"form-label\">IFSC Code</ion-label>\n\n\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom\" class=\"item-input-redeem\">\n\t\t  <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"profileFormField.ifsc_code\"  name=\"ifsc_code\" placeholder=\"{{ 'ifsc_code' | translate }} e.g SBIN0123456\"></ion-input>\n\t\t</ion-item>\n\t  </ion-row>\n\t  <ion-button  class=\"update-btn\" (click)=\"submitBankDetails()\">Submit</ion-button>\n  </div>\n\n</ion-bottom-sheet> -->");

/***/ }),

/***/ "./src/app/redeem/redeem-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/redeem/redeem-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RedeemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemPageRoutingModule", function() { return RedeemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _redeem_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redeem.page */ "./src/app/redeem/redeem.page.ts");




const routes = [
    {
        path: '',
        component: _redeem_page__WEBPACK_IMPORTED_MODULE_3__["RedeemPage"]
    }
];
let RedeemPageRoutingModule = class RedeemPageRoutingModule {
};
RedeemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RedeemPageRoutingModule);



/***/ }),

/***/ "./src/app/redeem/redeem.module.ts":
/*!*****************************************!*\
  !*** ./src/app/redeem/redeem.module.ts ***!
  \*****************************************/
/*! exports provided: RedeemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemPageModule", function() { return RedeemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _redeem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redeem-routing.module */ "./src/app/redeem/redeem-routing.module.ts");
/* harmony import */ var _redeem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redeem.page */ "./src/app/redeem/redeem.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _pipes_search_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/search-pipe.module */ "./src/app/pipes/search-pipe.module.ts");
/* harmony import */ var ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ion-bottom-sheet */ "./node_modules/ion-bottom-sheet/__ivy_ngcc__/dist/index.js");










let RedeemPageModule = class RedeemPageModule {
};
RedeemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _redeem_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedeemPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _pipes_search_pipe_module__WEBPACK_IMPORTED_MODULE_8__["SearchPipeModule"],
            ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["IonBottomSheetModule"]
        ],
        declarations: [_redeem_page__WEBPACK_IMPORTED_MODULE_6__["RedeemPage"],]
    })
], RedeemPageModule);



/***/ }),

/***/ "./src/app/redeem/redeem.page.scss":
/*!*****************************************!*\
  !*** ./src/app/redeem/redeem.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none;\n  background-color: #EFF3F6;\n}\n\n.gap {\n  margin-top: 10px;\n}\n\nion-searchbar.custom {\n  --background: #D8E7F0;\n  --color: #00000096;\n  --clear-button-color: black;\n}\n\n.gift-card-gap {\n  margin-top: -12px;\n}\n\n.gift-card {\n  height: auto;\n  border-radius: 8px;\n}\n\n.img-container {\n  width: 72px;\n  /* set the desired width */\n  height: 35px;\n  /* set the same value for height to make it square */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  /* hide overflow if the image exceeds the box */\n  border: 2px solid #3c4042;\n  /* optional: add a border */\n  border-radius: 4px;\n  margin-top: 80%;\n}\n\n.img-googlepay-card {\n  width: 43px;\n  height: 17px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.img-gift-card {\n  width: 100%;\n  height: 74px;\n  margin-top: 40%;\n}\n\n.img-avatar {\n  border-radius: 50%;\n  width: 100%;\n  height: 80%;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: -5px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.16);\n}\n\n.border-right {\n  border-right: 2px dotted #00000017;\n}\n\n.text-header-align {\n  font-size: smaller;\n  color: #00000087;\n}\n\n.text-body-align {\n  font-size: small;\n}\n\n.counter {\n  width: 150px;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.counter input {\n  width: 50px;\n  border: 0;\n  line-height: 30px;\n  font-size: 14px;\n  text-align: center;\n  background: #ffff;\n  color: black;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n  font-weight: 500;\n}\n\n.counter span {\n  display: block;\n  font-size: 15px;\n  cursor: pointer;\n  color: #3bdbdc;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.border-left-color {\n  border-left: 5px solid #2edcba;\n}\n\n.btn-create {\n  --box-shadow: none;\n  --border-radius: 10px;\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  --padding-left: 25px;\n  --padding-right: 25px;\n  width: 100%;\n  color: #fff;\n  text-transform: none;\n  width: 94%;\n  margin-top: 43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkZWVtL3JlZGVlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtBQURGOztBQU9BO0VBR0UsWUFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxXQUFBO0VBQWEsMEJBQUE7RUFDYixZQUFBO0VBQWMsb0RBQUE7RUFDZCxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQWtCLCtDQUFBO0VBQ2xCLHlCQUFBO0VBQTJCLDJCQUFBO0VBQzNCLGtCQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBRkY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFERjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSw0Q0FBQTtBQUZGOztBQUtBO0VBQ0Usa0NBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBUUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTEY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FBSkY7O0FBT0E7RUFDRSw4QkFBQTtBQUpGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUhGIiwiZmlsZSI6InNyYy9hcHAvcmVkZWVtL3JlZGVlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjNGNjtcbn1cbi5nYXB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC8vIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi8vIC5jdXN0b20tc2VhcmNoe1xuLy8gICAtLWJhY2tncm91bmQ6ICNEOEU3RjA7XG4vLyB9XG5pb24tc2VhcmNoYmFyLmN1c3RvbSB7XG4gIC0tYmFja2dyb3VuZDogI0Q4RTdGMDtcbiAgLS1jb2xvcjogIzAwMDAwMDk2O1xuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogYmxhY2s7XG4gIC8vIGhlaWdodDogNjBweDtcbn1cbi5naWZ0LWNhcmQtZ2FwIHtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIC8vIG1hcmdpbi10b3A6IDhweDtcbiAgLy8gbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIC8vIG1hcmdpbi1yaWdodDogMTlweDtcbn1cblxuLmdpZnQtY2FyZCB7XG4gIC8vYmFja2dyb3VuZDogI2ZmZmZmZjY2O1xuICAvLyBtYXJnaW4tdG9wOiAtOHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmltZy1jb250YWluZXIge1xuICB3aWR0aDogNzJweDsgLyogc2V0IHRoZSBkZXNpcmVkIHdpZHRoICovXG4gIGhlaWdodDogMzVweDsgLyogc2V0IHRoZSBzYW1lIHZhbHVlIGZvciBoZWlnaHQgdG8gbWFrZSBpdCBzcXVhcmUgKi9cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47IC8qIGhpZGUgb3ZlcmZsb3cgaWYgdGhlIGltYWdlIGV4Y2VlZHMgdGhlIGJveCAqL1xuICBib3JkZXI6IDJweCBzb2xpZCAjM2M0MDQyOyAvKiBvcHRpb25hbDogYWRkIGEgYm9yZGVyICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogODAlO1xufVxuXG4uaW1nLWdvb2dsZXBheS1jYXJkIHtcbiAgd2lkdGg6IDQzcHg7XG4gIGhlaWdodDogMTdweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uaW1nLWdpZnQtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc0cHg7XG4gIG1hcmdpbi10b3A6IDQwJTtcbiAgLy9ib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uaW1nLWF2YXRhciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6LTVweDtcbn1cblxuLmJvcmRlci1ib3R0b217XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNik7XG4gIC8vd2lkdGg6IDkwJTtcbn1cbi5ib3JkZXItcmlnaHR7XG4gIGJvcmRlci1yaWdodDogMnB4IGRvdHRlZCAjMDAwMDAwMTc7XG59XG5cbi50ZXh0LWhlYWRlci1hbGlnbiB7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgY29sb3I6ICMwMDAwMDA4NztcbiAgLy9tYXJnaW4tdG9wOiA3cHg7XG59XG5cbi50ZXh0LWJvZHktYWxpZ257XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIC8vbWFyZ2luLXRvcDogLThweDtcbiAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb3VudGVyIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvdW50ZXIgaW5wdXQge1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyOiAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmZmO1xuICBjb2xvcjogYmxhY2s7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY291bnRlciBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLy8gcGFkZGluZzogMCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjM2JkYmRjO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmJvcmRlci1sZWZ0LWNvbG9ye1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyZWRjYmE7XG59XG4uYnRuLWNyZWF0ZSB7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAtLXBhZGRpbmctdG9wOiAyNXB4O1xuICAtLXBhZGRpbmctbGVmdDogMjVweDtcbiAgLS1wYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB3aWR0aDogOTQlO1xuICBtYXJnaW4tdG9wOiA0M3B4O1xufVxuLy8gLnVwZGF0ZS1idG57XG4vLyAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4vLyAgIC0tY29sb3I6I2ZmZjtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG4vLyAuZm9ybS1sYWJlbHtcbi8vICAgbWFyZ2luLWxlZnQ6IDhweDtcbi8vICAgbWFyZ2luLXRvcDogOHB4O1xuLy8gfVxuLy8gLml0ZW0taW5wdXQtcmVkZWVte1xuLy8gICAtLWJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuLy8gICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbi8vICAgYm9yZGVyLXJhZGl1czogMjBweDtcbi8vICAgbWFyZ2luOiA4cHg7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gLnJlZGVlbS1wYWdlIGlvbi1jYXJkIHtcbi8vICAgYm94LXNoYWRvdzogMCAwIDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vIH1cbi8vIC5saXN0LWhlYWRlciB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwYTRmOGI7XG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gICBtYXJnaW46IDAgIWltcG9ydGFudDtcbi8vICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4vLyB9XG4vLyAubGlzdC1oZWFkZXIgPiBpb24tcm93ID4gaW9uLWNvbCB7XG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcbi8vIH1cbi8vIGlvbi1pdGVtOm50aC1jaGlsZCgybiArIDIpIHtcbi8vICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuLy8gfVxuLy8gLmFwcGx5LWJ0biB7XG4vLyAgIGJveC1zaGFkb3c6IG5vbmU7XG4vLyAgIHBhZGRpbmc6IDBweCAxNXB4O1xuLy8gfVxuLy8gLmxpc3QtY29udGVudCBpb24tY29sIHtcbi8vICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbi8vICAgZm9udC13ZWlnaHQ6IDQwMDtcbi8vICAgY29sb3I6ICM2NzY3Njc7XG4vLyB9XG4vLyAubGlzdC1jb250ZW50IC5sYWJlbC5sYWJlbC1tZCB7XG4vLyAgIG1hcmdpbjogNXB4IDA7XG4vLyB9XG4vLyAuYWJvdXQtcGFnZSBwIHtcbi8vICAgZm9udC13ZWlnaHQ6IDMwMDtcbi8vICAgZm9udC1zaXplOiAxM3B4O1xuLy8gICBjb2xvcjogIzc3Nztcbi8vICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4vLyB9XG4vLyAucHJvZHVjdF9uYW1lIHtcbi8vICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XG4vLyB9XG4vLyAucXR5X2lucHV0IHtcbi8vICAgd2lkdGg6IDI3cHg7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbi8vICAgaGVpZ2h0OiAyN3B4O1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjNjc2NzY3O1xuXG4vLyB9XG4vLyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4vLyAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbi8vICAgbWFyZ2luOiAwO1xuLy8gfVxuLy8gLml0ZW0taGFzLWZvY3VzIHtcbi8vICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogI2ZmZmZmZjtcbi8vIH1cbi8vIGlvbi1pbnB1dCB7XG4vLyAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNhOWE5YTk7XG4vLyAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbi8vIH1cbi8vIC5pdGVtLWlucHV0LXJlZGVlbXtcbi8vICAgLS1ib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbi8vICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyAgIG1hcmdpbjogOHB4O1xuLy8gICB3aWR0aDogMTAwJTtcbi8vIH1cbi8vIC51cGRhdGUtYnRue1xuLy8gICBtYXJnaW4tbGVmdDogOHB4O1xuLy8gICAtLWNvbG9yOiNmZmY7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBcbi8vIH1cbi8vIC5mb3JtLWxhYmVse1xuLy8gICBtYXJnaW4tbGVmdDogOHB4O1xuLy8gICBtYXJnaW4tdG9wOiA4cHg7XG4vLyB9Il19 */");

/***/ }),

/***/ "./src/app/redeem/redeem.page.ts":
/*!***************************************!*\
  !*** ./src/app/redeem/redeem.page.ts ***!
  \***************************************/
/*! exports provided: RedeemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemPage", function() { return RedeemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _order_confirmation_order_confirmation_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order-confirmation/order-confirmation.page */ "./src/app/order-confirmation/order-confirmation.page.ts");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");
/* harmony import */ var ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion-bottom-sheet */ "./node_modules/ion-bottom-sheet/__ivy_ngcc__/dist/index.js");









let RedeemPage = class RedeemPage {
    constructor(toastCtrl, apiService, loadingCtrl, translate, modalCtrl, menuCtrl) {
        this.toastCtrl = toastCtrl;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.loading = {};
        this.tran_went_wrong = 'Something went wrong, please try again later.';
        this.gifts = [];
        this.current_page = 1;
        this.last_page = 0;
        this.next_page_url = null;
        this.last_page_url = null;
        this.sheetState = ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["SheetState"].Bottom;
        this.minimumHeight = 0;
        this.dockedHeight = 400;
        this.title = 'Edit';
        // qty : number = 0;
        this.items = [];
        this.selected_gift = null;
        this.refresher = null;
        this.tran_please_wait = "Please Wait";
        this.tran_required_qty = "Please Enter Quantity";
        this.tran_order_success = "Gift Order Created Successfully";
        this.gift_code_array = [];
        this.profileFormField = {
            account_holder_name: null,
            bank_name: null,
            branch_name: null,
            account_number: null,
            ifsc_code: null,
            upi_id: null,
        };
        this.upi = false;
        this.bank = false;
        this.menuCtrl.enable(true, 'myMenu');
        this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
        this.translate.get('required_qty').subscribe(res => { this.tran_required_qty = res; });
        this.translate.get('order_success').subscribe(res => { this.tran_order_success = res; });
        // this.qty = 0;
    }
    ngOnInit() {
        console.log('inside2');
        this.presentLoading();
        this.loadGifts2();
        this.apiService.addRestriction().subscribe(data => {
            this.restricted_array = data;
            for (let i = 0; i < this.restricted_array.length; i++) {
                this.gift_code_array.push(this.restricted_array[i]['bank']);
            }
            console.log('gift', this.gift_code_array);
        }, error => this.handleError(error));
    }
    ionViewWillEnter() {
        console.log('inside');
        this.apiService.home().subscribe(data => {
            this.user_id = data['id'];
        }, error => this.handleError(error));
        this.apiService.addRestriction().subscribe(data => {
            this.restricted_array = data;
            for (let i = 0; i < this.restricted_array.length; i++) {
                this.gift_code_array.push(this.restricted_array[i]['bank']);
            }
            this.items.forEach(element => {
                for (let i = 0; i < this.gift_code_array.length; i++) {
                    if (element.gift_ref_code == this.gift_code_array[i]) {
                        this.gift_quantity = 1;
                    }
                }
            });
            console.log('gift', this.gift_code_array);
        }, error => this.handleError(error));
        this.loadParentId();
    }
    loadParentId() {
        this.apiService.parentId().subscribe(data => {
            this.parent_id = data;
            console.log('dta', data);
        }, error => console.log(error));
    }
    presentOrderConfirmationModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _order_confirmation_order_confirmation_page__WEBPACK_IMPORTED_MODULE_5__["OrderConfirmationPage"],
                cssClass: 'my-custom-class',
                componentProps: {
                    'gift': this.selected_gift,
                    'gift_code_array': this.gift_code_array
                }
            });
            return yield modal.present();
        });
    }
    doRefresh(event) {
        this.loadGifts(event);
    }
    loadGifts(event) {
        this.apiService.gifts(this.current_page).subscribe(data => {
            event.target.complete();
            this.handleResponse(data);
        }, error => {
            event.target.complete();
            this.handleError(error);
        });
    }
    loadGifts2() {
        this.apiService.gifts(this.current_page).subscribe(data => {
            this.handleResponse(data);
        }, error => {
            this.handleError(error);
        });
    }
    handleResponse(data) {
        console.log('gifttttttttttttt', data);
        data.gifts.forEach(element => {
            for (let i = 0; i < this.gift_code_array.length; i++) {
                if (element.gift_ref_code == this.gift_code_array[i]) {
                    this.gift_quantity = 1;
                }
            }
        });
        this.items = data.gifts;
        // this.refresher = null;
        this.loadingCtrl.dismiss();
    }
    handleError(error) {
        console.log(error);
        this.loadingCtrl.dismiss();
    }
    doInfinite(infiniteScroll) {
        setTimeout(() => {
            this.loadGifts2();
            infiniteScroll.target.complete();
        }, 500);
        if (this.current_page == this.last_page) {
            this.infiniteScroll.disabled;
        }
    }
    incrementQty(item) {
        if (isNaN(item.qty)) {
            item.qty = 1;
        }
        else {
            item.qty += 1;
        }
    }
    decrementQty(item) {
        if (item.qty - 1 < 0) {
            item.qty = 0;
        }
        else {
            item.qty -= 1;
        }
    }
    orderGift(gift) {
        console.log(this.restricted_array);
        if (this.parent_id) {
            this.selected_gift = gift;
            console.log(gift, this.gift_code_array);
            if (this.isInArray(gift.gift_ref_code, this.gift_code_array)) {
                this.gift_quantity = 1;
                gift['qty'] = 1;
            }
            else {
                this.quantity = gift.qty ? gift.qty : 0;
            }
            if (this.quantity == 0) {
                this.presentToast(this.tran_required_qty);
            }
            else {
                this.presentLoading();
                console.log(gift);
                this.apiService.home().subscribe((data) => {
                    console.log(data);
                    if (this.isInArray(gift.gift_ref_code, this.gift_code_array)) {
                        for (let j = 0; j < this.restricted_array.length; j++) {
                            if (this.restricted_array[j]['upi'] == 'bank') {
                                if (this.restricted_array[j]['bank'] == gift.gift_ref_code) {
                                    if (data['account_holder_name'] && data['bank_name'] && data['branch_name'] && data['account_number'] && data['ifsc_code']) {
                                        //  this.presentBankAlertConfirm(data,gift)
                                        gift['upi'] = null;
                                        gift['account_holder_name'] = data['account_holder_name'];
                                        gift['bank_name'] = data['bank_name'];
                                        gift['branch_name'] = data['branch_name'];
                                        gift['account_number'] = data['account_number'];
                                        gift['ifsc_code'] = data['ifsc_code'];
                                        this.apiService.validatePurchase().subscribe((data) => {
                                            this.apiService.redeemGiftOTP(gift).subscribe(data => this.handleReedemGiftResponse(data), error => this.handleReedemGiftError(error));
                                        }, (error) => {
                                            console.log(error);
                                            this.loadingCtrl.dismiss();
                                            this.presentToast(error.error.error);
                                        });
                                    }
                                    else {
                                        this.loadingCtrl.dismiss();
                                        this.presentToast("Please update bank details from your profile!!");
                                    }
                                }
                            }
                            else if (this.restricted_array[j]['upi'] == 'upi') {
                                console.log('5555555555555555555555555555555555555555555555555555555555555555');
                                if (this.restricted_array[j]['bank'] == gift.gift_ref_code) {
                                    if (data['upi_id']) {
                                        // this.presentUPIAlertConfirm(data['upi_id'],gift)
                                        gift['upi'] = data['upi_id'];
                                        gift['account_holder_name'] = null;
                                        gift['bank_name'] = null;
                                        gift['branch_name'] = null;
                                        gift['account_number'] = null;
                                        gift['ifsc_code'] = null;
                                        this.apiService.validatePurchase().subscribe((data) => {
                                            this.apiService.redeemGiftOTP(gift).subscribe(data => this.handleReedemGiftResponse(data), error => this.handleReedemGiftError(error));
                                        }, (error) => {
                                            this.loadingCtrl.dismiss();
                                            this.presentToast(error.error.error);
                                        });
                                    }
                                    else {
                                        this.loadingCtrl.dismiss();
                                        this.presentToast("Please update UPI ID from your profile!!");
                                    }
                                }
                            }
                        }
                    }
                    else {
                        console.log('666666666666666666666666666666666666666666666666666666666666666666666666');
                        this.apiService.redeemGiftOTP(gift).subscribe(data => this.handleReedemGiftResponse(data), error => this.handleReedemGiftError(error));
                    }
                }, (err) => { console.log(err); });
            }
        }
        else {
            this.presentToast("You are not mapped to ISO");
            this.loadingCtrl.dismiss();
        }
    }
    handleReedemGiftResponse(data) {
        this.loadingCtrl.dismiss();
        /*let toast = this.toastCtrl.create({
          message: '',
          duration: 1000,
          position: 'middle'
        });*/
        this.presentOrderConfirmationModal();
        /*this.selected_gift.qty = 0;
        this.presentToast(this.tran_order_success);
        toast.present();*/
        this.apiService.checkActivity().subscribe(data => {
            console.log('check successful', data);
        }, error => {
            console.log('err', error);
        });
    }
    handleReedemGiftError(error) {
        this.loadingCtrl.dismiss();
        let toast = this.toastCtrl.create({
            message: '',
            duration: 1000,
            position: 'middle'
        });
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
    isInArray(gift_ref_code, array_to_search) {
        var length = array_to_search.length;
        for (var i = 0; i < length; i++) {
            if (array_to_search[i] == gift_ref_code)
                return true;
        }
        return false;
    }
    ionViewDidLeave() {
        //  this.loadGifts2()
    }
    //  async presentBankAlertConfirm(data,gift) {
    //   const alert = await this.alertController.create({
    //     cssClass: 'my-custom-class',
    //     backdropDismiss:false,
    //     header: 'Do you want to  change current bank details  ?',
    //     message: 'Account holder name : <b>'+data['account_holder_name']+'</b><br>'+'Bank Name : <b>'+data['bank_name']+'</b><br>Branch Name : <b>'+data['branch_name']+'</b><br>'+'Account No. : <b>'+data['account_number']+'</b><br>IFSC Code : <b>'+data['ifsc_code'],
    //     buttons: [
    //       {
    //         text: 'NO',
    //         role: 'cancel',
    //         cssClass: 'primary',
    //         handler: (blah) => {
    //           this.redeemGift(gift)
    //           console.log('Confirm Cancel: blah');
    //         }
    //       }, {
    //         text: 'YES',
    //         handler: () => {
    //           this.bank=true;
    //           this.upi=false;
    //           this.dockedHeight=700
    //             this.profileFormField.account_holder_name= data['account_holder_name'],
    //             this.profileFormField.bank_name= data['bank_name'],
    //             this.profileFormField.branch_name= data['branch_name'],
    //             this.profileFormField.account_number= data['account_number'],
    //             this.profileFormField.ifsc_code= data['ifsc_code'],
    //           this.sheetState=SheetState.Docked
    //           console.log('Confirm Okay');
    //         }
    //       }
    //     ]
    //   });
    //   await alert.present();
    // }
    //  async presentUPIAlertConfirm(data,gift) {
    //   const alert = await this.alertController.create({
    //     cssClass: 'my-custom-class',
    //     header: 'Do you want to  change current UPI ID  ?',
    //     message:'UPI ID : <b>'+data+'</b>',
    //     backdropDismiss:false,
    //     buttons: [
    //       {
    //         text: 'NO',
    //         role: 'cancel',
    //         cssClass: 'primary',
    //         handler: (blah) => {
    //           this.redeemGift(gift)
    //           console.log('Confirm Cancel: blah');
    //         }
    //       }, {
    //         text: 'YES',
    //         handler: () => {
    //           this.upi=true;
    //           this.bank=false;
    //           this.dockedHeight=350
    //           this.profileFormField.upi_id=data
    //           this.sheetState=SheetState.Docked
    //           console.log('Confirm Okay');
    //         }
    //       }
    //     ]
    //   });
    //   await alert.present();
    // }
    redeemGift(gift) {
        this.apiService.validatePurchase().subscribe((data) => {
            this.apiService.redeemGiftOTP(gift).subscribe(data => this.handleReedemGiftResponse(data), error => this.handleReedemGiftError(error));
        }, (error) => {
            this.loadingCtrl.dismiss();
            this.presentToast(error.error.error);
        });
    }
    closeDrawer() {
        this.sheetState = ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["SheetState"].Bottom;
    }
    submitBankDetails() {
        var profileFormField = {
            'account_holder_name': this.profileFormField.account_holder_name,
            'bank_name': this.profileFormField.bank_name,
            'branch_name': this.profileFormField.branch_name,
            'account_number': this.profileFormField.account_number,
            'ifsc_code': this.profileFormField.ifsc_code,
        };
        console.log('bank', profileFormField);
        this.apiService.edit_bank(profileFormField).subscribe(data => {
            this.loadingCtrl.dismiss();
            if (data) {
                this.presentToast('Bank Details updated successfully');
            }
            else {
                this.presentToast(this.tran_went_wrong);
            }
        }, error => this.handleError(error));
    }
    submitUPI() {
        var profileFormField = {
            'upi': this.profileFormField.upi_id,
        };
        console.log('upi', profileFormField);
        this.apiService.edit_upi(profileFormField).subscribe(data => {
            this.loadingCtrl.dismiss();
            if (data) {
                this.presentToast('UPI ID updated successfully');
            }
            else {
                this.presentToast(this.tran_went_wrong);
            }
        }, error => this.handleError(error));
    }
};
RedeemPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
RedeemPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"],] }]
};
RedeemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redeem',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./redeem.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/redeem/redeem.page.html")).default,
        providers: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_6__["SearchPipe"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./redeem.page.scss */ "./src/app/redeem/redeem.page.scss")).default]
    })
], RedeemPage);



/***/ })

}]);
//# sourceMappingURL=redeem-redeem-module-es2015.js.map