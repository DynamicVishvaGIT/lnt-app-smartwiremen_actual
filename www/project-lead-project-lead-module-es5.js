(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-lead-project-lead-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/project-lead/project-lead.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-lead/project-lead.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProjectLeadProjectLeadPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" [ngStyle]=\"{'filter': showDiv ? 'brightness(0.5)' : 'brightness(1)','pointer-events':showDiv ? 'none':'all' }\">\n  <div class=\"ion-padding-top ion-padding-horizontal\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: start;margin-left: -10px;\" (click)=\"goBack()\">\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"8\" style=\"text-align: center;\">\n          <strong class=\"header\" style=\"color:#131313;\">Project Lead Form</strong>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <form >\n    <ion-card>\n      <ion-row class=\"card-heading\" (click)=\"toggleSection('project_name')\">\n        <ion-col size=\"10\" >\n          <div class=\"ion-text-start\"><strong >Project Details</strong></div>\n        </ion-col>\n        <ion-col size=\"2\" class=\"ion-text-center\" >\n          <div *ngIf=\"projectNameClicked\"><ion-icon name=\"chevron-up-sharp\" ></ion-icon></div>\n          <div *ngIf=\"!projectNameClicked\"><ion-icon name=\"chevron-down-sharp\" ></ion-icon></div>\n        </ion-col>\n      </ion-row>\n      <ion-card-content *ngIf=\"projectNameClicked\">\n        <ion-row >  <!--class=\"ion-margin-bottom\"-->\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">Project Name</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <ion-input type=\"text\" [(ngModel)]=\"productLeadFormField.pr_name\" name=\"pr_name\"  placeholder=\"Project Name\" class=\"ion-input\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <!-- <ion-input type=\"text\" [(ngModel)]=\"productLeadFormField.pr_name\" name=\"pr_name\"  placeholder=\"Project Name *\"></ion-input> -->\n        </ion-row>\n        <ion-row >\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">Address 1</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <ion-input type=\"text\" [(ngModel)]=\"productLeadFormField.add_1\" name=\"add_1\" placeholder=\"Address 1\" class=\"ion-input\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <!-- <ion-input type=\"text\" [(ngModel)]=\"productLeadFormField.add_1\" name=\"add_1\" placeholder=\"Address 1 *\"></ion-input> -->\n        </ion-row>\n        <ion-row >\n          <ion-col size=\"12\">\n            <ion-label class=\"ion-label\">Address 2</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <ion-input type=\"text\" [(ngModel)]=\"productLeadFormField.add_2\" name=\"add_2\" placeholder=\"Address 2 \" class=\"ion-input\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <!-- <ion-input type=\"text\" [(ngModel)]=\"productLeadFormField.add_2\" name=\"add_2\" placeholder=\"Address 2 \"></ion-input> -->\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">Contact</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <ion-input type=\"text\" maxLength=\"10\" [(ngModel)]=\"productLeadFormField.pr_contact\" name=\"pr_contact\" placeholder=\"Contact \" class=\"ion-input\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <!-- <ion-input type=\"tel\" maxLength=\"10\" [(ngModel)]=\"productLeadFormField.pr_contact\" name=\"pr_contact\" placeholder=\"Contact * \"></ion-input> -->\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <br>\n    <div class=\"submit-btn\">\n      <ion-button color=\"secondary\" (click)=\"productLeadForm()\"    expand=\"block\" >\n        {{'submit' |translate}}\n      </ion-button>\n    </div>\n  </form>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Project Lead Form</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngStyle]=\"{'filter': showDiv ? 'brightness(0.5)' : 'brightness(1)','pointer-events':showDiv ? 'none':'all' }\" >\n  <form >\n  <ion-card>\n\n    <ion-row class=\"card-heading\" (click)=\"toggleSection('project_name')\">\n      <ion-col size=\"10\" >\n        <div class=\"ion-text-start\"><strong >Project Details</strong></div>\n      </ion-col>\n      <ion-col size=\"2\" class=\"ion-text-center\" >\n        <div *ngIf=\"projectNameClicked\"><ion-icon name=\"chevron-up-sharp\" ></ion-icon></div>\n        <div *ngIf=\"!projectNameClicked\"><ion-icon name=\"chevron-down-sharp\" ></ion-icon></div>\n      </ion-col>\n    </ion-row>\n  \n    <ion-card-content *ngIf=\"projectNameClicked\">\n      <ion-row class=\"ion-margin-bottom\">\n          <ion-input type=\"text\" [(ngModel)]=\"productLeadFormField.pr_name\" name=\"pr_name\"  placeholder=\"Project Name *\"></ion-input>\n      </ion-row>\n\n      <ion-row class=\"ion-margin-bottom\">\n          <ion-input type=\"text\" [(ngModel)]=\"productLeadFormField.add_1\" name=\"add_1\" placeholder=\"Address 1 *\"></ion-input>\n      </ion-row>\n    \n\n      <ion-row class=\"ion-margin-bottom\">\n          <ion-input type=\"text\" [(ngModel)]=\"productLeadFormField.add_2\" name=\"add_2\" placeholder=\"Address 2 \"></ion-input>\n      </ion-row>\n\n     <ion-row class=\"ion-margin-bottom\">\n          <ion-input type=\"tel\" maxLength=\"10\" [(ngModel)]=\"productLeadFormField.pr_contact\" name=\"pr_contact\" placeholder=\"Contact * \"></ion-input>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <br>\n  <div class=\"submit-btn\">\n  <ion-button color=\"secondary\" (click)=\"productLeadForm()\"    expand=\"block\" >\n    {{'submit' |translate}}\n   </ion-button>\n  </div>\n</form>\n\n</ion-content>\n<div *ngIf=\"showDiv\" [@inOutAnimation] style=\"display: block;position: absolute;bottom: 0;background: #fff;width: 100%;\">\n  <form (ngSubmit)=\"addLeadForm()\">\n    <ion-item style=\"border-bottom: 0.5px solid;\" lines=\"none\"  class=\"ion-margin-bottom\">\n      <ion-icon  style=\"font-weight: bold;\n      font-size: 22px;margin-top: 0 !important;\n      \" name=\"close\" (click)=\"closeDrawer('')\"></ion-icon> <ion-title class=\"ion-text-center\"  style=\"color: #000 !important;\">  Add {{type |titlecase}}</ion-title>\n    </ion-item>\n  <ion-row class=\"ion-margin-bottom\" style=\"padding: 0 18px;\">\n    <ion-input type=\"tel\" maxLength=\"10\" [(ngModel)]=\"addLeadFormField.username\"  name=\"username\" placeholder=\"Username (Primary mobile no) *\"></ion-input>\n  </ion-row>\n  <ion-row class=\"ion-margin-bottom\" style=\"padding: 0 18px;\">\n    <ion-input type=\"text\" [(ngModel)]=\"addLeadFormField.first_name\"  name=\"first_name\" placeholder=\"First Name *\"></ion-input>\n  </ion-row>\n  <ion-row class=\"ion-margin-bottom\" style=\"padding: 0 18px;\">\n    <ion-input type=\"text\" [(ngModel)]=\"addLeadFormField.last_name\"  name=\"last_name\" placeholder=\"Last Name  *\"></ion-input>\n  </ion-row>\n  <div class=\"submit-btn\" style=\"padding: 0 10px;\" >\n    <ion-button color=\"secondary\" type=\"submit\"  expand=\"block\" >\n        Add\n     </ion-button>\n    </div>\n  </form>\n</div> -->\n";
      /***/
    },

    /***/
    "./src/app/project-lead/project-lead-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/project-lead/project-lead-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: ProjectLeadPageRoutingModule */

    /***/
    function srcAppProjectLeadProjectLeadRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectLeadPageRoutingModule", function () {
        return ProjectLeadPageRoutingModule;
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


      var _project_lead_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./project-lead.page */
      "./src/app/project-lead/project-lead.page.ts");

      var routes = [{
        path: '',
        component: _project_lead_page__WEBPACK_IMPORTED_MODULE_3__["ProjectLeadPage"]
      }];

      var ProjectLeadPageRoutingModule = /*#__PURE__*/_createClass(function ProjectLeadPageRoutingModule() {
        _classCallCheck(this, ProjectLeadPageRoutingModule);
      });

      ProjectLeadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProjectLeadPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/project-lead/project-lead.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/project-lead/project-lead.module.ts ***!
      \*****************************************************/

    /*! exports provided: ProjectLeadPageModule */

    /***/
    function srcAppProjectLeadProjectLeadModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectLeadPageModule", function () {
        return ProjectLeadPageModule;
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


      var _project_lead_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./project-lead-routing.module */
      "./src/app/project-lead/project-lead-routing.module.ts");
      /* harmony import */


      var _project_lead_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./project-lead.page */
      "./src/app/project-lead/project-lead.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var ProjectLeadPageModule = /*#__PURE__*/_createClass(function ProjectLeadPageModule() {
        _classCallCheck(this, ProjectLeadPageModule);
      });

      ProjectLeadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _project_lead_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectLeadPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
        declarations: [_project_lead_page__WEBPACK_IMPORTED_MODULE_6__["ProjectLeadPage"]]
      })], ProjectLeadPageModule);
      /***/
    },

    /***/
    "./src/app/project-lead/project-lead.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/project-lead/project-lead.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppProjectLeadProjectLeadPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: none;\n  background-color: #EFF3F6;\n}\n\n.gap {\n  margin-top: 10px;\n}\n\n.card-heading {\n  height: 40px;\n  padding: 7px;\n  background-color: #015c8d;\n  color: #fff;\n}\n\n.submit-btn {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1sZWFkL3Byb2plY3QtbGVhZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7QUFJRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtbGVhZC9wcm9qZWN0LWxlYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkYzRjY7XG59XG4uZ2Fwe1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNhcmQtaGVhZGluZyB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE1YzhkO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyAuYXBwLWljb24tY29udGFpbmVyIHtcbi8vICAgcGFkZGluZy10b3A6IDMzcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAzM3B4O1xuLy8gfVxuXG4vLyBpb24tY29udGVudCB7XG4vLyAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbi8vICAgdGV4dC1hbGlnbjogbGVmdDtcbi8vIH1cblxuLy8gaW9uLWNhcmQtY29udGVudCB7XG4vLyAgIGJhY2tncm91bmQ6ICNmZmY7XG4vLyB9XG4vLyBpb24taW5wdXQge1xuLy8gICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4vLyAgIGNvbG9yOiAjMDAwO1xuLy8gICB0ZXh0LWFsaWduOiBsZWZ0O1xuLy8gICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4vLyB9XG4vLyAuc3VibWl0LWJ0biB7XG4vLyAgIG1hcmdpbjogMTBweDtcbi8vIH1cbi8vIC5zZWxlY3QtcGxhY2Vob2xkZXIsXG4vLyAuZGF0ZXRpbWUtcGxhY2Vob2xkZXIsXG4vLyAuZGF0ZXRpbWUtdGV4dCxcbi8vIC5zZWxlY3QtdGV4dCB7XG4vLyAgIHRleHQtYWxpZ246IGxlZnQ7XG4vLyAgIC8vIG1hcmdpbi1sZWZ0OiAtMTZweDtcbi8vICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuLy8gfVxuLy8gaW9uLXNlbGVjdCxcbi8vIGlvbi1kYXRldGltZSB7XG4vLyAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbi8vICAgbWF4LXdpZHRoOiAxMDAlO1xuLy8gICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4vLyAgIGNvbG9yOiAjMDAwMDAwO1xuLy8gfVxuLy8gLmFkZC1uZXctYnRuIHtcbi8vICAgZm9udC1zaXplOiAxMXB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE0ZThiO1xuLy8gfVxuLy8gLnRleHQtaW5wdXQtbWQge1xuLy8gICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIGlvbi1pdGVtIHtcbi8vICAgLS1ib3JkZXItYm90dG9tOiAxcHggc29saWQgIWltcG9ydGFudDtcbi8vICAgLy8gYm94LXNoYWRvdzogMCAwIDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbi8vICAgLy8gYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuLy8gICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbi8vICAgLS1wYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbi8vIH1cblxuLy8gaW9uLWl0ZW0gaW9uLWljb24ge1xuLy8gICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbi8vICAgY29sb3I6ICMwYTRmOGI7XG4vLyB9XG4vLyBpb25pYy1zZWxlY3RhYmxlIHtcbi8vICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4vLyB9XG4vLyAubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4vLyAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4vLyB9XG4vLyAuY2FyZC1oZWFkaW5nIHtcbi8vICAgaGVpZ2h0OiA0MHB4O1xuLy8gICBwYWRkaW5nOiA3cHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwMTI5NGM7XG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gfVxuLy8gaW9uLWxhYmVsIHtcbi8vICAgZGlzcGxheTogbm9uZTtcbi8vIH1cbi8vIC5pb25pYy1zZWxlY3RhYmxlLXZhbHVlIHtcbi8vICAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xuLy8gfVxuLy8gaW9uLXNlbGVjdCB7XG4vLyAgIGNvbG9yOiAjMDAwO1xuLy8gICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMDAwO1xuLy8gICB0ZXh0LWFsaWduOiBsZWZ0O1xuLy8gICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcbi8vIH1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/project-lead/project-lead.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/project-lead/project-lead.page.ts ***!
      \***************************************************/

    /*! exports provided: ProjectLeadPage */

    /***/
    function srcAppProjectLeadProjectLeadPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectLeadPage", function () {
        return ProjectLeadPage;
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


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../providers/api-service/api.service */
      "./src/app/providers/api-service/api.service.ts");
      /* harmony import */


      var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../providers/events-service/events.service */
      "./src/app/providers/events-service/events.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ProjectLeadPage = /*#__PURE__*/function () {
        function ProjectLeadPage(apiService, modalCtrl, toastCtrl, loadingCtrl, events, translate, router) {
          var _this = this;

          _classCallCheck(this, ProjectLeadPage);

          this.apiService = apiService;
          this.modalCtrl = modalCtrl;
          this.toastCtrl = toastCtrl;
          this.loadingCtrl = loadingCtrl;
          this.events = events;
          this.translate = translate;
          this.router = router;
          this.projectNameClicked = true;
          this.projectInfluencerClicked = false;
          this.projectClassificationClicked = false;
          this.projectStageClicked = false;
          this.valueRequirementClicked = false;
          this.competitorClicked = false;
          this.chancesofWinningClicked = false;
          this.transitionMonthClicked = false;
          this.projectStatusClicked = false;
          this.projectSourceClicked = false;
          this.dockedHeight = 500;
          this.drawerState = 0;
          this.disableDrag = true;
          this.minimumHeight = 500;
          this.showDiv = false;
          this.productLeadFormField = {
            pr_name: null,
            add_1: null,
            add_2: null,
            pr_contact: null,
            pr_contractor: null,
            pr_builder: null,
            pr_developer: null,
            pr_architect: null,
            pr_consultant: null,
            pr_houseowner: null,
            pr_retailers_distributors: null,
            pr_decmaker: null,
            pr_classification: null,
            pr_stage: null,
            tripper: null,
            englaze: null,
            entice: null,
            engem: null,
            competition: null,
            pr_chances: null,
            order_month: null,
            pr_status: null,
            pr_source: null,
            oris: null,
            lost_name: null,
            lost_value: null,
            won_value: null,
            won_routed: null,
            won_ptp_dsp: null
          };
          this.addLeadFormField = {
            username: null,
            first_name: null,
            last_name: null
          };
          this.tran_please_wait = 'Please Wait';
          this.tran_required_mobile_no = "Please Enter Your Mobile No";
          this.tran_required_first_name = "Please Enter Your First Name";
          this.tran_required_last_name = "Please Enter Your Last Name";
          this.tran_required_project_name = "Please Enter Project Name";
          this.tran_required_addr = "Please Enter Address";
          this.tran_required_contact = "Please Enter Contact Number";
          this.tran_required_project_classification = "Please Select Project Classification";
          this.tran_required_project_stage = "Please Select Project Stage";
          this.tran_required_competiton = "Please Select Competitor Name";
          this.tran_required_chances = "Please Select Chances of Winning";
          this.tran_required_date = "Please Select Order Month Date";
          this.tran_required_project_status = "Please Select Project Status";
          this.tran_required_lost_name = "Please Enter Competitor Name Who Has Won";
          this.tran_required_lost_value = "Please Enter Lost Value";
          this.tran_required_won_value = "Please Enter Won Value";
          this.tran_required_won_routed = "Please Select Order Routed";
          this.tran_required_won_ptp_dsp = "Please Enter  Name of Retailer/PTP/DSP";
          this.pincode_pattern = "[0-9]{6}";
          this.today = new Date().toISOString();
          this.translate.get('please_wait').subscribe(function (res) {
            _this.tran_please_wait = res;
          });
          this.translate.get('required_project_name').subscribe(function (res) {
            _this.tran_required_project_name = res;
          });
          this.translate.get('required_addr').subscribe(function (res) {
            _this.tran_required_addr = res;
          });
          this.translate.get('required_contact').subscribe(function (res) {
            _this.tran_required_contact = res;
          });
          this.translate.get('required_project_classification').subscribe(function (res) {
            _this.tran_required_project_classification = res;
          });
          this.translate.get('required_project_stage').subscribe(function (res) {
            _this.tran_required_project_stage = res;
          });
          this.translate.get('required_competiton').subscribe(function (res) {
            _this.tran_required_competiton = res;
          });
          this.translate.get('required_chances').subscribe(function (res) {
            _this.tran_required_chances = res;
          });
          this.translate.get('required_date').subscribe(function (res) {
            _this.tran_required_date = res;
          });
          this.translate.get('required_project_status').subscribe(function (res) {
            _this.tran_required_project_status = res;
          });
          this.translate.get('required_first_name').subscribe(function (res) {
            _this.tran_required_first_name = res;
          });
          this.translate.get('required_last_name').subscribe(function (res) {
            _this.tran_required_last_name = res;
          });
          this.translate.get('required_mobile_no').subscribe(function (res) {
            _this.tran_required_mobile_no = res;
          });
          this.translate.get('required_lost_name').subscribe(function (res) {
            _this.tran_required_lost_name = res;
          });
          this.translate.get('required_lost_value').subscribe(function (res) {
            _this.tran_required_lost_value = res;
          });
          this.translate.get('required_won_value').subscribe(function (res) {
            _this.tran_required_won_value = res;
          });
          this.translate.get('required_won_routed').subscribe(function (res) {
            _this.tran_required_won_routed = res;
          });
          this.translate.get('required_won_ptp_dsp').subscribe(function (res) {
            _this.tran_required_won_ptp_dsp = res;
          });
        }

        return _createClass(ProjectLeadPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.loadConsultantArchitectBuilder();
            this.loadDistributorsContractorDecisionmaker();
            this.loadDeveloperHouseowner();
            this.loadCompetition();
            this.loadProjectStage();
            this.loadProjectSource();
            this.loadParentId();
          }
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {// this.loadConsultantArchitectBuilder()
            // this.loadDistributorsContractorDecisionmaker()
            // this.loadDeveloperHouseowner()
            // this.loadCompetition()
            // this.loadProjectStage()
            // this.loadProjectSource()
            // this.loadParentId()
          }
        }, {
          key: "loadConsultantArchitectBuilder",
          value: function loadConsultantArchitectBuilder() {
            var _this2 = this;

            this.apiService.consultant_architect_builder().subscribe(function (data) {
              _this2.consultants = data['consultant'];
              _this2.architects = data['architect'];
              _this2.builders = data['builder'];
              console.log('dta', data);
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "loadDistributorsContractorDecisionmaker",
          value: function loadDistributorsContractorDecisionmaker() {
            var _this3 = this;

            this.apiService.distributors_contractor_decisionmaker().subscribe(function (data) {
              _this3.distributors = data['distributors'];
              _this3.contractors = data['contractor'];
              _this3.decisionmakers = data['decisionmaker_'];
              console.log('dta', data);
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "loadDeveloperHouseowner",
          value: function loadDeveloperHouseowner() {
            var _this4 = this;

            this.apiService.developer_houseowner().subscribe(function (data) {
              _this4.developers = data['developer'];
              _this4.houseowners = data['houseowner'];
              console.log('dta', data);
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "loadCompetition",
          value: function loadCompetition() {
            var _this5 = this;

            this.apiService.competition().subscribe(function (data) {
              _this5.competitions = data;
              console.log('dta', data);
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "loadProjectStage",
          value: function loadProjectStage() {
            var _this6 = this;

            this.apiService.project_stage().subscribe(function (data) {
              _this6.project_stages = data;
              console.log('dta', data);
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "loadProjectSource",
          value: function loadProjectSource() {
            var _this7 = this;

            this.apiService.project_source().subscribe(function (data) {
              _this7.project_sources = data;
              console.log('dta', data);
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "loadParentId",
          value: function loadParentId() {
            var _this8 = this;

            this.apiService.parentId().subscribe(function (data) {
              _this8.parent_id = data;
              console.log('dta', data);
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "openDrawer",
          value: function openDrawer(type1, type2) {
            this.type = type1;
            this.type2 = type2; // const addLeadUserModal = this.modalCtrl.create(AddLeadDrawerPage, {'type':type1}, { cssClass: "auto-height", showBackdrop: true });
            // addLeadUserModal.onDidDismiss(data => {
            //   if(data){
            //   if((type2=='contractor')||(type2=='decisionmaker')||(type2=='distributor')){
            //     this.loadDistributorsContractorDecisionmaker()
            //   }
            //   else if((type2=='builder') || (type2=='architect')||(type2=='consultant')){
            //     this.loadConsultantArchitectBuilder()
            //   }
            //   else if((type2=='developer')||(type2=='houseowner')){
            //     this.loadDeveloperHouseowner()
            //   }
            //   }
            // });
            // addLeadUserModal.present();

            this.showDiv = true;
            this.drawerState = 1;
          }
        }, {
          key: "closeDrawer",
          value: function closeDrawer(data) {
            this.showDiv = false;

            if (data) {
              if (this.type2 == 'contractor' || this.type2 == 'decisionmaker' || this.type2 == 'distributor') {
                this.loadDistributorsContractorDecisionmaker();
              } else if (this.type2 == 'builder' || this.type2 == 'architect' || this.type2 == 'consultant') {
                this.loadConsultantArchitectBuilder();
              } else if (this.type2 == 'developer' || this.type2 == 'houseowner') {
                this.loadDeveloperHouseowner();
              }
            }
          }
        }, {
          key: "toggleSection",
          value: function toggleSection(heading) {
            if (heading == 'project_name') {
              this.projectNameClicked = !this.projectNameClicked;
            } else if (heading == 'project_influencer') {
              this.projectInfluencerClicked = !this.projectInfluencerClicked;
            } else if (heading == 'project_classification') {
              this.projectClassificationClicked = !this.projectClassificationClicked;
            } else if (heading == 'project_stage') {
              this.projectStageClicked = !this.projectStageClicked;
            } else if (heading == 'value_requirement') {
              this.valueRequirementClicked = !this.valueRequirementClicked;
            } else if (heading == 'competitor') {
              this.competitorClicked = !this.competitorClicked;
            } else if (heading == 'chances_of_winning') {
              this.chancesofWinningClicked = !this.chancesofWinningClicked;
            } else if (heading == 'transition_month') {
              this.transitionMonthClicked = !this.transitionMonthClicked;
            } else if (heading == 'project_status') {
              this.projectStatusClicked = !this.projectStatusClicked;
            } else if (heading == 'project_source') {
              this.projectSourceClicked = !this.projectSourceClicked;
            }
          }
        }, {
          key: "productLeadForm",
          value: function productLeadForm() {
            var _this9 = this;

            console.log('1');

            if (this.parent_id) {
              if (this.productLeadFormField.pr_name == '' || this.productLeadFormField.pr_name == null) {
                this.presentToast(this.tran_required_project_name);
              } else if (this.productLeadFormField.add_1 == '' || this.productLeadFormField.add_1 == null) {
                this.presentToast(this.tran_required_addr);
              } else if (this.productLeadFormField.pr_contact == '' || this.productLeadFormField.pr_contact == null) {
                this.presentToast(this.tran_required_contact);
              } else {
                this.presentLoading();
                var projectFormValues = {
                  'pr_name': this.productLeadFormField.pr_name,
                  'add_1': this.productLeadFormField.add_1,
                  'add_2': this.productLeadFormField.add_2,
                  'pr_contact': this.productLeadFormField.pr_contact,
                  'pr_contractor': '',
                  'pr_builder': '',
                  'pr_developer': '',
                  'pr_architect': '',
                  'pr_consultant': '',
                  'pr_houseowner': '',
                  'pr_retailers_distributors': '',
                  'pr_decmaker': '',
                  'pr_classification': '',
                  'pr_stage': '',
                  'tripper': '',
                  'englaze': '',
                  'entice': '',
                  'engem': '',
                  'competition': '',
                  'pr_chances': '',
                  'order_month': '',
                  'pr_status': '',
                  'pr_source': '',
                  'oris': '',
                  'lost_name': '',
                  'lost_value': '',
                  'won_value': '',
                  'won_routed': '',
                  'won_ptp_dsp': '',
                  "parent_id": this.parent_id['id']
                };
                console.log('projectFormValues', projectFormValues);
                this.apiService.addProject(projectFormValues).subscribe(function (data) {
                  return _this9.handleResponse(data);
                }, function (error) {
                  return _this9.handleError(error);
                });
              }
            } else {
              this.presentToast("You are not mapped to ISO");
              this.loadingCtrl.dismiss();
            }
          } // productLeadForm() {
          //   console.log('1')
          //   if(this.parent_id){
          //   if (this.productLeadFormField.pr_name == '' || this.productLeadFormField.pr_name == null) {
          //     this.presentToast(this.tran_required_project_name);
          //   } else if (this.productLeadFormField.add_1 == '' || this.productLeadFormField.add_1 == null) {
          //     this.presentToast(this.tran_required_addr);
          //   } else if (this.productLeadFormField.pr_contact == '' || this.productLeadFormField.pr_contact == null) {
          //     this.presentToast(this.tran_required_contact);
          //   }
          //   else if (this.productLeadFormField.pr_classification == '' || this.productLeadFormField.pr_classification == null) {
          //     this.presentToast(this.tran_required_project_classification);
          //   }
          //   else if (this.productLeadFormField.pr_stage == '' || this.productLeadFormField.pr_stage == null) {
          //     this.presentToast(this.tran_required_project_stage);
          //   }
          //   else if (this.productLeadFormField.competition == '' || this.productLeadFormField.competition == null) {
          //     this.presentToast(this.tran_required_competiton);
          //   }
          //   else if (this.productLeadFormField.order_month == '' || this.productLeadFormField.order_month == null) {
          //     this.presentToast(this.tran_required_date);
          //   }
          //   else if (this.productLeadFormField.pr_status == '' || this.productLeadFormField.pr_status == null) {
          //     this.presentToast(this.tran_required_project_status);
          //   }
          //   else if (this.productLeadFormField.pr_status !== '' || this.productLeadFormField.pr_status !== null) {
          //     console.log('2')
          //    if(this.productLeadFormField.pr_status =='Won' ){
          //     console.log('3')
          //     if(this.productLeadFormField.won_value == '' || this.productLeadFormField.won_value == null){
          //       this.presentToast(this.tran_required_won_value);
          //     }
          //     else if(this.productLeadFormField.won_routed == '' || this.productLeadFormField.won_routed == null){
          //       this.presentToast(this.tran_required_won_routed);
          //     }
          //     else if(this.productLeadFormField.won_ptp_dsp == '' || this.productLeadFormField.won_ptp_dsp == null){
          //       this.presentToast(this.tran_required_won_ptp_dsp);
          //     }
          //     else {
          //       console.log('4')
          //       if(this.productLeadFormField.order_month){
          //         this.productLeadFormField.order_month=(this.productLeadFormField.order_month).split('T')[0]
          //       }
          //     this.presentLoading()
          //           if (this.productLeadFormField.pr_status=='Won'){
          //             this.productLeadFormField.lost_name=null
          //             this.productLeadFormField.lost_value=null
          //           }
          //           else if(this.productLeadFormField.pr_status=='Lost'){
          //             this.productLeadFormField.won_value=null
          //             this.productLeadFormField.won_routed=null
          //             this.productLeadFormField.won_ptp_dsp=null
          //           }
          //           else{
          //             this.productLeadFormField.lost_name=null
          //             this.productLeadFormField.lost_value=null
          //             this.productLeadFormField.won_value=null
          //             this.productLeadFormField.won_routed=null
          //             this.productLeadFormField.won_ptp_dsp=null
          //           }
          //           if(this.productLeadFormField.order_month){
          //             this.productLeadFormField.order_month=(this.productLeadFormField.order_month).split('T')[0]
          //           }
          //           var projectFormValues = {
          //             'pr_name': this.productLeadFormField.pr_name,
          //             'add_1': this.productLeadFormField.add_1,
          //             'add_2': this.productLeadFormField.add_2,
          //             'pr_contact': this.productLeadFormField.pr_contact,
          //             'pr_contractor': this.productLeadFormField.pr_contractor,
          //             'pr_builder': this.productLeadFormField.pr_builder,
          //             'pr_developer': this.productLeadFormField.pr_developer,
          //             'pr_architect': this.productLeadFormField.pr_architect,
          //             'pr_consultant': this.productLeadFormField.pr_consultant,
          //             'pr_houseowner': this.productLeadFormField.pr_houseowner,
          //             'pr_retailers_distributors': this.productLeadFormField.pr_retailers_distributors,
          //             'pr_decmaker': this.productLeadFormField.pr_decmaker,
          //             'pr_classification': this.productLeadFormField.pr_classification,
          //             'pr_stage': this.productLeadFormField.pr_stage,
          //             'tripper': this.productLeadFormField.tripper,
          //             'englaze': this.productLeadFormField.englaze,
          //             'entice': this.productLeadFormField.entice,
          //             'engem': this.productLeadFormField.engem,
          //             'competition': this.productLeadFormField.competition.join(),
          //             'pr_chances': this.productLeadFormField.pr_chances,
          //             'order_month': this.productLeadFormField.order_month,
          //             'pr_status': this.productLeadFormField.pr_status,
          //             'pr_source': this.productLeadFormField.pr_source,
          //             'oris': this.productLeadFormField.oris,
          //             "lost_name": this.productLeadFormField.lost_name,
          //             "lost_value": this.productLeadFormField.lost_value,
          //             "won_value": this.productLeadFormField.won_value,
          //             "won_routed": this.productLeadFormField.won_routed,
          //             "won_ptp_dsp": this.productLeadFormField.won_ptp_dsp,
          //             "parent_id": this.parent_id['id'],
          //           };
          //         console.log('projectFormValues', projectFormValues)
          //         this.apiService.addProject(projectFormValues).subscribe(
          //           data => this.handleResponse(data),
          //           error => this.handleError(error)
          //         );
          //     }
          //    }
          //    else if(this.productLeadFormField.pr_status =='Lost' ){
          //     console.log('5')
          //     if(this.productLeadFormField.lost_value == '' || this.productLeadFormField.lost_value == null){
          //       this.presentToast(this.tran_required_lost_value);
          //     }
          //     else if(this.productLeadFormField.lost_name == '' || this.productLeadFormField.lost_name == null){
          //       this.presentToast(this.tran_required_lost_name);
          //     }
          //     else {
          //       console.log('6')
          //       this.presentLoading()
          //           if (this.productLeadFormField.pr_status=='Won'){
          //             this.productLeadFormField.lost_name=null
          //             this.productLeadFormField.lost_value=null
          //           }
          //           else if(this.productLeadFormField.pr_status=='Lost'){
          //             this.productLeadFormField.won_value=null
          //             this.productLeadFormField.won_routed=null
          //             this.productLeadFormField.won_ptp_dsp=null
          //           }
          //           else{
          //             this.productLeadFormField.lost_name=null
          //             this.productLeadFormField.lost_value=null
          //             this.productLeadFormField.won_value=null
          //             this.productLeadFormField.won_routed=null
          //             this.productLeadFormField.won_ptp_dsp=null
          //           }
          //           if(this.productLeadFormField.order_month){
          //             this.productLeadFormField.order_month=(this.productLeadFormField.order_month).split('T')[0]
          //           }
          //           var projectFormValues = {
          //             'pr_name': this.productLeadFormField.pr_name,
          //             'add_1': this.productLeadFormField.add_1,
          //             'add_2': this.productLeadFormField.add_2,
          //             'pr_contact': this.productLeadFormField.pr_contact,
          //             'pr_contractor': this.productLeadFormField.pr_contractor,
          //             'pr_builder': this.productLeadFormField.pr_builder,
          //             'pr_developer': this.productLeadFormField.pr_developer,
          //             'pr_architect': this.productLeadFormField.pr_architect,
          //             'pr_consultant': this.productLeadFormField.pr_consultant,
          //             'pr_houseowner': this.productLeadFormField.pr_houseowner,
          //             'pr_retailers_distributors': this.productLeadFormField.pr_retailers_distributors,
          //             'pr_decmaker': this.productLeadFormField.pr_decmaker,
          //             'pr_classification': this.productLeadFormField.pr_classification,
          //             'pr_stage': this.productLeadFormField.pr_stage,
          //             'tripper': this.productLeadFormField.tripper,
          //             'englaze': this.productLeadFormField.englaze,
          //             'entice': this.productLeadFormField.entice,
          //             'engem': this.productLeadFormField.engem,
          //             'competition': this.productLeadFormField.competition.join(),
          //             'pr_chances': this.productLeadFormField.pr_chances,
          //             'order_month': this.productLeadFormField.order_month,
          //             'pr_status': this.productLeadFormField.pr_status,
          //             'pr_source': this.productLeadFormField.pr_source,
          //             'oris': this.productLeadFormField.oris,
          //             "lost_name": this.productLeadFormField.lost_name,
          //             "lost_value": this.productLeadFormField.lost_value,
          //             "won_value": this.productLeadFormField.won_value,
          //             "won_routed": this.productLeadFormField.won_routed,
          //             "won_ptp_dsp": this.productLeadFormField.won_ptp_dsp,
          //             "parent_id": this.parent_id['id']
          //           };
          //         console.log('projectFormValues', projectFormValues)
          //         this.apiService.addProject(projectFormValues).subscribe(
          //           data => this.handleResponse(data),
          //           error => this.handleError(error)
          //         );
          //     }
          //    }
          //    else {
          //     console.log('7')
          //     this.presentLoading()
          //         if (this.productLeadFormField.pr_status=='Won'){
          //           this.productLeadFormField.lost_name=null
          //           this.productLeadFormField.lost_value=null
          //         }
          //         else if(this.productLeadFormField.pr_status=='Lost'){
          //           this.productLeadFormField.won_value=null
          //           this.productLeadFormField.won_routed=null
          //           this.productLeadFormField.won_ptp_dsp=null
          //         }
          //         else{
          //           this.productLeadFormField.lost_name=null
          //           this.productLeadFormField.lost_value=null
          //           this.productLeadFormField.won_value=null
          //           this.productLeadFormField.won_routed=null
          //           this.productLeadFormField.won_ptp_dsp=null
          //         }
          //         if(this.productLeadFormField.order_month){
          //           this.productLeadFormField.order_month=(this.productLeadFormField.order_month).split('T')[0]
          //         }
          //         var projectFormValues = {
          //           'pr_name': this.productLeadFormField.pr_name,
          //           'add_1': this.productLeadFormField.add_1,
          //           'add_2': this.productLeadFormField.add_2,
          //           'pr_contact': this.productLeadFormField.pr_contact,
          //           'pr_contractor': this.productLeadFormField.pr_contractor,
          //           'pr_builder': this.productLeadFormField.pr_builder,
          //           'pr_developer': this.productLeadFormField.pr_developer,
          //           'pr_architect': this.productLeadFormField.pr_architect,
          //           'pr_consultant': this.productLeadFormField.pr_consultant,
          //           'pr_houseowner': this.productLeadFormField.pr_houseowner,
          //           'pr_retailers_distributors': this.productLeadFormField.pr_retailers_distributors,
          //           'pr_decmaker': this.productLeadFormField.pr_decmaker,
          //           'pr_classification': this.productLeadFormField.pr_classification,
          //           'pr_stage': this.productLeadFormField.pr_stage,
          //           'tripper': this.productLeadFormField.tripper,
          //           'englaze': this.productLeadFormField.englaze,
          //           'entice': this.productLeadFormField.entice,
          //           'engem': this.productLeadFormField.engem,
          //           'competition': this.productLeadFormField.competition.join(),
          //           'pr_chances': this.productLeadFormField.pr_chances,
          //           'order_month': this.productLeadFormField.order_month,
          //           'pr_status': this.productLeadFormField.pr_status,
          //           'pr_source': this.productLeadFormField.pr_source,
          //           'oris': this.productLeadFormField.oris,
          //           "lost_name": this.productLeadFormField.lost_name,
          //           "lost_value": this.productLeadFormField.lost_value,
          //           "won_value": this.productLeadFormField.won_value,
          //           "won_routed": this.productLeadFormField.won_routed,
          //           "won_ptp_dsp": this.productLeadFormField.won_ptp_dsp,
          //           "parent_id": this.parent_id['id']
          //         };
          //       console.log('projectFormValues', projectFormValues)
          //       this.apiService.addProject(projectFormValues).subscribe(
          //         data => this.handleResponse(data),
          //         error => this.handleError(error)
          //       );
          //   }
          //   }
          //   else {
          //     console.log('7')
          //    this.presentLoading()
          //         if (this.productLeadFormField.pr_status=='Won'){
          //           this.productLeadFormField.lost_name=null
          //           this.productLeadFormField.lost_value=null
          //         }
          //         else if(this.productLeadFormField.pr_status=='Lost'){
          //           this.productLeadFormField.won_value=null
          //           this.productLeadFormField.won_routed=null
          //           this.productLeadFormField.won_ptp_dsp=null
          //         }
          //         else{
          //           this.productLeadFormField.lost_name=null
          //           this.productLeadFormField.lost_value=null
          //           this.productLeadFormField.won_value=null
          //           this.productLeadFormField.won_routed=null
          //           this.productLeadFormField.won_ptp_dsp=null
          //         }
          //         if(this.productLeadFormField.order_month){
          //           this.productLeadFormField.order_month=(this.productLeadFormField.order_month).split('T')[0]
          //         }
          //         var projectFormValues = {
          //           'pr_name': this.productLeadFormField.pr_name,
          //           'add_1': this.productLeadFormField.add_1,
          //           'add_2': this.productLeadFormField.add_2,
          //           'pr_contact': this.productLeadFormField.pr_contact,
          //           'pr_contractor': this.productLeadFormField.pr_contractor,
          //           'pr_builder': this.productLeadFormField.pr_builder,
          //           'pr_developer': this.productLeadFormField.pr_developer,
          //           'pr_architect': this.productLeadFormField.pr_architect,
          //           'pr_consultant': this.productLeadFormField.pr_consultant,
          //           'pr_houseowner': this.productLeadFormField.pr_houseowner,
          //           'pr_retailers_distributors': this.productLeadFormField.pr_retailers_distributors,
          //           'pr_decmaker': this.productLeadFormField.pr_decmaker,
          //           'pr_classification': this.productLeadFormField.pr_classification,
          //           'pr_stage': this.productLeadFormField.pr_stage,
          //           'tripper': this.productLeadFormField.tripper,
          //           'englaze': this.productLeadFormField.englaze,
          //           'entice': this.productLeadFormField.entice,
          //           'engem': this.productLeadFormField.engem,
          //           'competition': this.productLeadFormField.competition.join(),
          //           'pr_chances': this.productLeadFormField.pr_chances,
          //           'order_month': this.productLeadFormField.order_month,
          //           'pr_status': this.productLeadFormField.pr_status,
          //           'pr_source': this.productLeadFormField.pr_source,
          //           'oris': this.productLeadFormField.oris,
          //           "lost_name": this.productLeadFormField.lost_name,
          //           "lost_value": this.productLeadFormField.lost_value,
          //           "won_value": this.productLeadFormField.won_value,
          //           "won_routed": this.productLeadFormField.won_routed,
          //           "won_ptp_dsp": this.productLeadFormField.won_ptp_dsp,
          //           "parent_id": this.parent_id['id']
          //         };
          //       console.log('projectFormValues', projectFormValues)
          //       this.apiService.addProject(projectFormValues).subscribe(
          //         data => this.handleResponse(data),
          //         error => this.handleError(error)
          //       );
          //   }
          // }
          // else{
          //   this.presentToast("You are not mapped to ISO")
          //   this.loadingCtrl.dismiss()
          // }
          // }

        }, {
          key: "handleResponse",
          value: function handleResponse(data) {
            this.events.publish({
              name: 'project:success',
              params: data
            });
            this.loadingCtrl.dismiss();
            console.log('here');
            this.presentProjectLeadToast("Project lead has been added successfully");
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            this.loadingCtrl.dismiss();
            this.events.publish({
              name: 'project:failed',
              params: ''
            });
            var errorMsg = '';

            if (error.status == 401) {
              errorMsg = error.error.message;
            } else if (error.status == 500) {
              errorMsg = error.error.message;
            } else {
              errorMsg = error.error.error;
            }

            this.presentToast(errorMsg);
          }
        }, {
          key: "addLeadForm",
          value: function addLeadForm() {
            var _this10 = this;

            if (this.addLeadFormField.first_name == '' || this.addLeadFormField.first_name == null) {
              this.presentToast(this.tran_required_first_name);
            } else if (this.addLeadFormField.last_name == '' || this.addLeadFormField.last_name == null) {
              this.presentToast(this.tran_required_last_name);
            } else if (this.addLeadFormField.username == '' || this.addLeadFormField.username == null) {
              this.presentToast(this.tran_required_mobile_no);
            } else {
              this.presentLoading();
              var addLeadFormValues = {
                'mob': this.addLeadFormField.username,
                'name': this.addLeadFormField.first_name + " " + this.addLeadFormField.last_name,
                'type': this.type
              };
              console.log('addLeadFormValues', addLeadFormValues);
              this.apiService.addLeadUser(addLeadFormValues).subscribe(function (data) {
                _this10.handleLeadResponse(data);
              }, function (error) {
                return _this10.handleLeadError(error);
              });
            }
          }
        }, {
          key: "handleLeadResponse",
          value: function handleLeadResponse(data) {
            this.loadingCtrl.dismiss();
            console.log('here', data);
            this.presentToast(data);
            this.closeDrawer('success');
          }
        }, {
          key: "handleLeadError",
          value: function handleLeadError(error) {
            this.loadingCtrl.dismiss();
            console.log(error);
            this.events.publish({
              name: 'addLeadUser:failed',
              params: ''
            });
            var errorMsg = '';

            if (error.status == 401) {
              errorMsg = error.error;
            } else {
              errorMsg = error.error;
            }

            this.presentToast(errorMsg);
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
          key: "presentProjectLeadToast",
          value: function presentProjectLeadToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this11 = this;

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
                    toast.onDidDismiss().then(function () {
                      _this11.router.navigate(['projectlist']);
                    });

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var loading, _yield$loading$onDidD, role, data;

              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingCtrl.create({
                      spinner: 'crescent',
                      message: this.tran_please_wait + '...'
                    });

                  case 2:
                    loading = _context3.sent;
                    _context3.next = 5;
                    return loading.present();

                  case 5:
                    _context3.next = 7;
                    return loading.onDidDismiss();

                  case 7:
                    _yield$loading$onDidD = _context3.sent;
                    role = _yield$loading$onDidD.role;
                    data = _yield$loading$onDidD.data;
                    console.log('Loading dismissed!');

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['home']);
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.productLeadFormField = {
              pr_name: null,
              add_1: null,
              add_2: null,
              pr_contact: null,
              pr_contractor: null,
              pr_builder: null,
              pr_developer: null,
              pr_architect: null,
              pr_consultant: null,
              pr_houseowner: null,
              pr_retailers_distributors: null,
              pr_decmaker: null,
              pr_classification: null,
              pr_stage: null,
              tripper: null,
              englaze: null,
              entice: null,
              engem: null,
              competition: null,
              pr_chances: null,
              order_month: null,
              pr_status: null,
              pr_source: null,
              oris: null,
              lost_name: null,
              lost_value: null,
              won_value: null,
              won_routed: null,
              won_ptp_dsp: null
            };
            this.addLeadFormField = {
              username: null,
              first_name: null,
              last_name: null
            };
          }
        }]);
      }();

      ProjectLeadPage.ctorParameters = function () {
        return [{
          type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      ProjectLeadPage.propDecorators = {
        cityComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['cityComponent']
        }]
      };
      ProjectLeadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-lead',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./project-lead.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/project-lead/project-lead.page.html"))["default"],
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('inOutAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          height: 0,
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.25s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          height: 300,
          opacity: 1
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          height: 300,
          opacity: 1
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.25s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          height: 0,
          opacity: 0
        }))])])],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./project-lead.page.scss */
        "./src/app/project-lead/project-lead.page.scss"))["default"]]
      })], ProjectLeadPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=project-lead-project-lead-module-es5.js.map