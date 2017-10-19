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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_signin_signin_component__ = __webpack_require__("../../../../../src/app/user/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_signup_signup_component__ = __webpack_require__("../../../../../src/app/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compare_compare_component__ = __webpack_require__("../../../../../src/app/compare/compare.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_auth_guard_service__ = __webpack_require__("../../../../../src/app/user/auth-guard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__user_signin_signin_component__["a" /* SigninComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__user_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'compare', canActivate: [__WEBPACK_IMPORTED_MODULE_5__user_auth_guard_service__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_4__compare_compare_component__["a" /* CompareComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__user_auth_guard_service__["a" /* AuthGuard */]]
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

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"/\">Compare Yourself!</a>\r\n    </div>\r\n    <div class=\"navbar-default\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li *ngIf=\"isAuthenticated\" routerLinkActive=\"active\"><a routerLink=\"/compare\">Compare</a></li>\r\n        <li *ngIf=\"isAuthenticated\" routerLinkActive=\"active\"><a (click)=\"onLogout()\" style=\"cursor: pointer;\">Logout</a></li>\r\n        <li *ngIf=\"!isAuthenticated\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"><a routerLink=\"/\">Sign In</a></li>\r\n        <li *ngIf=\"!isAuthenticated\" routerLinkActive=\"active\"><a routerLink=\"/signup\">Sign Up</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isAuthenticated = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authStatusChanged.subscribe(function (authenticated) {
            _this.isAuthenticated = authenticated;
            if (authenticated) {
                _this.router.navigate(['/compare']);
            }
            else {
                _this.router.navigate(['/']);
            }
        });
        this.authService.initAuth();
    };
    AppComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_signup_signup_component__ = __webpack_require__("../../../../../src/app/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_signin_signin_component__ = __webpack_require__("../../../../../src/app/user/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__compare_compare_component__ = __webpack_require__("../../../../../src/app/compare/compare.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__compare_compare_service__ = __webpack_require__("../../../../../src/app/compare/compare.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__compare_compare_input_compare_input_component__ = __webpack_require__("../../../../../src/app/compare/compare-input/compare-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__compare_compare_results_compare_results_component__ = __webpack_require__("../../../../../src/app/compare/compare-results/compare-results.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__user_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_6__user_signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_7__compare_compare_component__["a" /* CompareComponent */],
            __WEBPACK_IMPORTED_MODULE_11__compare_compare_input_compare_input_component__["a" /* CompareInputComponent */],
            __WEBPACK_IMPORTED_MODULE_12__compare_compare_results_compare_results_component__["a" /* CompareResultsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__user_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__compare_compare_service__["a" /* CompareService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/compare/compare-input/compare-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/compare/compare-input/compare-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3 text-center\">\r\n    <h3>Set your Data</h3>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3\">\r\n    <form class=\"text-center\" (ngSubmit)=\"onSubmit()\" #compareForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"age\"\r\n          class=\"control-label\">Age</label>\r\n        <input\r\n          type=\"number\"\r\n          id=\"age\"\r\n          name=\"age\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"height\"\r\n          class=\"control-label\">Height (inch)</label>\r\n        <input\r\n          type=\"number\"\r\n          id=\"height\"\r\n          name=\"height\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"income\"\r\n          class=\"control-label\">Monthly Income (USD)</label>\r\n        <input\r\n          type=\"number\"\r\n          id=\"income\"\r\n          name=\"income\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"compareForm.invalid\">Submit</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n<hr>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3 text-center\">\r\n    <div class=\"alert alert-danger\" *ngIf=\"couldNotLoadData\">An error occurred, please try again or submit new data!</div>\r\n    <button class=\"btn btn-primary\" (click)=\"onFetchStoredData()\">I already stored data on the server!</button>\r\n    <div class=\"loader\" *ngIf=\"isLoading\">Loading...</div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/compare/compare-input/compare-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compare_service__ = __webpack_require__("../../../../../src/app/compare/compare.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompareInputComponent = (function () {
    function CompareInputComponent(compareService) {
        this.compareService = compareService;
        this.isLoading = false;
        this.couldNotLoadData = false;
    }
    CompareInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.compareService.dataIsLoading.subscribe(function (isLoading) { return _this.isLoading = isLoading; });
        this.compareService.dataLoadFailed.subscribe(function (didFail) {
            _this.couldNotLoadData = didFail;
            _this.isLoading = false;
        });
    };
    CompareInputComponent.prototype.onSubmit = function () {
        var data = {
            age: this.form.value.age,
            height: this.form.value.height,
            income: this.form.value.income
        };
        this.compareService.onStoreData(data);
    };
    CompareInputComponent.prototype.onFetchStoredData = function () {
        this.compareService.onRetrieveData(false);
    };
    return CompareInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('compareForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], CompareInputComponent.prototype, "form", void 0);
CompareInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-compare-input',
        template: __webpack_require__("../../../../../src/app/compare/compare-input/compare-input.component.html"),
        styles: [__webpack_require__("../../../../../src/app/compare/compare-input/compare-input.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__compare_service__["a" /* CompareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__compare_service__["a" /* CompareService */]) === "function" && _b || Object])
], CompareInputComponent);

