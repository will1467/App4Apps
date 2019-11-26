webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-idea/add-idea.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-custom {\r\n    background-color: #39598c;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/add-idea/add-idea.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n\r\n      <!-- Masthead -->\r\n <header class=\"masthead text-white text-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-9 mx-auto\">\r\n        <h1 class=\"mb-5\">Add a New Idea</h1>\r\n      </div>\r\n      <div class=\"col-xl-9 mx-auto\">\r\n        <form [formGroup] = \"form\" (ngSubmit)=\"onSubmit()\" >\r\n          <div class=\"form-row\">\r\n              <div class=\"col-12 col-md-9 mb-2 mb-md-0\">\r\n                    <input formControlName=\"title\" type=\"text\" class=\"form-control form-control-lg input\" placeholder=\"Title\" id= \"name\">\r\n                    <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger input formerror\"> Title is required</div>\r\n                    <br>\r\n                    <textarea formControlName=\"description\" class=\"form-control form-control-lg input\" placeholder=\"Description\">\r\n                    </textarea>\r\n                    <br>\r\n                    <button type=\"submit\" class=\"btn btn-block btn-lg btn-primary input btn-custom\">Add</button>\r\n              </div>\r\n              <div class=\"col-12 col-md-3\">\r\n              </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>"

/***/ }),

