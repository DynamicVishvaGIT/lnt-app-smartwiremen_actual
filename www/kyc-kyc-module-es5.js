(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kyc-kyc-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/kyc/kyc.page.html":
    /*!*************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kyc/kyc.page.html ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppKycKycPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" [hidden]=showKycForm>\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title [hidden]=showKycForm>KYC Update</ion-title>\n    <ion-title [hidden]=showKycFormdisone>Disclaimer</ion-title>\n    <ion-title [hidden]=showKycFormdistwo>Disclaimer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br>\n  <ion-grid>\n\n    <!-- <ion-row>\n      <ion-item class=\"ion-margin-bottom\">\n        <ion-label ><ion-icon slot=\"start\" name=\"document-outline\"></ion-icon></ion-label>\n        <ion-input type=\"text\" placeholder=\"Enter GST number\"></ion-input>\n      </ion-item>\n    </ion-row> -->\n    <form *ngIf=\"kycFormField\" (ngSubmit)=\"kycForm()\">\n      <div [hidden]=showKycForm>\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon slot=\"start\" name=\"call-outline\"></ion-icon></ion-label>\n            <ion-input type=\"text\" placeholder=\"Enter Pan & Aadhar link Phone Number\" type=\"number\" [(ngModel)]=\"kycFormField.linked_phonenumber\" name=\"linked_phonenumber\" pattern=\"/^-?\\d+\\.?\\d*$/\" onKeyPress=\"if(this.value.length==10) return false;\" ></ion-input>\n          </ion-item>\n        </ion-row>\n        <hr>\n        \n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon slot=\"start\" name=\"card-outline\"></ion-icon></ion-label>\n            <ion-input type=\"text\" placeholder=\"Enter Pan Card Number\" [(ngModel)]=\"kycFormField.pan_card_no\" name=\"pan_card_no\" maxlength=\"10\" autocapitalize=\"characters\"></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-col size=\"12\"  class=\"home-header-img\" *ngIf=\"pan_card_img\">\n          <!-- <img src=\"{{pan_card_img}}\" *ngIf=\"!base64pancardImage\" width=\"215\" />  -->\n          <img src=\"{{ kycFormField.pan_card_img }}\" *ngIf=\"!base64pancardImage\" alt=\"Pan Card\" width=\"215\"/>\n          <img src=\"{{base64pancardImage}}\" *ngIf=\"base64pancardImage\" alt=\"Pan Card\" width=\"215\" />\n        </ion-col>\n        <ion-row class=\"app-icon-container ion-no-padding images_ion\">\n          <ion-col class=\"ion-text-center image_button ion-no-padding\">\n            <ion-button color=\"secondary\" (click)=\"getpancardImage()\" size=\"\">\n              <ion-icon name=\"image-outline\"></ion-icon>\n              <ion-label>Choose Pan Card Image</ion-label>\n            </ion-button>\n            <br>\n            <small>Note : Max 4mb image</small>\n            <ion-col ><ion-input class=\"form-input\" type=\"text\" hidden value=\"{{pan_card_img}}\"></ion-input>\n              <!-- <img style=\"width: 100px;height: 100px;\" *ngIf=\"base64pancardImage\" src=\"{{base64pancardImage}}\" alt=\"\" class=\"image_container\"> -->\n            </ion-col>\n          </ion-col>\n        </ion-row>\n        <hr>\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon slot=\"start\" name=\"card-outline\"></ion-icon></ion-label>\n            <ion-input type=\"text\" placeholder=\"Enter Aadhar Card Number *\" [(ngModel)]=\"kycFormField.aadhar_no\" name=\"aadhar_no\" type=\"number\"  pattern=\"/^-?\\d+\\.?\\d*$/\" onKeyPress=\"if(this.value.length==12) return false;\"></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-col size=\"12\"  class=\"home-header-img\" *ngIf=\"aadhar_card_img\">\n          <!-- <img src=\"{{aadhar_card_img}}\" *ngIf=\"!base64aadharcardImage\" width=\"215\" />  -->\n          <img src=\"{{ kycFormField.aadhar_card_img }}\" *ngIf=\"!base64aadharcardImage\" alt=\"Aadhar Card\" width=\"215\"/>\n          <img src=\"{{base64aadharcardImage}}\" *ngIf=\"base64aadharcardImage\" alt=\"Aadhar Card\" width=\"215\" />\n        </ion-col>\n        <ion-row class=\"app-icon-container ion-no-padding images_ion\">\n          <ion-col class=\"ion-text-center image_button ion-no-padding\">\n            \n            <ion-button color=\"secondary\" (click)=\"getaadharcardImage()\">\n              <ion-icon name=\"image-outline\"></ion-icon>\n              <ion-label>Choose Aadhar Card Image</ion-label>\n            </ion-button>\n            <br>\n            <small>Note : Max 4mb image</small>\n            <ion-col ><ion-input class=\"form-input\" type=\"text\" hidden value=\"{{aadhar_card_img}}\"></ion-input>\n              <!-- <img style=\"width: 100px;height: 100px;\" *ngIf=\"base64pancardImage\" src=\"{{base64pancardImage}}\" alt=\"\" class=\"image_container\"> -->\n            </ion-col>\n          </ion-col>\n        </ion-row>\n        <hr>\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label ><ion-icon slot=\"start\" name=\"card-outline\"></ion-icon></ion-label>\n            <ion-input type=\"text\" placeholder=\"Enter Cancel Cheque Number\" [(ngModel)]=\"kycFormField.cancel_check_no\" name=\"cancel_check_no\" type=\"number\"></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-col size=\"12\"  class=\"home-header-img\" *ngIf=\"cancel_cheque_img\">\n          <!-- <img src=\"{{cancel_cheque_img}}\" *ngIf=\"!base64cancelchequeImage\" width=\"215\" />  -->\n          <img src=\"{{ kycFormField.cancel_cheque_img }}\" *ngIf=\"!base64cancelchequeImage\" alt=\"Aadhar Card\" width=\"215\"/>\n          <img src=\"{{base64cancelchequeImage}}\" *ngIf=\"base64cancelchequeImage\" alt=\"Aadhar Card\" width=\"215\" />\n        </ion-col>\n        <ion-row class=\"app-icon-container ion-no-padding images_ion\">\n          <ion-col class=\"ion-text-center image_button ion-no-padding\">\n            <ion-button color=\"secondary\" (click)=\"getcancelchequeImage()\">\n              <ion-icon name=\"image-outline\"></ion-icon>\n              <ion-label>Choose Cancel Cheque Image</ion-label>\n            </ion-button>\n            <br>\n            <small>Note : Max 4mb image</small>\n            <ion-col ><ion-input class=\"form-input\" type=\"text\" hidden value=\"{{cancel_cheque_img}}\"></ion-input>\n              <!-- <img style=\"width: 100px;height: 100px;\" *ngIf=\"base64pancardImage\" src=\"{{base64pancardImage}}\" alt=\"\" class=\"image_container\"> -->\n            </ion-col>\n          </ion-col>\n        </ion-row>\n        <hr>\n        <ion-button type=\"button\" class=\"login-btn\" color=\"secondary\" expand=\"block\" (click)=\"showKyc()\">\n           Submit\n        </ion-button>\n      </div>\n\n      <div [hidden]=showKycFormdisone>\n        <ion-card>\n          <ion-card-content>\n            \n            <p>I understand that as per the new guidelines provided by Income Tax Department under the section 194R, I am required to furnish PAN Card details. I hereby confirm that I am submitting my PAN card details and company can pay 10% TDS on the benefits given to me. I give my consent to company to pay 10% TDS as per section 194R if the value of benefits given to me exceeds Rs. 20,000 and above during financial year.  \n            </p>\n            <p>I further declare that information provided by me about <strong color=\"primary\" class=\"cb\">PAN card, PAN Card Linked mobile number & Aadhaar Card</strong> submitted by me is true to the best of my knowledge and belief and nothing has been concealed therein.</p>\n            <p><strong>I am well aware of the fact that, if the information given by me is proved false/ not true, I will be liable for action as per the law. </strong></p>\n      \n              \n            <br>\n            <ion-list>\n              <ion-item class=\"bor\">\n                <ion-label>I Agree Terms and Conditions</ion-label>\n                <ion-checkbox slot=\"start\" [(ngModel)]=\"kycFormField.terms_condition\" [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"checkKyc()\" value=\"10\"></ion-checkbox>\n              </ion-item>\n            </ion-list>\n            <br>\n            <ion-button type=\"submit\" expand=\"block\" color=\"secondary\" shape=\"round\" slot=\"end\" [disabled]=\"disabled\">Submit</ion-button>\n          </ion-card-content>\n        </ion-card>\n      </div>\n      <div [hidden]=showKycFormdistwo>\n        <ion-card>\n          <ion-card-content>\n            \n            <p>I understand that as per the new guidelines provided by Income Tax Department under the section 194R, I am required to furnish PAN Card details. I hereby confirm that I do not posses PAN card and company can pay 22% TDS on the benefits given to me. I give my consent to company to pay 20% TDS as per section 194R if the value of benefits given to me exceeds Rs. 20,000 and above during financial year.   \n            </p>\n            <p>I further declare that information provided by me about PAN card, <strong color=\"primary\" class=\"cb\">PAN Card Linked mobile number & Aadhaar Card</strong> submitted by me is true to the best of my knowledge and belief and nothing has been concealed therein.\n            </p>\n            <p><strong>“I/ We declare that the information stated above is true and correct and I/ we further undertake to indemnify your entity for any costs, damages and/ or any penal consequences arising to you by relying on my/ our declaration.”</strong></p>\n      \n              \n            <br>\n            <ion-list>\n              <ion-item class=\"bor\">\n                <ion-label>I Agree Terms and Conditions</ion-label>\n                <ion-checkbox slot=\"start\" [(ngModel)]=\"kycFormField.terms_conditions\" [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"checkKyctwo()\" value=\"20\"></ion-checkbox>\n              </ion-item>\n            </ion-list>\n            <br>\n            <ion-button type=\"submit\" expand=\"block\" color=\"secondary\" shape=\"round\" slot=\"end\" [disabled]=\"disabled\">Submit</ion-button>\n          </ion-card-content>\n        </ion-card>\n      </div>\n  </form>\n    <br>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/kyc/kyc-routing.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/kyc/kyc-routing.module.ts ***!
      \*******************************************/

    /*! exports provided: KycPageRoutingModule */

    /***/
    function srcAppKycKycRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KycPageRoutingModule", function () {
        return KycPageRoutingModule;
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


      var _kyc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./kyc.page */
      "./src/app/kyc/kyc.page.ts");

      var routes = [{
        path: '',
        component: _kyc_page__WEBPACK_IMPORTED_MODULE_3__["KycPage"]
      }];

      var KycPageRoutingModule = /*#__PURE__*/_createClass(function KycPageRoutingModule() {
        _classCallCheck(this, KycPageRoutingModule);
      });

      KycPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], KycPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/kyc/kyc.module.ts":
    /*!***********************************!*\
      !*** ./src/app/kyc/kyc.module.ts ***!
      \***********************************/

    /*! exports provided: KycPageModule */

    /***/
    function srcAppKycKycModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KycPageModule", function () {
        return KycPageModule;
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


      var _kyc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./kyc-routing.module */
      "./src/app/kyc/kyc-routing.module.ts");
      /* harmony import */


      var _kyc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./kyc.page */
      "./src/app/kyc/kyc.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ionic-selectable */
      "./node_modules/ionic-selectable/__ivy_ngcc__/esm2015/ionic-selectable.min.js");
      /* harmony import */


      var ionic4_date_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ionic4-date-picker */
      "./node_modules/ionic4-date-picker/__ivy_ngcc__/dist/index.js");

      var KycPageModule = /*#__PURE__*/_createClass(function KycPageModule() {
        _classCallCheck(this, KycPageModule);
      });

      KycPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"], ionic4_date_picker__WEBPACK_IMPORTED_MODULE_9__["DatePickerModule"], _kyc_routing_module__WEBPACK_IMPORTED_MODULE_5__["KycPageRoutingModule"]],
        declarations: [_kyc_page__WEBPACK_IMPORTED_MODULE_6__["KycPage"]]
      })], KycPageModule);
      /***/
    },

    /***/
    "./src/app/kyc/kyc.page.scss":
    /*!***********************************!*\
      !*** ./src/app/kyc/kyc.page.scss ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function srcAppKycKycPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".app-icon-container {\n  padding-top: 0;\n  padding-bottom: 15px;\n}\n\n.avtar-rounded {\n  border-radius: 50%;\n  width: 170px;\n}\n\nion-item {\n  --border: none !important;\n  --box-shadow: none !important;\n  --border-radius: 30px !important;\n  --background: #f5f5f5 !important;\n  width: 100%;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.avtar-rounded {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n}\n\nion-item ion-icon {\n  margin-top: 5px !important;\n  color: #a9a9a9;\n  font-size: 22px;\n}\n\n.list-md .item-block .item-inner {\n  border-bottom: none;\n}\n\n.login-btn {\n  --box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  --padding-left: 25px;\n  --padding-right: 25px;\n  --border-radius: 30px;\n}\n\n.kyc-btn {\n  --box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  --padding-left: 25px;\n  --padding-right: 25px;\n  --border-radius: 30px;\n}\n\n.center {\n  text-align: center;\n}\n\n.item-select ion-label {\n  flex: initial;\n  max-width: 200px;\n}\n\nion-select {\n  width: 100% !important;\n  max-width: 100%;\n  --placeholder-color: #a9a9a9;\n  --placeholder-opacity: 1;\n}\n\n.item-ionic-selectable ion-label {\n  flex: initial;\n  max-width: 200px;\n}\n\nionic-selectable {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n\nion-datetime {\n  color: #000000;\n  --placeholder-color: #a9a9a9;\n  --padding-start: 0;\n}\n\nion-input {\n  --placeholder-color: #a9a9a9;\n  --placeholder-opacity: 1;\n}\n\n.item-has-focus {\n  --highlight-background: #ffffff;\n}\n\n.profile-detail-row > ion-col {\n  color: #000000 !important;\n}\n\n.avatar_circle {\n  --border-radius: 10px;\n  width: 100%;\n  height: auto;\n}\n\n.image_button ion-button {\n  width: 80%;\n}\n\n.images_ion ion-button > ion-icon {\n  font-size: 18px;\n  width: 20%;\n}\n\n.images_ion ion-button > ion-label {\n  font-size: 12px;\n}\n\n.card-content-md p {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 6px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.5;\n  text-align: justify;\n}\n\n.card-content-md p strong.cb {\n  font-weight: 600;\n  color: #0a4f8b;\n  --ion-text-color:#0a4f8b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva3ljL2t5Yy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFFO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7QUFHSjs7QUFERTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGRTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFLSjs7QUFIRTtFQUNFLG1CQUFBO0FBTUo7O0FBSkU7RUFDRSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFPSjs7QUFMRTtFQUNFLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQVFKOztBQU5FO0VBQ0Usa0JBQUE7QUFTSjs7QUFQRTtFQUlFLGFBQUE7RUFDQSxnQkFBQTtBQVVKOztBQVJFO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQVdKOztBQVRFO0VBSUUsYUFBQTtFQUNBLGdCQUFBO0FBWUo7O0FBVkU7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0FBYUo7O0FBWEU7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQWNKOztBQVpFO0VBQ0UsNEJBQUE7RUFDQSx3QkFBQTtBQWVKOztBQWJFO0VBQ0UsK0JBQUE7QUFnQko7O0FBYkU7RUFDRSx5QkFBQTtBQWdCSjs7QUFkRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFpQko7O0FBZkU7RUFDRSxVQUFBO0FBa0JKOztBQWhCRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBbUJKOztBQWpCRTtFQUNFLGVBQUE7QUFvQko7O0FBbEJFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBcUJKOztBQW5CQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBc0JKIiwiZmlsZSI6InNyYy9hcHAva3ljL2t5Yy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWljb24tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIC5hdnRhci1yb3VuZGVkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICB9XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1ib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxuICB9XHJcbiAgLmF2dGFyLXJvdW5kZWQge1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2E5YTlhOTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbiAgLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICB9XHJcbiAgLmxvZ2luLWJ0biB7XHJcbiAgICAtLWJveC1zaGFkb3c6IDAgMCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIC0tcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICB9XHJcbiAgLmt5Yy1idG4ge1xyXG4gICAgLS1ib3gtc2hhZG93OiAwIDAgMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgLS1wYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuaXRlbS1zZWxlY3QgaW9uLWxhYmVsIHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IGluaXRpYWw7XHJcbiAgICAtd2Via2l0LWZsZXg6IGluaXRpYWw7XHJcbiAgICAtbXMtZmxleDogaW5pdGlhbDtcclxuICAgIGZsZXg6IGluaXRpYWw7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuICBpb24tc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYTlhOWE5O1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gIH1cclxuICAuaXRlbS1pb25pYy1zZWxlY3RhYmxlIGlvbi1sYWJlbCB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiBpbml0aWFsO1xyXG4gICAgLXdlYmtpdC1mbGV4OiBpbml0aWFsO1xyXG4gICAgLW1zLWZsZXg6IGluaXRpYWw7XHJcbiAgICBmbGV4OiBpbml0aWFsO1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgaW9uaWMtc2VsZWN0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1kYXRldGltZSB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNhOWE5YTk7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYTlhOWE5O1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gIH1cclxuICAuaXRlbS1oYXMtZm9jdXMge1xyXG4gICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtZGV0YWlsLXJvdyA+IGlvbi1jb2wge1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmF2YXRhcl9jaXJjbGV7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgLmltYWdlX2J1dHRvbiBpb24tYnV0dG9ue1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbiAgLmltYWdlc19pb24gaW9uLWJ1dHRvbiA+IGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG4gIC5pbWFnZXNfaW9uIGlvbi1idXR0b24gPiBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuY2FyZC1jb250ZW50LW1kIHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbi5jYXJkLWNvbnRlbnQtbWQgcCBzdHJvbmcuY2J7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMwYTRmOGI7XHJcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiMwYTRmOGI7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/kyc/kyc.page.ts":
    /*!*********************************!*\
      !*** ./src/app/kyc/kyc.page.ts ***!
      \*********************************/

    /*! exports provided: KycPage */

    /***/
    function srcAppKycKycPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KycPage", function () {
        return KycPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../providers/api-service/api.service */
      "./src/app/providers/api-service/api.service.ts");
      /* harmony import */


      var _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../providers/token-service/token.service */
      "./src/app/providers/token-service/token.service.ts");
      /* harmony import */


      var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../providers/events-service/events.service */
      "./src/app/providers/events-service/events.service.ts");
      /* harmony import */


      var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/date-picker/ngx */
      "./node_modules/@ionic-native/date-picker/__ivy_ngcc__/ngx/index.js"); // import { Component, OnInit } from '@angular/core';


      var KycPage = /*#__PURE__*/function () {
        function KycPage(toastCtrl, loadingCtrl, apiService, events, token, translate, menuCtrl, camera, transfer, pancardfile, aadharcardfile, cancelchequefile, file, formBuilder, cf, datePicker, router) {
          var _this = this;

          _classCallCheck(this, KycPage);

          this.toastCtrl = toastCtrl;
          this.loadingCtrl = loadingCtrl;
          this.apiService = apiService;
          this.events = events;
          this.token = token;
          this.translate = translate;
          this.menuCtrl = menuCtrl;
          this.camera = camera;
          this.transfer = transfer;
          this.pancardfile = pancardfile;
          this.aadharcardfile = aadharcardfile;
          this.cancelchequefile = cancelchequefile;
          this.file = file;
          this.formBuilder = formBuilder;
          this.cf = cf;
          this.datePicker = datePicker;
          this.router = router;
          this.disabled = true;
          this.showKycForm = false;
          this.showKycFormdistwo = true;
          this.showKycFormdisone = true;
          this.tc = null;
          this.kycFormField = {
            linked_phonenumber: null,
            pan_card_no: null,
            aadhar_no: null,
            cancel_check_no: null,
            terms_condition: null,
            terms_conditions: null,
            pan_card_img: null,
            aadhar_card_img: null,
            cancel_cheque_img: null
          };
          this.tran_please_wait = "Please Wait";
          this.tran_required_linked_phonenumber = "Enter Pan & Aadhar link Phone Number";
          this.tran_required_pan_card_no = "Enter Pan Card Number";
          this.tran_required_pan_card_img = "Please Select Pan Card Image.";
          this.tran_required_aadhar_no = "Enter Aadhar Card Number";
          this.tran_required_cancel_check_no = "Enter Cancel Cheque Number";
          this.tran_required_aadhar_card_img = "Aadhar Card Image is Required";
          this.tran_kyc_updated = "KYC Successfully Uploaded";
          this.tran_went_wrong = 'Something went wrong, please try again later.';
          this.events.getEvent().subscribe(function (data) {
            console.log('data', data);

            if (data) {
              if (data.name == 'update:kycdata') {
                _this.kycFormField.linked_phonenumber = data.params.linked_phonenumber;
                _this.kycFormField.pan_card_no = data.params.pan_card_no;
                _this.kycFormField.aadhar_no = data.params.aadhar_no;
                _this.kycFormField.cancel_check_no = data.params.cancel_check_no;
                _this.kycFormField.terms_condition = data.params.terms_condition;
                _this.kycFormField.terms_conditions = data.params.terms_conditions;
                _this.pan_card_img = data.params.pan_card_img;
                _this.aadhar_card_img = data.params.aadhar_card_img;
                _this.cancel_cheque_img = data.params.cancel_cheque_img;
              }
            }
          });
        }

        return _createClass(KycPage, [{
          key: "getpancardImage",
          value: function getpancardImage() {
            var _this2 = this;

            var options = {
              quality: 50,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this2.pancardfile.resolveLocalFilesystemUrl(imageData).then(function (entry) {
                entry.file(function (pancardfile) {
                  console.log(pancardfile);
                  _this2.pan_card_img = pancardfile.name;
                  _this2.base64pancardImage = window.Ionic.WebView.convertFileSrc(imageData); // this.base64pancardImage = this.camera.DestinationType.DATA_URL;

                  _this2.cf.detectChanges();

                  _this2.pancardreadFile(pancardfile);
                });
              }); //  this.profile_pic = 'data:image/jpeg;base64,' + imageData;

            }, function (err) {
              _this2.base64pancardImage = null;
            });
          }
        }, {
          key: "pancardreadFile",
          value: function pancardreadFile(pancardfile) {
            var _this3 = this;

            var reader = new FileReader();

            reader.onloadend = function () {
              _this3.pancardBlob = new Blob([reader.result], {
                type: pancardfile.type
              });
              console.log("name", pancardfile.name);
            };

            reader.readAsArrayBuffer(pancardfile);
          }
        }, {
          key: "getaadharcardImage",
          value: function getaadharcardImage() {
            var _this4 = this;

            var options = {
              quality: 50,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this4.aadharcardfile.resolveLocalFilesystemUrl(imageData).then(function (entry) {
                entry.file(function (aadharcardfile) {
                  console.log(aadharcardfile);
                  _this4.aadhar_card_img = aadharcardfile.name;
                  _this4.base64aadharcardImage = window.Ionic.WebView.convertFileSrc(imageData);

                  _this4.cf.detectChanges();

                  _this4.aadharcardreadFile(aadharcardfile);
                });
              }); //  this.profile_pic = 'data:image/jpeg;base64,' + imageData;

            }, function (err) {
              _this4.base64aadharcardImage = null;
            });
          }
        }, {
          key: "aadharcardreadFile",
          value: function aadharcardreadFile(aadharcardfile) {
            var _this5 = this;

            var reader = new FileReader();

            reader.onloadend = function () {
              _this5.aadharcardBlob = new Blob([reader.result], {
                type: aadharcardfile.type
              });
              console.log("name", aadharcardfile.name);
            };

            reader.readAsArrayBuffer(aadharcardfile);
          }
        }, {
          key: "getcancelchequeImage",
          value: function getcancelchequeImage() {
            var _this6 = this;

            var options = {
              quality: 50,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this6.cancelchequefile.resolveLocalFilesystemUrl(imageData).then(function (entry) {
                entry.file(function (cancelchequefile) {
                  console.log(cancelchequefile);
                  _this6.cancel_cheque_img = cancelchequefile.name;
                  _this6.base64cancelchequeImage = window.Ionic.WebView.convertFileSrc(imageData);

                  _this6.cf.detectChanges();

                  _this6.cancelchequereadFile(cancelchequefile);
                });
              }); //  this.profile_pic = 'data:image/jpeg;base64,' + imageData;

            }, function (err) {
              _this6.base64cancelchequeImage = null;
            });
          }
        }, {
          key: "cancelchequereadFile",
          value: function cancelchequereadFile(cancelchequefile) {
            var _this7 = this;

            var reader = new FileReader();

            reader.onloadend = function () {
              _this7.cancelchequeBlob = new Blob([reader.result], {
                type: cancelchequefile.type
              });
              console.log("name", cancelchequefile.name);
            };

            reader.readAsArrayBuffer(cancelchequefile);
          }
        }, {
          key: "showKyc",
          value: function showKyc() {
            this.showKycForm = true;
            this.showKycFormdisone = true;
            this.showKycFormdistwo = true;

            if (this.kycFormField.pan_card_no != null) {
              console.log(this.kycFormField.pan_card_no);

              if (this.pancardBlob == null) {
                this.presentToast(this.tran_required_pan_card_img);
                this.showKycForm = false;
                this.showKycFormdisone = true;
                this.showKycFormdistwo = true;
              } else {
                if (this.kycFormField.pan_card_no == '' || this.kycFormField.pan_card_no == null) {
                  console.log('2');
                  this.showKycFormdistwo = false;
                  this.showKycForm = true;
                  this.showKycFormdisone = true;
                } else {
                  console.log('1');
                  this.showKycForm = true;
                  this.showKycFormdisone = false;
                  this.showKycFormdistwo = true;
                }
              }
            } else {
              if (this.kycFormField.aadhar_no == '' || this.kycFormField.aadhar_no == null) {
                console.log('number');
                this.presentToast(this.tran_required_aadhar_no);
                this.showKycForm = false;
                this.showKycFormdisone = true;
                this.showKycFormdistwo = true;
              } else if (this.aadharcardBlob == null) {
                this.presentToast(this.tran_required_aadhar_card_img);
                this.showKycForm = false;
                this.showKycFormdisone = true;
                this.showKycFormdistwo = true;
              } else {
                if (this.kycFormField.pan_card_no == '' || this.kycFormField.pan_card_no == null) {
                  console.log('two');
                  this.showKycFormdistwo = false;
                  this.showKycForm = true;
                  this.showKycFormdisone = true;
                } else {
                  console.log('one');
                  this.showKycForm = true;
                  this.showKycFormdisone = false;
                  this.showKycFormdistwo = true;
                }
              }
            }
          }
        }, {
          key: "checkKyc",
          value: function checkKyc() {
            this.disabled = false; // console.log(this.kycFormField.terms_condition)

            if (this.kycFormField.terms_condition == true) {
              // console.log(this.kycFormField.terms_condition)
              this.disabled = false;
              this.tc = "10"; // console.log(this.kycFormField.terms_condition)
            } else {
              this.disabled = true;
            }
          }
        }, {
          key: "checkKyctwo",
          value: function checkKyctwo() {
            this.disabled = false; // console.log(this.kycFormField.terms_condition)

            if (this.kycFormField.terms_conditions == true) {
              // console.log(this.kycFormField.terms_condition)
              this.disabled = false;
              this.tc = "20"; // console.log(this.kycFormField.terms_conditions)
            } else {
              this.disabled = true;
            }
          }
        }, {
          key: "kycForm",
          value: function kycForm() {
            var _this8 = this;

            console.log(this.kycFormField.pan_card_no);

            if (this.kycFormField.aadhar_no == '' || this.kycFormField.aadhar_no == null) {
              this.presentToast(this.tran_required_aadhar_no);
            } else if (this.aadharcardBlob == null) {
              this.presentToast(this.tran_required_aadhar_card_img);
            } else {
              this.presentLoading(); // var kycFormField = {
              //   'linked_phonenumber': this.kycFormField.linked_phonenumber,
              //   'pan_card_no': this.kycFormField.pan_card_no,
              //   'aadhar_no': this.kycFormField.aadhar_no,
              //   'cancel_check_no':this.kycFormField.cancel_check_no,
              //   'terms_condition':this.tc,
              //   'oldpan_card_img':this.pan_card_img,
              //   'pan_card_img':this.pan_card_img,
              //   'base64pancardImage':this.base64pancardImage,
              //   'oldaadhar_card_img':this.aadhar_card_img,
              //   'aadhar_card_img':this.aadhar_card_img,
              //   'base64aadharcardImage':this.base64aadharcardImage,
              //   'oldcancel_cheque_img':this.cancel_cheque_img,
              //   'cancel_cheque_img':this.cancel_cheque_img,
              //   'base64cancelchequeImage':this.base64cancelchequeImage,
              //   'chunkedMode': false,
              //   'mimeType': "multipart/form-data",
              //   // enctype
              // };

              var uploadUrl = 'https://smartwiremen.com/api/auth/uploadKyc';
              var formData = new FormData();
              formData.append('linked_phonenumber', this.kycFormField.linked_phonenumber);
              formData.append('pan_card_no', this.kycFormField.pan_card_no);
              formData.append('aadhar_no', this.kycFormField.aadhar_no);
              formData.append('cancel_check_no', this.kycFormField.cancel_check_no);
              formData.append('terms_condition', this.tc);

              if (this.pancardBlob == null) {
                formData.append('pan_card_img', null);
              } else {
                formData.append('pan_card_img', this.pancardBlob, this.pan_card_img);
              }

              if (this.cancelchequeBlob == null) {
                formData.append('cancel_cheque_img', null);
              } else {
                formData.append('cancel_cheque_img', this.cancelchequeBlob, this.cancel_cheque_img);
              }

              formData.append('aadhar_card_img', this.aadharcardBlob, this.aadhar_card_img);
              formData.append('token', this.token.get());
              console.log('add', this.aadharcardBlob);
              this.apiService.uploadKyc(uploadUrl, formData).subscribe(function (data) {
                _this8.loadingCtrl.dismiss();

                if (data) {
                  _this8.presentToast(_this8.tran_kyc_updated);

                  _this8.router.navigate(['success']);

                  _this8.showKycForm = false;
                  _this8.showKycFormdistwo = true;
                  _this8.showKycFormdisone = true;
                } else {
                  _this8.presentToast(_this8.tran_went_wrong);
                }
              }, function (error) {
                return _this8.handleError(error);
              });
            }
          }
        }, {
          key: "handleResponse",
          value: function handleResponse(data) {
            this.loadingCtrl.dismiss();
            this.events.publish({
              name: 'update:kycdata',
              params: data
            });
            console.log();
            this.events.publish({
              name: 'update:userdata',
              params: data
            });
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            this.loadingCtrl.dismiss();
            var errorMsg = '';

            if (error.status == 401) {
              errorMsg = error.error.message;
            } else {
              errorMsg = error.error.error;
            }

            if (errorMsg != '') {
              this.presentToast(errorMsg);
            }
          } // takePhoto(){
          //   const options: CameraOptions = {
          //     quality: 70,
          //     destinationType: this.camera.DestinationType.FILE_URI,
          //     encodingType: this.camera.EncodingType.JPEG,
          //     mediaType: this.camera.MediaType.PICTURE,
          //     correctOrientation: true
          //   }
          //   this.camera.getPicture(options).then((imageData) => {
          //   //  this.profile_pic = 'data:image/jpeg;base64,' + imageData;
          //    this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
          //     entry.file(file => {
          //       console.log(file);
          //       this.file_name=file.name
          //       this.base64Image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
          //       this.cf.detectChanges();
          //       this.readFile(file);
          //     });
          //   });
          //   }, (err) => {
          //    this.base64Image = null;      
          //   });
          // }

        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 3000,
                      position: 'middle'
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var loading, _yield$loading$onDidD, role, data;

              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingCtrl.create({
                      spinner: 'crescent',
                      message: this.tran_please_wait + '...'
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    _context2.next = 7;
                    return loading.onDidDismiss();

                  case 7:
                    _yield$loading$onDidD = _context2.sent;
                    role = _yield$loading$onDidD.role;
                    data = _yield$loading$onDidD.data;
                    console.log('Loading dismissed!');

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['home']);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {// this.showKycFormdistwo = false;
            // this.showKycFormdisone = false;
          }
        }]);
      }();

      KycPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
        }, {
          type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventsService"]
        }, {
          type: _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_10__["TokenService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_12__["DatePicker"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      };

      KycPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kyc',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./kyc.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/kyc/kyc.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./kyc.page.scss */
        "./src/app/kyc/kyc.page.scss"))["default"]]
      })], KycPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=kyc-kyc-module-es5.js.map