var _a, _b;
//# sourceMappingURL=compare-input.component.js.map

/***/ }),

/***/ "../../../../../src/app/compare/compare-results/compare-results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/compare/compare-results/compare-results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3 text-center\">\r\n    <h2>Your Results</h2>\r\n    <button class=\"btn btn-success\" (click)=\"onStartSetData()\">Set Data</button>\r\n    <button class=\"btn btn-danger\" (click)=\"onClearData()\">Clear Data on Server</button>\r\n    <button class=\"btn btn-primary\" (click)=\"onGetResults()\">Get Results</button>\r\n    <hr>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3 text-center\">\r\n    <h3>Select Filter</h3>\r\n    <div class=\"list-group\">\r\n      <a style=\"cursor: pointer;\" class=\"list-group-item\" (click)=\"onFilter('age')\" [ngClass]=\"{active: filter == 'age'}\">Your Age: {{ user.age }}</a>\r\n      <a style=\"cursor: pointer;\" class=\"list-group-item\" (click)=\"onFilter('height')\" [ngClass]=\"{active: filter == 'height'}\">Your Height: {{ user.height }}</a>\r\n      <a style=\"cursor: pointer;\" class=\"list-group-item\" (click)=\"onFilter('income')\" [ngClass]=\"{active: filter == 'income'}\">Your Income: {{ user.income }}</a>\r\n    </div>\r\n    <div>\r\n      <button class=\"btn\" [ngClass]=\"{'btn-default': !lowerIsBetter, 'btn-primary': lowerIsBetter}\" (click)=\"onSelectLower(true)\">Lower is better</button>\r\n      <button class=\"btn\" [ngClass]=\"{'btn-default': lowerIsBetter, 'btn-primary': !lowerIsBetter}\" (click)=\"onSelectLower(false)\">Higher is better</button>\r\n    </div>\r\n    <hr>\r\n    <div class=\"loader\" *ngIf=\"!compareData && !didFail\">Loading...</div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3 text-center\">\r\n        <div class=\"alert alert-danger\" *ngIf=\"didFail\">\r\n          An error occurred, please try again!\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\" *ngFor=\"let data of compareData\" [ngClass]=\"getListGroupItemClass(data)\">\r\n        Age: {{ data.age }} | Height: {{ data.height }} | Income: {{ data.income }}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/compare/compare-results/compare-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compare_service__ = __webpack_require__("../../../../../src/app/compare/compare.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompareResultsComponent = (function () {
    function CompareResultsComponent(compareService) {
        this.compareService = compareService;
        this.compareData = [];
        this.didFail = false;
        this.lowerIsBetter = false;
        this.filter = 'age';
    }
    CompareResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.compareService.userData;
        this.compareService.dataEdited.subscribe(function () { return _this.user = _this.compareService.userData; });
        this.compareService.dataLoaded.subscribe(function (data) {
            _this.compareData = data;
        });
        this.compareService.dataLoadFailed.subscribe(function (didFail) { return _this.didFail = didFail; });
    };
    CompareResultsComponent.prototype.onFilter = function (filter) {
        this.filter = filter;
    };
    CompareResultsComponent.prototype.onSelectLower = function (isBetter) {
        this.lowerIsBetter = isBetter;
    };
    CompareResultsComponent.prototype.getListGroupItemClass = function (item) {
        if (+item[this.filter] === +this.user[this.filter]) {
            return 'list-group-item-warning';
        }
        if (this.lowerIsBetter) {
            return this.user[this.filter] < item[this.filter] ? 'list-group-item-success' : 'list-group-item-danger';
        }
        else {
            return this.user[this.filter] > item[this.filter] ? 'list-group-item-success' : 'list-group-item-danger';
        }
    };
    CompareResultsComponent.prototype.onStartSetData = function () {
        this.compareService.dataEdited.next(false);
    };
    CompareResultsComponent.prototype.onGetResults = function () {
        this.compareService.onRetrieveData();
    };
    CompareResultsComponent.prototype.onClearData = function () {
        this.compareService.onDeleteData();
    };
    return CompareResultsComponent;
}());
CompareResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-compare-results',
        template: __webpack_require__("../../../../../src/app/compare/compare-results/compare-results.component.html"),
        styles: [__webpack_require__("../../../../../src/app/compare/compare-results/compare-results.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__compare_service__["a" /* CompareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__compare_service__["a" /* CompareService */]) === "function" && _a || Object])
], CompareResultsComponent);