/***/ "./src/app/add-idea/add-idea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddIdeaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_postgre_sql_service__ = __webpack_require__("./src/app/services/postgre-sql.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Idea__ = __webpack_require__("./src/app/models/Idea.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_notifier__ = __webpack_require__("./node_modules/angular-notifier/fesm5/angular-notifier.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddIdeaComponent = /** @class */ (function () {
    function AddIdeaComponent(fb, postgreSqlService, router, notifierService) {
        this.postgreSqlService = postgreSqlService;
        this.router = router;
        this.title = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
        this.description = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
        this.form = fb.group({
            title: this.title,
            description: this.description
        });
        this.notifier = notifierService;
    }
    AddIdeaComponent.prototype.onSubmit = function () {
        var _this = this;
        var newIdea = new __WEBPACK_IMPORTED_MODULE_3__models_Idea__["a" /* Idea */](this.form.value.title, this.form.value.description, localStorage.getItem("user"));
        this.postgreSqlService.addIdea(newIdea).subscribe(function (response) {
            if (response["success"]) {
                _this.router.navigate(["main"]);
            }
            else if (response["err"]) {
                _this.notifier.notify("error", response["err"]);
            }
        });
    };
    AddIdeaComponent.prototype.ngOnInit = function () { };
    AddIdeaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-add-idea",
            template: __webpack_require__("./src/app/add-idea/add-idea.component.html"),
            styles: [__webpack_require__("./src/app/add-idea/add-idea.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_postgre_sql_service__["a" /* PostgreSqlService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_angular_notifier__["b" /* NotifierService */]])
    ], AddIdeaComponent);
    return AddIdeaComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <router-outlet> </router-outlet>\r\n  <notifier-container></notifier-container>\r\n  <!-- Footer -->\r\n  <footer class=\"footer bg-light\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 h-100 text-center text-lg-left my-auto\">\r\n          <p class=\"text-muted small mb-4 mb-lg-0\">\r\n            &copy; App4Apps 2019. All Rights Reserved. Created by William\r\n            Wrigley\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__idea_parent_idea_parent_component__ = __webpack_require__("./src/app/idea-parent/idea-parent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__idea_child_idea_child_component__ = __webpack_require__("./src/app/idea-child/idea-child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_postgre_sql_service__ = __webpack_require__("./src/app/services/postgre-sql.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_ensure_authenticated_service__ = __webpack_require__("./src/app/services/ensure-authenticated.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__add_idea_add_idea_component__ = __webpack_require__("./src/app/add-idea/add-idea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nav_bar_nav_bar_component__ = __webpack_require__("./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__comment_comment_component__ = __webpack_require__("./src/app/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular_notifier__ = __webpack_require__("./node_modules/angular-notifier/fesm5/angular-notifier.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var notifierDefaultOptions = {
    position: {
        horizontal: {
            position: "middle",
            distance: 100
        },
        vertical: {
            position: "top",
            distance: 12,
            gap: 10
        }
    }
};
var Routes = [
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */] },
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    {
        path: "main",
        component: __WEBPACK_IMPORTED_MODULE_9__idea_parent_idea_parent_component__["a" /* IdeaParentComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_ensure_authenticated_service__["a" /* EnsureAuthenticatedService */]]
    },
    {
        path: "addIdea",
        component: __WEBPACK_IMPORTED_MODULE_13__add_idea_add_idea_component__["a" /* AddIdeaComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_ensure_authenticated_service__["a" /* EnsureAuthenticatedService */]]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__idea_parent_idea_parent_component__["a" /* IdeaParentComponent */],
                __WEBPACK_IMPORTED_MODULE_10__idea_child_idea_child_component__["a" /* IdeaChildComponent */],
                __WEBPACK_IMPORTED_MODULE_13__add_idea_add_idea_component__["a" /* AddIdeaComponent */],
                __WEBPACK_IMPORTED_MODULE_14__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__comment_comment_component__["a" /* CommentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16_angular_notifier__["a" /* NotifierModule */].withConfig(notifierDefaultOptions),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(Routes, { onSameUrlNavigation: "reload" })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_postgre_sql_service__["a" /* PostgreSqlService */], __WEBPACK_IMPORTED_MODULE_12__services_ensure_authenticated_service__["a" /* EnsureAuthenticatedService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comment/comment.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.panel-shadow {\r\n    /* box-shadow: rgba(0, 0, 0, 0.3) 7px 7px 7px; */\r\n}\r\n.panel-white {\r\n  border: 1px solid #dddddd;\r\n}\r\n.panel-white  .panel-heading {\r\n  color: #333;\r\n  background-color: #fff;\r\n  border-color: #ddd;\r\n}\r\n.panel-white  .panel-footer {\r\n  background-color: #fff;\r\n  border-color: #ddd;\r\n}\r\n.post .post-heading {\r\n  height: 95px;\r\n  padding: 20px 15px;\r\n}\r\n.post .post-heading .avatar {\r\n  width: 60px;\r\n  height: 60px;\r\n  display: block;\r\n  margin-right: 15px;\r\n}\r\n.post .post-heading .meta .title {\r\n  margin-bottom: 0;\r\n}\r\n.post .post-heading .meta .title a {\r\n  color: black;\r\n}\r\n.post .post-heading .meta .title a:hover {\r\n  color: #aaaaaa;\r\n}\r\n.post .post-heading .meta .time {\r\n  margin-top: 8px;\r\n  color: #999;\r\n}\r\n.post .post-image .image {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.post .post-description {\r\n  padding: 15px;\r\n}\r\n.post .post-description p {\r\n  font-size: 14px;\r\n}\r\n.post .post-description .stats {\r\n  margin-top: 20px;\r\n}\r\n.post .post-description .stats .stat-item {\r\n  display: inline-block;\r\n  margin-right: 15px;\r\n}\r\n.post .post-description .stats .stat-item .icon {\r\n  margin-right: 8px;\r\n}\r\n.post .post-footer {\r\n  border-top: 1px solid #ddd;\r\n  padding: 15px;\r\n}\r\n.post .post-footer .input-group-addon a {\r\n  color: #454545;\r\n}\r\n.post .post-footer .comments-list {\r\n  padding: 0;\r\n  margin-top: 20px;\r\n  list-style-type: none;\r\n}\r\n.post .post-footer .comments-list .comment {\r\n  display: block;\r\n  width: 100%;\r\n  margin: 20px 0;\r\n}\r\n.post .post-footer .comments-list .comment .avatar {\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n.post .post-footer .comments-list .comment .comment-heading {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n.post .post-footer .comments-list .comment .comment-heading .user {\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  display: inline;\r\n  margin-top: 0;\r\n  margin-right: 10px;\r\n}\r\n.post .post-footer .comments-list .comment .comment-heading .time {\r\n  font-size: 12px;\r\n  color: #aaa;\r\n  margin-top: 0;\r\n  display: inline;\r\n}\r\n.post .post-footer .comments-list .comment .comment-body {\r\n  margin-left: 50px;\r\n}\r\n.post .post-footer .comments-list .comment > .comments-list {\r\n  margin-left: 50px;\r\n}\r\na {\r\n  color: #4d4dff !important;\r\n  text-decoration: none;\r\n  -webkit-transition: .25s ease;\r\n  transition: .25s ease;\r\n}\r\na:hover {\r\n  border-color: #ff4d4d;\r\n  color: #ff4d4d;\r\n}"

/***/ }),

/***/ "./src/app/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"panel panel-white post panel-shadow\">\r\n        <div class=\"post-heading\">\r\n            <div class=\"pull-left image\">\r\n                <img src=\"../assets/commentprofile.png\" class=\"img-circle avatar\" alt=\"user profile image\">\r\n            </div>\r\n            <div class=\"pull-left meta\">\r\n                <div class=\"title h5\">\r\n                    <a href=\"#\"><b>{{comment.Author}}</b></a> \r\n                    commented.\r\n                    <a class=\"btn\" style=\"margin-left: 20px;\" *ngIf=\"checkCommentAuthor()\" (click) = \"onDeleteCommentClick()\">Delete</a>\r\n                </div>\r\n                <h6 class=\"text-muted time\">{{comment.createdAt | date : 'shortDate'}}</h6>\r\n            </div>\r\n        </div> \r\n        <div class=\"post-description\"> \r\n            <p>{{comment.Text}}</p>\r\n            <div class=\"stats\">\r\n                <a class=\"btn btn-default stat-item\">\r\n                    <i (click) = \"addLike()\" class=\"fa fa-thumbs-up icon\"></i>{{comment.Likes}}\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_postgre_sql_service__ = __webpack_require__("./src/app/services/postgre-sql.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Comment__ = __webpack_require__("./src/app/models/Comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_notifier__ = __webpack_require__("./node_modules/angular-notifier/fesm5/angular-notifier.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentComponent = /** @class */ (function () {
    function CommentComponent(postgreSqlService, notifier) {
        this.postgreSqlService = postgreSqlService;
        this.notifier = notifier;
        this.Liked = false;
    }
    CommentComponent.prototype.ngOnInit = function () { };
    CommentComponent.prototype.checkCommentAuthor = function () {
        var user = localStorage.getItem("user");
        return this.comment.Author === user ? true : false;
    };
    CommentComponent.prototype.onDeleteCommentClick = function () {
        var _this = this;
        this.postgreSqlService.deleteComment(this.comment).subscribe(function (response) {
            if (response) {
                _this.comment._id = null;
            }
            else {
                _this.notifier.notify("error", response["err"]);
            }
        });
    };
    CommentComponent.prototype.addLike = function () {
        var _this = this;
        if (!this.Liked) {
            this.postgreSqlService.likeComment(this.comment).subscribe(function (response) {
                debugger;
                if (response["err"]) {
                    _this.notifier.notify("error", response["err"]);
                }
                else {
                    _this.comment.Likes += 1;
                    _this.Liked = true;
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_Comment__["a" /* Comment */])
    ], CommentComponent.prototype, "comment", void 0);
    CommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-comment",
            template: __webpack_require__("./src/app/comment/comment.component.html"),
            styles: [__webpack_require__("./src/app/comment/comment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_postgre_sql_service__["a" /* PostgreSqlService */],
            __WEBPACK_IMPORTED_MODULE_3_angular_notifier__["b" /* NotifierService */]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/idea-child/idea-child.component.css":
/***/ (function(module, exports) {

module.exports = " .blog-container {\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0 4px 2px -2px;\r\n            box-shadow: rgba(0, 0, 0, 0.2) 0 4px 2px -2px;\r\n    font-family: \"adelle-sans\", sans-serif;\r\n    font-weight: 100;\r\n    margin: 48px auto;\r\n    width: 20rem;\r\n    margin-bottom: 10%;\r\n  }\r\n  @media screen and (min-width: 480px) {\r\n    .blog-container {\r\n      width: 28rem;\r\n    }\r\n  }\r\n  @media screen and (min-width: 767px) {\r\n    .blog-container {\r\n      width: 40rem;\r\n    }\r\n  }\r\n  @media screen and (min-width: 959px) {\r\n    .blog-container {\r\n      width: 50rem;\r\n    }\r\n  }\r\n  .blog-container a {\r\n    color: #4d4dff;\r\n    text-decoration: none;\r\n    -webkit-transition: .25s ease;\r\n    transition: .25s ease;\r\n  }\r\n  .blog-container a:hover {\r\n    border-color: #ff4d4d;\r\n    color: #ff4d4d;\r\n  }\r\n  .blog-cover {\r\n    background: url('idea-banner.beaa9cbb16c6ac467a86.jpg');\r\n    background-origin: border-box;\r\n    background-size:auto;\r\n    border-radius: 5px 5px 0 0;\r\n    height: 15rem;\r\n    -webkit-box-shadow: inset rgba(0, 0, 0, 0.2) 0 64px 64px 16px;\r\n            box-shadow: inset rgba(0, 0, 0, 0.2) 0 64px 64px 16px;\r\n  }\r\n  .blog-author,\r\n  .blog-author--no-cover {\r\n    padding-top: .125rem;\r\n    width: 80%;\r\n  }\r\n  .blog-author h3::before,\r\n  .blog-author--no-cover h3::before {\r\n    background-size: cover;\r\n    border-radius: 50%;\r\n    content: \" \";\r\n    display: inline-block;\r\n    height: 32px;\r\n    margin-left: 20px;\r\n    margin-top: 20px;\r\n    position: relative;\r\n    top: 8px;\r\n    width: 32px;\r\n  }\r\n  .blog-author h3 {\r\n    color: black;\r\n    font-weight: 100;\r\n  }\r\n  .blog-author--no-cover h3 {\r\n    color: #999999;\r\n    font-weight: 100;\r\n  }\r\n  .blog-body {\r\n    margin: 0 auto;\r\n    width: 80%;\r\n  }\r\n  .video-body {\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n  .blog-title h1 a {\r\n    color: #333;\r\n    font-weight: 100;\r\n  }\r\n  .blog-summary p {\r\n    color: #4d4d4d;\r\n  }\r\n  .blog-tags ul {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    list-style: none;\r\n    padding-left: 0;\r\n  }\r\n  .blog-tags li + li {\r\n    margin-left: .5rem;\r\n  }\r\n  .blog-tags a {\r\n    border: 1px solid #999999;\r\n    border-radius: 3px;\r\n    color: #999999;\r\n    font-size: .75rem;\r\n    height: 1.5rem;\r\n    line-height: 1.5rem;\r\n    letter-spacing: 1px;\r\n    padding: 0 .5rem;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    white-space: nowrap;\r\n    width: 5rem;\r\n  }\r\n  .blog-footer {\r\n    border-top: 1px solid #e6e6e6;\r\n    margin: 0 auto;\r\n    padding-bottom: .125rem;\r\n    width: 80%;\r\n  }\r\n  .blog-footer ul {\r\n    list-style: none;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-flex: row;\r\n        -ms-flex: row wrap;\r\n            flex: row wrap;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n    padding-left: 0;\r\n  }\r\n  .blog-footer li:first-child {\r\n    margin-right: auto;\r\n  }\r\n  .blog-footer li + li {\r\n    margin-left: .5rem;\r\n  }\r\n  .blog-footer li {\r\n    color: #212529;\r\n    font-size: .75rem;\r\n    height: 1.5rem;\r\n    letter-spacing: 1px;\r\n    line-height: 1.5rem;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    white-space: nowrap;\r\n  }\r\n  .blog-footer li a {\r\n    color: #999999;\r\n  }\r\n  .comments {\r\n    margin-right: 1rem;\r\n  }\r\n  .published-date {\r\n    border: 1px solid #999999;\r\n    border-radius: 3px;\r\n    padding: 0 .5rem;\r\n  }\r\n  .numero {\r\n    position: relative;\r\n    top: -0.5rem;\r\n  }\r\n  .icon-star,\r\n  .icon-bubble {\r\n    fill: #999999;\r\n    height: 24px;\r\n    margin-right: .5rem;\r\n    -webkit-transition: .25s ease;\r\n    transition: .25s ease;\r\n    width: 24px;\r\n  }\r\n  .icon-star:hover,\r\n  .icon-bubble:hover {\r\n    fill: #ff4d4d;\r\n  }\r\n  .status-upload {\r\n    background: none repeat scroll 0 0 #f5f5f5;\r\n    border-radius: 4px;\r\n    float: left;\r\n    width: 100%;\r\n    height: 10%;\r\n\r\n    }\r\n  .status-upload form {\r\n    float: left;\r\n    width: 100%;\r\n    }\r\n  .status-upload form textarea {\r\n    background: none repeat scroll 0 0 #fff;\r\n    border: medium none;\r\n    border-radius: 4px 4px 0 0;\r\n    color: #292828;\r\n    float: left;\r\n    font-size: 14px;\r\n    letter-spacing: 0.3px;\r\n    padding: 20px;\r\n    width: 100%;\r\n    resize:vertical;\r\n    outline:none;\r\n    border: 1px solid #F2F2F2;\r\n    }"

/***/ }),

/***/ "./src/app/idea-child/idea-child.component.html":
/***/ (function(module, exports) {

module.exports = "<svg display=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n  <defs>\r\n    <symbol id=\"icon-bubble\" viewBox=\"0 0 1024 1024\">\r\n      <title>bubble</title>\r\n      <path\r\n        class=\"path1\"\r\n        d=\"M512 224c8.832 0 16 7.168 16 16s-7.2 16-16 16c-170.464 0-320 89.728-320 192 0 8.832-7.168 16-16 16s-16-7.168-16-16c0-121.408 161.184-224 352-224zM512 64c-282.784 0-512 171.936-512 384 0 132.064 88.928 248.512 224.256 317.632 0 0.864-0.256 1.44-0.256 2.368 0 57.376-42.848 119.136-61.696 151.552 0.032 0 0.064 0 0.064 0-1.504 3.52-2.368 7.392-2.368 11.456 0 16 12.96 28.992 28.992 28.992 3.008 0 8.288-0.8 8.16-0.448 100-16.384 194.208-108.256 216.096-134.88 31.968 4.704 64.928 7.328 98.752 7.328 282.72 0 512-171.936 512-384s-229.248-384-512-384zM512 768c-29.344 0-59.456-2.24-89.472-6.624-3.104-0.512-6.208-0.672-9.28-0.672-19.008 0-37.216 8.448-49.472 23.36-13.696 16.672-52.672 53.888-98.72 81.248 12.48-28.64 22.24-60.736 22.912-93.824 0.192-2.048 0.288-4.128 0.288-5.888 0-24.064-13.472-46.048-34.88-56.992-118.592-60.544-189.376-157.984-189.376-260.608 0-176.448 200.96-320 448-320 246.976 0 448 143.552 448 320s-200.992 320-448 320z\"\r\n      ></path>\r\n    </symbol>\r\n    <symbol id=\"icon-star\" viewBox=\"0 0 1024 1024\">\r\n      <title>star</title>\r\n      <path\r\n        class=\"path1\"\r\n        d=\"M1020.192 401.824c-8.864-25.568-31.616-44.288-59.008-48.352l-266.432-39.616-115.808-240.448c-12.192-25.248-38.272-41.408-66.944-41.408s-54.752 16.16-66.944 41.408l-115.808 240.448-266.464 39.616c-27.36 4.064-50.112 22.784-58.944 48.352-8.8 25.632-2.144 53.856 17.184 73.12l195.264 194.944-45.28 270.432c-4.608 27.232 7.2 54.56 30.336 70.496 12.704 8.736 27.648 13.184 42.592 13.184 12.288 0 24.608-3.008 35.776-8.992l232.288-125.056 232.32 125.056c11.168 5.984 23.488 8.992 35.744 8.992 14.944 0 29.888-4.448 42.624-13.184 23.136-15.936 34.88-43.264 30.304-70.496l-45.312-270.432 195.328-194.944c19.296-19.296 25.92-47.52 17.184-73.12zM754.816 619.616c-16.384 16.32-23.808 39.328-20.064 61.888l45.312 270.432-232.32-124.992c-11.136-6.016-23.424-8.992-35.776-8.992-12.288 0-24.608 3.008-35.744 8.992l-232.32 124.992 45.312-270.432c3.776-22.56-3.648-45.568-20.032-61.888l-195.264-194.944 266.432-39.68c24.352-3.616 45.312-18.848 55.776-40.576l115.872-240.384 115.84 240.416c10.496 21.728 31.424 36.928 55.744 40.576l266.496 39.68-195.264 194.912z\"\r\n      ></path>\r\n    </symbol>\r\n  </defs>\r\n</svg>\r\n\r\n<div class=\"blog-container\">\r\n  <div class=\"blog-header\">\r\n    <div class=\"blog-cover\">\r\n      <div class=\"blog-author\">\r\n        <h3>{{ idea.Author }}</h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"blog-body\">\r\n    <div class=\"blog-title\">\r\n      <h1>{{ idea.Title }}</h1>\r\n    </div>\r\n    <div class=\"blog-summary\">\r\n      <p>{{ idea.Description }}</p>\r\n    </div>\r\n    <div class=\"blog-tags\">\r\n      <ul></ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"blog-footer\">\r\n    <ul>\r\n      <li class=\"published-date\">{{ idea.createdAt | date: \"mediumDate\" }}</li>\r\n      <li class=\"comments\">\r\n        <a style=\"cursor: pointer\" (click)=\"showCommentBox()\"\r\n          ><svg class=\"icon-bubble\"><use xlink:href=\"#icon-bubble\"></use></svg><span class=\"numero\"> {{ comments.length }}</span></a\r\n        >\r\n      </li>\r\n      <li class=\"shares\">\r\n        <a style=\"cursor: pointer\" (click)=\"addLike()\"\r\n          ><svg class=\"icon-star\" [style.fill]=\"Liked ? '#ff4d4d' : '#999999'\"><use xlink:href=\"#icon-star\"></use></svg><span class=\"numero\">{{ idea.Likes }}</span></a\r\n        >\r\n      </li>\r\n      <a class=\"btn\" style=\"margin-left: 20px;\" *ngIf=\"checkIdeaAuthor()\" (click)=\"onDeleteIdeaClick()\">Delete</a>\r\n    </ul>\r\n  </div>\r\n\r\n  <div *ngIf=\"showComments\" class=\"panel panel-white post panel-shadow\">\r\n    <ng-container *ngFor=\"let comment of comments\">\r\n      <app-comment *ngIf=\"comment._id\" [comment]=\"comment\"></app-comment>\r\n    </ng-container>\r\n    <div class=\"status-upload\">\r\n      <form #commentForm=\"ngForm\">\r\n        <textarea name=\"Text\" [(ngModel)]=\"commentText\" (keypress)=\"onCommentKeyPress($event)\" placeholder=\"Type and Press Enter to Add a Comment...\"></textarea>\r\n      </form>\r\n    </div>\r\n    <!-- Status Upload  -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/idea-child/idea-child.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaChildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_postgre_sql_service__ = __webpack_require__("./src/app/services/postgre-sql.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Idea__ = __webpack_require__("./src/app/models/Idea.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Comment__ = __webpack_require__("./src/app/models/Comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_notifier__ = __webpack_require__("./node_modules/angular-notifier/fesm5/angular-notifier.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IdeaChildComponent = /** @class */ (function () {
    function IdeaChildComponent(postgreSqlService, router, notifier) {
        this.postgreSqlService = postgreSqlService;
        this.router = router;
        this.notifier = notifier;
        this.Liked = false;
        this.showComments = false;
        this.comments = [];
        this.commentText = null;
    }
    IdeaChildComponent.prototype.ngOnInit = function () {
        this.Liked = false;
        this.commentText = null;
        this.getComments();
    };
    IdeaChildComponent.prototype.getComments = function () {
        var _this = this;
        this.postgreSqlService
            .getComments(this.idea._id)
            .subscribe(function (comments) { return (_this.comments = comments); });
    };
    IdeaChildComponent.prototype.onCommentKeyPress = function (event) {
        if (event.keyCode === 13) {
            this.addComment();
        }
    };
    IdeaChildComponent.prototype.addComment = function () {
        var _this = this;
        var newComment = new __WEBPACK_IMPORTED_MODULE_3__models_Comment__["a" /* Comment */](this.commentText, localStorage.getItem("user"), this.idea._id);
        this.postgreSqlService.addComment(newComment).subscribe(function (response) {
            if (response["err"]) {
                _this.notifier.notify("error", response["err"]);
            }
            else {
                _this.commentText = null;
                _this.getComments();
            }
        });
    };
    IdeaChildComponent.prototype.checkIdeaAuthor = function () {
        var user = localStorage.getItem("user");
        return this.idea.Author === user ? true : false;
    };
    IdeaChildComponent.prototype.onDeleteIdeaClick = function () {
        var _this = this;
        this.postgreSqlService.deleteIdea(this.idea).subscribe(function (success) {
            if (success) {
                _this.idea._id = null;
            }
            else {
                _this.notifier.notify("error", "Deletion of idea failed");
            }
        });
    };
    IdeaChildComponent.prototype.addLike = function () {
        var _this = this;
        if (!this.Liked) {
            this.postgreSqlService.likeIdea(this.idea).subscribe(function (response) {
                if (response["err"]) {
                    _this.notifier.notify("error", response["err"]);
                }
                else {
                    _this.idea.Likes += 1;
                    _this.Liked = true;
                }
            });
        }
    };
    IdeaChildComponent.prototype.showCommentBox = function () {
        var bool = this.showComments ? false : true;
        this.showComments = bool;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_Idea__["a" /* Idea */])
    ], IdeaChildComponent.prototype, "idea", void 0);
    IdeaChildComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-idea-child",
            template: __webpack_require__("./src/app/idea-child/idea-child.component.html"),
            styles: [__webpack_require__("./src/app/idea-child/idea-child.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_postgre_sql_service__["a" /* PostgreSqlService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_angular_notifier__["b" /* NotifierService */]])
    ], IdeaChildComponent);
    return IdeaChildComponent;
}());



/***/ }),

/***/ "./src/app/idea-parent/idea-parent.component.css":
/***/ (function(module, exports) {

module.exports = ".idea-list {\r\n    background-color: #416fb4;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.top-bar {\r\n    display: block;\r\n}\r\n\r\n.btn-menu {\r\n    margin: 5px 5px 5px 5px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/idea-parent/idea-parent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"idea-list\">\r\n  <app-nav-bar></app-nav-bar>\r\n  <div *ngIf=\"ideas.length > 0; else noIdeas\">\r\n    <ng-container *ngFor=\"let idea of ideas\">\r\n      <app-idea-child *ngIf=\"idea._id\" [idea]=\"idea\"> </app-idea-child>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n<ng-template #noIdeas>\r\n  <div class=\"d-md-block w-100\" style=\"height:1000px\"></div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/idea-parent/idea-parent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaParentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_postgre_sql_service__ = __webpack_require__("./src/app/services/postgre-sql.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_notifier__ = __webpack_require__("./node_modules/angular-notifier/fesm5/angular-notifier.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IdeaParentComponent = /** @class */ (function () {
    function IdeaParentComponent(postgreSqlService, router, notifier) {
        this.postgreSqlService = postgreSqlService;
        this.router = router;
        this.notifier = notifier;
        this.ideas = null;
        this.signedInUser = localStorage.getItem("user");
    }
    IdeaParentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postgreSqlService.getIdeas().subscribe(function (ideas) { return (_this.ideas = ideas); });
    };
    IdeaParentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-idea-parent",
            template: __webpack_require__("./src/app/idea-parent/idea-parent.component.html"),
            styles: [__webpack_require__("./src/app/idea-parent/idea-parent.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_postgre_sql_service__["a" /* PostgreSqlService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular_notifier__["b" /* NotifierService */]])
    ], IdeaParentComponent);
    return IdeaParentComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-custom {\r\n    background-color: #39598c;\r\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n      <!-- Masthead -->\r\n <header class=\"masthead text-white text-center\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-9 mx-auto\">\r\n        <h1 class=\"mb-5\">An App for Apps!</h1>\r\n      </div>\r\n      <div class=\"col-xl-9 mx-auto\">\r\n        <form [formGroup] = \"form\" (ngSubmit)=\"onSubmit()\" >\r\n          <div class=\"form-row\">\r\n              <div class=\"col-12 col-md-9 mb-2 mb-md-0\">\r\n                    <input formControlName=\"firstName\" type=\"text\" class=\"form-control form-control-lg input\" placeholder=\"Username\" id= \"name\">\r\n                    <br>\r\n                    <input formControlName=\"password\" type=\"password\" class=\"form-control form-control-lg input\" placeholder=\"Password\" id= \"password\">\r\n                    <br>\r\n                    <button type=\"submit\" class=\"btn btn-block btn-lg btn-primary input btn-custom\">Login</button>\r\n                    <div *ngIf=\"error\" class=\"alert alert-danger input formerror\"> {{error}} </div>\r\n              </div>\r\n              <div class=\"col-12 col-md-3\">\r\n              </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_postgre_sql_service__ = __webpack_require__("./src/app/services/postgre-sql.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, postgreSqlService) {
        this.router = router;
        this.postgreSqlService = postgreSqlService;
        this.firstName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
        this.form = fb.group({
            "firstName": this.firstName,
            "password": this.password,
        });
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.postgreSqlService.login(this.form.value.firstName, this.form.value.password)
            .subscribe(function (response) {
            if (response["auth"]) {
                _this.error = null;
                localStorage.setItem('token', response["token"]);
                localStorage.setItem('user', response["user"]);
                localStorage.setItem('userid', response["userid"]);
                _this.router.navigate(['main']);
                _this.form.reset();
            }
            else if (response["err"]) {
                _this.error = response["err"];
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_postgre_sql_service__["a" /* PostgreSqlService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/Comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment(text, author, idea) {
        (this.Text = text), (this.Author = author), (this.IdeaId = idea);
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/models/Idea.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Idea; });
var Idea = /** @class */ (function () {
    function Idea(title, description, author) {
        (this.Title = title), (this.Description = description), (this.Author = author);
    }
    return Idea;
}());



/***/ }),

/***/ "./src/app/models/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(name, password, email) {
        this.UserName = name;
        this.Password = password;
        this.Email = email;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-custom {\r\n    background-color: #39598c;\r\n  }\r\n\r\n  .button-group {\r\n    display: inline;\r\n    position: relative;\r\n    right: 80%;\r\n}\r\n\r\n  .button-group a {\r\n    color: white;\r\n    background-color: #39598c;\r\n}\r\n\r\n  svg :hover{\r\n    cursor: pointer;\r\n  }\r\n\r\n  ul#menu{\r\n    position: absolute;\r\n    left: 85%;\r\n    width:20%;\r\n    line-height: 1.5;\r\n    margin:0;\r\n    padding:0 10px;\r\n    background:#20211a;\r\n    color:#eee;\r\n    -webkit-box-shadow:0 -1px rgba(0,0,0,.5) inset;\r\n            box-shadow:0 -1px rgba(0,0,0,.5) inset;\r\n    z-index: 100;\r\n  }\r\n\r\n  ul#menu > li{\r\n    float:left;\r\n    list-style-type:none;\r\n    position:relative;\r\n  }\r\n\r\n  label{\r\n    position:relative;\r\n    display:block;\r\n    padding:0 18px 0 12px;\r\n    line-height:3em;\r\n    -webkit-transition:background 0.3s;\r\n    transition:background 0.3s;\r\n    cursor:pointer;\r\n  }\r\n\r\n  label:after{\r\n    content:\"\";\r\n    position:absolute;\r\n    display:block;\r\n    top:50%;\r\n    right:5px;\r\n    width:0;\r\n    height:0;\r\n    border-top:4px solid rgba(255,255,255,.5);\r\n    border-bottom:0 solid rgba(255,255,255,.5);\r\n    border-left:4px solid transparent;\r\n    border-right:4px solid transparent;\r\n    -webkit-transition:border-bottom .1s, border-top .1s .1s;\r\n    transition:border-bottom .1s, border-top .1s .1s;\r\n    }\r\n\r\n  /* label:hover,\r\n  input:checked ~ label{background:rgba(0,0,0,.3);} */\r\n\r\n  input:checked ~ label:after{\r\n    border-top:0 solid rgba(255,255,255,.5);\r\n    border-bottom:4px solid rgba(255,255,255,.5);\r\n    -webkit-transition:border-top .1s, border-bottom .1s .1s;\r\n    transition:border-top .1s, border-bottom .1s .1s;\r\n  }\r\n\r\n  /*hide the inputs*/\r\n\r\n  input{display:none}\r\n\r\n  /*show the second levele menu of the selected voice*/\r\n\r\n  input:checked ~ ul.submenu{\r\n    max-height:300px;\r\n    -webkit-transition:max-height 0.5s ease-in;\r\n    transition:max-height 0.5s ease-in;\r\n  }\r\n\r\n  /*style for the second level menu*/\r\n\r\n  ul.submenu{\r\n    max-height:0;\r\n    padding:0;\r\n    overflow:hidden;\r\n    list-style-type:none;\r\n    background:#444;\r\n    -webkit-box-shadow:0 0 1px rgba(0,0,0,.3);\r\n            box-shadow:0 0 1px rgba(0,0,0,.3);\r\n    -webkit-transition:max-height 0.5s ease-out;\r\n    transition:max-height 0.5s ease-out;\r\n    position:absolute;\r\n    min-width:100%;\r\n  }\r\n\r\n  ul.submenu li a{\r\n    cursor: pointer;\r\n    display:block;\r\n    padding:12px;\r\n    color:#ddd;\r\n    text-decoration:none;\r\n    -webkit-box-shadow:0 -1px rgba(0,0,0,.5) inset;\r\n            box-shadow:0 -1px rgba(0,0,0,.5) inset;\r\n    -webkit-transition:background .3s;\r\n    transition:background .3s;\r\n    white-space:nowrap;\r\n  }\r\n\r\n  /* ul.submenu li a:hover{\r\n    background:rgba(0,0,0,.3);\r\n  } */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\r\n<nav class=\"navbar navbar-light static-top navbarcustom\">\r\n  <svg\r\n    version=\"1.1\"\r\n    id=\"Capa_1\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n    x=\"0px\"\r\n    y=\"0px\"\r\n    width=\"40px\"\r\n    height=\"40px\"\r\n    viewBox=\"0 0 612 612\"\r\n    style=\"background-color: #20211a\"\r\n    xml:space=\"preserve\"\r\n    *ngIf=\"this.router.url === '/addIdea'\"\r\n    routerLink=\"/main\"\r\n  >\r\n    <g>\r\n      <path\r\n        style=\"fill:white\"\r\n        d=\"M612,306C612,137.004,474.995,0,306,0C137.004,0,0,137.004,0,306c0,168.995,137.004,306,306,306\r\n           C474.995,612,612,474.995,612,306z M328.895,160.511l39.502,39.502L260.239,308.226l117.838,117.838l-39.335,39.335L181.375,308.03\r\n           L328.895,160.511z\"\r\n      />\r\n    </g>\r\n  </svg>\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" routerLink=\"/\" style=\"color: white\">App4Apps</a>\r\n    <div class=\"button-group\">\r\n      <a class=\"btn btn-primary btn-menu\" *ngIf=\"loggedIn && this.router.url !== '/addIdea'\" routerLink=\"/addIdea\">New Idea</a>\r\n    </div>\r\n    <a class=\"btn btn-primary btn-custom\" *ngIf=\"!loggedIn\" routerLink=\"{{ linkRoute }}\">{{ loggedInText }}</a>\r\n    <ul id=\"menu\" *ngIf=\"loggedIn\">\r\n      <li>\r\n        <input id=\"check01\" type=\"checkbox\" name=\"menu\" />\r\n        <label for=\"check01\">{{ signedInUser }}</label>\r\n        <ul class=\"submenu\">\r\n          <li><a (click)=\"onLogout()\">Logout</a></li>\r\n          <li><a (click)=\"onAccountDelete()\">Delete Account</a></li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_postgre_sql_service__ = __webpack_require__("./src/app/services/postgre-sql.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_notifier__ = __webpack_require__("./node_modules/angular-notifier/fesm5/angular-notifier.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(router, postgreSqlService, notifier) {
        this.router = router;
        this.postgreSqlService = postgreSqlService;
        this.notifier = notifier;
        this.loggedIn = false;
        this.loggedInText = "";
        this.linkRoute = "";
        this.signedInUser = localStorage.getItem("user");
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.loggedIn = localStorage.getItem("user") ? true : false;
        switch (this.router.url) {
            case "/":
            case "/login":
                this.loggedInText = "Register";
                this.linkRoute = "/register";
                break;
            case "/register":
                this.loggedInText = "Login";
                this.linkRoute = "/";
                break;
        }
    };
    NavBarComponent.prototype.onLogout = function () {
        localStorage.setItem("token", "");
        localStorage.setItem("userid", "");
        localStorage.setItem("user", "");
        this.router.navigate(["/"]);
        this.notifier.notify("info", "You have been logged out");
    };
    NavBarComponent.prototype.onAccountDelete = function () {
        var _this = this;
        this.postgreSqlService
            .deleteAccount(localStorage.getItem("userid"))
            .subscribe(function (response) {
            if (response) {
                _this.onLogout();
            }
            else {
                _this.notifier.notify("error", "Account Deletion Failed");
            }
        });
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-nav-bar",
            template: __webpack_require__("./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_postgre_sql_service__["a" /* PostgreSqlService */],
            __WEBPACK_IMPORTED_MODULE_3_angular_notifier__["b" /* NotifierService */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-custom {\r\n    background-color: #39598c;\r\n  }"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n <!-- Masthead -->\r\n <header class=\"masthead text-white text-center\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-9 mx-auto\">\r\n        <h1 class=\"mb-5\">An App for Apps!</h1>\r\n      </div>\r\n      <div class=\"col-xl-9 mx-auto\">\r\n        <form [formGroup] = \"form\" (ngSubmit)=\"onSubmit()\" >\r\n          <div class=\"form-row\">\r\n              <div class=\"col-12 col-md-9 mb-2 mb-md-0\">\r\n                    <input formControlName=\"firstName\" type=\"text\" class=\"form-control form-control-lg input\" placeholder=\"Username\" id= \"name\">\r\n                    <div [hidden]=\"firstName.valid || firstName.pristine\" class=\"alert alert-danger input formerror\"> Name is required</div>\r\n                    <br>\r\n                    <input formControlName=\"password\" type=\"password\" class=\"form-control form-control-lg input\" placeholder=\"Password\" id= \"password\">\r\n                    <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger input formerror\"> Password is required</div>\r\n                    <br>\r\n                    <input formControlName=\"repeatedPassword\" type=\"password\" class=\"form-control form-control-lg input\" placeholder=\"Confirm Password\" id=\"repeatedpassword\">\r\n                    <div *ngIf=\"!form.errors?.passwordsMatch && repeatedPassword.touched\" class=\"alert alert-danger input formerror\"> Password's do not match</div>\r\n                    <br>\r\n                    <input formControlName=\"email\" type=\"email\" class=\"form-control form-control-lg input\" placeholder=\"Email\" id= \"email\">\r\n                    <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger input formerror\"> Address is invalid</div>\r\n                    <br>\r\n                    <button type=\"submit\"  class=\"btn btn-block btn-lg btn-primary input btn-custom\">Register</button>\r\n                    <div *ngIf=\"error\" class=\"alert alert-danger input formerror\"> {{error}} </div>\r\n              </div>\r\n              <div class=\"col-12 col-md-3\">\r\n              </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_passwords_match_directive__ = __webpack_require__("./src/app/shared/passwords-match.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_postgre_sql_service__ = __webpack_require__("./src/app/services/postgre-sql.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_notifier__ = __webpack_require__("./node_modules/angular-notifier/fesm5/angular-notifier.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, postgreSqlService, router, notifier) {
        this.postgreSqlService = postgreSqlService;
        this.router = router;
        this.notifier = notifier;
        this.firstName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
        this.repeatedPassword = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email);
        this.form = fb.group({
            firstName: this.firstName,
            password: this.password,
            repeatedPassword: this.repeatedPassword,
            email: this.email
        }, { validator: __WEBPACK_IMPORTED_MODULE_2__shared_passwords_match_directive__["a" /* checkPasswordValidator */] });
    }
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.postgreSqlService
            .register(this.form.value.firstName, this.form.value.password, this.form.value.email)
            .subscribe(function (response) {
            if (response["auth"]) {
                _this.error = null;
                localStorage.setItem("token", response["token"]);
                localStorage.setItem("user", response["user"]);
                localStorage.setItem("userid", response["userid"]);
            }
            else if (response["err"]) {
                _this.error = response["err"];
            }
        });
        this.form.reset();
        this.router.navigate(["/"]);
        this.notifier.notify("success", "Registration successful");
    };
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-register",
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_postgre_sql_service__["a" /* PostgreSqlService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_angular_notifier__["b" /* NotifierService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/ensure-authenticated.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnsureAuthenticatedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postgre_sql_service__ = __webpack_require__("./src/app/services/postgre-sql.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnsureAuthenticatedService = /** @class */ (function () {
    function EnsureAuthenticatedService(postgreSqlService, router) {
        this.postgreSqlService = postgreSqlService;
        this.router = router;
        this.canActivateRoute = false;
    }
    EnsureAuthenticatedService.prototype.canActivate = function (route, state) {
        return this.postgreSqlService.authenticate();
    };
    EnsureAuthenticatedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__postgre_sql_service__["a" /* PostgreSqlService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], EnsureAuthenticatedService);
    return EnsureAuthenticatedService;
}());



/***/ }),

/***/ "./src/app/services/postgre-sql.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostgreSqlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_User__ = __webpack_require__("./src/app/models/User.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostgreSqlService = /** @class */ (function () {
    function PostgreSqlService(http) {
        this.http = http;
        this.server = "";
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* isDevMode */])()) {
            this.server = "http://localhost:5000";
        }
        else {
            this.server = "https://app4apps.herokuapp.com";
        }
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    PostgreSqlService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = "operation"; }
        return function (error) {
            console.error(error); // log to console instead
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    PostgreSqlService.prototype.getHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("token")
        });
    };
    PostgreSqlService.prototype.getIdeas = function () {
        return this.http
            .get(this.server + "/api/idea", { headers: this.getHeaders() })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* catchError */])(this.handleError("getIdeas", [])));
    };
    PostgreSqlService.prototype.getComments = function (user) {
        return this.http
            .get(this.server + "/api/comment", {
            headers: this.getHeaders(),
            params: { IdeaId: user }
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* catchError */])(this.handleError("getComments", [])));
    };
    PostgreSqlService.prototype.addIdea = function (idea) {
        return this.http
            .post(this.server + "/api/idea", idea, {
            headers: this.getHeaders()
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* catchError */])(this.handleError("addIdea")));
    };
    PostgreSqlService.prototype.addComment = function (comment) {
        return this.http
            .post(this.server + "/api/comment", comment, {
            headers: this.getHeaders()
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* catchError */])(this.handleError("addComment")));
    };
    PostgreSqlService.prototype.deleteComment = function (comment) {
        return this.http
            .delete(this.server + "/api/comment?id=" + comment._id, {
            headers: this.getHeaders()
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* catchError */])(this.handleError("commentDelete")));
    };
    PostgreSqlService.prototype.register = function (username, password, email) {
        var newUser = new __WEBPACK_IMPORTED_MODULE_4__models_User__["a" /* User */](username, password, email);
        return this.http
            .post(this.server + "/api/user", newUser)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* catchError */])(this.handleError("register")));
    };
    PostgreSqlService.prototype.login = function (username, password) {
        return this.http
            .post(this.server + "/api/user/login", {
            Username: username,
            Password: password
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* catchError */])(this.handleError("login")));
    };
    PostgreSqlService.prototype.deleteIdea = function (idea) {
        return this.http
            .delete(this.server + "/api/idea?id=" + idea._id, {
            headers: this.getHeaders()
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* catchError */])(this.handleError("ideaDelete")));
    };
    PostgreSqlService.prototype.deleteAccount = function (userId) {
        return this.http
            .delete(this.server + "/api/user?id=" + userId, {
            headers: this.getHeaders()
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* catchError */])(this.handleError("userDelete")));
    };
    PostgreSqlService.prototype.authenticate = function () {
        return this.http
            .get(this.server + "/api/user/auth", {
            headers: this.getHeaders()
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* catchError */])(this.handleError("authenticate")));
    };
    PostgreSqlService.prototype.likeIdea = function (idea) {
        return this.http
            .post(this.server + "/api/idea/like", idea, {
            headers: this.getHeaders()
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* catchError */])(this.handleError("likeIdea")));
    };
    PostgreSqlService.prototype.likeComment = function (comment) {
        return this.http
            .post(this.server + "/api/comment/like", comment, {
            headers: this.getHeaders()
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* catchError */])(this.handleError("likeComment")));
    };
    PostgreSqlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], PostgreSqlService);
    return PostgreSqlService;
}());



/***/ }),

/***/ "./src/app/shared/passwords-match.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkPasswordValidator;
function checkPasswordValidator(control) {
    var password = control.get("password");
    var repeatedPassword = control.get("repeatedPassword");
    if (password.value === repeatedPassword.value) {
        return { passwordsMatch: true };
    }
    return { passwordsMatch: false };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map