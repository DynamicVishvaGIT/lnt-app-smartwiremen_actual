(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scanretailer-scanretailer-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/scanretailer/scanretailer.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scanretailer/scanretailer.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppScanretailerScanretailerPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Scan Retailer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <form (ngSubmit)=\"submitRetailerForm()\">\n    <ion-row>\n      <ion-item class=\"ion-margin-bottom\" >\n        <ion-label ><ion-icon slot=\"start\" name=\"list\"></ion-icon></ion-label>\n        <ion-select placeholder=\"Select Retailer\" [(ngModel)]=\"retailerid\" name=\"retailerid\">\n          <ion-select-option value=\"{{retailer.id}}\" *ngFor=\"let retailer of retailer_list\">{{retailer.first_name}} {{retailer.last_name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-row>\n    <ion-button class=\"btn-create\" type=\"submit\">{{ 'submit' | translate }}</ion-button>\n    <ion-row class=\"or\">\n      <ion-col><h2>{{ 'or' | translate }}</h2></ion-col>\n    </ion-row>\n</form>\n  <br>\n  <ion-button class=\"btn-create \"   (click)=\"scanCode()\" color=\"secondary\"><ion-icon style=\"margin-right: 8px;\" name=\"scan-sharp\"></ion-icon>{{ 'scan_code' | translate }}</ion-button>\n  <br>\n  <ion-card *ngIf=\"scannedCode\">\n    <ion-card-content>\n      {{ 'result_form_scan' | translate }} : {{ scannedCode }}\n    </ion-card-content>\n  </ion-card>\n\n  <br>\n  <ion-card *ngIf=\"retailer\">\n    <ion-card-content>\n    Last Retailer scanned   \n    <br>\n    <b>{{retailer.first_name}} {{retailer.last_name}}</b>\n    <br>\n\n    <b>{{retailer.username}} </b>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/scanretailer/scanretailer-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/scanretailer/scanretailer-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: ScanretailerPageRoutingModule */

    /***/
    function srcAppScanretailerScanretailerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScanretailerPageRoutingModule", function () {
        return ScanretailerPageRoutingModule;
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


      var _scanretailer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./scanretailer.page */
      "./src/app/scanretailer/scanretailer.page.ts");

      var routes = [{
        path: '',
        component: _scanretailer_page__WEBPACK_IMPORTED_MODULE_3__["ScanretailerPage"]
      }];

      var ScanretailerPageRoutingModule = /*#__PURE__*/_createClass(function ScanretailerPageRoutingModule() {
        _classCallCheck(this, ScanretailerPageRoutingModule);
      });

      ScanretailerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ScanretailerPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/scanretailer/scanretailer.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/scanretailer/scanretailer.module.ts ***!
      \*****************************************************/

    /*! exports provided: ScanretailerPageModule */

    /***/
    function srcAppScanretailerScanretailerModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScanretailerPageModule", function () {
        return ScanretailerPageModule;
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


      var _scanretailer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./scanretailer-routing.module */
      "./src/app/scanretailer/scanretailer-routing.module.ts");
      /* harmony import */


      var _scanretailer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./scanretailer.page */
      "./src/app/scanretailer/scanretailer.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var ScanretailerPageModule = /*#__PURE__*/_createClass(function ScanretailerPageModule() {
        _classCallCheck(this, ScanretailerPageModule);
      });

      ScanretailerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _scanretailer_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScanretailerPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
        declarations: [_scanretailer_page__WEBPACK_IMPORTED_MODULE_6__["ScanretailerPage"]]
      })], ScanretailerPageModule);
      /***/
    },

    /***/
    "./src/app/scanretailer/scanretailer.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/scanretailer/scanretailer.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppScanretailerScanretailerPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --border: none !important;\n  --box-shadow: none !important;\n  --border-radius: 30px !important;\n  --background: #f5f5f5 !important;\n  width: 100%;\n}\n\n.or ion-col h2 {\n  background-color: #111;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  display: inline-block;\n  line-height: 50px;\n  margin-top: 15px !important;\n  border-radius: 50%;\n  font-size: 16px;\n  color: #fff;\n}\n\n.qr-input-main {\n  padding: 0 !important;\n}\n\n.item-md.item-block .item-inner {\n  padding-right: 0;\n  border-bottom: none;\n}\n\n.qr-input {\n  border-radius: 30px;\n  background-color: #f5f5f5;\n  margin-bottom: 10px !important;\n  width: 100% !important;\n  max-width: 100% !important;\n}\n\n.btn-create {\n  --box-shadow: none;\n  --border-radius: 30px;\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  --padding-left: 25px;\n  --padding-right: 25px;\n  width: 100%;\n  --color: #ffffff;\n}\n\n.or {\n  text-align: center;\n  width: 100%;\n}\n\nion-item ion-icon {\n  margin-top: 5px !important;\n  color: #a9a9a9;\n  font-size: 22px;\n}\n\n.item-select ion-label {\n  flex: initial;\n  max-width: 200px;\n}\n\nion-select {\n  width: 100%;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NhbnJldGFpbGVyL3NjYW5yZXRhaWxlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFFRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUdGOztBQURBO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBO0VBSUUsYUFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQU1GIiwiZmlsZSI6InNyYy9hcHAvc2NhbnJldGFpbGVyL3NjYW5yZXRhaWxlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIC0tYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm9yIGlvbi1jb2wgaDIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucXItaW5wdXQtbWFpbiB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5xci1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tY3JlYXRlIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIC0tcGFkZGluZy10b3A6IDI1cHg7XG4gIC0tcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAtLXBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuLm9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1pdGVtIGlvbi1pY29uIHtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYTlhOWE5O1xuICBmb250LXNpemU6IDIycHg7XG59XG4uaXRlbS1zZWxlY3QgaW9uLWxhYmVsIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogaW5pdGlhbDtcbiAgLXdlYmtpdC1mbGV4OiBpbml0aWFsO1xuICAtbXMtZmxleDogaW5pdGlhbDtcbiAgZmxleDogaW5pdGlhbDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/scanretailer/scanretailer.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/scanretailer/scanretailer.page.ts ***!
      \***************************************************/

    /*! exports provided: ScanretailerPage */

    /***/
    function srcAppScanretailerScanretailerPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScanretailerPage", function () {
        return ScanretailerPage;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../providers/api-service/api.service */
      "./src/app/providers/api-service/api.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ScanretailerPage = /*#__PURE__*/function () {
        function ScanretailerPage(barcodeScanner, toastCtrl, loadingCtrl, apiService, translate, menuCtrl, router) {
          var _this = this;

          _classCallCheck(this, ScanretailerPage);

          this.barcodeScanner = barcodeScanner;
          this.toastCtrl = toastCtrl;
          this.loadingCtrl = loadingCtrl;
          this.apiService = apiService;
          this.translate = translate;
          this.menuCtrl = menuCtrl;
          this.router = router;
          this.tran_please_wait = 'Please Wait';
          this.tran_required_retailerid = 'Please Select Retailer';
          this.loading = {};
          this.menuCtrl.enable(true, 'myMenu');
          this.translate.get('please_wait').subscribe(function (res) {
            _this.tran_please_wait = res;
          });
        }

        return _createClass(ScanretailerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.lastRetailer();
            this.userRetailerList();
          }
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            console.log('ionViewDidLoad ScanretailerPage');
          }
        }, {
          key: "scanCode",
          value: function scanCode() {
            var _this2 = this;

            this.barcodeScanner.scan().then(function (barcodeData) {
              _this2.scannedCode = barcodeData.text;

              if (_this2.scannedCode != '' && _this2.scannedCode != null) {
                _this2.applyQrcode(_this2.scannedCode);
              }
            }, function (err) {
              console.log('Error: ', err);
            });
          }
        }, {
          key: "applyQrcode",
          value: function applyQrcode(code) {
            var _this3 = this;

            this.presentLoading();
            this.apiService.mapRetailer(code).subscribe(function (data) {
              return _this3.handleResponse(data);
            }, function (error) {
              return _this3.handleError(error);
            });
          }
        }, {
          key: "handleResponse",
          value: function handleResponse(data) {
            console.log(data);
            this.loadingCtrl.dismiss();
            var msg = data.message;
            this.presentToast(msg);
            this.scannedCode = null;
            this.lastRetailer();
            this.userRetailerList();
            this.apiService.checkActivity().subscribe(function (data) {
              console.log('check successful', data);
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

            if (errorMsg != '') {
              this.presentToast(errorMsg);
            }
          }
        }, {
          key: "lastRetailer",
          value: function lastRetailer() {
            var _this4 = this;

            this.apiService.lastRetailer().subscribe(function (data) {
              console.log('dta', data);
              _this4.retailer = data['retailer'];
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "userRetailerList",
          value: function userRetailerList() {
            var _this5 = this;

            this.apiService.userRetailerList().subscribe(function (data) {
              console.log('dta', data);
              _this5.retailer_list = data;
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var loading, _yield$loading$onDidD, role, data;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      spinner: 'crescent',
                      message: this.tran_please_wait + '...'
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    _context.next = 7;
                    return loading.onDidDismiss();

                  case 7:
                    _yield$loading$onDidD = _context.sent;
                    role = _yield$loading$onDidD.role;
                    data = _yield$loading$onDidD.data;
                    console.log('Loading dismissed!');

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 3000,
                      position: 'middle'
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
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
          key: "submitRetailerForm",
          value: function submitRetailerForm() {
            var _this6 = this;

            console.log(this.retailerid);

            if (this.retailerid == '' || this.retailerid == null) {
              this.presentToast(this.tran_required_retailerid);
            } else {
              this.presentLoading();
              this.apiService.mapRetailerManual(this.retailerid).subscribe(function (data) {
                return _this6.handleResponse(data);
              }, function (error) {
                return _this6.handleError(error);
              });
            }
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.lastRetailer();
            this.userRetailerList();
            event.target.complete();
          }
        }]);
      }();

      ScanretailerPage.ctorParameters = function () {
        return [{
          type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      ScanretailerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scanretailer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./scanretailer.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/scanretailer/scanretailer.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./scanretailer.page.scss */
        "./src/app/scanretailer/scanretailer.page.scss"))["default"]]
      })], ScanretailerPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=scanretailer-scanretailer-module-es5.js.map