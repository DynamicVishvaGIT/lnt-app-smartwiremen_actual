(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <div class=\"ion-padding-top ion-padding-horizontal\">\n    <ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"2\" style=\"text-align: start;margin-left: -26px;\">\n\t\t\t\t\t<ion-menu-button></ion-menu-button>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"8\" style=\"text-align: center;\">\n\t\t\t\t\t<strong class=\"header\" style=\"color:#131313;\">{{ (!showEditProfile || showChangePhoto)?'Profile':'edit_profile' | translate }}</strong>\n\t\t\t\t</ion-col>\n        <ion-col size=\"2\" style=\"text-align: end;\" [hidden]=\"!showEditProfile && !showChangePhoto\" (click)=\"showProfile()\">\n          <ion-icon name=\"close-outline\" style=\"color:#131313;margin-right: -37px;font-size: x-large;\"></ion-icon>\n        </ion-col>\n\t\t\t</ion-row>\n    </ion-grid>\n  </div>\n  <div [hidden]=\"showEditProfile || showChangePhoto\">\n    <ion-row>\n      <ion-col size=\"4\" class=\"ion-text-center home-header-img\" (click)=\"showPhoto(false)\">\n         <img src=\"{{ displayProfileField.avatar }}\" class=\"avtar-rounded\" *ngIf=\"displayProfileField.avatar\" width=\"215\" height=\"215\">\n      </ion-col>\n      <ion-col>\n        <p class=\"name-text\">{{ displayProfileField.first_name }} {{ displayProfileField.last_name }}</p>\n        <p class=\"mail-text\">{{ displayProfileField.email }}</p>\n        <ion-button class=\"login-btn\" color=\"primary\" (click)=\"showEdit()\">{{ 'edit_profile' | translate }}</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"ion-padding\" style=\"margin-top: 4%;\" [hidden]=\"showEditProfile || showChangePhoto\">\n    <ion-segment value=\"active\">\n      <ion-segment-button mode=\"ios\" value=\"active\" (click)=\"statusTab('personal')\">\n        <ion-label>Personal Info</ion-label>\n      </ion-segment-button>\n      <ion-segment-button mode=\"ios\" value=\"inactive\" (click)=\"statusTab('other')\">\n        <ion-label>Other Info</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <div [hidden]=\"showEditProfile || showChangePhoto\" class=\"gap\">\n    <ion-grid *ngIf=\"status=='personal'\">\n      <ion-card >\n        <ion-card-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\" class=\"header-align\">\n                <ion-icon name=\"call-outline\" class=\"icon-style\" size=\"medium\" color=\"secondary\"></ion-icon>\n                <div class=\"text-container\">\n                  <span>{{ 'mobile_no' | translate }}</span>\n                  <span>{{ displayProfileField.username?displayProfileField.username:'NA' }}</span>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" class=\"header-align\">\n                <ion-icon name=\"gift-outline\" class=\"icon-style\" size=\"medium\" color=\"secondary\"></ion-icon>\n                <div class=\"text-container\">\n                  <span>{{ 'date_of_birth' | translate }}</span>\n                  <span>{{ displayProfileField.date_of_birth?displayProfileField.date_of_birth:'NA' }}</span>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" class=\"header-align\">\n                <ion-icon name=\"briefcase-outline\" class=\"icon-style\" size=\"medium\" color=\"secondary\"></ion-icon>\n                <div class=\"text-container\">\n                  <span>{{ 'profession' | translate }}</span>\n                  <span>{{ displayProfileField.profession?displayProfileField.profession:'NA' }}</span>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" class=\"header-align\">\n                <ion-icon name=\"briefcase-outline\" class=\"icon-style\" size=\"medium\" color=\"secondary\"></ion-icon>\n                <div class=\"text-container\">\n                  <span>{{ 'professional_qualification' | translate }}</span>\n                  <span>{{ displayProfileField.professional_qualification?displayProfileField.professional_qualification:'NA' }}</span>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" class=\"header-align\">\n                <ion-icon name=\"id-card-outline\" class=\"icon-style\" size=\"medium\" color=\"secondary\"></ion-icon>\n                <div class=\"text-container\">\n                  <span>{{ 'id_proof' | translate }}</span>\n                  <span>{{ displayProfileField.id_proof?displayProfileField.id_proof:'NA' }}</span>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" class=\"header-align\">\n                <ion-icon name=\"location-outline\" class=\"icon-style\" size=\"medium\" color=\"secondary\"></ion-icon>\n                <div class=\"text-container\">\n                  <span>Address</span>\n                  <span>{{ displayProfileField.address_line_1+','+displayProfileField.address_line_2+','+displayProfileField.address_line_3+','+\n                    displayProfileField.city_name+','+ displayProfileField.state_name+'-'+displayProfileField.pincode}}</span>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </ion-grid>\n    <ion-grid *ngIf=\"status=='other'\">\n      <ion-card>\n        <ion-card-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\" class=\"header-align\">\n                <ion-icon name=\"person-outline\" class=\"icon-style\" size=\"medium\" color=\"secondary\"></ion-icon>\n                <div class=\"text-container\">\n                  <span>{{ 'account_holder_name' | translate }}</span>\n                  <span>{{ displayProfileField.account_holder_name?displayProfileField.account_holder_name:'NA' }}</span>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" class=\"header-align\">\n                <ion-icon name=\"business-outline\" class=\"icon-style\" size=\"medium\" color=\"secondary\"></ion-icon>\n                <div class=\"text-container\">\n                  <span>{{ 'bank_name' | translate }}</span>\n                  <span>{{ displayProfileField.bank_name?displayProfileField.bank_name:'NA' }}</span>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" class=\"header-align\">\n                <ion-icon name=\"business-outline\" class=\"icon-style\" size=\"medium\" color=\"secondary\"></ion-icon>\n                <div class=\"text-container\">\n                  <span>{{ 'branch_name' | translate }}</span>\n                  <span>{{ displayProfileField.branch_name?displayProfileField.branch_name:'NA' }}</span>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" class=\"header-align\">\n                <ion-icon name=\"wallet-outline\" class=\"icon-style\" size=\"medium\" color=\"secondary\"></ion-icon>\n                <div class=\"text-container\">\n                  <span>{{ 'account_number' | translate }}</span>\n                  <span>{{ displayProfileField.account_number?displayProfileField.account_number:'NA' }}</span>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" class=\"header-align\">\n                <ion-icon name=\"journal-outline\" class=\"icon-style\" size=\"medium\" color=\"secondary\"></ion-icon>\n                <div class=\"text-container\">\n                  <span>{{ 'ifsc_code' | translate }}</span>\n                  <span>{{ displayProfileField.ifsc_code?displayProfileField.ifsc_code:'NA' }}</span>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" class=\"header-align\">\n                <ion-icon name=\"card-outline\" class=\"icon-style\" size=\"medium\" color=\"secondary\"></ion-icon>\n                <div class=\"text-container\">\n                  <span>{{ 'upi_id' | translate }}</span>\n                  <span>{{ displayProfileField.upi_id?displayProfileField.upi_id:'NA' }}</span>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </ion-grid>\n  </div>\n  <div [hidden]=\"showEditProfile || !showChangePhoto\">\n    <ion-grid >\n      <ion-row class=\"app-icon-container ion-no-padding\">\n        <ion-col class=\"ion-text-center\">\n          <img src=\"{{ displayProfileField.account_image }}\" *ngIf=\"!base64Image\" alt=\"Avatar\" width=\"215\"/>\n          <!-- <img src=\"{{ displayProfileField.avatar }}\" *ngIf=\"!base64Image\" alt=\"Avatar\" width=\"215\"/> -->\n          <img src=\"{{base64Image}}\" *ngIf=\"base64Image\" alt=\"Avatar\" width=\"215\" />\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-button  color=\"secondary\" (click)=\"takePhoto()\">{{ 'take_photo' | translate }}</ion-button>\n          <ion-button  color=\"secondary\" (click)=\"getImage()\">{{ 'select_image' | translate }}</ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-button  color=\"secondary\" (click)=\"uploadImage()\">{{ 'upload_image' | translate }}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div [hidden]=\"!showChangePhoto || !isBankUpload\">\n    <ion-grid>\n      <ion-row class=\"app-icon-container ion-no-padding\">\n        <ion-col class=\"ion-text-center\">\n          <img src=\"{{ displayProfileField.avatar }}\" *ngIf=\"!base64Image\" alt=\"Avatar\" width=\"215\"/>\n          <img src=\"{{base64Image}}\" *ngIf=\"base64Image\" alt=\"Avatar\" width=\"215\" />\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-button  color=\"secondary\" (click)=\"takePhoto()\">{{ 'take_photo' | translate }}</ion-button>\n          <ion-button  color=\"secondary\" (click)=\"getImage()\">{{ 'select_image' | translate }}</ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-button  color=\"secondary\" (click)=\"uploadImage()\">{{ 'upload_image' | translate }}</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <div mode=\"ios\" class=\"content-align\" [hidden]=\"!showEditProfile || showChangePhoto \">\n    <ion-grid>\n      <form *ngIf=\"profileFormField\" (ngSubmit)=\"profileForm()\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'first_name' | translate }}</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-label ><ion-icon slot=\"start\" name=\"person\"></ion-icon></ion-label> -->\n              <ion-input type=\"text\" [(ngModel)]=\"profileFormField.first_name\" name=\"first_name\" placeholder=\"{{ 'enter_first_name' | translate }}\" class=\"ion-input\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'last_name' | translate }}</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-label ><ion-icon slot=\"start\" name=\"person\"></ion-icon></ion-label> -->\n              <ion-input type=\"text\" [(ngModel)]=\"profileFormField.last_name\" name=\"last_name\" placeholder=\"{{ 'enter_last_name' | translate }}\" class=\"ion-input\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'date_of_birth' | translate }}</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-icon slot=\"start\" name=\"calendar-sharp\" style=\"margin-right: 10px;\"></ion-icon><ion-label style=\"color: darkgray;\" ><span>{{ 'date_of_birth' | translate }}</span></ion-label> -->\n              <ion-datetime  displayFormat=\"DD-MM-YYYY\" [max]=\"today\"  [(ngModel)]=\"profileFormField.date_of_birth\" name=\"date_of_birth\" class=\"ion-datetime\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'email' | translate }}</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-label ><ion-icon  slot=\"start\" name=\"mail\"></ion-icon></ion-label> -->\n              <ion-input type=\"text\" [(ngModel)]=\"profileFormField.email\" name=\"email\" placeholder=\"{{ 'enter_email' | translate }}\" class=\"ion-input\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'id_proof' | translate }}</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-label ><ion-icon slot=\"start\" name=\"pencil-sharp\"></ion-icon></ion-label> -->\n              <ion-input type=\"text\" [(ngModel)]=\"profileFormField.id_proof\" name=\"id_proof\" placeholder=\"{{ 'enter_id_proof' | translate }}\"  class=\"ion-input\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"profileFormField.profession\">\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'profession' | translate }}</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-label ><ion-icon slot=\"start\" name=\"list\"></ion-icon></ion-label> -->\n              <ion-select *ngIf=\"profileFormField.profession\" [(ngModel)]=\"profileFormField.profession\" name=\"profession\" placeholder=\"{{ 'select_profession' | translate }}\" class=\"ion-select\">\n                  <ion-select-option *ngFor=\"let item of professions;\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\n              </ion-select>            \n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"profileFormField.professional_qualification\">\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'professional_qualification' | translate }}</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-label ><ion-icon slot=\"start\" name=\"list\"></ion-icon></ion-label> -->\n              <ion-select *ngIf=\"profileFormField.professional_qualification\" [(ngModel)]=\"profileFormField.professional_qualification\" name=\"professional_qualification\" placeholder=\"{{ 'select_professional_qualification' | translate }}\" class=\"ion-select\">\n                <ion-select-option *ngFor=\"let item of professional_qualifications;\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'state' | translate }}</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-label ><ion-icon name=\"list\"></ion-icon></ion-label> -->\n                <ionic-selectable\n                    name=\"state\"\n                    placeholder=\"{{ 'select_state' | translate }}\"\n                    searchPlaceholder=\"{{ 'search_state' | translate }}\"\n                    [(ngModel)]=\"profileFormField.state\"\n                    [items]=\"states\"\n                    itemValueField=\"id\"\n                    itemTextField=\"name\"\n                    [canSearch]=\"true\"\n                    (onChange)=\"changeState($event)\"\n                    class=\"ion-select-profile\">\n                </ionic-selectable>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'city' | translate }}</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-label ><ion-icon name=\"list\"></ion-icon></ion-label> -->\n                <ionic-selectable\n                    #cityComponent\n                    name=\"city\"\n                    placeholder=\"{{ 'select_city' | translate }}\"\n                    searchPlaceholder=\"{{ 'search_city' | translate }}\"\n                    [(ngModel)]=\"profileFormField.city\"\n                    [items]=\"cities\"\n                    itemValueField=\"id\"\n                    itemTextField=\"name\"\n                    [canSearch]=\"true\"\n                    (onChange)=\"changeCity($event)\"\n                    class=\"ion-select-profile\">\n                </ionic-selectable>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'address_line_1' | translate }}</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n              <ion-input type=\"text\" [(ngModel)]=\"profileFormField.address_line_1\" name=\"address_line_1\" placeholder=\"{{ 'enter_address_line_1' | translate }}\" class=\"ion-input\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'address_line_2' | translate }}</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n              <ion-input type=\"text\" class=\"ion-input\" [(ngModel)]=\"profileFormField.address_line_2\" name=\"address_line_2\" placeholder=\"{{ 'enter_address_line_2' | translate }}\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'address_line_3' | translate }}</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n              <ion-input type=\"text\" class=\"ion-input\" [(ngModel)]=\"profileFormField.address_line_3\" name=\"address_line_3\" placeholder=\"{{ 'enter_address_line_3' | translate }}\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'pincode' | translate }}</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n              <ion-input type=\"number\" class=\"ion-input\" maxLength=\"6\" [(ngModel)]=\"profileFormField.pincode\" name=\"pincode\" placeholder=\"{{ 'enter_pincode' | translate }}\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'account_holder_name' | translate }}</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n              <ion-input type=\"text\" class=\"ion-input\" [(ngModel)]=\"profileFormField.account_holder_name\"  name=\"account_holder_name\" placeholder=\"{{ 'account_holder_name' | translate }}\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'bank_name' | translate }}</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n              <ion-input type=\"text\" class=\"ion-input\" [(ngModel)]=\"profileFormField.bank_name\"  name=\"bank_name\" placeholder=\"{{ 'bank_name' | translate }}\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'branch_name' | translate }}</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n              <ion-input type=\"text\" class=\"ion-input\" [(ngModel)]=\"profileFormField.branch_name\"  name=\"branch_name\" placeholder=\"{{ 'branch_name' | translate }}\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'account_number' | translate }}</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n              <ion-input type=\"text\" class=\"ion-input\" [(ngModel)]=\"profileFormField.account_number\"  name=\"account_number\" placeholder=\"{{ 'account_number' | translate }}\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'ifsc_code' | translate }} e.g SBIN0123456</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n              <ion-input type=\"text\" class=\"ion-input\" [(ngModel)]=\"profileFormField.ifsc_code\"  name=\"ifsc_code\" placeholder=\"{{ 'ifsc_code' | translate }} e.g SBIN0123456\"></ion-input>\n            </ion-item></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'upi_id' | translate }} e.g 1234567890@sbi</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n              <ion-input type=\"text\" class=\"ion-input\" [(ngModel)]=\"profileFormField.upi_id\" name=\"upi_id\" placeholder=\"{{ 'upi_id' | translate }} e.g 1234567890@sbi\" ></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row> \n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">{{ 'upload_bank_details' | translate }}</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">   <!--class=\"ion-margin-bottom\"-->\n              <!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n              <ion-input type=\"text\" class=\"ion-input\"  placeholder=\"{{ 'upload_bank_details' | translate }}\"  (click)=\"showPhoto(true)\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button type=\"submit\" class=\"update-btn\" color=\"secondary\">{{ 'update' | translate }}\n              <!-- <ion-icon name=\"send\" style=\"margin-right: 8px;\"></ion-icon>  -->\n            </ion-button>\n          </ion-col>\n        </ion-row>\n    </form>\n  </ion-grid>\n  </div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\" [hidden]=\"!showEditProfile && !showChangePhoto\">\n      <ion-button (click)=\"showProfile()\" color=\"light\" class=\"logoutbtn\" fill=\"outline\">{{ 'cancel' | translate }}</ion-button>\n    </ion-buttons>\n    <ion-title>{{ 'profile' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div [hidden]=\"showEditProfile || showChangePhoto\">\n  \n    <ion-row class=\"app-icon-container\">\n      <ion-col class=\"ion-text-center\">\n         <img src=\"{{ displayProfileField.avatar }}\" class=\"avtar-rounded\" *ngIf=\"displayProfileField.avatar\" width=\"215\" height=\"215\">\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col class=\"ion-text-center\">\n        <ion-button  color=\"secondary\" (click)=\"showPhoto(false)\">{{ 'change_photo' | translate }}</ion-button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n  <ion-list>\n    <ion-grid [hidden]=\"showEditProfile || showChangePhoto\">\n        <ion-card >\n          <ion-card-content>\n            <ion-row class=\"profile-detail-row\">\n              <ion-col size=\"4\" >{{ 'mobile_no' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.username }}</ion-col>\n\n              <ion-col size=\"4\" >{{ 'first_name' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.first_name }}</ion-col>\n\n              <ion-col size=\"4\" >{{ 'last_name' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.last_name }}</ion-col>\n\n              <ion-col size=\"4\" >{{ 'date_of_birth' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.date_of_birth }}</ion-col>\n\n              <ion-col size=\"4\" >{{ 'email' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.email }}</ion-col>\n\n              <ion-col size=\"4\" >{{ 'id_proof' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.id_proof }}</ion-col>\n              \n              <ion-col size=\"4\" >{{ 'profession' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.profession }}</ion-col>\n\n              <ion-col size=\"4\" >{{ 'professional_qualification' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.professional_qualification }}</ion-col>\n\n              <ion-col size=\"4\" >{{ 'state' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.state_name }}</ion-col>\n\n              <ion-col size=\"4\" >{{ 'city' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.city_name }}</ion-col>\n\n              <ion-col size=\"4\" >{{ 'address_line_1' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.address_line_1 }}</ion-col>\n\n              <ion-col size=\"4\" >{{ 'address_line_2' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.address_line_2 }}</ion-col>\n\n              <ion-col size=\"4\" >{{ 'address_line_3' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.address_line_3 }}</ion-col>\n              \n              <ion-col size=\"4\" >{{ 'pincode' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.pincode }}</ion-col>\n\n              <ion-col size=\"4\" >{{ 'account_holder_name' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.account_holder_name ? displayProfileField.account_holder_name : 'NA' }}</ion-col>\n\n              <ion-col size=\"4\" >{{ 'bank_name' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.bank_name ? displayProfileField.bank_name : 'NA' }}</ion-col>\n\n              <ion-col size=\"4\" >{{ 'branch_name' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.branch_name ? displayProfileField.branch_name : 'NA' }}</ion-col>\n\n              <ion-col size=\"4\" >{{ 'account_number' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.account_number ? displayProfileField.account_number : 'NA' }}</ion-col>\n\n              <ion-col size=\"4\" >{{ 'ifsc_code' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.ifsc_code ? displayProfileField.ifsc_code : 'NA' }}</ion-col>\n\n              <ion-col size=\"4\" >{{ 'upi_id' | translate }}</ion-col>\n              <ion-col size=\"8\" >: {{ displayProfileField.upi_id ? displayProfileField.upi_id : 'NA' }}</ion-col>\n              \n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-button class=\"login-btn\" color=\"secondary\"  expand=\"block\" (click)=\"showEdit()\">\n          <ion-icon slot=\"start\" name=\"create-outline\"></ion-icon> {{ 'edit_profile' | translate }}\n        </ion-button>\n        \n        \n\n  </ion-grid>\n    \n    <ion-grid [hidden]=\"showEditProfile || !showChangePhoto\">\n\n      <ion-row class=\"app-icon-container ion-no-padding\">\n        <ion-col class=\"ion-text-center\">\n          <img src=\"{{ displayProfileField.account_image }}\" *ngIf=\"!base64Image\" alt=\"Avatar\" width=\"215\"/>\n          <img src=\"{{base64Image}}\" *ngIf=\"base64Image\" alt=\"Avatar\" width=\"215\" />\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-button  color=\"secondary\" (click)=\"takePhoto()\">{{ 'take_photo' | translate }}</ion-button>\n          <ion-button  color=\"secondary\" (click)=\"getImage()\">{{ 'select_image' | translate }}</ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-button  color=\"secondary\" (click)=\"uploadImage()\">{{ 'upload_image' | translate }}</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-grid [hidden]=\"!showChangePhoto || !isBankUpload\">\n\n      <ion-row class=\"app-icon-container ion-no-padding\">\n        <ion-col class=\"ion-text-center\">\n          <img src=\"{{ this.displayProfileField.avatar }}\" *ngIf=\"!base64Image\" alt=\"Avatar\" width=\"215\"/>\n          <img src=\"{{base64Image}}\" *ngIf=\"base64Image\" alt=\"Avatar\" width=\"215\" />\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-button  color=\"secondary\" (click)=\"takePhoto()\">{{ 'take_photo' | translate }}</ion-button>\n          <ion-button  color=\"secondary\" (click)=\"getImage()\">{{ 'select_image' | translate }}</ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-button  color=\"secondary\" (click)=\"uploadImage()\">{{ 'upload_image' | translate }}</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-grid [hidden]=\"!showEditProfile || showChangePhoto \">\n\n      <form *ngIf=\"profileFormField\" (ngSubmit)=\"profileForm()\">\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon slot=\"start\" name=\"person\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"profileFormField.first_name\" name=\"first_name\" placeholder=\"{{ 'enter_first_name' | translate }}\"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon slot=\"start\" name=\"person\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"profileFormField.last_name\" name=\"last_name\" placeholder=\"{{ 'enter_last_name' | translate }}\"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\" >\n            <ion-icon slot=\"start\" name=\"calendar-sharp\" style=\"margin-right: 10px;\"></ion-icon><ion-label style=\"color: darkgray;\" ><span>{{ 'date_of_birth' | translate }}</span></ion-label>\n            <ion-datetime  displayFormat=\"DD-MM-YYYY\" [max]=\"today\"  [(ngModel)]=\"profileFormField.date_of_birth\" name=\"date_of_birth\" ></ion-datetime>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon  slot=\"start\" name=\"mail\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"profileFormField.email\" name=\"email\" placeholder=\"{{ 'enter_email' | translate }}\"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon slot=\"start\" name=\"pencil-sharp\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"profileFormField.id_proof\" name=\"id_proof\" placeholder=\"{{ 'enter_id_proof' | translate }}\"></ion-input>\n          </ion-item>\n        </ion-row>\n        \n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon slot=\"start\" name=\"list\"></ion-icon></ion-label>\n            <ion-select *ngIf=\"profileFormField.profession\" [(ngModel)]=\"profileFormField.profession\" name=\"profession\" placeholder=\"{{ 'select_profession' | translate }}\">\n                <ion-select-option *ngFor=\"let item of professions;\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\n            </ion-select>            \n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon slot=\"start\" name=\"list\"></ion-icon></ion-label>\n            <ion-select *ngIf=\"profileFormField.professional_qualification\" [(ngModel)]=\"profileFormField.professional_qualification\" name=\"professional_qualification\" placeholder=\"{{ 'select_professional_qualification' | translate }}\">\n              <ion-select-option *ngFor=\"let item of professional_qualifications;\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon name=\"list\"></ion-icon></ion-label>\n              <ionic-selectable\n                  name=\"state\"\n                  \n                  placeholder=\"{{ 'select_state' | translate }}\"\n                  searchPlaceholder=\"{{ 'search_state' | translate }}\"\n                  [(ngModel)]=\"profileFormField.state\"\n                  [items]=\"states\"\n                  itemValueField=\"id\"\n                  itemTextField=\"name\"\n                  [canSearch]=\"true\"\n                  (onChange)=\"changeState($event)\">\n              </ionic-selectable>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon name=\"list\"></ion-icon></ion-label>\n              <ionic-selectable\n                  #cityComponent\n                  name=\"city\"\n                  placeholder=\"{{ 'select_city' | translate }}\"\n                  searchPlaceholder=\"{{ 'search_city' | translate }}\"\n                  [(ngModel)]=\"profileFormField.city\"\n                  [items]=\"cities\"\n                  itemValueField=\"id\"\n                  itemTextField=\"name\"\n                  [canSearch]=\"true\"\n                  (onChange)=\"changeCity($event)\"\n                  \n                  >\n                 \n              </ionic-selectable>\n          </ion-item>\n        </ion-row>\n\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"profileFormField.address_line_1\" name=\"address_line_1\" placeholder=\"{{ 'enter_address_line_1' | translate }}\"></ion-input>\n          </ion-item>\n        </ion-row>\n     \n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"profileFormField.address_line_2\" name=\"address_line_2\" placeholder=\"{{ 'enter_address_line_2' | translate }}\"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"profileFormField.address_line_3\" name=\"address_line_3\" placeholder=\"{{ 'enter_address_line_3' | translate }}\"></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n            <ion-input type=\"number\" maxLength=\"6\" [(ngModel)]=\"profileFormField.pincode\" name=\"pincode\" placeholder=\"{{ 'enter_pincode' | translate }}\"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"profileFormField.account_holder_name\"  name=\"account_holder_name\" placeholder=\"{{ 'account_holder_name' | translate }}\"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"profileFormField.bank_name\"  name=\"bank_name\" placeholder=\"{{ 'bank_name' | translate }}\"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"profileFormField.branch_name\"  name=\"branch_name\" placeholder=\"{{ 'branch_name' | translate }}\"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"profileFormField.account_number\"  name=\"account_number\" placeholder=\"{{ 'account_number' | translate }}\"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"profileFormField.ifsc_code\"  name=\"ifsc_code\" placeholder=\"{{ 'ifsc_code' | translate }} e.g SBIN0123456\"></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"profileFormField.upi_id\" name=\"upi_id\" placeholder=\"{{ 'upi_id' | translate }} e.g 1234567890@sbi\" ></ion-input>\n          </ion-item>\n        </ion-row> \n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n            <ion-input type=\"text\"  placeholder=\"{{ 'upload_bank_details' | translate }}\"  (click)=\"showPhoto(true)\"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-button type=\"submit\" class=\"login-btn\" color=\"secondary\" expand=\"block\">\n          <ion-icon name=\"send\" style=\"margin-right: 8px;\"></ion-icon> {{ 'update' | translate }}\n        </ion-button>\n    </form>\n  </ion-grid>\n\n</ion-list>\n</ion-content>\n\n -->\n");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/__ivy_ngcc__/esm2015/ionic-selectable.min.js");
/* harmony import */ var ionic4_date_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic4-date-picker */ "./node_modules/ionic4-date-picker/__ivy_ngcc__/dist/index.js");










