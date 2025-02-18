(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaint-complaint-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/complaint/complaint.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/complaint/complaint.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComplaintComplaintPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <ion-content [fullscreen]=\"true\">\n    <div class=\"ion-padding-top ion-padding-horizontal\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\" style=\"text-align: start;margin-left: -26px;\">\n            <ion-menu-button></ion-menu-button>\n          </ion-col>\n          <ion-col size=\"8\" style=\"text-align: center;\">\n            <strong class=\"header\" style=\"color:#131313;\">{{ 'submit_ticket' | translate }}</strong>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class=\"gap\">\n      <form (ngSubmit)=\"ticketForm()\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"ion-label\">Select Issue Type</ion-label>\n              <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n                <ion-select [(ngModel)]=\"ticketFormField.ticket_category_id\" name=\"ticket_category_id\" placeholder=\"{{ 'select_issue_type' | translate }}\" class=\"ion-select\">\n                  <ion-select-option *ngFor=\"let item of issue_types;\" value=\"{{item.id}}\">{{item.category_name}}</ion-select-option>\n                </ion-select>          \n              </ion-item> \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"ion-label\">Email</ion-label>\n              <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n                <ion-input type=\"text\" [(ngModel)]=\"ticketFormField.your_email\" name=\"your_email\" placeholder=\"{{ 'enter_email' | translate }}\" class=\"ion-input\">\n                </ion-input>\n              </ion-item> \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"ion-label\">Contact Number</ion-label>\n              <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n                <ion-input type=\"tel\" [(ngModel)]=\"ticketFormField.your_contact_no\" maxLength=\"10\" name=\"your_contact_no\" placeholder=\"{{ 'enter_con_number' | translate }}\" class=\"ion-input\">\n                </ion-input>\n              </ion-item> \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"ion-label\">Message</ion-label>\n              <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n                <ion-textarea rows=\"5\" autosize type=\"text\" [(ngModel)]=\"ticketFormField.message\" name=\"message\" placeholder=\"{{ 'enter_msg' | translate }}\" class=\"ion-textarea\">\n                </ion-textarea>\n              </ion-item> \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-button class=\"btn-create\" type=\"submit\">{{ 'submit' | translate }}</ion-button>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </div>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n  </ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title >{{ 'submit_ticket' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row class=\"app-icon-container\">\n  </ion-row>\n  <ion-list>\n    <ion-grid>\n      <form (ngSubmit)=\"ticketForm()\">\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\" lines=\"none\">\n            <ion-label ><ion-icon slot=\"start\" name=\"list\"></ion-icon></ion-label>\n            <ion-select [(ngModel)]=\"ticketFormField.ticket_category_id\" name=\"ticket_category_id\" placeholder=\"{{ 'select_issue_type' | translate }}\">\n              <ion-select-option *ngFor=\"let item of issue_types;\" value=\"{{item.id}}\">{{item.category_name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\" lines=\"none\">\n            <ion-label ><ion-icon slot=\"start\" name=\"person\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"ticketFormField.your_email\" name=\"your_email\" placeholder=\"{{ 'enter_email' | translate }}\"></ion-input>\n          </ion-item>\n        </ion-row>\n        \n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\" lines=\"none\">\n            <ion-label ><ion-icon slot=\"start\" name=\"call-sharp\"></ion-icon></ion-label>\n            <ion-input type=\"tel\" [(ngModel)]=\"ticketFormField.your_contact_no\" maxLength=\"10\" name=\"your_contact_no\" placeholder=\"{{ 'enter_con_number' | translate }}\"></ion-input>\n          </ion-item>\n        </ion-row>\n        \n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\" lines=\"none\">\n              <ion-label ><ion-icon slot=\"start\" name=\"chatbox-ellipses\"></ion-icon></ion-label>\n              <ion-textarea rows=\"5\" autosize class=\"textarea\" type=\"text\" [(ngModel)]=\"ticketFormField.message\" name=\"message\" placeholder=\"{{ 'enter_msg' | translate }}\"></ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-button type=\"submit\" class=\"login-btn\" color=\"secondary\" expand=\"block\" >\n          <ion-icon slot=\"start\" name=\"send\"></ion-icon> {{ 'submit' | translate }}\n        </ion-button>\n      </form>\n  </ion-grid>\n</ion-list>\n</ion-content> -->\n";
      /***/
    },

    /***/
    "./src/app/complaint/complaint-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/complaint/complaint-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: ComplaintPageRoutingModule */

    /***/
    function srcAppComplaintComplaintRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComplaintPageRoutingModule", function () {
        return ComplaintPageRoutingModule;
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


      var _complaint_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./complaint.page */
      "./src/app/complaint/complaint.page.ts");

      var routes = [{
        path: '',
        component: _complaint_page__WEBPACK_IMPORTED_MODULE_3__["ComplaintPage"]
      }];

      var ComplaintPageRoutingModule = /*#__PURE__*/_createClass(function ComplaintPageRoutingModule() {
        _classCallCheck(this, ComplaintPageRoutingModule);
      });

      ComplaintPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComplaintPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/complaint/complaint.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/complaint/complaint.module.ts ***!
      \***********************************************/

    /*! exports provided: ComplaintPageModule */

    /***/
    function srcAppComplaintComplaintModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComplaintPageModule", function () {
        return ComplaintPageModule;
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


      var _complaint_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./complaint-routing.module */
      "./src/app/complaint/complaint-routing.module.ts");
      /* harmony import */


      var _complaint_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./complaint.page */
      "./src/app/complaint/complaint.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var ComplaintPageModule = /*#__PURE__*/_createClass(function ComplaintPageModule() {
        _classCallCheck(this, ComplaintPageModule);
      });

      ComplaintPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _complaint_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComplaintPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
        declarations: [_complaint_page__WEBPACK_IMPORTED_MODULE_6__["ComplaintPage"]]
      })], ComplaintPageModule);
      /***/
    },

    /***/
    "./src/app/complaint/complaint.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/complaint/complaint.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppComplaintComplaintPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: none;\n  background-color: #EFF3F6;\n}\n\n.gap {\n  margin-top: 10px;\n  padding-left: 10px;\n}\n\n.btn-create {\n  --box-shadow: none;\n  --border-radius: 10px;\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  --padding-left: 25px;\n  --padding-right: 25px;\n  width: 100%;\n  color: #fff;\n  text-transform: none;\n  width: 94%;\n  margin-top: 43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGxhaW50L2NvbXBsYWludC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9jb21wbGFpbnQvY29tcGxhaW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGM0Y2O1xufVxuLmdhcHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmJ0bi1jcmVhdGUge1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgLS1wYWRkaW5nLXRvcDogMjVweDtcbiAgLS1wYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIC0tcGFkZGluZy1yaWdodDogMjVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgd2lkdGg6IDk0JTtcbiAgbWFyZ2luLXRvcDogNDNweDtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGlvbi1pdGVtIHtcbi8vICAgLS1ib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbi8vICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuLy8gICAtLWJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbi8vICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuLy8gaW9uLWl0ZW0gaW9uLWljb24ge1xuLy8gICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbi8vICAgY29sb3I6ICM5Mjk0OWM7XG4vLyB9XG4vLyBpb24taWNvbiB7XG4vLyAgIG1hcmdpbi1yaWdodDogOHB4O1xuLy8gfVxuLy8gaW9uLWxpc3Qge1xuLy8gICBib3JkZXItYm90dG9tOiBub25lO1xuLy8gfVxuLy8gLmxvZ2luLWJ0biB7XG4vLyAgIC0tYm94LXNoYWRvdzogMCAwIDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4vLyAgIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4vLyAgIC0tcGFkZGluZy10b3A6IDI1cHg7XG4vLyAgIC0tcGFkZGluZy1sZWZ0OiAyNXB4O1xuLy8gICAtLXBhZGRpbmctcmlnaHQ6IDI1cHg7XG4vLyAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbi8vIH1cbi8vIC5jZW50ZXIge1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyB9XG4vLyAuaXRlbS1zZWxlY3QgaW9uLWxhYmVsIHtcbi8vICAgLXdlYmtpdC1ib3gtZmxleDogaW5pdGlhbDtcbi8vICAgLXdlYmtpdC1mbGV4OiBpbml0aWFsO1xuLy8gICAtbXMtZmxleDogaW5pdGlhbDtcbi8vICAgZmxleDogaW5pdGlhbDtcbi8vICAgbWF4LXdpZHRoOiAyMDBweDtcbi8vIH1cbi8vIGlvbi1zZWxlY3Qge1xuLy8gICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuLy8gICBtYXgtd2lkdGg6IDEwMCU7XG4vLyAgIC0tcGFkZGluZy1zdGFydDogMDtcbi8vIH1cbi8vIGlvbi10aXRsZSB7XG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gICB0ZXh0LWFsaWduOiBsZWZ0O1xuLy8gICBwYWRkaW5nLWxlZnQ6IDA7XG4vLyB9XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/complaint/complaint.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/complaint/complaint.page.ts ***!
      \*********************************************/

    /*! exports provided: ComplaintPage */

    /***/
    function srcAppComplaintComplaintPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComplaintPage", function () {
        return ComplaintPage;
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


      var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../providers/api-service/api.service */
      "./src/app/providers/api-service/api.service.ts");
      /* harmony import */


      var _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../providers/token-service/token.service */
      "./src/app/providers/token-service/token.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../providers/events-service/events.service */
      "./src/app/providers/events-service/events.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ComplaintPage = /*#__PURE__*/function () {
        function ComplaintPage(apiService, translate, loadingCtrl, events, menuCtrl, token, toastCtrl, router) {
          var _this = this;

          _classCallCheck(this, ComplaintPage);

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
            message: null
          };
          this.tran_please_wait = "Please Wait";
          this.tran_required_issue_type = "Please Select Issue Type";
          this.tran_required_email = "Please Enter Your Email";
          this.tran_required_contact_no = "Please Enter Your Contact No";
          this.tran_required_message = "Please Enter Message";
          this.tran_ticket_created = "Ticket Created Successfully";
          this.menuCtrl.enable(true);
          this.translate.get('please_wait').subscribe(function (res) {
            _this.tran_please_wait = res;
          });
          this.translate.get('required_issue_type').subscribe(function (res) {
            _this.tran_required_issue_type = res;
          });
          this.translate.get('required_email').subscribe(function (res) {
            _this.tran_required_email = res;
          });
          this.translate.get('required_contact_no').subscribe(function (res) {
            _this.tran_required_contact_no = res;
          });
          this.translate.get('required_message').subscribe(function (res) {
            _this.tran_required_message = res;
          });
          this.translate.get('ticket_created').subscribe(function (res) {
            _this.tran_ticket_created = res;
          });
        }

        return _createClass(ComplaintPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadIssueTypes();
          }
        }, {
          key: "loadIssueTypes",
          value: function loadIssueTypes() {
            var _this2 = this;

            this.apiService.loadTypes().subscribe(function (data) {
              return _this2.handleIssueTypes(data);
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "handleIssueTypes",
          value: function handleIssueTypes(data) {
            this.issue_types = data.issue_types;
          }
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {}
        }, {
          key: "ticketForm",
          value: function ticketForm() {
            var _this3 = this;

            var toast = this.toastCtrl.create({
              message: '',
              duration: 1000,
              position: 'middle'
            });

            if (this.ticketFormField.ticket_category_id == '' || this.ticketFormField.ticket_category_id == null) {
              this.presentToast(this.tran_required_issue_type);
            } else if (this.ticketFormField.your_email == '' || this.ticketFormField.your_email == null) {
              this.presentToast(this.tran_required_email);
            } else if (this.ticketFormField.your_contact_no == '' || this.ticketFormField.your_contact_no == null) {
              this.presentToast(this.tran_required_contact_no);
            } else if (this.ticketFormField.message == '' || this.ticketFormField.message == null) {
              this.presentToast(this.tran_required_message);
            } else {
              var loading = this.presentLoading();
              this.apiService.submitTicket(this.ticketFormField).subscribe(function (data) {
                _this3.ticketFormField.ticket_category_id = '';
                _this3.ticketFormField.your_email = '';
                _this3.ticketFormField.your_contact_no = '';
                _this3.ticketFormField.message = '';

                _this3.loadingCtrl.dismiss();

                _this3.presentToast(_this3.tran_ticket_created);
              }, function (error) {
                return _this3.handleError(error);
              });
            }
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
            } else {
              this.presentToast('');
            }
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
        }]);
      }();

      ComplaintPage.ctorParameters = function () {
        return [{
          type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      ComplaintPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-complaint',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./complaint.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/complaint/complaint.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./complaint.page.scss */
        "./src/app/complaint/complaint.page.scss"))["default"]]
      })], ComplaintPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=complaint-complaint-module-es5.js.map