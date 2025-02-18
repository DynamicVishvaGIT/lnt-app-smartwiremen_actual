(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["redeem-redeem-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/redeem/redeem.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/redeem/redeem.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRedeemRedeemPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t\t<ion-refresher-content></ion-refresher-content>\n  \t</ion-refresher>\n    <div class=\"ion-padding-top ion-padding-horizontal\">\n      \t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"2\" style=\"text-align: start;margin-left: -26px;\">\n\t\t\t\t\t<ion-menu-button></ion-menu-button>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"8\" style=\"text-align: center;\">\n\t\t\t\t\t<strong class=\"header\" style=\"color:#131313;\">{{ 'gift_redeem' | translate }}</strong>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n      \t</ion-grid>\n    </div>\n\t<ion-searchbar class=\"custom\" name=\"search\" [(ngModel)]=\"terms\" placeholder=\"{{ 'search_gifts' | translate }}\" mode=\"ios\"></ion-searchbar>\n\t<div class=\"gift-card-gap\" *ngIf=\"items && restricted_array && gift_code_array\">  <!--ion-padding-horizontal-->\n\t\t<ion-card class=\"ion-margin-bottom gift-card border-left-color\" mode=\"ios\" *ngFor=\"let gift of items | search : terms; let i = index;\" >\n\t\t  \t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"3\" class=\"border-right\">\n\t\t\t\t\t\t<div [ngClass]=\"(gift.gift_name.charAt(0) === 'G' || gift.gift_name.charAt(0) === 'g')?'img-container':''\">\n\t\t\t\t\t\t\t<img src=\"../../assets/imgs/no-image.png\" *ngIf=\"!gift?.gift_image\" alt=\"\" [ngClass]=\"(gift.gift_name.charAt(0) === 'G' || gift.gift_name.charAt(0) === 'g')?'img-googlepay-card':'img-gift-card'\">     \n\t\t\t\t\t\t\t<img src=\"https://smartwiremen.com/storage/gift_images/{{ gift?.gift_image }}\" *ngIf=\"gift?.gift_image\" alt=\"\" [ngClass]=\"(gift.gift_name.charAt(0) === 'G' || gift.gift_name.charAt(0) === 'g')?'img-googlepay-card':'img-gift-card'\">\n\t\t\t\t\t\t</div> \n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"9\">\n\t\t\t\t\t\t<ion-grid style=\"margin-top: -11px;margin-left: -8px;\">\n\t\t\t\t\t\t\t<ion-row class=\"text-header-align\">\n\t\t\t\t\t\t\t\t<ion-col size=\"9\" class=\"ion-text-wrap\" style=\"text-align:start;\">\n\t\t\t\t\t\t\t\t\t<span style=\"font-size: small;\">{{ 'product_name' | translate }}</span>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<ion-row class=\"text-body-align\" style=\"margin-top: -8px;\">\n\t\t\t\t\t\t\t\t<ion-col size=\"9\" class=\"ion-text-wrap\" style=\"text-align:start;\">\n\t\t\t\t\t\t\t\t\t<span style=\"font-size: 14px;color:black;font-weight: 500;\">{{ gift?.gift_name }}</span>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<ion-row class=\"text-header-align\">\n\t\t\t\t\t\t\t\t<ion-col size=\"6\" style=\"text-align:start;\">\n\t\t\t\t\t\t\t\t\t<span style=\"font-size: small;\">{{ 'point' | translate }}</span>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size=\"6\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t<span style=\"margin-left: -63px;font-size: small;\"> {{ 'qty' | translate }}</span>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<ion-row class=\"text-body-align\" style=\"margin-top: -8px;\">\n\t\t\t\t\t\t\t\t<ion-col size=\"6\" style=\"text-align: start;\">\n\t\t\t\t\t\t\t\t\t<span style=\"font-size: 14px;color:black;font-weight: 500;\">{{ gift?.points }}</span>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size=\"6\" style=\"text-align: center;\" *ngIf=\"isInArray(gift?.gift_ref_code, gift_code_array);\">\n\t\t\t\t\t\t\t\t\t<div style=\"margin-left: -34px;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"counter\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"down\"><ion-icon name=\"remove-circle\" disabled></ion-icon></span>   <!--(click)=\"counter('-',rindex, sponsorship)\"-->\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" readonly [(ngModel)]=\"gift_quantity\" name=\"qty_{{i}}\" [value]=\"gift_quantity\" class=\"input-focused\">  <!--value=\"{{sponsorship.quantity}}\" [(ngModel)]=\"sponsorship.quantity\"-->\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"up\"><ion-icon name=\"add-circle\" disabled></ion-icon></span>  <!--(click)=\"counter('+', rindex, sponsorship)\"-->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size=\"6\" style=\"text-align: center;\" *ngIf=\"!isInArray(gift?.gift_ref_code, gift_code_array);\">\n\t\t\t\t\t\t\t\t\t<div style=\"margin-left: -34px;\">  <!--style=\"margin-left: -23px;\"-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"counter\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"down\" (click)=\"decrementQty(gift)\"><ion-icon name=\"remove-circle\"></ion-icon></span>   <!--(click)=\"counter('-',rindex, sponsorship)\"-->\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" readonly [(ngModel)]=\"gift.qty\" name=\"qty_{{i}}\" [value]=\"gift.qty\" class=\"input-focused\">  <!--value=\"{{sponsorship.quantity}}\" [(ngModel)]=\"sponsorship.quantity\"-->\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"up\" (click)=\"incrementQty(gift)\"><ion-icon name=\"add-circle\"></ion-icon></span>  <!--(click)=\"counter('+', rindex, sponsorship)\"-->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<ion-row class=\"text-header-align\" style=\"margin-top: -13px;\">\n\t\t\t\t\t\t\t\t<ion-col size=\"6\" style=\"text-align:start;\">\n\t\t\t\t\t\t\t\t\t<span style=\"font-size: small;\">{{ 'total' | translate }}</span>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col style=\"margin-top:10px\" size=\"6\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<ion-row class=\"text-body-align\" style=\"margin-top: -8px;\">\n\t\t\t\t\t\t\t\t<ion-col size=\"6\" style=\"text-align: start;\" *ngIf=\"isInArray(gift?.gift_ref_code, gift_code_array);\">\n\t\t\t\t\t\t\t\t\t<span style=\"font-size: 14px;color:black;font-weight: 500;\">{{gift.points}}</span>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size=\"6\" style=\"text-align: start;\" *ngIf=\"!isInArray(gift?.gift_ref_code, gift_code_array);\">\n\t\t\t\t\t\t\t\t\t<span style=\"font-size: 14px;color:black;font-weight: 500;\">{{ (gift.qty ? gift.qty : 0) * gift.points}}</span>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size=\"6\" style=\"margin-top: -13px;\">  <!--text-align: center;-->\n\t\t\t\t\t\t\t\t\t<ion-button style=\"width: 76px; --color: white;\" color=\"primary\" size=\"small\" (click)=\"orderGift(gift)\">\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"cart-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t{{ 'buy' | translate }}\n\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-card>\n\t</div>\n</ion-content>\n<ion-bottom-sheet [(state)]=\"sheetState\" [(dockedHeight)]=\"dockedHeight\"[title]=\"title\">\n  \t<div *ngIf=\"upi\">\n\t\t<ion-row>\n\t\t\t<ion-label class=\"ion-label\">UPI ID</ion-label>\n\t\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom ion-item\" style=\"margin-top: 8px;\"> <!--class=\"item-input-redeem\"-->\n\t\t\t\t<ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n\t\t\t\t<ion-input  type=\"text\" [(ngModel)]=\"profileFormField.upi_id\" name=\"upi_id\" placeholder=\"{{ 'upi_id' | translate }} e.g 1234567890@sbi\" class=\"ion-input\"></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-row> \n\t\t<ion-button  class=\"update-btn\" (click)=\"submitUPI()\">Submit</ion-button>\n  \t</div>\n  \t<div *ngIf=\"bank\">\n\t\t<ion-row>\n\t\t\t<ion-label class=\"ion-label\">Account Holder Name</ion-label>\n\t\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom ion-item\" style=\"margin-top: 8px;\">\n\t\t  \t\t<!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n\t\t  \t\t<ion-input type=\"text\" [(ngModel)]=\"profileFormField.account_holder_name\"  name=\"account_holder_name\" placeholder=\"{{ 'account_holder_name' | translate }}\" class=\"ion-input\"></ion-input>\n\t\t\t</ion-item>\n\t  \t</ion-row>\n\t  \t<ion-row>\n\t\t\t<ion-label class=\"ion-label\">Bank Name</ion-label>\n\t\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom ion-item\" style=\"margin-top: 8px;\">\n\t\t  \t\t<!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n\t\t  \t\t<ion-input type=\"text\" [(ngModel)]=\"profileFormField.bank_name\"  name=\"bank_name\" placeholder=\"{{ 'bank_name' | translate }}\" class=\"ion-input\"></ion-input>\n\t\t\t</ion-item>\n\t  \t</ion-row>\n\t  \t<ion-row>\n\t\t\t<ion-label class=\"ion-label\">Branch Name</ion-label>\n\t\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom ion-item\" style=\"margin-top: 8px;\">\n\t\t  \t\t<!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n\t\t  \t\t<ion-input type=\"text\" [(ngModel)]=\"profileFormField.branch_name\"  name=\"branch_name\" placeholder=\"{{ 'branch_name' | translate }}\" class=\"ion-input\"></ion-input>\n\t\t\t</ion-item>\n\t  \t</ion-row>\n\t  \t<ion-row>\n\t\t\t<ion-label class=\"ion-label\">Account Number</ion-label>\n\t\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom ion-item\" style=\"margin-top: 8px;\">\n\t\t  \t\t<!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n\t\t  \t\t<ion-input type=\"text\" [(ngModel)]=\"profileFormField.account_number\"  name=\"account_number\" placeholder=\"{{ 'account_number' | translate }}\" class=\"ion-input\"></ion-input>\n\t\t\t</ion-item>\n\t  \t</ion-row>\n\t  \t<ion-row>\n\t\t\t<ion-label class=\"ion-label\">IFSC Code</ion-label>\n\t\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom ion-item\" style=\"margin-top: 8px;\">\n\t\t  \t\t<!-- <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label> -->\n\t\t  \t\t<ion-input type=\"text\" [(ngModel)]=\"profileFormField.ifsc_code\"  name=\"ifsc_code\" placeholder=\"{{ 'ifsc_code' | translate }} e.g SBIN0123456\" class=\"ion-input\"></ion-input>\n\t\t\t</ion-item>\n\t  \t</ion-row>\n\t  \t<ion-button  class=\"btn-create\" (click)=\"submitBankDetails()\">Submit</ion-button>\n\t</div>\n</ion-bottom-sheet>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>{{ 'gift_redeem' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"redeem-page ion-no-padding\" >\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t    <ion-refresher-content>\n\t    </ion-refresher-content>\n  \t</ion-refresher>\n\t<ion-searchbar name=\"search\" [(ngModel)]=\"terms\" placeholder=\"{{ 'search_gifts' | translate }}\"></ion-searchbar>\n\t\n\t<div class=\"list-header ion-no-padding ion-no-margin\">\n\t<ion-row style=\"width: 100%;\">\n\t<ion-col size=\"4\" >{{ 'product_name' | translate }}</ion-col>\n\t\n\t<ion-col size=\"3\" >{{ 'qty' | translate }}</ion-col>\n\t<ion-col size=\"3\" class=\"ion-text-center\">{{ 'total' | translate }}</ion-col>\n\t<ion-col size=\"2\" class=\"ion-text-center\">{{ 'buy' | translate }}</ion-col>\n\t</ion-row>\n\t</div>\n\t<div *ngIf=\"items && restricted_array && gift_code_array\" class=\"list-content ion-no-padding\">\n\t\t<ion-item class=\"ion-no-padding\" *ngFor=\"let gift of items | search : terms; let i = index;\">\n\t\t\t<ion-row style=\"width: 100%;\">\n\t\t\t\t<ion-col size=\"4\" class=\"product_name\"> \n\t\t\t\t\t{{ gift?.gift_name }} <br/> {{ 'point' | translate }} : {{ gift?.points }}\n\t\t\t\t<ion-img  src=\"../../assets/imgs/no-image.png\" width=\"100\" *ngIf=\"!gift?.gift_image\"></ion-img>\n\t\t\t\t<ion-img src=\"https://smartwiremen.com/storage/gift_images/{{ gift?.gift_image }}\" width=\"100\" *ngIf=\"gift?.gift_image\"></ion-img>\n\t\t\t\t</ion-col>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\n\t\t\t\t<ion-col style=\"margin-top: 8px;\" *ngIf=\"isInArray(gift?.gift_ref_code, gift_code_array);\" size=\"3\" class=\"ion-no-padding\">\n\t\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"4\" style=\"padding-left: 0;\">\n\t\t\t\t\t<ion-icon disabled color=\"success\" size=\"large\" name=\"add-circle-sharp\"  class=\"ion-no-padding\"></ion-icon>\n\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t<ion-input readonly  type=\"number\" [(ngModel)]=\"gift_quantity\" name=\"qty_{{i}}\"  class=\"qty_input\"></ion-input>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t<ion-icon disabled color=\"danger\" size=\"large\" name=\"remove-circle\"  class=\"ion-no-padding\"></ion-icon>\n\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t\t\n\t\t\t\t\t\n\t    \t\t</ion-col>\n\t\t\t\t<ion-col style=\"margin-top: 8px;\" *ngIf=\"!isInArray(gift?.gift_ref_code, gift_code_array);\" size=\"3\" class=\"ion-no-padding\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"4\" style=\"padding-left: 0;\">\n\t\t\t\t\t\t<ion-icon color=\"success\" size=\"large\"  name=\"add-circle-sharp\" (click)=\"incrementQty(gift)\" class=\"ion-no-padding\"></ion-icon>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<ion-input readonly  type=\"number\" [(ngModel)]=\"gift.qty\" name=\"qty_{{i}}\"  class=\"qty_input\"></ion-input>\n\t\t\t\t\t\t\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"large\" name=\"remove-circle\" (click)=\"decrementQty(gift)\" class=\"ion-no-padding\"></ion-icon>\n\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\n\t\t\t\t\t\n\t\t\t\t\n\t    \t\t</ion-col>\n\t\t\t\t<ion-col style=\"margin-top: 16px;\" *ngIf=\"isInArray(gift?.gift_ref_code, gift_code_array);\" size=\"3\" class=\"ion-text-center\">\n\t\t\t\t\t<span class=\"ion-text-center\">{{gift.points}}</span>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col style=\"margin-top: 16px;\" *ngIf=\"!isInArray(gift?.gift_ref_code, gift_code_array);\" size=\"3\" class=\"ion-text-center\"><span style=\"margin-left: 22px;\">{{ (gift.qty ? gift.qty : 0) * gift.points}}</span></ion-col>\n\t\t\t\t<ion-col size=\"2\"><ion-button  fill=\"clear\"  size=\"large\" color=\"primary\" (click)=\"orderGift(gift)\"><ion-icon  name=\"cart\"></ion-icon></ion-button></ion-col>\n\t\t\t</ion-row>\n\t\t</ion-item>\t\n\t</div>\n</ion-content>\n<ion-bottom-sheet \n    [(state)]=\"sheetState\" \n\t[(dockedHeight)]=\"dockedHeight\"\n\t[title]=\"title\"\n  >\n  <div *ngIf=\"upi\">\n\t<ion-row>\n\t\t<ion-label class=\"form-label\">UPI ID</ion-label>\n\n\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom\" class=\"item-input-redeem\">\n\t\t  <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n\t\t  <ion-input  type=\"text\" [(ngModel)]=\"profileFormField.upi_id\" name=\"upi_id\" placeholder=\"{{ 'upi_id' | translate }} e.g 1234567890@sbi\" ></ion-input>\n\t\t</ion-item>\n\t  </ion-row> \n\t  <ion-button  class=\"update-btn\" (click)=\"submitUPI()\">Submit</ion-button>\n\n  </div>\n  <div *ngIf=\"bank\">\n\t<ion-row>\n\t\t<ion-label class=\"form-label\">Account Holder Name</ion-label>\n\n\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom\" class=\"item-input-redeem\">\n\t\t  <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"profileFormField.account_holder_name\"  name=\"account_holder_name\" placeholder=\"{{ 'account_holder_name' | translate }}\"></ion-input>\n\t\t</ion-item>\n\t  </ion-row>\n\n\t  <ion-row>\n\t\t<ion-label class=\"form-label\">Bank Name</ion-label>\n\n\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom\" class=\"item-input-redeem\">\n\t\t  <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"profileFormField.bank_name\"  name=\"bank_name\" placeholder=\"{{ 'bank_name' | translate }}\"></ion-input>\n\t\t</ion-item>\n\t  </ion-row>\n\n\t  <ion-row>\n\t\t<ion-label class=\"form-label\">Branch Name</ion-label>\n\n\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom\" class=\"item-input-redeem\">\n\t\t  <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"profileFormField.branch_name\"  name=\"branch_name\" placeholder=\"{{ 'branch_name' | translate }}\"></ion-input>\n\t\t</ion-item>\n\t  </ion-row>\n\n\t  <ion-row>\n\t\t<ion-label class=\"form-label\">Account Number</ion-label>\n\n\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom\" class=\"item-input-redeem\">\n\t\t  <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"profileFormField.account_number\"  name=\"account_number\" placeholder=\"{{ 'account_number' | translate }}\"></ion-input>\n\t\t</ion-item>\n\t  </ion-row>\n\n\t  <ion-row>\n\t\t<ion-label class=\"form-label\">IFSC Code</ion-label>\n\n\t\t<ion-item lines=\"none\" class=\"ion-margin-bottom\" class=\"item-input-redeem\">\n\t\t  <ion-label ><ion-icon name=\"pencil-sharp\"></ion-icon></ion-label>\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"profileFormField.ifsc_code\"  name=\"ifsc_code\" placeholder=\"{{ 'ifsc_code' | translate }} e.g SBIN0123456\"></ion-input>\n\t\t</ion-item>\n\t  </ion-row>\n\t  <ion-button  class=\"update-btn\" (click)=\"submitBankDetails()\">Submit</ion-button>\n  </div>\n\n</ion-bottom-sheet> -->";
      /***/
    },

    /***/
    "./src/app/redeem/redeem-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/redeem/redeem-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: RedeemPageRoutingModule */

    /***/
    function srcAppRedeemRedeemRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedeemPageRoutingModule", function () {
        return RedeemPageRoutingModule;
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


      var _redeem_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./redeem.page */
      "./src/app/redeem/redeem.page.ts");

      var routes = [{
        path: '',
        component: _redeem_page__WEBPACK_IMPORTED_MODULE_3__["RedeemPage"]
      }];

      var RedeemPageRoutingModule = /*#__PURE__*/_createClass(function RedeemPageRoutingModule() {
        _classCallCheck(this, RedeemPageRoutingModule);
      });

      RedeemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RedeemPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/redeem/redeem.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/redeem/redeem.module.ts ***!
      \*****************************************/

    /*! exports provided: RedeemPageModule */

    /***/
    function srcAppRedeemRedeemModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedeemPageModule", function () {
        return RedeemPageModule;
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


      var _redeem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./redeem-routing.module */
      "./src/app/redeem/redeem-routing.module.ts");
      /* harmony import */


      var _redeem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./redeem.page */
      "./src/app/redeem/redeem.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _pipes_search_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../pipes/search-pipe.module */
      "./src/app/pipes/search-pipe.module.ts");
      /* harmony import */


      var ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ion-bottom-sheet */
      "./node_modules/ion-bottom-sheet/__ivy_ngcc__/dist/index.js");

      var RedeemPageModule = /*#__PURE__*/_createClass(function RedeemPageModule() {
        _classCallCheck(this, RedeemPageModule);
      });

      RedeemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _redeem_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedeemPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _pipes_search_pipe_module__WEBPACK_IMPORTED_MODULE_8__["SearchPipeModule"], ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["IonBottomSheetModule"]],
        declarations: [_redeem_page__WEBPACK_IMPORTED_MODULE_6__["RedeemPage"]]
      })], RedeemPageModule);
      /***/
    },

    /***/
    "./src/app/redeem/redeem.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/redeem/redeem.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppRedeemRedeemPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: none;\n  background-color: #EFF3F6;\n}\n\n.gap {\n  margin-top: 10px;\n}\n\nion-searchbar.custom {\n  --background: #D8E7F0;\n  --color: #00000096;\n  --clear-button-color: black;\n}\n\n.gift-card-gap {\n  margin-top: -12px;\n}\n\n.gift-card {\n  height: auto;\n  border-radius: 8px;\n}\n\n.img-container {\n  width: 72px;\n  /* set the desired width */\n  height: 35px;\n  /* set the same value for height to make it square */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  /* hide overflow if the image exceeds the box */\n  border: 2px solid #3c4042;\n  /* optional: add a border */\n  border-radius: 4px;\n  margin-top: 80%;\n}\n\n.img-googlepay-card {\n  width: 43px;\n  height: 17px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.img-gift-card {\n  width: 100%;\n  height: 74px;\n  margin-top: 40%;\n}\n\n.img-avatar {\n  border-radius: 50%;\n  width: 100%;\n  height: 80%;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: -5px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.16);\n}\n\n.border-right {\n  border-right: 2px dotted #00000017;\n}\n\n.text-header-align {\n  font-size: smaller;\n  color: #00000087;\n}\n\n.text-body-align {\n  font-size: small;\n}\n\n.counter {\n  width: 150px;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.counter input {\n  width: 50px;\n  border: 0;\n  line-height: 30px;\n  font-size: 14px;\n  text-align: center;\n  background: #ffff;\n  color: black;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n  font-weight: 500;\n}\n\n.counter span {\n  display: block;\n  font-size: 15px;\n  cursor: pointer;\n  color: #3bdbdc;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.border-left-color {\n  border-left: 5px solid #2edcba;\n}\n\n.btn-create {\n  --box-shadow: none;\n  --border-radius: 10px;\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  --padding-left: 25px;\n  --padding-right: 25px;\n  width: 100%;\n  color: #fff;\n  text-transform: none;\n  width: 94%;\n  margin-top: 43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkZWVtL3JlZGVlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtBQURGOztBQU9BO0VBR0UsWUFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxXQUFBO0VBQWEsMEJBQUE7RUFDYixZQUFBO0VBQWMsb0RBQUE7RUFDZCxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQWtCLCtDQUFBO0VBQ2xCLHlCQUFBO0VBQTJCLDJCQUFBO0VBQzNCLGtCQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBRkY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFERjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSw0Q0FBQTtBQUZGOztBQUtBO0VBQ0Usa0NBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBUUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTEY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FBSkY7O0FBT0E7RUFDRSw4QkFBQTtBQUpGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUhGIiwiZmlsZSI6InNyYy9hcHAvcmVkZWVtL3JlZGVlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjNGNjtcbn1cbi5nYXB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC8vIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi8vIC5jdXN0b20tc2VhcmNoe1xuLy8gICAtLWJhY2tncm91bmQ6ICNEOEU3RjA7XG4vLyB9XG5pb24tc2VhcmNoYmFyLmN1c3RvbSB7XG4gIC0tYmFja2dyb3VuZDogI0Q4RTdGMDtcbiAgLS1jb2xvcjogIzAwMDAwMDk2O1xuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogYmxhY2s7XG4gIC8vIGhlaWdodDogNjBweDtcbn1cbi5naWZ0LWNhcmQtZ2FwIHtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIC8vIG1hcmdpbi10b3A6IDhweDtcbiAgLy8gbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIC8vIG1hcmdpbi1yaWdodDogMTlweDtcbn1cblxuLmdpZnQtY2FyZCB7XG4gIC8vYmFja2dyb3VuZDogI2ZmZmZmZjY2O1xuICAvLyBtYXJnaW4tdG9wOiAtOHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmltZy1jb250YWluZXIge1xuICB3aWR0aDogNzJweDsgLyogc2V0IHRoZSBkZXNpcmVkIHdpZHRoICovXG4gIGhlaWdodDogMzVweDsgLyogc2V0IHRoZSBzYW1lIHZhbHVlIGZvciBoZWlnaHQgdG8gbWFrZSBpdCBzcXVhcmUgKi9cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47IC8qIGhpZGUgb3ZlcmZsb3cgaWYgdGhlIGltYWdlIGV4Y2VlZHMgdGhlIGJveCAqL1xuICBib3JkZXI6IDJweCBzb2xpZCAjM2M0MDQyOyAvKiBvcHRpb25hbDogYWRkIGEgYm9yZGVyICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogODAlO1xufVxuXG4uaW1nLWdvb2dsZXBheS1jYXJkIHtcbiAgd2lkdGg6IDQzcHg7XG4gIGhlaWdodDogMTdweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uaW1nLWdpZnQtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc0cHg7XG4gIG1hcmdpbi10b3A6IDQwJTtcbiAgLy9ib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uaW1nLWF2YXRhciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6LTVweDtcbn1cblxuLmJvcmRlci1ib3R0b217XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNik7XG4gIC8vd2lkdGg6IDkwJTtcbn1cbi5ib3JkZXItcmlnaHR7XG4gIGJvcmRlci1yaWdodDogMnB4IGRvdHRlZCAjMDAwMDAwMTc7XG59XG5cbi50ZXh0LWhlYWRlci1hbGlnbiB7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgY29sb3I6ICMwMDAwMDA4NztcbiAgLy9tYXJnaW4tdG9wOiA3cHg7XG59XG5cbi50ZXh0LWJvZHktYWxpZ257XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIC8vbWFyZ2luLXRvcDogLThweDtcbiAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb3VudGVyIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvdW50ZXIgaW5wdXQge1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyOiAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmZmO1xuICBjb2xvcjogYmxhY2s7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY291bnRlciBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLy8gcGFkZGluZzogMCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjM2JkYmRjO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmJvcmRlci1sZWZ0LWNvbG9ye1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyZWRjYmE7XG59XG4uYnRuLWNyZWF0ZSB7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAtLXBhZGRpbmctdG9wOiAyNXB4O1xuICAtLXBhZGRpbmctbGVmdDogMjVweDtcbiAgLS1wYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB3aWR0aDogOTQlO1xuICBtYXJnaW4tdG9wOiA0M3B4O1xufVxuLy8gLnVwZGF0ZS1idG57XG4vLyAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4vLyAgIC0tY29sb3I6I2ZmZjtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG4vLyAuZm9ybS1sYWJlbHtcbi8vICAgbWFyZ2luLWxlZnQ6IDhweDtcbi8vICAgbWFyZ2luLXRvcDogOHB4O1xuLy8gfVxuLy8gLml0ZW0taW5wdXQtcmVkZWVte1xuLy8gICAtLWJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuLy8gICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbi8vICAgYm9yZGVyLXJhZGl1czogMjBweDtcbi8vICAgbWFyZ2luOiA4cHg7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gLnJlZGVlbS1wYWdlIGlvbi1jYXJkIHtcbi8vICAgYm94LXNoYWRvdzogMCAwIDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vIH1cbi8vIC5saXN0LWhlYWRlciB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwYTRmOGI7XG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gICBtYXJnaW46IDAgIWltcG9ydGFudDtcbi8vICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4vLyB9XG4vLyAubGlzdC1oZWFkZXIgPiBpb24tcm93ID4gaW9uLWNvbCB7XG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcbi8vIH1cbi8vIGlvbi1pdGVtOm50aC1jaGlsZCgybiArIDIpIHtcbi8vICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuLy8gfVxuLy8gLmFwcGx5LWJ0biB7XG4vLyAgIGJveC1zaGFkb3c6IG5vbmU7XG4vLyAgIHBhZGRpbmc6IDBweCAxNXB4O1xuLy8gfVxuLy8gLmxpc3QtY29udGVudCBpb24tY29sIHtcbi8vICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbi8vICAgZm9udC13ZWlnaHQ6IDQwMDtcbi8vICAgY29sb3I6ICM2NzY3Njc7XG4vLyB9XG4vLyAubGlzdC1jb250ZW50IC5sYWJlbC5sYWJlbC1tZCB7XG4vLyAgIG1hcmdpbjogNXB4IDA7XG4vLyB9XG4vLyAuYWJvdXQtcGFnZSBwIHtcbi8vICAgZm9udC13ZWlnaHQ6IDMwMDtcbi8vICAgZm9udC1zaXplOiAxM3B4O1xuLy8gICBjb2xvcjogIzc3Nztcbi8vICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4vLyB9XG4vLyAucHJvZHVjdF9uYW1lIHtcbi8vICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XG4vLyB9XG4vLyAucXR5X2lucHV0IHtcbi8vICAgd2lkdGg6IDI3cHg7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbi8vICAgaGVpZ2h0OiAyN3B4O1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjNjc2NzY3O1xuXG4vLyB9XG4vLyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4vLyAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbi8vICAgbWFyZ2luOiAwO1xuLy8gfVxuLy8gLml0ZW0taGFzLWZvY3VzIHtcbi8vICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogI2ZmZmZmZjtcbi8vIH1cbi8vIGlvbi1pbnB1dCB7XG4vLyAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNhOWE5YTk7XG4vLyAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbi8vIH1cbi8vIC5pdGVtLWlucHV0LXJlZGVlbXtcbi8vICAgLS1ib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbi8vICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyAgIG1hcmdpbjogOHB4O1xuLy8gICB3aWR0aDogMTAwJTtcbi8vIH1cbi8vIC51cGRhdGUtYnRue1xuLy8gICBtYXJnaW4tbGVmdDogOHB4O1xuLy8gICAtLWNvbG9yOiNmZmY7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBcbi8vIH1cbi8vIC5mb3JtLWxhYmVse1xuLy8gICBtYXJnaW4tbGVmdDogOHB4O1xuLy8gICBtYXJnaW4tdG9wOiA4cHg7XG4vLyB9Il19 */";
      /***/
    },

    /***/
    "./src/app/redeem/redeem.page.ts":
    /*!***************************************!*\
      !*** ./src/app/redeem/redeem.page.ts ***!
      \***************************************/

    /*! exports provided: RedeemPage */

    /***/
    function srcAppRedeemRedeemPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedeemPage", function () {
        return RedeemPage;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _order_confirmation_order_confirmation_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../order-confirmation/order-confirmation.page */
      "./src/app/order-confirmation/order-confirmation.page.ts");
      /* harmony import */


      var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../pipes/search.pipe */
      "./src/app/pipes/search.pipe.ts");
      /* harmony import */


      var ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ion-bottom-sheet */
      "./node_modules/ion-bottom-sheet/__ivy_ngcc__/dist/index.js");

      var RedeemPage = /*#__PURE__*/function () {
        function RedeemPage(toastCtrl, apiService, loadingCtrl, translate, modalCtrl, menuCtrl) {
          var _this = this;

          _classCallCheck(this, RedeemPage);

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
          this.title = 'Edit'; // qty : number = 0;

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
            upi_id: null
          };
          this.upi = false;
          this.bank = false;
          this.menuCtrl.enable(true, 'myMenu');
          this.translate.get('please_wait').subscribe(function (res) {
            _this.tran_please_wait = res;
          });
          this.translate.get('required_qty').subscribe(function (res) {
            _this.tran_required_qty = res;
          });
          this.translate.get('order_success').subscribe(function (res) {
            _this.tran_order_success = res;
          }); // this.qty = 0;
        }

        return _createClass(RedeemPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            console.log('inside2');
            this.presentLoading();
            this.loadGifts2();
            this.apiService.addRestriction().subscribe(function (data) {
              _this2.restricted_array = data;

              for (var i = 0; i < _this2.restricted_array.length; i++) {
                _this2.gift_code_array.push(_this2.restricted_array[i]['bank']);
              }

              console.log('gift', _this2.gift_code_array);
            }, function (error) {
              return _this2.handleError(error);
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this3 = this;

            console.log('inside');
            this.apiService.home().subscribe(function (data) {
              _this3.user_id = data['id'];
            }, function (error) {
              return _this3.handleError(error);
            });
            this.apiService.addRestriction().subscribe(function (data) {
              _this3.restricted_array = data;

              for (var i = 0; i < _this3.restricted_array.length; i++) {
                _this3.gift_code_array.push(_this3.restricted_array[i]['bank']);
              }

              _this3.items.forEach(function (element) {
                for (var _i = 0; _i < _this3.gift_code_array.length; _i++) {
                  if (element.gift_ref_code == _this3.gift_code_array[_i]) {
                    _this3.gift_quantity = 1;
                  }
                }
              });

              console.log('gift', _this3.gift_code_array);
            }, function (error) {
              return _this3.handleError(error);
            });
            this.loadParentId();
          }
        }, {
          key: "loadParentId",
          value: function loadParentId() {
            var _this4 = this;

            this.apiService.parentId().subscribe(function (data) {
              _this4.parent_id = data;
              console.log('dta', data);
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "presentOrderConfirmationModal",
          value: function presentOrderConfirmationModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _order_confirmation_order_confirmation_page__WEBPACK_IMPORTED_MODULE_5__["OrderConfirmationPage"],
                      cssClass: 'my-custom-class',
                      componentProps: {
                        'gift': this.selected_gift,
                        'gift_code_array': this.gift_code_array
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.loadGifts(event);
          }
        }, {
          key: "loadGifts",
          value: function loadGifts(event) {
            var _this5 = this;

            this.apiService.gifts(this.current_page).subscribe(function (data) {
              event.target.complete();

              _this5.handleResponse(data);
            }, function (error) {
              event.target.complete();

              _this5.handleError(error);
            });
          }
        }, {
          key: "loadGifts2",
          value: function loadGifts2() {
            var _this6 = this;

            this.apiService.gifts(this.current_page).subscribe(function (data) {
              _this6.handleResponse(data);
            }, function (error) {
              _this6.handleError(error);
            });
          }
        }, {
          key: "handleResponse",
          value: function handleResponse(data) {
            var _this7 = this;

            console.log('gifttttttttttttt', data);
            data.gifts.forEach(function (element) {
              for (var i = 0; i < _this7.gift_code_array.length; i++) {
                if (element.gift_ref_code == _this7.gift_code_array[i]) {
                  _this7.gift_quantity = 1;
                }
              }
            });
            this.items = data.gifts; // this.refresher = null;

            this.loadingCtrl.dismiss();
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            console.log(error);
            this.loadingCtrl.dismiss();
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this8 = this;

            setTimeout(function () {
              _this8.loadGifts2();

              infiniteScroll.target.complete();
            }, 500);

            if (this.current_page == this.last_page) {
              this.infiniteScroll.disabled;
            }
          }
        }, {
          key: "incrementQty",
          value: function incrementQty(item) {
            if (isNaN(item.qty)) {
              item.qty = 1;
            } else {
              item.qty += 1;
            }
          }
        }, {
          key: "decrementQty",
          value: function decrementQty(item) {
            if (item.qty - 1 < 0) {
              item.qty = 0;
            } else {
              item.qty -= 1;
            }
          }
        }, {
          key: "orderGift",
          value: function orderGift(gift) {
            var _this9 = this;

            console.log(this.restricted_array);

            if (this.parent_id) {
              this.selected_gift = gift;
              console.log(gift, this.gift_code_array);

              if (this.isInArray(gift.gift_ref_code, this.gift_code_array)) {
                this.gift_quantity = 1;
                gift['qty'] = 1;
              } else {
                this.quantity = gift.qty ? gift.qty : 0;
              }

              if (this.quantity == 0) {
                this.presentToast(this.tran_required_qty);
              } else {
                this.presentLoading();
                console.log(gift);
                this.apiService.home().subscribe(function (data) {
                  console.log(data);

                  if (_this9.isInArray(gift.gift_ref_code, _this9.gift_code_array)) {
                    for (var j = 0; j < _this9.restricted_array.length; j++) {
                      if (_this9.restricted_array[j]['upi'] == 'bank') {
                        if (_this9.restricted_array[j]['bank'] == gift.gift_ref_code) {
                          if (data['account_holder_name'] && data['bank_name'] && data['branch_name'] && data['account_number'] && data['ifsc_code']) {
                            //  this.presentBankAlertConfirm(data,gift)
                            gift['upi'] = null;
                            gift['account_holder_name'] = data['account_holder_name'];
                            gift['bank_name'] = data['bank_name'];
                            gift['branch_name'] = data['branch_name'];
                            gift['account_number'] = data['account_number'];
                            gift['ifsc_code'] = data['ifsc_code'];

                            _this9.apiService.validatePurchase().subscribe(function (data) {
                              _this9.apiService.redeemGiftOTP(gift).subscribe(function (data) {
                                return _this9.handleReedemGiftResponse(data);
                              }, function (error) {
                                return _this9.handleReedemGiftError(error);
                              });
                            }, function (error) {
                              console.log(error);

                              _this9.loadingCtrl.dismiss();

                              _this9.presentToast(error.error.error);
                            });
                          } else {
                            _this9.loadingCtrl.dismiss();

                            _this9.presentToast("Please update bank details from your profile!!");
                          }
                        }
                      } else if (_this9.restricted_array[j]['upi'] == 'upi') {
                        console.log('5555555555555555555555555555555555555555555555555555555555555555');

                        if (_this9.restricted_array[j]['bank'] == gift.gift_ref_code) {
                          if (data['upi_id']) {
                            // this.presentUPIAlertConfirm(data['upi_id'],gift)
                            gift['upi'] = data['upi_id'];
                            gift['account_holder_name'] = null;
                            gift['bank_name'] = null;
                            gift['branch_name'] = null;
                            gift['account_number'] = null;
                            gift['ifsc_code'] = null;

                            _this9.apiService.validatePurchase().subscribe(function (data) {
                              _this9.apiService.redeemGiftOTP(gift).subscribe(function (data) {
                                return _this9.handleReedemGiftResponse(data);
                              }, function (error) {
                                return _this9.handleReedemGiftError(error);
                              });
                            }, function (error) {
                              _this9.loadingCtrl.dismiss();

                              _this9.presentToast(error.error.error);
                            });
                          } else {
                            _this9.loadingCtrl.dismiss();

                            _this9.presentToast("Please update UPI ID from your profile!!");
                          }
                        }
                      }
                    }
                  } else {
                    console.log('666666666666666666666666666666666666666666666666666666666666666666666666');

                    _this9.apiService.redeemGiftOTP(gift).subscribe(function (data) {
                      return _this9.handleReedemGiftResponse(data);
                    }, function (error) {
                      return _this9.handleReedemGiftError(error);
                    });
                  }
                }, function (err) {
                  console.log(err);
                });
              }
            } else {
              this.presentToast("You are not mapped to ISO");
              this.loadingCtrl.dismiss();
            }
          }
        }, {
          key: "handleReedemGiftResponse",
          value: function handleReedemGiftResponse(data) {
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

            this.apiService.checkActivity().subscribe(function (data) {
              console.log('check successful', data);
            }, function (error) {
              console.log('err', error);
            });
          }
        }, {
          key: "handleReedemGiftError",
          value: function handleReedemGiftError(error) {
            this.loadingCtrl.dismiss();
            var toast = this.toastCtrl.create({
              message: '',
              duration: 1000,
              position: 'middle'
            });
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
          key: "isInArray",
          value: function isInArray(gift_ref_code, array_to_search) {
            var length = array_to_search.length;

            for (var i = 0; i < length; i++) {
              if (array_to_search[i] == gift_ref_code) return true;
            }

            return false;
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {//  this.loadGifts2()
          } //  async presentBankAlertConfirm(data,gift) {
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

        }, {
          key: "redeemGift",
          value: function redeemGift(gift) {
            var _this10 = this;

            this.apiService.validatePurchase().subscribe(function (data) {
              _this10.apiService.redeemGiftOTP(gift).subscribe(function (data) {
                return _this10.handleReedemGiftResponse(data);
              }, function (error) {
                return _this10.handleReedemGiftError(error);
              });
            }, function (error) {
              _this10.loadingCtrl.dismiss();

              _this10.presentToast(error.error.error);
            });
          }
        }, {
          key: "closeDrawer",
          value: function closeDrawer() {
            this.sheetState = ion_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["SheetState"].Bottom;
          }
        }, {
          key: "submitBankDetails",
          value: function submitBankDetails() {
            var _this11 = this;

            var profileFormField = {
              'account_holder_name': this.profileFormField.account_holder_name,
              'bank_name': this.profileFormField.bank_name,
              'branch_name': this.profileFormField.branch_name,
              'account_number': this.profileFormField.account_number,
              'ifsc_code': this.profileFormField.ifsc_code
            };
            console.log('bank', profileFormField);
            this.apiService.edit_bank(profileFormField).subscribe(function (data) {
              _this11.loadingCtrl.dismiss();

              if (data) {
                _this11.presentToast('Bank Details updated successfully');
              } else {
                _this11.presentToast(_this11.tran_went_wrong);
              }
            }, function (error) {
              return _this11.handleError(error);
            });
          }
        }, {
          key: "submitUPI",
          value: function submitUPI() {
            var _this12 = this;

            var profileFormField = {
              'upi': this.profileFormField.upi_id
            };
            console.log('upi', profileFormField);
            this.apiService.edit_upi(profileFormField).subscribe(function (data) {
              _this12.loadingCtrl.dismiss();

              if (data) {
                _this12.presentToast('UPI ID updated successfully');
              } else {
                _this12.presentToast(_this12.tran_went_wrong);
              }
            }, function (error) {
              return _this12.handleError(error);
            });
          }
        }]);
      }();

      RedeemPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }];
      };

      RedeemPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]]
        }]
      };
      RedeemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redeem',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./redeem.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/redeem/redeem.page.html"))["default"],
        providers: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_6__["SearchPipe"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./redeem.page.scss */
        "./src/app/redeem/redeem.page.scss"))["default"]]
      })], RedeemPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=redeem-redeem-module-es5.js.map