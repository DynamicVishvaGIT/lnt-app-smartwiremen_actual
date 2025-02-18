(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["language-language-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/language/language.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/language/language.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLanguageLanguagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ 'change_lang' | translate }} </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-radio-group [(ngModel)]=\"default_lang\" (ionChange)=\"changeLang($event)\">\n\n      <ion-item *ngFor=\"let l of langs\">\n        <ion-label>{{l.title}}</ion-label>\n        <ion-radio color=\"primary\" slot=\"end\" value=\"{{l.value}}\" ></ion-radio>\n      </ion-item>\n      \n    </ion-radio-group>\n  </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/language/language-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/language/language-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LanguagePageRoutingModule */

    /***/
    function srcAppLanguageLanguageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguagePageRoutingModule", function () {
        return LanguagePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _language_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./language.page */
      "./src/app/language/language.page.ts");

      var routes = [{
        path: '',
        component: _language_page__WEBPACK_IMPORTED_MODULE_3__["LanguagePage"]
      }];

      var LanguagePageRoutingModule = /*#__PURE__*/_createClass(function LanguagePageRoutingModule() {
        _classCallCheck(this, LanguagePageRoutingModule);
      });

      LanguagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LanguagePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/language/language.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/language/language.module.ts ***!
      \*********************************************/

    /*! exports provided: LanguagePageModule */

    /***/
    function srcAppLanguageLanguageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguagePageModule", function () {
        return LanguagePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _language_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./language-routing.module */
      "./src/app/language/language-routing.module.ts");
      /* harmony import */


      var _language_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./language.page */
      "./src/app/language/language.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var LanguagePageModule = /*#__PURE__*/_createClass(function LanguagePageModule() {
        _classCallCheck(this, LanguagePageModule);
      });

      LanguagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _language_routing_module__WEBPACK_IMPORTED_MODULE_5__["LanguagePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
        declarations: [_language_page__WEBPACK_IMPORTED_MODULE_6__["LanguagePage"]]
      })], LanguagePageModule);
      /***/
    },

    /***/
    "./src/app/language/language.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/language/language.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppLanguageLanguagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmd1YWdlL2xhbmd1YWdlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/language/language.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/language/language.page.ts ***!
      \*******************************************/

    /*! exports provided: LanguagePage */

    /***/
    function srcAppLanguageLanguagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguagePage", function () {
        return LanguagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../providers/token-service/token.service */
      "./src/app/providers/token-service/token.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var LanguagePage = /*#__PURE__*/function () {
        function LanguagePage(token, translate, router) {
          _classCallCheck(this, LanguagePage);

          this.token = token;
          this.translate = translate;
          this.router = router;
          this.langs = [];
          this.default_lang = token.getLang() ? token.getLang() : 'en';
          this.langs = [{
            'title': 'English',
            'value': 'en'
          }, {
            'title': 'हिन्दी',
            'value': 'hi'
          }, {
            'title': 'मराठी',
            'value': 'mr'
          }, {
            'title': 'ગુજરાતી',
            'value': 'gu'
          }, {
            'title': 'ਪੰਜਾਬੀ',
            'value': 'pa'
          }, {
            'title': 'বাংলা',
            'value': 'bn'
          }, {
            'title': 'తెలుగు',
            'value': 'te'
          }, {
            'title': 'தமிழ்',
            'value': 'ta'
          }];
        }

        return _createClass(LanguagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {}
        }, {
          key: "changeLang",
          value: function changeLang($event) {
            console.log($event);
            this.default_lang = $event.detail.value;
            this.token.setLang(this.default_lang);
            this.translate.use(this.default_lang);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['home']);
          }
        }]);
      }();

      LanguagePage.ctorParameters = function () {
        return [{
          type: _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      LanguagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-language',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./language.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/language/language.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./language.page.scss */
        "./src/app/language/language.page.scss"))["default"]]
      })], LanguagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=language-language-module-es5.js.map