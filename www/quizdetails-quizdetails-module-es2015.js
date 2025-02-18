(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quizdetails-quizdetails-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quizdetails/quizdetails.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quizdetails/quizdetails.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Game</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"questions\">\n  <div *ngFor=\"let question of questions; let i = index;\">\n\n    <ion-card mode=\"ios\" >\n      <ion-card-header>\n        <ion-card-subtitle style=\"font-size: 20px;\">Q.{{i+1}} {{question.Q.question|titlecase}} </ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n    <form>\n        <ion-radio-group \n        allowEmptySelection=\"false\" mode=\"md\" [(ngModel)]=\"quiz_answer[i]\"  name=\"quiz_answer\" >\n          <ion-list-header>\n            <ion-label style=\"text-align: left;\">Please select one</ion-label>\n          </ion-list-header>\n          <ion-item *ngFor=\"let item of question.O\">\n            <ion-label class=\"ion-text-wrap\">\n            {{item.question_option |titlecase}}\n              </ion-label>\n            <ion-radio  slot=\"start\" value=\"{{item.option_id}},{{item.question_id}}\"></ion-radio>\n            <br>\n          </ion-item>\n      \n        </ion-radio-group>\n        </form>\n      </ion-card-content>\n      </ion-card>\n  </div>\n  \n  <div>\n    <ion-button  *ngIf=\"questions\" expand=\"block\" class=\"answer-question ion-margin\" (click)=\"submitQuestions()\">{{'submit' |translate}}</ion-button>\n  </div>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/quizdetails/quizdetails-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/quizdetails/quizdetails-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: QuizdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizdetailsPageRoutingModule", function() { return QuizdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _quizdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quizdetails.page */ "./src/app/quizdetails/quizdetails.page.ts");




const routes = [
    {
        path: '',
        component: _quizdetails_page__WEBPACK_IMPORTED_MODULE_3__["QuizdetailsPage"]
    }
];
let QuizdetailsPageRoutingModule = class QuizdetailsPageRoutingModule {
};
QuizdetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuizdetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/quizdetails/quizdetails.module.ts":
/*!***************************************************!*\
  !*** ./src/app/quizdetails/quizdetails.module.ts ***!
  \***************************************************/
/*! exports provided: QuizdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizdetailsPageModule", function() { return QuizdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _quizdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quizdetails-routing.module */ "./src/app/quizdetails/quizdetails-routing.module.ts");
/* harmony import */ var _quizdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quizdetails.page */ "./src/app/quizdetails/quizdetails.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let QuizdetailsPageModule = class QuizdetailsPageModule {
};
QuizdetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _quizdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuizdetailsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_quizdetails_page__WEBPACK_IMPORTED_MODULE_6__["QuizdetailsPage"]]
    })
], QuizdetailsPageModule);



/***/ }),

/***/ "./src/app/quizdetails/quizdetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/quizdetails/quizdetails.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-subtitle {\n  text-transform: none;\n}\n\n.answer-question {\n  --color: #fff;\n  --background: #f4b404;\n}\n\n.frame-div {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%;\n}\n\n.responsive-iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n\nion-title {\n  --color: #000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpemRldGFpbHMvcXVpemRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHRjs7QUFEQTtFQUNFLHdCQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9xdWl6ZGV0YWlscy9xdWl6ZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuLmFuc3dlci1xdWVzdGlvbiB7XG4gIC0tY29sb3I6ICNmZmY7XG4gIC0tYmFja2dyb3VuZDogI2Y0YjQwNDtcbn1cbi5mcmFtZS1kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNTYuMjUlO1xufVxuXG4ucmVzcG9uc2l2ZS1pZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbmlvbi10aXRsZSB7XG4gIC0tY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/quizdetails/quizdetails.page.ts":
/*!*************************************************!*\
  !*** ./src/app/quizdetails/quizdetails.page.ts ***!
  \*************************************************/
/*! exports provided: QuizdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizdetailsPage", function() { return QuizdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let QuizdetailsPage = class QuizdetailsPage {
    constructor(router, apiService, loadingCtrl, toastCtrl, alertController, route) {
        this.router = router;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.route = route;
        this.tran_please_wait = "Please Wait";
        this.answer_question = false;
        this.quiz_answer = [];
    }
    ngOnInit() {
    }
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
        this.apiService.validForGame().subscribe(data => {
            console.log('valid', data);
            this.valid_for_game = data['game']['attempt'];
            this.game_status = data['game']['status'];
            this.game_valid = data['valid'];
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
        this.answer_question = !this.answer_question;
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
            if (this.game_status == 'Inactive' && ((this.valid_for_game == "0" || this.valid_for_game == "1" || this.valid_for_game == "2"))) {
                var question = [];
                var answer = [];
                for (let i = 0; i < this.quiz_answer.length; i++) {
                    var split_array = this.quiz_answer[i].split(",");
                    answer.push(split_array[0]);
                    question.push(split_array[1]);
                }
                console.log(question, answer);
                this.presentLoading();
                this.apiService.quiz_answer({ "question": question.join(), "answer": answer.join(), "attempt": this.attempt }).subscribe((data) => {
                    this.handleSubmitResponse(data);
                }, (error) => {
                    this.handleSubmitError(error);
                });
            }
            else if ((this.valid_for_game == "1" || this.valid_for_game == "2" || this.valid_for_game == "3") && (this.game_status == 'Active')) {
                this.presentAlert("You have already played this game");
            }
            else if (this.valid_for_game == "3" && this.game_status == "Inactive") {
                this.presentAlert("You have already played this game");
            }
            else if (this.valid_for_game == "3" && this.game_status == "Active") {
                this.presentAlert("You have already played this game");
            }
            else {
                this.presentAlert("You have already played this game");
            }
        }
        else {
            this.presentToast('Please answer all questions');
        }
    }
    handleSubmitResponse(data) {
        this.apiService.validForGame().subscribe(data => {
            console.log('valid', data);
            this.valid_for_game = data['game']['attempt'];
            this.game_status = data['game']['status'];
            this.game_valid = data['valid'];
        });
        console.log(data);
        if (data['ans'] == 1) {
            this.presentIncorrectAlert(data['ans'] + " answer is correct");
        }
        else if (data['ans'] == 5) {
            this.presentWinAlert("You have won the game", "You have earned " + data['point'] + " points");
        }
        else {
            this.presentIncorrectAlert(data['ans'] + " answers are correct");
        }
        this.loadingCtrl.dismiss();
    }
    handleSubmitError(error) {
        this.loadingCtrl.dismiss();
        this.presentIncorrectAlert("All answers are incorrect");
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
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            this.router.navigate(['home']);
                        }
                    }],
                mode: "ios"
            });
            yield alert.present();
        });
    }
    presentIncorrectAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: message,
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            this.router.navigate(['home']);
                        }
                    }],
                mode: "ios"
            });
            yield alert.present();
        });
    }
    presentWinAlert(message, message2) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: message,
                subHeader: message2,
                backdropDismiss: false,
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            this.router.navigate(['home']);
                        }
                    }],
                mode: "ios"
            });
            yield alert.present();
        });
    }
};
QuizdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
QuizdetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quizdetails',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./quizdetails.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quizdetails/quizdetails.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./quizdetails.page.scss */ "./src/app/quizdetails/quizdetails.page.scss")).default]
    })
], QuizdetailsPage);



/***/ })

}]);
//# sourceMappingURL=quizdetails-quizdetails-module-es2015.js.map