webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/add/add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n  width: 500px;\n}\na{\n  display: block;\n}\n.buttons{\n  text-align: center;\n}\nh1{\n  display: inline-block;\n}\nimg{\n  vertical-align: top;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"text-center\">\n    <img src=\"http://swierengajewelers.com/wp-content/uploads/2014/10/questions-mark.png\" width=\"70px\" height=\"70px\" alt=\"\">\n    <h1>New Question</h1>\n  </div>\n  <div class=\"container\">\n    <div class=\"form\">\n      <form (submit)=\"onSubmit()\" class=\"form-horizontal\">\n        <div class=\"form-group\">\n          <label for=\"question\">Question:</label>\n          <input type=\"text\" class=\"form-control\" name=\"question\" [(ngModel)]=\"newQuestion.question\" #question=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"correct\">Correct Answer:</label>\n          <input type=\"text\" class=\"form-control\" name=\"correct\" [(ngModel)]=\"newQuestion.correct\" #correct=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"fake1\">Fake Answer 1:</label>\n          <input type=\"text\" class=\"form-control\" name=\"fake1\" [(ngModel)]=\"newQuestion.fake1\" #fake1=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"fake2\">Fake Answer 2:</label>\n          <input type=\"text\" class=\"form-control\" name=\"fake2\" [(ngModel)]=\"newQuestion.fake2\" #fake2=\"ngModel\">\n        </div>\n        <div class=\"buttons\">\n          <input class=\"btn btn-success\" type=\"submit\" value=\"Add Question\">\n          <a href=\"home\" style=\"color: gray\">Cancel</a>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddComponent = (function () {
    function AddComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.currentUser = { name: "" };
        this.newQuestion = { question: "", correct: "", fake1: "", fake2: "" };
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getCurrentUser()
            .then(function (data) {
            _this.currentUser = data;
        })
            .catch(function (error) {
            console.log(error);
            _this._router.navigate(['']);
        });
    };
    AddComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Hit onSubmit');
        this._userService.addQuestion(this.newQuestion)
            .then(function (data) {
            if (data.errors == undefined) {
                console.log(data);
                _this._router.navigate(['home']).then(function (data) {
                    console.log('You have successfully added a question!!');
                });
            }
        });
    };
    return AddComponent;
}());
AddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-add',
        template: __webpack_require__("../../../../../src/app/add/add.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add/add.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AddComponent);

var _a, _b;
//# sourceMappingURL=add.component.js.map

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    ApiService.prototype.register = function (userObj) {
        return this._http.post('/users', userObj)
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.getCurrentUser = function () {
        return this._http.get('/users/current')
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.addQuestion = function (questionObj) {
        return this._http.post('/users/add', questionObj)
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.getQuestions = function () {
        return this._http.get('users/get')
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.matchCorrect = function (answerObj) {
        return this._http.post('/users/checkAns', answerObj)
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.saveScore = function (scoreObj) {
        return this._http.post('users/saveScore', scoreObj)
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.getScores = function () {
        return this._http.get('users/getScores')
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.getCurrentScore = function () {
        return this._http.get('users/currentScore')
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.clearSessions = function () {
        return this._http.get('users/clearSessions')
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logreg_logreg_component__ = __webpack_require__("../../../../../src/app/logreg/logreg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_add_component__ = __webpack_require__("../../../../../src/app/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__play_play_component__ = __webpack_require__("../../../../../src/app/play/play.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__logreg_logreg_component__["a" /* LogregComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'home/add',
        component: __WEBPACK_IMPORTED_MODULE_4__add_add_component__["a" /* AddComponent */]
    },
    {
        path: 'home/play',
        component: __WEBPACK_IMPORTED_MODULE_5__play_play_component__["a" /* PlayComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logreg_logreg_component__ = __webpack_require__("../../../../../src/app/logreg/logreg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_add_component__ = __webpack_require__("../../../../../src/app/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__play_play_component__ = __webpack_require__("../../../../../src/app/play/play.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__logreg_logreg_component__["a" /* LogregComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__add_add_component__["a" /* AddComponent */],
            __WEBPACK_IMPORTED_MODULE_10__play_play_component__["a" /* PlayComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#play{\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n#currentScore{\n  color: red;\n}\n.container{\n  width: 500px;\n}\n.tableScroll{\n  width: 500px;\n  height: 800px;\n  overflow: scroll;\n}\n.container-fluid{\n  background-color: #17bda6;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>Welcome {{currentUser.name}}~</h2>\n  <div class=\"row text-center\">\n    <a class=\"col-sm-4\" href=\"home\"><h4>Home</h4></a>\n    <a class=\"col-sm-4\" [routerLink]=\"['add']\"><h4>Add Question</h4></a>\n    <a class=\"col-sm-4\" href=\"\" (click)=\"logout()\"><h4>logout</h4></a>\n  </div>\n</div>\n\n<div *ngIf=\"currentScore.score != undefined\">\n  <h3 id=\"currentScore\" *ngIf=\"currentScore.score > 2\">Hey {{currentScore.name}}, your score is {{currentScore.score}}/3. Good Job!</h3>\n  <h3 id=\"currentScore\" *ngIf=\"currentScore.score < 3\">Hey {{currentScore.name}}, your score is {{currentScore.score}}/3</h3>\n</div>\n\n<body class=\"text-center\">\n  <div id=\"play\">\n    <a [routerLink]=\"['play']\"><button type=\"button\" class=\"btn btn-danger btn-lg\">PLAY</button></a>\n    <p style=\"color: #80808078\">*Click the button above to start the trivia game</p>\n  </div>\n  <div class=\"container\">\n    <div class=\"form-inline text-left\">\n      <div class=\"form-group\">\n        <label for=\"searchString\">Search:</label>\n        <input type=\"text\" class=\"form-control\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"searchScore()\">\n      </div>\n    </div>\n    <div class=\"tableScroll\">\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th class=\"text-center\">Name</th>\n            <th class=\"text-center\">Score</th>\n            <th class=\"text-center\">Percentage</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let score of shownScores\">\n            <td>{{score.name}}</td>\n            <td>{{score.score}}/3</td>\n            <td *ngIf=\"score.score == 0\">0%</td>\n            <td *ngIf=\"score.score == 1\">33.3%</td>\n            <td *ngIf=\"score.score == 2\">66.7%</td>\n            <td *ngIf=\"score.score == 3\">100%</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.currentUser = { name: "" };
        this.allUsers = [];
        this.scores = [];
        this.shownScores = [];
        this.currentScore = { name: "", score: "" };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getCurrentUser()
            .then(function (data) {
            _this.currentUser = data;
        })
            .catch(function (error) {
            console.log(error);
            _this._router.navigate(['']);
        });
        this.getAllScores();
        this._userService.getCurrentScore()
            .then(function (data) {
            _this.currentScore = data;
            console.log(_this.currentScore);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    HomeComponent.prototype.getAllScores = function () {
        var _this = this;
        this._userService.getScores()
            .then(function (data) {
            _this.scores = data;
            _this.shownScores = data;
            console.log(_this.scores);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    HomeComponent.prototype.searchScore = function () {
        var _this = this;
        console.log("hit searchScore", this.searchString);
        this.shownScores = this.scores.filter(function (score) {
            console.log(score.name.includes(_this.searchString));
            console.log(score.score);
            return score.name.toLowerCase().includes(_this.searchString) || score.score.toString().includes(_this.searchString);
        });
    };
    HomeComponent.prototype.logout = function () {
        console.log("hit logout");
        this._userService.clearSessions()
            .then(function (session) {
            console.log(session.currentUserSession);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/logreg/logreg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login{\n  display: inline-block;\n  width: 27%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logreg/logreg.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"text-center\">\n  <div class=\"login\">\n    <img src=\"https://logopond.com/logos/7cbefd1c803c7e9515ea4be59233da29.png\" width=\"180px\" height=\"150px\" alt=\"\">\n    <h2>Please enter your name:</h2>\n    <form (submit)=\"onSubmit()\" #logRegForm=\"ngForm\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"name\" #name=\"ngModel\" [(ngModel)]='newUser.name' required minlength=4>\n        <p *ngIf=\"name.invalid && name.dirty\">Please enter in at least 4 characters</p>\n      </div>\n      <input type=\"submit\" class=\"btn btn-success\" [disabled]=\"logRegForm.invalid\" align=\"left\">\n    </form>\n  </div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/logreg/logreg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogregComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogregComponent = (function () {
    function LogregComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.newUser = { name: "" };
    }
    LogregComponent.prototype.ngOnInit = function () {
    };
    LogregComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.newUser);
        this._userService.register(this.newUser)
            .then(function (data) {
            console.log(data);
            _this._router.navigate(['/home']);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return LogregComponent;
}());
LogregComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-logreg',
        template: __webpack_require__("../../../../../src/app/logreg/logreg.component.html"),
        styles: [__webpack_require__("../../../../../src/app/logreg/logreg.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LogregComponent);

var _a, _b;
//# sourceMappingURL=logreg.component.js.map

/***/ }),

/***/ "../../../../../src/app/play/play.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".choices{\n  display: inline-block;\n}\n.container{\n  width: 700px;\n}\na{\n  color: gray;\n  display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/play/play.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"container\">\n    <h4>Choose an answer for each of the questions and submit the test once done. Good luck {{currentUser.name}}!</h4>\n    <form (submit)=\"onSubmit()\" #quizForm=\"ngForm\">\n      <div *ngFor=\"let question of allQuestions; let i = index\">\n\n        <!-- question 1 -->\n        <fieldset *ngIf=\"i == 0\">\n            <h4>1. {{allQuestions[0].question}}</h4>\n              <div>\n                <input name=\"question0\" type=\"radio\" value=\"{{allQuestions[0].correct}}\" [(ngModel)]=\"allAnswers.question0\" #question0=\"ngModel\" required><p class=\"choices\">{{allQuestions[0].correct}}</p>\n              </div>\n\n              <div>\n                <input name=\"question0\" type=\"radio\" value=\"{{allQuestions[0].fake1}}\" [(ngModel)]=\"allAnswers.question0\" #question0=\"ngModel\"><p class=\"choices\">{{allQuestions[0].fake1}}</p>\n              </div>\n\n              <div>\n                <input name=\"question0\" type=\"radio\" value=\"{{allQuestions[0].fake2}}\" [(ngModel)]=\"allAnswers.question0\" #question0=\"ngModel\"><p class=\"choices\">{{allQuestions[0].fake2}}</p>\n              </div>\n        </fieldset>\n\n        <!-- question 2 -->\n        <fieldset *ngIf=\"i == 1\">\n            <h4>2. {{allQuestions[1].question}}</h4>\n              <div>\n                <input name=\"question1\" type=\"radio\" value=\"{{allQuestions[1].correct}}\" [(ngModel)]=\"allAnswers.question1\" #question1=\"ngModel\" required><p class=\"choices\">{{allQuestions[1].correct}}</p>\n              </div>\n\n              <div>\n                <input name=\"question1\" type=\"radio\" value=\"{{allQuestions[1].fake1}}\" [(ngModel)]=\"allAnswers.question1\" #question1=\"ngModel\"><p class=\"choices\">{{allQuestions[1].fake1}}</p>\n              </div>\n\n              <div>\n                <input name=\"question1\" type=\"radio\" value=\"{{allQuestions[1].fake2}}\" [(ngModel)]=\"allAnswers.question1\" #question1=\"ngModel\"><p class=\"choices\">{{allQuestions[1].fake2}}</p>\n              </div>\n        </fieldset>\n\n        <!-- question 3 -->\n        <fieldset *ngIf=\"i == 2\">\n            <h4>3. {{allQuestions[2].question}}</h4>\n              <div>\n                <input name=\"question2\" type=\"radio\" value=\"{{allQuestions[2].correct}}\" [(ngModel)]=\"allAnswers.question2\" #question2=\"ngModel\" required><p class=\"choices\">{{allQuestions[2].correct}}</p>\n              </div>\n\n              <div>\n                <input name=\"question2\" type=\"radio\" value=\"{{allQuestions[2].fake1}}\" [(ngModel)]=\"allAnswers.question2\" #question2=\"ngModel\"><p class=\"choices\">{{allQuestions[2].fake1}}</p>\n              </div>\n\n              <div>\n                <input name=\"question2\" type=\"radio\" value=\"{{allQuestions[2].fake2}}\" [(ngModel)]=\"allAnswers.question2\" #question2=\"ngModel\"><p class=\"choices\">{{allQuestions[2].fake2}}</p>\n              </div>\n        </fieldset>\n\n      </div>\n      <input type=\"submit\" value=\"submit\" [disabled]=\"quizForm.invalid\" class=\"btn btn-success\">\n      <a href=\"home\">Cancel</a>\n    </form>\n  </div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/play/play.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayComponent = (function () {
    function PlayComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.currentUser = { name: "" };
        this.allAnswers = { question0: "", question1: "", question2: "" };
        this.allScores = { name: "", score: "" };
    }
    PlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getCurrentUser()
            .then(function (data) {
            _this.currentUser = data;
        })
            .catch(function (error) {
            console.log(error);
            _this._router.navigate(['']);
        });
        this.getUserName();
    };
    PlayComponent.prototype.getUserName = function () {
        var _this = this;
        this._userService.getCurrentUser()
            .then(function (name) {
            _this.getRanQuestions();
            _this.currentUser = name;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    PlayComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Hit onSubmit', this.allAnswers);
        this._userService.matchCorrect(this.allAnswers)
            .then(function (score) {
            // the getUserName function
            _this._userService.getCurrentUser()
                .then(function (name) {
                console.log(name.name + " got this many correct: " + score + "/3");
                _this.allScores.name = name.name;
                _this.allScores.score = score;
                // save the score function
                _this.saveScore(_this.allScores);
                _this._router.navigate(['/home']);
            })
                .catch(function (error) {
                console.log(error);
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    PlayComponent.prototype.getRanQuestions = function () {
        var _this = this;
        this._userService.getQuestions()
            .then(function (data) {
            console.log('then');
            _this.allQuestions = data;
            console.log(_this.allQuestions);
        })
            .catch(function (error) {
            console.log('catch');
            console.log(error);
        });
    };
    PlayComponent.prototype.saveScore = function (allScores) {
        this._userService.saveScore(this.allScores)
            .then(function (returnScore) {
            console.log(returnScore);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return PlayComponent;
}());
PlayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-play',
        template: __webpack_require__("../../../../../src/app/play/play.component.html"),
        styles: [__webpack_require__("../../../../../src/app/play/play.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PlayComponent);

var _a, _b;
//# sourceMappingURL=play.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map