(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scancode-scancode-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/scancode/scancode.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scancode/scancode.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppScancodeScancodePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <div class=\"ion-padding-top ion-padding-horizontal\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: start;margin-left: -26px;\">\n          <ion-menu-button></ion-menu-button>\n        </ion-col>\n        <ion-col size=\"8\" style=\"text-align: center;\">\n          <strong class=\"header\" style=\"color:#131313;\">{{ 'register_promo_code' | translate }}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"ion-padding-top ion-padding-horizontal gap\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" style=\"text-align: center;\">\n          <div class=\"circle-promocode-container\">\n            <img src=\"../../assets/imgs/Group 3631.svg\" alt=\"\" class=\"img\">\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"gap1\">\n    <form (ngSubmit)=\"submitCounterBoyForm()\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">Select Country Boy</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <ion-select name=\"counterboyid\" [(ngModel)]=\"counterboyid\" placeholder=\"Select Counter Boy\" class=\"ion-select\">\n                <ion-select-option >\n                  None\n                </ion-select-option>\n                <ion-select-option value=\"{{counterboy.id}}\" *ngFor=\"let counterboy of counterboy_list\" >\n                  {{counterboy.name}} \n                </ion-select-option>\n              </ion-select>          \n            </ion-item> \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-button class=\"btn-create\" type=\"submit\" style=\"width: 94%;margin-top: 10px;\">{{ 'submit' | translate }}</ion-button>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n  <div class=\"gap5\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <!-- <ion-label class=\"required ion-label\">Enter Promo Code here</ion-label> -->\n          <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;position: relative;\">\n            <ion-input type=\"text\" [(ngModel)]=\"inputCode\" name=\"inputCode\" placeholder=\"{{ 'enter_promo_code' | translate }}\" class=\"ion-input\" style=\"z-index: auto;\">\n            </ion-input>\n            <ion-button fill=\"clear\" class=\"apply-button\" (click)=\"submitQrcodeForm()\">{{ 'Apply' | translate }}</ion-button>\n          </ion-item> \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"gap4\">\n    <ion-row class=\"or\">\n      <ion-col><h2>{{ 'or' | translate }}</h2></ion-col>\n    </ion-row>\n  </div>\n  <div class=\"gap3\">\n    <ion-button class=\"btn-create\" (click)=\"scanCode()\" color=\"secondary\"><ion-icon name=\"scan-sharp\"></ion-icon>&nbsp;&nbsp;{{ 'scan_code' | translate }}</ion-button>\n  </div>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{ 'register_promo_code' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <form (ngSubmit)=\"submitCounterBoyForm()\">\n    <ion-row>\n      <ion-item class=\"ion-margin-bottom\" >\n        <ion-label ><ion-icon slot=\"start\" name=\"list\"></ion-icon></ion-label>\n        <ion-select placeholder=\"Select Counter Boy\" [(ngModel)]=\"counterboyid\" name=\"counterboyid\">\n          <ion-select-option >\n            None\n          </ion-select-option>\n          <ion-select-option value=\"{{counterboy.id}}\" *ngFor=\"let counterboy of counterboy_list\" >\n            {{counterboy.name}} \n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-row>\n    <ion-button class=\"btn-create\" type=\"submit\">{{ 'submit' | translate }}</ion-button>\n  </form>\n  <br>\n  <hr>\n  <ion-card *ngIf=\"scannedCode\">\n    <ion-card-content>\n      {{ 'result_form_scan' | translate }} : {{ scannedCode }}\n    </ion-card-content>\n  </ion-card>\n  <br>\n  <ion-card *ngIf=\"counterboy\">\n    <ion-card-content>\n    Last counter boy scanned   \n    <br>\n    <b>{{counterboy.name}} </b>\n    <br>\n    <b>{{counterboy.mobile_no}} </b>\n    </ion-card-content>\n  </ion-card>\n  <br>\n  <form (ngSubmit)=\"submitQrcodeForm()\">\n      <ion-input type=\"text\" placeholder=\"{{ 'enter_promo_code' | translate }}\" class=\"qr-input\" [(ngModel)]=\"inputCode\" name=\"inputCode\">\n      </ion-input>\n    <ion-button class=\"btn-create\"    type=\"submit\"><ion-icon name=\"barcode-sharp\"></ion-icon>{{ 'register' | translate }}</ion-button>\n  </form>\n  \n  <ion-row class=\"or\">\n    <ion-col><h2>{{ 'or' | translate }}</h2></ion-col>\n  </ion-row>\n  <ion-button class=\"btn-create \"    (click)=\"scanCode()\" color=\"secondary\"><ion-icon name=\"scan-sharp\"></ion-icon>{{ 'scan_code' | translate }}</ion-button>\n\n  <ion-card *ngIf=\"scannedCode\">\n    <ion-card-content>\n      {{ 'result_form_scan' | translate }} : {{ scannedCode }}\n    </ion-card-content>\n  </ion-card>\n</ion-content> -->\n";
      /***/
    },

    /***/
    "./src/app/scancode/scancode-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/scancode/scancode-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ScancodePageRoutingModule */

    /***/
    function srcAppScancodeScancodeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScancodePageRoutingModule", function () {
        return ScancodePageRoutingModule;
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


      var _scancode_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./scancode.page */
      "./src/app/scancode/scancode.page.ts");

      var routes = [{
        path: '',
        component: _scancode_page__WEBPACK_IMPORTED_MODULE_3__["ScancodePage"]
      }];

      var ScancodePageRoutingModule = /*#__PURE__*/_createClass(function ScancodePageRoutingModule() {
        _classCallCheck(this, ScancodePageRoutingModule);
      });

      ScancodePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ScancodePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/scancode/scancode.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/scancode/scancode.module.ts ***!
      \*********************************************/

    /*! exports provided: ScancodePageModule */

    /***/
    function srcAppScancodeScancodeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScancodePageModule", function () {
        return ScancodePageModule;
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


      var _scancode_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./scancode-routing.module */
      "./src/app/scancode/scancode-routing.module.ts");
      /* harmony import */


      var _scancode_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./scancode.page */
      "./src/app/scancode/scancode.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var ScancodePageModule = /*#__PURE__*/_createClass(function ScancodePageModule() {
        _classCallCheck(this, ScancodePageModule);
      });

      ScancodePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _scancode_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScancodePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
        declarations: [_scancode_page__WEBPACK_IMPORTED_MODULE_6__["ScancodePage"]]
      })], ScancodePageModule);
      /***/
    },

    /***/
    "./src/app/scancode/scancode.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/scancode/scancode.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppScancodeScancodePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: none;\n  background-color: #EFF3F6;\n}\n\n.img {\n  width: 100%;\n}\n\n.gap {\n  margin-top: 10px;\n}\n\n.gap1 {\n  margin-top: 70px;\n  padding-left: 10px;\n}\n\n.gap3 {\n  margin-top: -21px;\n  padding-left: 19px;\n  padding-right: 25px;\n}\n\n.gap4 {\n  margin-top: -27px;\n}\n\n.gap5 {\n  margin-top: 10px;\n  padding-left: 10px;\n}\n\n.circle-promocode-container {\n  width: 180px;\n  /* Adjust the size as needed */\n  height: 180px;\n  /* Adjust the size as needed */\n  background-color: #fff;\n  /* Adjust the color as needed */\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  /* Center the circle container */\n}\n\n.ion-input {\n  border-radius: 10px;\n  --padding-start: 10px !important;\n  height: 50px;\n  background: white !important;\n}\n\n.apply-button {\n  position: absolute;\n  right: 16px;\n  top: 42%;\n  transform: translateY(-50%);\n  height: 100%;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  font-size: 12px;\n  color: #025C8D;\n  /* Customize this color as needed */\n  text-transform: none;\n  font-weight: 900;\n}\n\n.or {\n  text-align: center;\n  width: 100%;\n}\n\n.or ion-col h2 {\n  text-align: center;\n  display: inline-block;\n  line-height: 50px;\n  margin-top: 15px !important;\n  border-radius: 50%;\n  font-size: 16px;\n  font-weight: 900;\n  color: black;\n}\n\n.btn-create {\n  --box-shadow: none;\n  --border-radius: 10px;\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  --padding-left: 25px;\n  --padding-right: 25px;\n  width: 100%;\n  color: #fff;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NhbmNvZGUvc2NhbmNvZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUlGOztBQUZBO0VBQ0UsaUJBQUE7QUFLRjs7QUFIQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFKQTtFQUNFLFlBQUE7RUFBYyw4QkFBQTtFQUNkLGFBQUE7RUFBZSw4QkFBQTtFQUNmLHNCQUFBO0VBQXdCLCtCQUFBO0VBQ3hCLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQWdCLGdDQUFBO0FBV2xCOztBQVRBO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQVlGOztBQVZBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUFnQixtQ0FBQTtFQUNoQixvQkFBQTtFQUNBLGdCQUFBO0FBY0Y7O0FBWkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFlRjs7QUFiQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBZ0JGOztBQWRBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQWlCRiIsImZpbGUiOiJzcmMvYXBwL3NjYW5jb2RlL3NjYW5jb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGM0Y2O1xufVxuLmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5nYXB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZ2FwMXtcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmdhcDN7XG4gIG1hcmdpbi10b3A6IC0yMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG4uZ2FwNHtcbiAgbWFyZ2luLXRvcDogLTI3cHg7XG59XG4uZ2FwNXtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmNpcmNsZS1wcm9tb2NvZGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDE4MHB4OyAvKiBBZGp1c3QgdGhlIHNpemUgYXMgbmVlZGVkICovXG4gIGhlaWdodDogMTgwcHg7IC8qIEFkanVzdCB0aGUgc2l6ZSBhcyBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgLyogQWRqdXN0IHRoZSBjb2xvciBhcyBuZWVkZWQgKi9cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRlciB0aGUgY2lyY2xlIGNvbnRhaW5lciAqL1xufVxuLmlvbi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6NTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5hcHBseS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xuICB0b3A6IDQyJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAyNUM4RDsgLyogQ3VzdG9taXplIHRoaXMgY29sb3IgYXMgbmVlZGVkICovXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLm9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5vciBpb24tY29sIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogYmxhY2s7XG59XG4uYnRuLWNyZWF0ZSB7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAtLXBhZGRpbmctdG9wOiAyNXB4O1xuICAtLXBhZGRpbmctbGVmdDogMjVweDtcbiAgLS1wYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIC5vciB7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyB9XG5cbi8vIC5vciBpb24tY29sIGgyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbi8vICAgd2lkdGg6IDUwcHg7XG4vLyAgIGhlaWdodDogNTBweDtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuLy8gICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgZm9udC1zaXplOiAxNnB4O1xuLy8gICBjb2xvcjogI2ZmZjtcbi8vIH1cblxuLy8gLnFyLWlucHV0LW1haW4ge1xuLy8gICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwO1xuLy8gICBib3JkZXItYm90dG9tOiBub25lO1xuLy8gfVxuXG4vLyAucXItaW5wdXQge1xuLy8gICBib3JkZXItcmFkaXVzOiAzMHB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuLy8gICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4vLyAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4vLyAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuLy8gICBoZWlnaHQ6IDUwcHg7XG4vLyB9XG5cbi8vIC5idG4tY3JlYXRlIHtcbi8vICAgLS1ib3gtc2hhZG93OiBub25lO1xuLy8gICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4vLyAgIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4vLyAgIC0tcGFkZGluZy10b3A6IDI1cHg7XG4vLyAgIC0tcGFkZGluZy1sZWZ0OiAyNXB4O1xuLy8gICAtLXBhZGRpbmctcmlnaHQ6IDI1cHg7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBjb2xvcjogI2ZmZjtcbi8vIH1cbi8vIGlvbi1pY29uIHtcbi8vICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4vLyB9XG5cblxuLy8gZm9ybXtcbi8vICAgaW9uLWl0ZW0ge1xuLy8gICAgIC0tYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgIH1cbi8vICAgLm9yIGlvbi1jb2wgaDIge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4vLyAgICAgd2lkdGg6IDUwcHg7XG4vLyAgICAgaGVpZ2h0OiA1MHB4O1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4vLyAgICAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgICBmb250LXNpemU6IDE2cHg7XG4vLyAgICAgY29sb3I6ICNmZmY7XG4vLyAgIH1cbiAgXG4vLyAgIC5xci1pbnB1dC1tYWluIHtcbi8vICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4vLyAgIH1cbiAgXG4vLyAgIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4vLyAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbi8vICAgfVxuICBcbi8vICAgLnFyLWlucHV0IHtcbi8vICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuLy8gICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4vLyAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4vLyAgIH1cbiAgXG4vLyAgIC5idG4tY3JlYXRlIHtcbi8vICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4vLyAgICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuLy8gICAgIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4vLyAgICAgLS1wYWRkaW5nLXRvcDogMjVweDtcbi8vICAgICAtLXBhZGRpbmctbGVmdDogMjVweDtcbi8vICAgICAtLXBhZGRpbmctcmlnaHQ6IDI1cHg7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgLS1jb2xvcjogI2ZmZmZmZjtcbi8vICAgfVxuLy8gICAub3Ige1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgfVxuLy8gICBpb24taXRlbSBpb24taWNvbiB7XG4vLyAgICAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgY29sb3I6ICNhOWE5YTk7XG4vLyAgICAgZm9udC1zaXplOiAyMnB4O1xuLy8gICB9XG4vLyAgIC5pdGVtLXNlbGVjdCBpb24tbGFiZWwge1xuLy8gICAgIC13ZWJraXQtYm94LWZsZXg6IGluaXRpYWw7XG4vLyAgICAgLXdlYmtpdC1mbGV4OiBpbml0aWFsO1xuLy8gICAgIC1tcy1mbGV4OiBpbml0aWFsO1xuLy8gICAgIGZsZXg6IGluaXRpYWw7XG4vLyAgICAgbWF4LXdpZHRoOiAyMDBweDtcbi8vICAgfVxuLy8gICBpb24tc2VsZWN0IHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBtYXgtd2lkdGg6IDEwMCU7XG4vLyAgIH1cbiAgXG4vLyB9Il19 */";
      /***/
    },

    /***/
    "./src/app/scancode/scancode.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/scancode/scancode.page.ts ***!
      \*******************************************/

    /*! exports provided: ScancodePage */

    /***/
    function srcAppScancodeScancodePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScancodePage", function () {
        return ScancodePage;
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


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../providers/api-service/api.service */
      "./src/app/providers/api-service/api.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../providers/events-service/events.service */
      "./src/app/providers/events-service/events.service.ts");

      var ScancodePage = /*#__PURE__*/function () {
        function ScancodePage(barcodeScanner, toastCtrl, loadingCtrl, apiService, events, translate, menuCtrl) {
          var _this = this;

          _classCallCheck(this, ScancodePage);

          this.barcodeScanner = barcodeScanner;
          this.toastCtrl = toastCtrl;
          this.loadingCtrl = loadingCtrl;
          this.apiService = apiService;
          this.events = events;
          this.translate = translate;
          this.menuCtrl = menuCtrl;
          this.error = null;
          this.loading = {};
          this.qrData = null;
          this.inputCode = null;
          this.scannedCode = null;
          this.tran_please_wait = 'Please Wait';
          this.tran_required_promocode = 'Please Enter Promo Code';
          this.tran_required_counterboy = 'Please Select Counter Boy';
          this.menuCtrl.enable(true, 'myMenu');
          this.translate.get('please_wait').subscribe(function (res) {
            _this.tran_please_wait = res;
          });
          this.translate.get('required_promocode').subscribe(function (res) {
            _this.tran_required_promocode = res;
          });
          this.apiService.home().subscribe(function (data) {
            _this.user_id = data['id'];
          }, function (error) {
            return _this.handleError(error);
          });
        }

        return _createClass(ScancodePage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.lastCounterBoy();
            this.userCounterBoyList();
          }
        }, {
          key: "lastCounterBoy",
          value: function lastCounterBoy() {
            var _this2 = this;

            this.apiService.lastCounterBoy().subscribe(function (data) {
              console.log('counterboy', data);
              _this2.counterboy = data['counter_boy'];
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "userCounterBoyList",
          value: function userCounterBoyList() {
            var _this3 = this;

            this.apiService.userCounterBoyList().subscribe(function (data) {
              console.log('dta', data);
              _this3.counterboy_list = data;
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "submitCounterBoyForm",
          value: function submitCounterBoyForm() {
            var _this4 = this;

            console.log(this.counterboyid);

            if (this.counterboyid == '' || this.counterboyid == null) {
              this.presentToast(this.tran_required_counterboy);
            } else {
              this.presentLoading();
              this.apiService.mapCounterBoyManual(this.counterboyid).subscribe(function (data) {
                return _this4.handleCounterBoyResponse(data);
              }, function (error) {
                return _this4.handleCounterBoyError(error);
              });
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "handleCounterBoyResponse",
          value: function handleCounterBoyResponse(data) {
            console.log(data);
            this.loadingCtrl.dismiss();

            if (data) {
              this.presentToast("Counter Boy mapped successfully");
            }

            this.scannedCode = '';
            this.lastCounterBoy();
            this.userCounterBoyList(); // this.apiService.checkActivity().subscribe(data=>{
            //   console.log('check successful',data)
            // },error=>{
            //   console.log('err',error)
            // })
          }
        }, {
          key: "handleCounterBoyError",
          value: function handleCounterBoyError(error) {
            console.log(error);
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
          }
        }, {
          key: "scanCode",
          value: function scanCode() {
            var _this5 = this;

            this.barcodeScanner.scan().then(function (barcodeData) {
              _this5.scannedCode = barcodeData.text;

              if (_this5.scannedCode != '' && _this5.scannedCode != null) {
                _this5.applyQrcodetest(_this5.scannedCode);
              }
            }, function (err) {
              console.log('Error: ', err);
            });
          }
        }, {
          key: "submitQrcodeForm",
          value: function submitQrcodeForm() {
            var toast = this.toastCtrl.create({
              message: '',
              duration: 1000,
              position: 'middle'
            });

            if (this.inputCode == '' || this.inputCode == null) {
              this.presentToast(this.tran_required_promocode);
            } else {
              this.applyQrcodetest(this.inputCode);
            }
          }
        }, {
          key: "applyQrcode",
          value: function applyQrcode(code) {
            var _this6 = this;

            this.presentLoading();
            this.apiService.submitQrCode(code).subscribe(function (data) {
              return _this6.handleResponse(data, code);
            }, function (error) {
              return _this6.handleError(error);
            });
          }
        }, {
          key: "applyQrcodetest",
          value: function applyQrcodetest(code) {
            var _this7 = this;

            this.apiService.submitQrCodeTest(code, this.counterboy.id).subscribe(function (data) {
              return console.log('a', data);
            }, function (error) {
              return _this7.handleError(error);
            });
          }
        }, {
          key: "handleResponse",
          value: function handleResponse(data, code) {
            var _this8 = this;

            console.log(data);
            this.loadingCtrl.dismiss();
            var msg = data.message;
            this.presentToast(msg);
            this.qrData = null;
            this.inputCode = null;
            this.scannedCode = null;
            this.apiService.home().subscribe(function (data) {
              return _this8.events.publish({
                name: 'update:userdata',
                params: data
              });
            });
            this.apiService.checkRetailerID(code).subscribe(function (data) {
              console.log('check successful', data);
            }, function (error) {
              console.log('err', error);
            });
            this.apiService.checkActivity().subscribe(function (data) {
              console.log('check successful', data);
            }, function (error) {
              console.log('err', error);
            });
            this.apiService.nextGift().subscribe(function (data) {
              console.log('next gift', data);

              if (data['point'] !== 0) {
                var notification_obj = {
                  "heading": "SMARTWIREMEN",
                  "message": "You need " + data['point'] + " points to get " + data['gift_name'],
                  "url": "",
                  "user_id": _this8.user_id
                };
              } else {
                var notification_obj = {
                  "heading": "SMARTWIREMEN",
                  "message": "Your next gift would be " + data['gift_name'],
                  "url": "",
                  "user_id": _this8.user_id
                };
              }

              _this8.apiService.sendNotification(notification_obj).subscribe(function (data) {
                console.log(data);
              }, function (error) {
                console.log(error);
              });
            }, function (error) {
              console.log('err', error);
            });
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            console.log(error);
            this.loadingCtrl.dismiss();
            var errorMsg = '';

            if (error.status == 401) {
              errorMsg = error.error.message;
            } else {
              errorMsg = error.error.error;
            }

            var toast = this.toastCtrl.create({
              message: '',
              duration: 3000,
              position: 'middle'
            });

            if (errorMsg != '') {
              this.presentToast(errorMsg);
            }
          }
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
          key: "doRefresh",
          value: function doRefresh(event) {
            this.lastCounterBoy();
            this.userCounterBoyList();
            event.target.complete();
          }
        }]);
      }();

      ScancodePage.ctorParameters = function () {
        return [{
          type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }];
      };

      ScancodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scancode',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./scancode.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/scancode/scancode.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./scancode.page.scss */
        "./src/app/scancode/scancode.page.scss"))["default"]]
      })], ScancodePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=scancode-scancode-module-es5.js.map