let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
            ionic4_date_picker__WEBPACK_IMPORTED_MODULE_9__["DatePickerModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none;\n  background-color: #EFF3F6;\n}\n\n.home-header-img img {\n  margin-top: 25px;\n  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n  border-color: #2edcba;\n  width: 100px;\n  height: 100px;\n  background-color: #2edcba;\n  padding: 4px;\n}\n\n.gap {\n  margin-top: -13px;\n}\n\n.name-text {\n  color: #131313;\n  font-size: x-large;\n  font-weight: 800;\n  margin-top: 26px;\n  margin-left: 10px;\n}\n\n.mail-text {\n  color: #131313;\n  font-size: smaller;\n  margin-top: -23px;\n  margin-left: 10px;\n}\n\n.login-btn {\n  --box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);\n  --padding-bottom: 12px;\n  --padding-top: 12px;\n  --padding-left: 25px;\n  --padding-right: 25px;\n  --border-radius: 30px;\n  --color: white;\n  text-transform: none;\n  width: 125px;\n  margin-left: 10px;\n}\n\n.update-btn {\n  width: 95%;\n  --box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);\n  --padding-bottom: 12px;\n  --padding-top: 12px;\n  --padding-left: 25px;\n  --padding-right: 25px;\n  --border-radius: 30px;\n  --color: white;\n  text-transform: none;\n}\n\nion-segment {\n  --background: #d8e6ef;\n  border-radius: 8px;\n  height: 42px;\n}\n\n.header-align {\n  display: flex;\n  align-items: center;\n  margin-top: 7px;\n  color: #00000087;\n}\n\n.icon-style {\n  margin-right: 15px;\n  /* Adjust the spacing as needed */\n  font-size: larger;\n}\n\n.text-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: smaller;\n}\n\n.text-container span:first-child {\n  color: #00000087;\n}\n\n.text-container span:last-child {\n  font-size: small;\n  font-weight: 600;\n  color: #131313;\n}\n\n.content-align {\n  margin-top: 6%;\n  padding-left: 23px;\n}\n\n.ion-select-profile {\n  width: 100% !important;\n  max-width: 100%;\n  --padding-start: 0;\n  min-height: 50px;\n  border-radius: 10px;\n  padding-left: 10px;\n  background: #d8e6ef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFLRjs7QUFIQTtFQUNFLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQU1GOztBQUpBO0VBQ0UsVUFBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQU9GOztBQUxBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFRRjs7QUFOQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVNGOztBQU5BO0VBQ0Usa0JBQUE7RUFBb0IsaUNBQUE7RUFDcEIsaUJBQUE7QUFVRjs7QUFQQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFVRjs7QUFQQTtFQUNFLGdCQUFBO0FBVUY7O0FBUEE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVVGOztBQVJBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBV0Y7O0FBVEE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBWUYiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkYzRjY7XG59XG4uaG9tZS1oZWFkZXItaW1nIGltZyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1jb2xvcjogIzJlZGNiYTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVkY2JhO1xuICBwYWRkaW5nOiA0cHg7XG59XG4uZ2FwIHtcbiAgbWFyZ2luLXRvcDogLTEzcHg7XG59XG4ubmFtZS10ZXh0e1xuICBjb2xvcjojMTMxMzEzO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm1haWwtdGV4dHtcbiAgY29sb3I6IzEzMTMxMztcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xuICBtYXJnaW4tdG9wOiAtMjNweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ubG9naW4tYnRuIHtcbiAgLS1ib3gtc2hhZG93OiAwIDAgMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgLS1wYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIC0tcGFkZGluZy1yaWdodDogMjVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHdpZHRoOiAxMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4udXBkYXRlLWJ0biB7XG4gIHdpZHRoOiA5NSU7XG4gIC0tYm94LXNoYWRvdzogMCAwIDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG4gIC0tcGFkZGluZy10b3A6IDEycHg7XG4gIC0tcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAtLXBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuaW9uLXNlZ21lbnQge1xuICAtLWJhY2tncm91bmQ6ICNkOGU2ZWY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiA0MnB4O1xufVxuLmhlYWRlci1hbGlnbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgY29sb3I6ICMwMDAwMDA4Nztcbn1cblxuLmljb24tc3R5bGUge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7IC8qIEFkanVzdCB0aGUgc3BhY2luZyBhcyBuZWVkZWQgKi9cbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbi50ZXh0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbi50ZXh0LWNvbnRhaW5lciBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICMwMDAwMDA4Nztcbn1cblxuLnRleHQtY29udGFpbmVyIHNwYW46bGFzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMTMxMzEzO1xufVxuLmNvbnRlbnQtYWxpZ257XG4gIG1hcmdpbi10b3A6IDYlO1xuICBwYWRkaW5nLWxlZnQ6IDIzcHg7XG59XG4uaW9uLXNlbGVjdC1wcm9maWxlIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZDogI2Q4ZTZlZjtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIC5hcHAtaWNvbi1jb250YWluZXIge1xuLy8gICBwYWRkaW5nLXRvcDogMDtcbi8vICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4vLyB9XG4vLyAuYXZ0YXItcm91bmRlZCB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgd2lkdGg6IDE3MHB4O1xuLy8gfVxuLy8gaW9uLWl0ZW0ge1xuLy8gICAtLWJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuLy8gICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbi8vICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4vLyAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNSAhaW1wb3J0YW50O1xuLy8gICB3aWR0aDogMTAwJTtcbi8vIH1cbi8vIC5hdnRhci1yb3VuZGVkIHtcbi8vICAgd2lkdGg6IDEzMHB4O1xuLy8gICBoZWlnaHQ6IDEzMHB4O1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyB9XG4vLyBpb24taXRlbSBpb24taWNvbiB7XG4vLyAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xuLy8gICBjb2xvcjogI2E5YTlhOTtcbi8vICAgZm9udC1zaXplOiAyMnB4O1xuLy8gfVxuLy8gLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuLy8gICBib3JkZXItYm90dG9tOiBub25lO1xuLy8gfVxuLy8gLmxvZ2luLWJ0biB7XG4vLyAgIC0tYm94LXNoYWRvdzogMCAwIDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4vLyAgIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4vLyAgIC0tcGFkZGluZy10b3A6IDI1cHg7XG4vLyAgIC0tcGFkZGluZy1sZWZ0OiAyNXB4O1xuLy8gICAtLXBhZGRpbmctcmlnaHQ6IDI1cHg7XG4vLyAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbi8vIH1cbi8vIC5reWMtYnRuIHtcbi8vICAgLS1ib3gtc2hhZG93OiAwIDAgMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbi8vICAgLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcbi8vICAgLS1wYWRkaW5nLXRvcDogMjVweDtcbi8vICAgLS1wYWRkaW5nLWxlZnQ6IDI1cHg7XG4vLyAgIC0tcGFkZGluZy1yaWdodDogMjVweDtcbi8vICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuLy8gfVxuLy8gLmNlbnRlciB7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cbi8vIC5pdGVtLXNlbGVjdCBpb24tbGFiZWwge1xuLy8gICAtd2Via2l0LWJveC1mbGV4OiBpbml0aWFsO1xuLy8gICAtd2Via2l0LWZsZXg6IGluaXRpYWw7XG4vLyAgIC1tcy1mbGV4OiBpbml0aWFsO1xuLy8gICBmbGV4OiBpbml0aWFsO1xuLy8gICBtYXgtd2lkdGg6IDIwMHB4O1xuLy8gfVxuLy8gaW9uLXNlbGVjdCB7XG4vLyAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4vLyAgIG1heC13aWR0aDogMTAwJTtcbi8vICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2E5YTlhOTtcbi8vICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuLy8gfVxuLy8gLml0ZW0taW9uaWMtc2VsZWN0YWJsZSBpb24tbGFiZWwge1xuLy8gICAtd2Via2l0LWJveC1mbGV4OiBpbml0aWFsO1xuLy8gICAtd2Via2l0LWZsZXg6IGluaXRpYWw7XG4vLyAgIC1tcy1mbGV4OiBpbml0aWFsO1xuLy8gICBmbGV4OiBpbml0aWFsO1xuLy8gICBtYXgtd2lkdGg6IDIwMHB4O1xuLy8gfVxuLy8gaW9uaWMtc2VsZWN0YWJsZSB7XG4vLyAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4vLyAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuLy8gfVxuLy8gaW9uLWRhdGV0aW1lIHtcbi8vICAgY29sb3I6ICMwMDAwMDA7XG4vLyAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNhOWE5YTk7XG4vLyAgIC0tcGFkZGluZy1zdGFydDogMDtcbi8vIH1cbi8vIGlvbi1pbnB1dCB7XG4vLyAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNhOWE5YTk7XG4vLyAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbi8vIH1cbi8vIC5pdGVtLWhhcy1mb2N1cyB7XG4vLyAgIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6ICNmZmZmZmY7XG4vLyB9XG5cbi8vIC5wcm9maWxlLWRldGFpbC1yb3cgPiBpb24tY29sIHtcbi8vICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbi8vIH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/token-service/token.service */ "./src/app/providers/token-service/token.service.ts");
/* harmony import */ var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../providers/events-service/events.service */ "./src/app/providers/events-service/events.service.ts");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/__ivy_ngcc__/ngx/index.js");