var _a;
//# sourceMappingURL=compare-results.component.js.map

/***/ }),

/***/ "../../../../../src/app/compare/compare.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/compare/compare.component.html":
/***/ (function(module, exports) {

module.exports = "<app-compare-input *ngIf=\"doInput\"></app-compare-input>\r\n<app-compare-results *ngIf=\"!doInput\"></app-compare-results>\r\n"

/***/ }),

/***/ "../../../../../src/app/compare/compare.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compare_service__ = __webpack_require__("../../../../../src/app/compare/compare.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompareComponent = (function () {
    function CompareComponent(compareService) {
        this.compareService = compareService;
        this.doInput = true;
    }
    CompareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.compareService.dataEdited.subscribe(function (edited) { return _this.doInput = !edited; });
    };
    return CompareComponent;
}());
CompareComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-compare',
        template: __webpack_require__("../../../../../src/app/compare/compare.component.html"),
        styles: [__webpack_require__("../../../../../src/app/compare/compare.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__compare_service__["a" /* CompareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__compare_service__["a" /* CompareService */]) === "function" && _a || Object])
], CompareComponent);

var _a;
//# sourceMappingURL=compare.component.js.map

/***/ }),

/***/ "../../../../../src/app/compare/compare.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompareService = (function () {
    function CompareService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.dataEdited = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.dataIsLoading = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.dataLoaded = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.dataLoadFailed = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    CompareService.prototype.onStoreData = function (data) {
        var _this = this;
        this.dataLoadFailed.next(false);
        this.dataIsLoading.next(true);
        this.dataEdited.next(false);
        this.userData = data;
        this.authService.getAuthenticatedUser().getSession(function (err, session) {
            if (err) {
                return;
            }
            _this.http.post('https://ywlsxm2x7c.execute-api.us-east-1.amazonaws.com/dev/compare-data', data, {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': session.getIdToken().getJwtToken() })
            })
                .subscribe(function (result) {
                _this.dataLoadFailed.next(false);
                _this.dataIsLoading.next(false);
                _this.dataEdited.next(true);
            }, function (error) {
                _this.dataIsLoading.next(false);
                _this.dataLoadFailed.next(true);
                _this.dataEdited.next(false);
            });
        });
    };
    CompareService.prototype.onRetrieveData = function (all) {
        var _this = this;
        if (all === void 0) { all = true; }
        this.dataLoaded.next(null);
        this.dataLoadFailed.next(false);
        this.authService.getAuthenticatedUser().getSession(function (err, session) {
            var queryParam = '?accessToken=' + session.getAccessToken().getJwtToken();
            var urlParam = 'all';
            if (!all) {
                urlParam = 'single';
            }
            _this.http.get('https://ywlsxm2x7c.execute-api.us-east-1.amazonaws.com/dev/compare-data/' + urlParam + queryParam, {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': session.getIdToken().getJwtToken() })
            })
                .map(function (response) { return response.json(); })
                .subscribe(function (data) {
                if (all) {
                    _this.dataLoaded.next(data);
                }
                else {
                    console.log(data);
                    if (!data) {
                        _this.dataLoadFailed.next(true);
                        return;
                    }
                    _this.userData = data[0];
                    _this.dataEdited.next(true);
                }
            }, function (error) {
                _this.dataLoadFailed.next(true);
                _this.dataLoaded.next(null);
            });
        });
    };
    CompareService.prototype.onDeleteData = function () {
        var _this = this;
        this.dataLoadFailed.next(false);
        this.authService.getAuthenticatedUser().getSession(function (err, session) {
            if (err) {
                return;
            }
            _this.http.delete('https://ywlsxm2x7c.execute-api.us-east-1.amazonaws.com/dev/compare-data?accessToken=XXXX', {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': session.getIdToken().getJwtToken() })
            })
                .subscribe(function (data) {
                console.log(data);
            }, function (error) { return _this.dataLoadFailed.next(true); });
        });
    };
    return CompareService;
}());
CompareService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__user_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], CompareService);

