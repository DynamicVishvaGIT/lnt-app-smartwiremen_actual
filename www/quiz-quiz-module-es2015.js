(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quiz-quiz-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/quiz.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/quiz.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div>\n    <ion-button  *ngIf=\"questions\" expand=\"block\" shape=\"round\" class=\"answer-question ion-margin\" >Watch Video</ion-button>\n  </div>\n  <ion-row  *ngIf=\"Video\" class=\"ion-margin\" >\n    <div class=\"frame-div\">\n    <iframe class=\"responsive-iframe\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(Video.video_link)\"  target=\"_parent\" allowfullscreen></iframe>\n  </div>\n</ion-row>\n<div>\n  <ion-button  *ngIf=\"questions\" expand=\"block\" shape=\"round\" class=\"answer-question ion-margin\" (click)=\"answerQuestions()\">Answer questions</ion-button>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/quiz/quiz-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/quiz/quiz-routing.module.ts ***!
  \*********************************************/
/*! exports provided: QuizPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPageRoutingModule", function() { return QuizPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _quiz_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz.page */ "./src/app/quiz/quiz.page.ts");




const routes = [
    {
        path: '',
        component: _quiz_page__WEBPACK_IMPORTED_MODULE_3__["QuizPage"]
    }
];
let QuizPageRoutingModule = class QuizPageRoutingModule {
};
QuizPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuizPageRoutingModule);



/***/ }),

/***/ "./src/app/quiz/quiz.module.ts":
/*!*************************************!*\
  !*** ./src/app/quiz/quiz.module.ts ***!
  \*************************************/
/*! exports provided: QuizPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPageModule", function() { return QuizPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _quiz_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz-routing.module */ "./src/app/quiz/quiz-routing.module.ts");
/* harmony import */ var _quiz_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz.page */ "./src/app/quiz/quiz.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let QuizPageModule = class QuizPageModule {
};
QuizPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _quiz_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuizPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_quiz_page__WEBPACK_IMPORTED_MODULE_6__["QuizPage"]]
    })
], QuizPageModule);



/***/ }),

/***/ "./src/app/quiz/quiz.page.scss":
/*!*************************************!*\
  !*** ./src/app/quiz/quiz.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-subtitle {\n  text-transform: none;\n}\n\n.answer-question {\n  --color: #fff;\n  --background: #f4b404;\n}\n\n.frame-div {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%;\n}\n\n.responsive-iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n\nion-title {\n  --color: #000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWl6LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBREE7RUFDRSx3QkFBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvcXVpei9xdWl6LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG4uYW5zd2VyLXF1ZXN0aW9uIHtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRiNDA0O1xufVxuLmZyYW1lLWRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1Ni4yNSU7XG59XG5cbi5yZXNwb25zaXZlLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLXRpdGxlIHtcbiAgLS1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/quiz/quiz.page.ts":
/*!***********************************!*\
  !*** ./src/app/quiz/quiz.page.ts ***!
  \***********************************/
/*! exports provided: QuizPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPage", function() { return QuizPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");






let QuizPage = class QuizPage {
    constructor(router, apiService, loadingCtrl, sanitizer, toastCtrl, alertController, route) {
        this.router = router;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.sanitizer = sanitizer;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.route = route;
        this.tran_please_wait = "Please Wait";
        this.answer_question = false;
        this.quiz_answer = [];
    }
    ngOnInit() { }
    goBack() {
        this.router.navigate(["home"]);
    }
    handleResponse(data) {
        console.log(data);
        this.Video = data["Video"];
        this.questions = data["question"];
        console.log(this.questions);
        // this.refresher = null;
        this.loadingCtrl.dismiss();
    }
    ionViewWillEnter() {
        this.presentLoading();
        this.attempt = this.route.snapshot.queryParams["attempt"];
        this.apiService.quiz(this.attempt).subscribe((data) => {
            this.handleResponse(data);
        }, (error) => {
            this.handleError(error);
        });
    }
    handleError(error) {
        this.loadingCtrl.dismiss();
        console.log(error);
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                spinner: "crescent",
                message: this.tran_please_wait + "...",
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log("Loading dismissed!");
        });
    }
    answerQuestions() {
        this.router.navigate(['quizdetails'], { queryParams: { 'attempt': this.attempt } });
    }
    doRefresh(event) {
        console.log("here66");
        this.apiService.quiz(this.attempt).subscribe((data) => {
            event.target.complete();
            this.handleResponse(data);
        }, (error) => {
            event.target.complete();
            this.handleError(error);
        });
    }
    submitQuestions() {
        if (this.quiz_answer.length > 0) {
            console.log(this.quiz_answer);
            var question = [];
            var answer = [];
            for (let i = 0; i < this.quiz_answer.length; i++) {
                var split_array = this.quiz_answer[i].split(",");
                answer.push(split_array[0]);
                question.push(split_array[1]);
            }
            console.log(question, answer);
            this.presentLoading();
            this.apiService.quiz_answer({ "question": question.join(), "answer": answer.join() }).subscribe((data) => {
                this.handleSubmitResponse(data);
            }, (error) => {
                this.handleSubmitError(error);
            });
        }
        else {
            this.presentToast('Please answer all questions');
        }
    }
    handleSubmitResponse(data) {
        console.log(data);
        if (data == 1) {
            this.presentAlert(data + "answer is correct");
        }
        else {
            this.presentAlert(data + " answers are correct");
        }
        this.loadingCtrl.dismiss();
    }
    handleSubmitError(error) {
        this.loadingCtrl.dismiss();
        this.presentAlert("All answers are incorrect");
        console.log(error);
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                position: "middle",
                duration: 3000
            });
            toast.present();
        });
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: message,
                buttons: ['OK'],
                mode: "ios"
            });
            yield alert.present();
        });
    }
};
QuizPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
QuizPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-quiz",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./quiz.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/quiz.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./quiz.page.scss */ "./src/app/quiz/quiz.page.scss")).default]
    })
], QuizPage);



/***/ })

}]);
//# sourceMappingURL=quiz-quiz-module-es2015.js.map