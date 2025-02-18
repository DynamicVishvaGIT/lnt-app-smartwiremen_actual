(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scancounterboy-scancounterboy-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/scancounterboy/scancounterboy.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scancounterboy/scancounterboy.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppScancounterboyScancounterboyPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Scan Counter Boy</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"ion-padding-top ion-padding-horizontal\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: start;margin-left: -10px;\" (click)=\"goBack()\">\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"8\" style=\"text-align: center;\">\n          <strong class=\"header\" style=\"color:#131313;\">Scan Counter Boy</strong>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <form (ngSubmit)=\"submitCounterBoyForm()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label class=\"ion-label\">Select Country Boy</ion-label>\n          <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n            <ion-select name=\"counterboyid\" [(ngModel)]=\"counterboyid\" placeholder=\"Select Counter Boy\" class=\"ion-select\">\n              <!-- <ion-select-option >\n                None\n              </ion-select-option> -->\n              <ion-select-option value=\"{{counterboy.id}}\" *ngFor=\"let counterboy of counterboy_list\" >\n                {{counterboy.name}} \n              </ion-select-option>\n            </ion-select>          \n          </ion-item> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-button class=\"btn-create\" type=\"submit\" style=\"width: 94%;margin-top: 10px;\">{{ 'submit' | translate }}</ion-button>\n      </ion-row>\n    </ion-grid>\n    <!-- <ion-row>\n      <ion-item class=\"ion-margin-bottom\" >\n        <ion-label ><ion-icon slot=\"start\" name=\"list\"></ion-icon></ion-label>\n        <ion-select placeholder=\"Select Counter Boy\" [(ngModel)]=\"counterboyid\" name=\"counterboyid\">\n          <ion-select-option value=\"{{counterboy.id}}\" *ngFor=\"let counterboy of counterboy_list\">\n            {{counterboy.name}} \n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-row>\n    <ion-button class=\"btn-create\" type=\"submit\">{{ 'submit' | translate }}</ion-button> -->\n    <ion-row class=\"or\">\n      <ion-col><h2>{{ 'or' | translate }}</h2></ion-col>\n    </ion-row>\n</form>\n  <br>\n  <ion-button class=\"btn-create\"   (click)=\"scanCode()\" color=\"secondary\"><ion-icon style=\"margin-right: 8px;\" name=\"scan-sharp\"></ion-icon>{{ 'scan_code' | translate }}</ion-button>\n  <br>\n  <br>\n  <ion-card *ngIf=\"scannedCode\">\n    <ion-card-content>\n      {{ 'result_form_scan' | translate }} : {{ scannedCode }}\n    </ion-card-content>\n  </ion-card>\n\n  <br>\n  <ion-card *ngIf=\"counterboy\" style=\"width: 90%;\">\n    <ion-card-content>\n    Last counter boy scanned   \n    <br>\n    <b>{{counterboy.name}} </b>\n    <br>\n    <b>{{counterboy.mobile_no}} </b>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/scancounterboy/scancounterboy-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/scancounterboy/scancounterboy-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ScancounterboyPageRoutingModule */

    /***/
    function srcAppScancounterboyScancounterboyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScancounterboyPageRoutingModule", function () {
        return ScancounterboyPageRoutingModule;
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


      var _scancounterboy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./scancounterboy.page */
      "./src/app/scancounterboy/scancounterboy.page.ts");

      var routes = [{
        path: '',
        component: _scancounterboy_page__WEBPACK_IMPORTED_MODULE_3__["ScancounterboyPage"]
      }];

      var ScancounterboyPageRoutingModule = /*#__PURE__*/_createClass(function ScancounterboyPageRoutingModule() {
        _classCallCheck(this, ScancounterboyPageRoutingModule);
      });

      ScancounterboyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ScancounterboyPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/scancounterboy/scancounterboy.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/scancounterboy/scancounterboy.module.ts ***!
      \*********************************************************/

    /*! exports provided: ScancounterboyPageModule */

    /***/
    function srcAppScancounterboyScancounterboyModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScancounterboyPageModule", function () {
        return ScancounterboyPageModule;
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


      var _scancounterboy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./scancounterboy-routing.module */
      "./src/app/scancounterboy/scancounterboy-routing.module.ts");
      /* harmony import */


      var _scancounterboy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./scancounterboy.page */
      "./src/app/scancounterboy/scancounterboy.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var ScancounterboyPageModule = /*#__PURE__*/_createClass(function ScancounterboyPageModule() {
        _classCallCheck(this, ScancounterboyPageModule);
      });

      ScancounterboyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _scancounterboy_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScancounterboyPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
        declarations: [_scancounterboy_page__WEBPACK_IMPORTED_MODULE_6__["ScancounterboyPage"]]
      })], ScancounterboyPageModule);
      /***/
    },

    /***/
    "./src/app/scancounterboy/scancounterboy.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/scancounterboy/scancounterboy.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppScancounterboyScancounterboyPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: none;\n  background-color: #EFF3F6;\n}\n\n.or ion-col h2 {\n  text-align: center;\n  display: inline-block;\n  line-height: 50px;\n  margin-top: 15px !important;\n  font-size: 16px;\n  color: #131313;\n}\n\n.qr-input-main {\n  padding: 0 !important;\n}\n\n.item-md.item-block .item-inner {\n  padding-right: 0;\n  border-bottom: none;\n}\n\n.qr-input {\n  border-radius: 30px;\n  background-color: #f5f5f5;\n  margin-bottom: 10px !important;\n  width: 100% !important;\n  max-width: 100% !important;\n}\n\n.btn-create {\n  --box-shadow: none;\n  --border-radius: 30px;\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  --padding-left: 25px;\n  --padding-right: 25px;\n  width: 93%;\n  --color: #ffffff;\n}\n\n.or {\n  text-align: center;\n  width: 100%;\n}\n\nion-select::part(icon) {\n  margin-left: 295px !important;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NhbmNvdW50ZXJib3kvc2NhbmNvdW50ZXJib3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQVFFO0VBSUUsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFFQSxlQUFBO0VBQ0EsY0FBQTtBQVRKOztBQVlFO0VBQ0UscUJBQUE7QUFUSjs7QUFZRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFZRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFUSjs7QUFZRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQVRKOztBQVdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBUko7O0FBMEJFO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtBQXZCSiIsImZpbGUiOiJzcmMvYXBwL3NjYW5jb3VudGVyYm95L3NjYW5jb3VudGVyYm95LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGM0Y2O1xufVxuLy8gaW9uLWl0ZW0ge1xuLy8gICAgIC0tYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgIH1cbiAgLm9yIGlvbi1jb2wgaDIge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gICAgLy8gd2lkdGg6IDUwcHg7XG4gICAgLy8gaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMxMzEzMTM7XG4gIH1cbiAgXG4gIC5xci1pbnB1dC1tYWluIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuICBcbiAgLnFyLWlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5idG4tY3JlYXRlIHtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMjVweDtcbiAgICAtLXBhZGRpbmctbGVmdDogMjVweDtcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDkzJTtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIC5vciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC8vIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgLy8gICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbiAgLy8gICBjb2xvcjogI2E5YTlhOTtcbiAgLy8gICBmb250LXNpemU6IDIycHg7XG4gIC8vIH1cbiAgLy8gLml0ZW0tc2VsZWN0IGlvbi1sYWJlbCB7XG4gIC8vICAgLXdlYmtpdC1ib3gtZmxleDogaW5pdGlhbDtcbiAgLy8gICAtd2Via2l0LWZsZXg6IGluaXRpYWw7XG4gIC8vICAgLW1zLWZsZXg6IGluaXRpYWw7XG4gIC8vICAgZmxleDogaW5pdGlhbDtcbiAgLy8gICBtYXgtd2lkdGg6IDIwMHB4O1xuICAvLyB9XG4gIC8vIGlvbi1zZWxlY3Qge1xuICAvLyAgIHdpZHRoOiAxMDAlO1xuICAvLyAgIG1heC13aWR0aDogMTAwJTtcbiAgLy8gfVxuICBpb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgICBtYXJnaW4tbGVmdDogMjk1cHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4gICJdfQ== */";
      /***/
    },

    /***/
    "./src/app/scancounterboy/scancounterboy.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/scancounterboy/scancounterboy.page.ts ***!
      \*******************************************************/

    /*! exports provided: ScancounterboyPage */

    /***/
    function srcAppScancounterboyScancounterboyPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScancounterboyPage", function () {
        return ScancounterboyPage;
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

      var ScancounterboyPage = /*#__PURE__*/function () {
        function ScancounterboyPage(barcodeScanner, toastCtrl, loadingCtrl, apiService, translate, menuCtrl, router) {
          _classCallCheck(this, ScancounterboyPage);

          this.barcodeScanner = barcodeScanner;
          this.toastCtrl = toastCtrl;
          this.loadingCtrl = loadingCtrl;
          this.apiService = apiService;
          this.translate = translate;
          this.menuCtrl = menuCtrl;
          this.router = router;
          this.tran_please_wait = 'Please Wait';
          this.tran_required_counterboy = 'Please Select Counter Boy';
          this.loading = {};
        }

        return _createClass(ScancounterboyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.lastCounterBoy();
            this.userCounterBoyList();
          }
        }, {
          key: "scanCode",
          value: function scanCode() {
            var _this = this;

            this.barcodeScanner.scan().then(function (barcodeData) {
              _this.scannedCode = barcodeData.text;

              if (_this.scannedCode != '' && _this.scannedCode != null) {
                _this.applyQrcode(_this.scannedCode);
              }
            }, function (err) {
              console.log('Error: ', err);
            });
          }
        }, {
          key: "applyQrcode",
          value: function applyQrcode(username) {
            var _this2 = this;

            this.presentLoading();
            this.apiService.mapCounterBoy(username).subscribe(function (data) {
              return _this2.handleResponse(data);
            }, function (error) {
              return _this2.handleError(error);
            });
          }
        }, {
          key: "handleResponse",
          value: function handleResponse(data) {
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
          key: "lastCounterBoy",
          value: function lastCounterBoy() {
            var _this3 = this;

            this.apiService.lastCounterBoy().subscribe(function (data) {
              _this3.counterboy = data['counter_boy'];
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "userCounterBoyList",
          value: function userCounterBoyList() {
            var _this4 = this;

            this.apiService.userCounterBoyList().subscribe(function (data) {
              console.log('dta', data);
              _this4.counterboy_list = data;
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
          key: "submitCounterBoyForm",
          value: function submitCounterBoyForm() {
            var _this5 = this;

            console.log(this.counterboyid);

            if (this.counterboyid == '' || this.counterboyid == null) {
              this.presentToast(this.tran_required_counterboy);
            } else {
              this.presentLoading();
              this.apiService.mapCounterBoyManual(this.counterboyid).subscribe(function (data) {
                return _this5.handleResponse(data);
              }, function (error) {
                return _this5.handleError(error);
              });
            }
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

      ScancounterboyPage.ctorParameters = function () {
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

      ScancounterboyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scancounterboy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./scancounterboy.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/scancounterboy/scancounterboy.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./scancounterboy.page.scss */
        "./src/app/scancounterboy/scancounterboy.page.scss"))["default"]]
      })], ScancounterboyPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=scancounterboy-scancounterboy-module-es5.js.map