var _a, _b;
//# sourceMappingURL=compare.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuthenticated = this.authService.isAuthenticated();
        return isAuthenticated;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_amazon_cognito_identity_js__ = __webpack_require__("../../../../amazon-cognito-identity-js/es/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var POOL_DATA = {
    UserPoolId: 'us-east-1_wGl1denxD',
    ClientId: '6ums1lm0v5cpke99a9djik8b3c'
};
var userPool = new __WEBPACK_IMPORTED_MODULE_5_amazon_cognito_identity_js__["a" /* CognitoUserPool */](POOL_DATA);
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.authIsLoading = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.authDidFail = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.authStatusChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    AuthService.prototype.signUp = function (username, email, password) {
        var _this = this;
        this.authIsLoading.next(true);
        var user = {
            username: username,
            email: email,
            password: password
        };
        var attrList = [];
        var emailAttribute = {
            Name: 'email',
            Value: user.email
        };
        attrList.push(new __WEBPACK_IMPORTED_MODULE_5_amazon_cognito_identity_js__["b" /* CognitoUserAttribute */](emailAttribute));
        userPool.signUp(user.username, user.password, attrList, null, function (err, result) {
            //Failure
            if (err) {
                console.log(err);
                _this.authDidFail.next(true);
                _this.authIsLoading.next(false);
                return;
            }
            //Success
            _this.authDidFail.next(false);
            _this.authIsLoading.next(false);
            _this.registeredUser = result.user;
            var cognitoUser = result.user;
            console.log('user name is ' + cognitoUser.getUsername());
        });
        return;
    };
    AuthService.prototype.confirmUser = function (username, code) {
        var _this = this;
        this.authIsLoading.next(true);
        var userData = {
            Username: username,
            Pool: userPool
        };
        var cognitoUser = new __WEBPACK_IMPORTED_MODULE_5_amazon_cognito_identity_js__["c" /* CognitoUser */](userData);
        cognitoUser.confirmRegistration(code, true, function (err, result) {
            if (err) {
                _this.authDidFail.next(true);
                _this.authIsLoading.next(false);
                console.log(err);
                return;
            }
            _this.authDidFail.next(false);
            _this.authIsLoading.next(false);
            _this.router.navigate(['/']);
        });
    };
    AuthService.prototype.signIn = function (username, password) {
        this.authIsLoading.next(true);
        var authData = {
            Username: username,
            Password: password
        };
        var authDetails = new __WEBPACK_IMPORTED_MODULE_5_amazon_cognito_identity_js__["d" /* AuthenticationDetails */](authData);
        var userData = {
            Username: username,
            Pool: userPool
        };
        var cognitoUser = new __WEBPACK_IMPORTED_MODULE_5_amazon_cognito_identity_js__["c" /* CognitoUser */](userData);
        var that = this;
        cognitoUser.authenticateUser(authDetails, {
            onSuccess: function (result) {
                that.authStatusChanged.next(true);
                that.authDidFail.next(false);
                that.authIsLoading.next(false);
                console.log(result);
            },
            onFailure: function (err) {
                that.authDidFail.next(true);
                that.authIsLoading.next(false);
                console.log(err);
            }
        });
        this.authStatusChanged.next(true);
        return;
    };
    AuthService.prototype.getAuthenticatedUser = function () {
        return userPool.getCurrentUser();
    };
    AuthService.prototype.logout = function () {
        this.getAuthenticatedUser().signOut();
        this.authStatusChanged.next(false);
    };
    AuthService.prototype.isAuthenticated = function () {
        var user = this.getAuthenticatedUser();
        var obs = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            if (!user) {
                observer.next(false);
            }
            else {
                user.getSession(function (err, session) {
                    if (err) {
                        observer.next(false);
                    }
                    else {
                        if (session.isValid()) {
                            observer.next(true);
                        }
                        else {
                            observer.next(false);
                        }
                    }
                });
            }
            observer.complete();
        });
        return obs;
    };
    AuthService.prototype.initAuth = function () {
        var _this = this;
        this.isAuthenticated().subscribe(function (auth) { return _this.authStatusChanged.next(auth); });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"didFail\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3 text-center\">\r\n    <div class=\"alert alert-danger\">Something went wrong, please try again!</div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3\">\r\n    <form class=\"text-center jumbotron\" (ngSubmit)=\"onSubmit()\" #usrForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"username\"\r\n          class=\"control-label\">Email Address</label>\r\n        <input\r\n          type=\"text\"\r\n          id=\"username\"\r\n          name=\"username\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"password\"\r\n          class=\"control-label\">Password</label>\r\n        <input\r\n          type=\"password\"\r\n          id=\"password\"\r\n          name=\"password\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"usrForm.invalid\">Submit</button>\r\n    </form>\r\n    <div class=\"loader\" *ngIf=\"isLoading\"></div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/user/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = (function () {
    function SigninComponent(authService) {
        this.authService = authService;
        this.didFail = false;
        this.isLoading = false;
    }
    SigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authIsLoading.subscribe(function (isLoading) { return _this.isLoading = isLoading; });
        this.authService.authDidFail.subscribe(function (didFail) { return _this.didFail = didFail; });
    };
    SigninComponent.prototype.onSubmit = function () {
        var usrName = this.form.value.username;
        var password = this.form.value.password;
        this.authService.signIn(usrName, password);
    };
    return SigninComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('usrForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], SigninComponent.prototype, "form", void 0);
SigninComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-signin',
        template: __webpack_require__("../../../../../src/app/user/signin/signin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/signin/signin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], SigninComponent);

var _a, _b;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"didFail\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3 text-center\">\r\n    <div class=\"alert alert-danger\">Something went wrong, please try again!</div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3\">\r\n    <form class=\"text-center jumbotron\" (ngSubmit)=\"onSubmit()\" #usrForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"username\"\r\n          class=\"control-label\">Email Address</label>\r\n        <input\r\n          type=\"text\"\r\n          id=\"username\"\r\n          name=\"username\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"email\"\r\n          class=\"control-label\">Confirm Email Address</label>\r\n        <input\r\n          type=\"email\"\r\n          id=\"email\"\r\n          name=\"email\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required\r\n          email>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"password\"\r\n          class=\"control-label\">Password</label>\r\n        <input\r\n          type=\"password\"\r\n          id=\"password\"\r\n          name=\"password\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"confirmPassword\"\r\n          class=\"control-label\">Confirm Password</label>\r\n        <input\r\n          type=\"password\"\r\n          id=\"confirmPassword\"\r\n          name=\"confirmPassword\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <div *ngIf=\"usrForm.value.password !== usrForm.value.confirmPassword\">Passwords do not match!</div>\r\n      <button class=\"btn btn-primary\" type=\"submit\"\r\n              [disabled]=\"(usrForm.value.password !== usrForm.value.confirmPassword) || usrForm.invalid\">Submit\r\n      </button>\r\n    </form>\r\n    <div class=\"loader\" *ngIf=\"isLoading\"></div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"!confirmUser\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3 text-center\">\r\n    <button class=\"btn btn-default\" (click)=\"onDoConfirm()\">Confirm User</button>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"confirmUser\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3\">\r\n    <form #confirmForm=\"ngForm\" (ngSubmit)=\"onConfirm(confirmForm.value)\" class=\"jumbotron text-center\">\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"usrName\"\r\n          class=\"control-label\">Email Address</label>\r\n        <input\r\n          type=\"text\"\r\n          id=\"usrName\"\r\n          name=\"usrName\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"validationCode\"\r\n          class=\"control-label\">Validation Code</label>\r\n        <input\r\n          type=\"text\"\r\n          id=\"validationCode\"\r\n          name=\"validationCode\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"confirmForm.invalid\">Confirm your Account</button>\r\n    </form>\r\n    <div class=\"loader\" *ngIf=\"isLoading\"></div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/user/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(authService) {
        this.authService = authService;
        this.confirmUser = false;
        this.didFail = false;
        this.isLoading = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authIsLoading.subscribe(function (isLoading) { return _this.isLoading = isLoading; });
        this.authService.authDidFail.subscribe(function (didFail) { return _this.didFail = didFail; });
    };
    SignupComponent.prototype.onSubmit = function () {
        var usrName = this.form.value.username;
        var email = this.form.value.email;
        var password = this.form.value.password;
        this.authService.signUp(usrName, email, password);
    };
    SignupComponent.prototype.onDoConfirm = function () {
        this.confirmUser = true;
    };
    SignupComponent.prototype.onConfirm = function (formValue) {
        this.authService.confirmUser(formValue.usrName, formValue.validationCode);
    };
    return SignupComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('usrForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], SignupComponent.prototype, "form", void 0);
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/user/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
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
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[2]);
//# sourceMappingURL=main.bundle.js.map