let ProfilePage = class ProfilePage {
    constructor(toastCtrl, loadingCtrl, apiService, events, token, translate, menuCtrl, camera, transfer, file, formBuilder, cf, datePicker, router) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.events = events;
        this.token = token;
        this.translate = translate;
        this.menuCtrl = menuCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.formBuilder = formBuilder;
        this.cf = cf;
        this.datePicker = datePicker;
        this.router = router;
        this.showEditProfile = false;
        this.showChangePhoto = false;
        this.loading = {};
        this.states = [];
        this.cities = [];
        this.professions = [];
        this.professional_qualifications = [];
        this.status = 'personal';
        this.displayProfileField = {
            username: null,
            first_name: null,
            last_name: null,
            date_of_birth: null,
            email: null,
            id_proof: null,
            profession: null,
            professional_qualification: null,
            state_name: null,
            city_name: null,
            address_line_1: null,
            address_line_2: null,
            address_line_3: null,
            pincode: null,
            avatar: null,
            account_holder_name: null,
            bank_name: null,
            branch_name: null,
            account_number: null,
            ifsc_code: null,
            upi_id: null,
            account_image: null,
        };
        this.profileFormField = {
            first_name: null,
            last_name: null,
            date_of_birth: null,
            email: null,
            id_proof: null,
            profession: null,
            professional_qualification: null,
            state: null,
            city: null,
            state_id: null,
            city_id: null,
            address_line_1: null,
            address_line_2: null,
            address_line_3: null,
            pincode: null,
            avatar: null,
            account_holder_name: null,
            bank_name: null,
            branch_name: null,
            account_number: null,
            ifsc_code: null,
            upi_id: null,
        };
        this.tran_please_wait = "Please Wait";
        /*tran_required_mobile_no:string = "Please Enter Your Mobile No";
        tran_required_email:string = "Please Enter Your Email";*/
        this.tran_required_first_name = "Please Enter Your First Name";
        this.tran_required_last_name = "Please Enter Your Last Name";
        this.tran_profile_updated = "Profile Updated Successfully";
        this.tran_required_old_password = "Please Enter Your Old Password";
        this.tran_required_new_password = "Please Enter Your New Password";
        /*tran_password_change_success:string = "Your password has been changed";
        tran_password_change_error:string = "Your password has not been changed";*/
        this.tran_required_state = "Please Select Your State";
        this.tran_required_city = "Please Select Your City";
        this.tran_went_wrong = 'Something went wrong, please try again later.';
        this.tran_required_image = 'Please Choose Image';
        this.tran_required_date_of_birth = "Please Enter Date Of Birth";
        this.tran_required_account_holder_name = "Please Enter Account Holder Name";
        this.tran_required_bank_name = "Please Enter Bank Name";
        this.tran_required_branch_name = "Please Enter Branch Name";
        this.tran_required_account_number = "Please Enter Account Number";
        this.tran_required_ifsc_code = "Please Enter IFSC Code";
        this.isAccountHolderNameAvailable = false;
        this.isBankNameAvailabale = false;
        this.isBranchNameAvailabale = false;
        this.isAccountNumberAvailable = false;
        this.isIFSCCodeAvailable = false;
        this.isUPIIdAvailable = false;
        this.isBankUpload = false;
        this.today = new Date().toISOString();
        this.showEditProfile = false;
        this.showChangePhoto = false;
        this.menuCtrl.enable(true, 'myMenu');
        this.otherCityForm = this.formBuilder.group({
            other_city: [''],
        });
        /*this.translate.get('required_mobile_no').subscribe(res => { this.tran_required_mobile_no = res; });
        this.translate.get('required_email').subscribe(res => { this.tran_required_email = res; });*/
        this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; console.log(res); });
        this.translate.get('required_first_name').subscribe(res => { this.tran_required_first_name = res; });
        this.translate.get('required_last_name').subscribe(res => { this.tran_required_last_name = res; });
        this.translate.get('required_state').subscribe(res => { this.tran_required_state = res; });
        this.translate.get('required_city').subscribe(res => { this.tran_required_city = res; });
        this.translate.get('profile_updated').subscribe(res => { this.tran_profile_updated = res; });
        this.translate.get('required_old_password').subscribe(res => { this.tran_required_old_password = res; });
        this.translate.get('required_new_password').subscribe(res => { this.tran_required_new_password = res; });
        this.translate.get('went_wrong').subscribe(res => { this.tran_went_wrong = res; });
        this.translate.get('required_image').subscribe(res => { this.tran_required_image = res; });
        this.translate.get('required_date_of_birth').subscribe(res => { this.tran_required_date_of_birth = res; console.log(res); });
        this.translate.get('required_account_holder_name').subscribe(res => { this.tran_required_account_holder_name = res; });
        this.translate.get('required_bank_name').subscribe(res => { this.tran_required_bank_name = res; });
        this.translate.get('required_branch_name').subscribe(res => { this.tran_required_branch_name = res; });
        this.translate.get('required_account_number').subscribe(res => { this.tran_required_account_number = res; });
        this.translate.get('required_ifsc_code').subscribe(res => { this.tran_required_ifsc_code = res; });
        this.events.getEvent().subscribe((data) => {
            console.log('data', data);
            if (data) {
                if (data.name == 'update:profiledata') {
                    this.displayProfileField.username = data.params.username;
                    this.displayProfileField.first_name = data.params.first_name;
                    this.displayProfileField.last_name = data.params.last_name;
                    this.displayProfileField.date_of_birth = data.params.date_of_birth;
                    this.displayProfileField.email = data.params.email;
                    this.displayProfileField.id_proof = data.params.id_proof;
                    this.displayProfileField.profession = data.params.profession_name;
                    this.displayProfileField.professional_qualification = data.params.professional_qualification_name;
                    this.displayProfileField.state_name = data.params.state_name;
                    if (data.city != null) {
                        this.displayProfileField.city_name = data.params.city_name;
                        this.othercity = null;
                    }
                    else {
                        this.displayProfileField.city_name = data.params.city_name;
                        this.othercity = data.params.other_city;
                    }
                    this.displayProfileField.address_line_1 = data.params.address_line_1;
                    this.displayProfileField.address_line_2 = data.params.address_line_2;
                    this.displayProfileField.address_line_3 = data.params.address_line_3;
                    this.displayProfileField.pincode = data.params.pincode;
                    this.displayProfileField.avatar = data.params.avatar;
                    this.displayProfileField.account_holder_name = data.params.account_holder_name;
                    this.displayProfileField.bank_name = data.params.bank_name;
                    this.displayProfileField.branch_name = data.params.branch_name;
                    this.displayProfileField.account_number = data.params.account_number;
                    this.displayProfileField.ifsc_code = data.params.ifsc_code;
                    this.displayProfileField.upi_id = data.params.upi_id;
                    this.displayProfileField.account_image = data.params.account_image;
                    this.profileFormField.first_name = data.params.first_name;
                    this.profileFormField.last_name = data.params.last_name;
                    this.profileFormField.date_of_birth = data.params.date_of_birth;
                    this.profileFormField.email = data.params.email;
                    this.profileFormField.id_proof = data.params.id_proof;
                    this.profileFormField.profession = data.params.profession;
                    this.profileFormField.professional_qualification = data.params.professional_qualification;
                    this.profileFormField.state_id = data.params.state;
                    this.profileFormField.city_id = data.params.city;
                    this.profileFormField.address_line_1 = data.params.address_line_1;
                    this.profileFormField.address_line_2 = data.params.address_line_2;
                    this.profileFormField.address_line_3 = data.params.address_line_3;
                    this.profileFormField.pincode = data.params.pincode;
                    this.profileFormField.account_holder_name = data.params.account_holder_name;
                    this.profileFormField.bank_name = data.params.bank_name;
                    this.profileFormField.branch_name = data.params.branch_name;
                    this.profileFormField.account_number = data.params.account_number;
                    this.profileFormField.ifsc_code = data.params.ifsc_code;
                    this.profileFormField.upi_id = data.params.upi_id;
                    this.isAccountHolderNameAvailable = data.params.account_holder_name ? true : false;
                    this.isBankNameAvailabale = data.params.bank_name ? true : false;
                    this.isBranchNameAvailabale = data.params.branch_name ? true : false;
                    this.isAccountNumberAvailable = data.params.account_number ? true : false;
                    this.isIFSCCodeAvailable = data.params.ifsc_code ? true : false;
                    this.isUPIIdAvailable = data.params.upi_id ? true : false;
                    this.loadStates();
                    this.loadProfession();
                    this.loadProfQualifications();
                }
            }
        });
        // }
    }
    ngOnInit() {
    }
    statusTab(status) {
        if (status == 'personal') {
            this.status = 'personal';
        }
        else {
            this.status = 'other';
        }
    }
    loadProfession() {
        this.apiService.professions().subscribe(data => this.handleProfession(data), error => console.log(error));
    }
    handleProfession(data) {
        this.professions = data.professions;
    }
    loadProfQualifications() {
        this.apiService.prof_qualifications().subscribe(data => this.handleProfQualifications(data), error => console.log(error));
    }
    handleProfQualifications(data) {
        this.professional_qualifications = data.prof_qualifications;
    }
    loadStates() {
        this.apiService.states().subscribe(data => this.handleStates(data), error => console.log(error));
    }
    handleStates(data) {
        this.states = data.states;
        var selectedItem = this.states.find(t => t.id == this.profileFormField.state_id);
        var indexNo = this.states.indexOf(selectedItem);
        if (indexNo != -1) {
            this.profileFormField.state = this.states[indexNo];
        }
        if (this.profileFormField.state) {
            this.loadCities(this.profileFormField.state.id);
        }
    }
    changeState(event) {
        this.cities = [];
        this.profileFormField.city = null;
        this.profileFormField.city_id = null;
        this.profileFormField.state_id = event.value.id;
        this.loadCities(event.value.id);
    }
    changeCity(event) {
        this.profileFormField.city_id = event.value.id;
    }
    goKyc() {
        this.router.navigate(['kyc']);
    }
    goKyca() {
        this.router.navigate(['kyca']);
    }
    loadCities(state_id) {
        this.apiService.cities(state_id).subscribe(data => this.handleCities(data), error => console.log(error));
    }
    handleCities(data) {
        // if(this.othercity==null){
        this.cities = data.cities;
        var selectedItem = this.cities.find(t => t.id == this.profileFormField.city_id);
        var indexNo = this.cities.indexOf(selectedItem);
        if (indexNo != -1) {
            this.profileFormField.city = this.cities[indexNo];
        }
        // }
        else {
            this.profileFormField.city = { 'name': this.othercity, 'id': '0', };
        }
    }
    loadEditProfile() {
        this.presentLoading();
        this.apiService.home().subscribe(data => this.handleResponse(data), error => this.handleError(error));
    }
    ionViewWillEnter() {
        this.loadEditProfile();
    }
    showEdit() {
        this.loadEditProfile();
        this.showEditProfile = true;
    }
    showProfile() {
        this.showEditProfile = false;
        this.showChangePhoto = false;
    }
    // goKyc(){
    //   this.router.navigate(['orders'])
    // }
    showPhoto(isBankUpload) {
        if (isBankUpload) {
            this.isBankUpload = true;
        }
        else {
            this.isBankUpload = false;
        }
        this.showChangePhoto = true;
    }
    profileForm() {
        if (this.profileFormField.first_name == '' || this.profileFormField.first_name == null) {
            this.presentToast(this.tran_required_first_name);
        }
        else if (this.profileFormField.last_name == '' || this.profileFormField.last_name == null) {
            this.presentToast(this.tran_required_last_name);
        }
        else if (this.profileFormField.state == '' || this.profileFormField.state == null) {
            this.presentToast(this.tran_required_state);
        }
        else if (this.profileFormField.city == '' || this.profileFormField.city == null) {
            this.presentToast(this.tran_required_city);
        }
        else if (this.profileFormField.date_of_birth == '' || this.profileFormField.date_of_birth == null) {
            this.presentToast(this.tran_required_date_of_birth);
        }
        else if (!this.profileFormField.upi_id && (!this.profileFormField.account_holder_name || !this.profileFormField.bank_name || !this.profileFormField.branch_name || !this.profileFormField.account_number || !this.profileFormField.ifsc_code)) {
            if (this.profileFormField.account_holder_name == '' || this.profileFormField.account_holder_name == null) {
                this.presentToast(this.tran_required_account_holder_name);
            }
            else if (this.profileFormField.bank_name == '' || this.profileFormField.bank_name == null) {
                this.presentToast(this.tran_required_bank_name);
            }
            else if (this.profileFormField.branch_name == '' || this.profileFormField.branch_name == null) {
                this.presentToast(this.tran_required_branch_name);
            }
            else if (this.profileFormField.account_number == '' || this.profileFormField.account_number == null) {
                this.presentToast(this.tran_required_account_number);
            }
            else if (this.profileFormField.ifsc_code == '' || this.profileFormField.ifsc_code == null) {
                this.presentToast(this.tran_required_ifsc_code);
            }
        }
        else {
            this.presentLoading();
            if (this.profileFormField.date_of_birth) {
                this.profileFormField.date_of_birth = (this.profileFormField.date_of_birth).split('T')[0];
            }
            if (this.profileFormField.city.id == 0) {
                var profileFormField = {
                    'email': this.profileFormField.email,
                    'first_name': this.profileFormField.first_name,
                    'last_name': this.profileFormField.last_name,
                    'date_of_birth': this.profileFormField.date_of_birth,
                    'password': null,
                    'state_id': this.profileFormField.state.id,
                    'state_name': this.profileFormField.state.name,
                    'city_id': null,
                    'city_name': null,
                    'other_city': this.profileFormField.city.name,
                    'profile_pic': null,
                    'pincode': this.profileFormField.pincode,
                    'address_line_1': this.profileFormField.address_line_1,
                    'address_line_2': this.profileFormField.address_line_2,
                    'address_line_3': this.profileFormField.address_line_3,
                    'account_holder_name': this.profileFormField.account_holder_name,
                    'bank_name': this.profileFormField.bank_name,
                    'branch_name': this.profileFormField.branch_name,
                    'account_number': this.profileFormField.account_number,
                    'ifsc_code': this.profileFormField.ifsc_code,
                    'upi_id': this.profileFormField.upi_id,
                    'photo': '',
                    'profession': this.profileFormField.profession,
                    'professional_qualification': this.profileFormField.professional_qualification,
                    'bank_details_upload': null,
                };
            }
            else {
                var profileFormField = {
                    'email': this.profileFormField.email,
                    'first_name': this.profileFormField.first_name,
                    'last_name': this.profileFormField.last_name,
                    'date_of_birth': this.profileFormField.date_of_birth,
                    'password': null,
                    'state_id': this.profileFormField.state.id,
                    'city_id': this.profileFormField.city.id,
                    'state_name': this.profileFormField.state.name,
                    'city_name': this.profileFormField.city.name,
                    'other_city': null,
                    'profile_pic': null,
                    'pincode': this.profileFormField.pincode,
                    'address_line_1': this.profileFormField.address_line_1,
                    'address_line_2': this.profileFormField.address_line_2,
                    'address_line_3': this.profileFormField.address_line_3,
                    'account_holder_name': this.profileFormField.account_holder_name,
                    'bank_name': this.profileFormField.bank_name,
                    'branch_name': this.profileFormField.branch_name,
                    'account_number': this.profileFormField.account_number,
                    'ifsc_code': this.profileFormField.ifsc_code,
                    'upi_id': this.profileFormField.upi_id,
                    'photo': '',
                    'profession': this.profileFormField.profession,
                    'professional_qualification': this.profileFormField.professional_qualification,
                    'bank_details_upload': null,
                };
            }
            console.log('edit', profileFormField);
            this.apiService.updateProfile(profileFormField).subscribe(data => {
                this.loadingCtrl.dismiss();
                if (data) {
                    this.loadEditProfile();
                    this.showProfile();
                    this.presentToast(this.tran_profile_updated);
                }
                else {
                    this.presentToast(this.tran_went_wrong);
                }
            }, error => this.handleError(error));
        }
    }
    handleResponse(data) {
        this.loadingCtrl.dismiss();
        this.events.publish({ name: 'update:profiledata', params: data });
        console.log();
        this.events.publish({ name: 'update:userdata', params: data });
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
    }
    takePhoto() {
        const options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
            //  this.profile_pic = 'data:image/jpeg;base64,' + imageData;
            this.file.resolveLocalFilesystemUrl(imageData).then((entry) => {
                entry.file(file => {
                    console.log(file);
                    this.file_name = file.name;
                    this.base64Image = window.Ionic.WebView.convertFileSrc(imageData);
                    this.cf.detectChanges();
                    this.readFile(file);
                });
            });
        }, (err) => {
            this.base64Image = null;
        });
    }
    getImage() {
        const options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then((imageData) => {
            this.file.resolveLocalFilesystemUrl(imageData).then((entry) => {
                entry.file(file => {
                    console.log(file);
                    this.file_name = file.name;
                    this.base64Image = window.Ionic.WebView.convertFileSrc(imageData);
                    this.cf.detectChanges();
                    this.readFile(file);
                });
            });
            //  this.profile_pic = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            this.base64Image = null;
        });
    }
    readFile(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            this.imgBlob = new Blob([reader.result], {
                type: file.type
            });
            console.log("name", file.name);
        };
        reader.readAsArrayBuffer(file);
    }
    uploadImage() {
        /* const fileTransfer: FileTransferObject = this.transfer.create();
        let random = Math.floor(Math.random() * 100);
        let token_val = this.token.get();
        let options: FileUploadOptions = {
           fileKey: 'photo',
           fileName: 'photo_'+random+'.jpg',
           chunkedMode:false,
           httpMethod:'post',
           mimeType:'image/jpeg',
           params : {'token':token_val}
        } */
        let uploadUrl = this.isBankUpload ? 'https://smartwiremen.com/api/auth/uploadbankdetails' : 'https://smartwiremen.com/api/auth/uploadImage';
        console.log("uploadUrl=========", uploadUrl);
        if (this.imgBlob == null) {
            this.presentToast(this.tran_required_image);
        }
        else {
            this.presentLoading();
            const formData = new FormData();
            formData.append('photo', this.imgBlob, this.file_name);
            formData.append('token', this.token.get());
            // let token = this.token.get();
            // this.accessToken = token;
            // console.log(formData, this.imgBlob, this.file_name);
            this.apiService.uploadImage(uploadUrl, formData).subscribe(data => {
                this.handleUploadResponse();
            }, error => {
                this.handleUploadError(error);
            });
            /* this.loading.present().then(() => {
      
              return fileTransfer.upload(this.profile_pic, uploadUrl, options).then((data) => {
                    this.loading.dismiss();
                    this.loadEditProfile();
                    this.showProfile();
                    this.presentToast(this.tran_profile_updated);
                    toast.present();
                    this.profile_pic = null;
                  }, (err) => {
                    this.presentToast(this.tran_went_wrong);
                    toast.present();
                    this.loading.dismiss();
                 });
              
            }); */
        }
    }
    addCity() {
        this.profileFormField.city = {
            name: this.otherCityForm.get('other_city').value,
            id: 0
        };
        this.otherCityForm.reset();
        this.cityComponent.hideAddItemTemplate();
        // this.cityComponent.confirm();
        // this.cityComponent.close();
        this.cityComponent._close();
        // this.cityComponent.hideAddItemTemplate();
    }
    onSearchFail(event) {
        if (event.component.hasSearchText) {
            // Clean form.
            this.otherCityForm.reset();
            // Copy search text to port name field, so
            // user doesn't have to type again.
            this.otherCityForm.get('other_city').setValue(event.component.searchText);
            // Show form.
            event.component.showAddItemTemplate();
        }
    }
    onSearchSuccess(event) {
        // Hide form.
        event.component.hideAddItemTemplate();
    }
    handleUploadResponse() {
        this.loadingCtrl.dismiss();
        console.log('here');
        this.presentToast("Bank details upload successfully");
    }
    handleUploadError(error) {
        this.loadingCtrl.dismiss();
        let errorMsg = '';
        if (error.status == 401) {
            errorMsg = error.error.message;
        }
        else {
            errorMsg = error.error.error;
        }
        let toast = this.toastCtrl.create({
            message: 'Bank details upload failed',
            duration: 3000,
            position: 'middle'
        });
        this.presentToast("Bank details upload failed");
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
    openDateDialog() {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: 5,
            maxDate: new Date()
        }).then(date => this.formatDate(date), err => console.log('Error occurred while getting date: ', err));
    }
    formatDate(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        this.profileFormField.date_of_birth = [year, month, day].join('-');
    }
    dateSelected(event) {
        console.log(event);
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
    { type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventsService"] },
    { type: _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_10__["TokenService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_12__["DatePicker"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
ProfilePage.propDecorators = {
    cityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['cityComponent',] }]
};
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map