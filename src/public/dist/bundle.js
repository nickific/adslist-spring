webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var browser_1 = __webpack_require__(118);
	var http_1 = __webpack_require__(223);
	var router_1 = __webpack_require__(238);
	var seed_app_1 = __webpack_require__(262);
	var http_2 = __webpack_require__(223);
	var ExRequestOptions = (function (_super) {
	    __extends(ExRequestOptions, _super);
	    function ExRequestOptions() {
	        _super.call(this);
	        this.headers.append('Content-Type', 'application/json');
	        this.headers.append('Accept', 'application/json');
	        this.headers.append('X-CSRF-TOKEN', this.getCookie('XSRF-TOKEN'));
	    }
	    ExRequestOptions.prototype.getCookie = function (name) {
	        var value = "; " + document.cookie;
	        var parts = value.split("; " + name + "=");
	        if (parts.length == 2)
	            return parts.pop().split(";").shift();
	    };
	    ExRequestOptions = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], ExRequestOptions);
	    return ExRequestOptions;
	}(http_2.BaseRequestOptions));
	exports.ExRequestOptions = ExRequestOptions;
	browser_1.bootstrap(seed_app_1.SeedApp, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, core_1.provide(http_2.RequestOptions, { useClass: ExRequestOptions })]) //, provide(LocationStrategy, {useClass: HashLocationStrategy})
	    .catch(function (err) { return console.error(err); });


/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(238);
	var home_1 = __webpack_require__(263);
	var about_1 = __webpack_require__(271);
	var edit_1 = __webpack_require__(272);
	var myads_1 = __webpack_require__(273);
	var admin_1 = __webpack_require__(274);
	var public_1 = __webpack_require__(277);
	var ad_1 = __webpack_require__(265);
	var user_1 = __webpack_require__(270);
	var SeedApp = (function () {
	    function SeedApp(user) {
	        this.user = user;
	    }
	    SeedApp = __decorate([
	        core_1.Component({
	            selector: 'seed-app',
	            providers: [ad_1.Ad, user_1.User],
	            templateUrl: 'app/seed-app.html',
	            directives: [router_1.ROUTER_DIRECTIVES],
	            pipes: []
	        }),
	        router_1.RouteConfig([
	            new router_1.Route({ path: '/home', component: home_1.Home, name: 'Home', useAsDefault: true }),
	            new router_1.Route({ path: '/edit/:id/', component: edit_1.Edit, name: 'Edit' }),
	            new router_1.Route({ path: '/about', component: about_1.About, name: 'About' }),
	            new router_1.Route({ path: '/myads', component: myads_1.MyAds, name: 'MyAds' }),
	            new router_1.Route({ path: '/admin/...', component: admin_1.Admin, name: 'Admin' }),
	            new router_1.Route({ path: '/public/:id/:token', component: public_1.Public, name: 'Public' })
	        ]), 
	        __metadata('design:paramtypes', [user_1.User])
	    ], SeedApp);
	    return SeedApp;
	}());
	exports.SeedApp = SeedApp;


/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(238);
	var ad_list_1 = __webpack_require__(264);
	var ad_1 = __webpack_require__(265);
	var Home = (function () {
	    function Home(router, ad) {
	        this.router = router;
	        this.ad = ad;
	    }
	    Home.prototype.postAd = function (text) {
	        this.ad.create(text);
	        return false;
	    };
	    Home = __decorate([
	        core_1.Component({
	            selector: 'home',
	            templateUrl: 'app/components/home/home.html',
	            styleUrls: ['app/components/home/home.css'],
	            providers: [],
	            directives: [router_1.ROUTER_DIRECTIVES, ad_list_1.AdList],
	            pipes: []
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, ad_1.Ad])
	    ], Home);
	    return Home;
	}());
	exports.Home = Home;


/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var ad_1 = __webpack_require__(265);
	var user_1 = __webpack_require__(270);
	var router_1 = __webpack_require__(238);
	var AdList = (function () {
	    function AdList(ad, user, params) {
	        this.ad = ad;
	        this.user = user;
	        setTimeout(this.update.bind(this), 200);
	        ad.addNotificationHandler(this.update.bind(this));
	    }
	    AdList.prototype.update = function () {
	        this.ads = this.search === "myads" ? this.ad.getMyAds() : this.ad.getList(this.search);
	    };
	    AdList.prototype.publish = function (id) {
	        var _this = this;
	        this.ad.publish(id).subscribe(function (ad) {
	            _this.update();
	        }, function (err) {
	            alert("Unable to publish ad: " + JSON.stringify(err));
	        });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], AdList.prototype, "search", void 0);
	    AdList = __decorate([
	        core_1.Component({
	            selector: 'ad-list',
	            templateUrl: 'app/components/ad-list/ad-list.html',
	            styleUrls: ['app/components/ad-list/ad-list.css'],
	            providers: [],
	            directives: [router_1.ROUTER_DIRECTIVES],
	            pipes: []
	        }), 
	        __metadata('design:paramtypes', [ad_1.Ad, user_1.User, router_1.RouteParams])
	    ], AdList);
	    return AdList;
	}());
	exports.AdList = AdList;


/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(223);
	__webpack_require__(266);
	var user_1 = __webpack_require__(270);
	var Ad = (function () {
	    function Ad(http, user) {
	        this.http = http;
	        this.user = user;
	        this.baseUrl = "/api/ad";
	        this.notificationHandlers = [];
	        this.stompClient = null;
	        this.connectWS();
	    }
	    Ad.prototype.getList = function (query) {
	        var url = this.baseUrl;
	        if (query) {
	            url += "?query=" + query;
	        }
	        return this.http.get(url)
	            .map(function (res) { return res.json(); });
	    };
	    Ad.prototype.getMyAds = function () {
	        return this.http.get(this.baseUrl + "/myads")
	            .map(function (res) { return res.json(); });
	    };
	    Ad.prototype.get = function (id) {
	        return this.http.get(this.baseUrl + "/" + id)
	            .map(function (res) { return res.json(); });
	    };
	    Ad.prototype.getPublic = function (id, token) {
	        return this.http.get(this.baseUrl + "/" + id + "/token/" + token)
	            .map(function (res) { return res.json(); });
	    };
	    Ad.prototype.create = function (text) {
	        var _this = this;
	        return this.http.post(this.baseUrl, JSON.stringify({ text: text }))
	            .subscribe(function (response) {
	            if (!_this.user.hasRole('ADMIN')) {
	                alert("Ad posted. An admin will review it");
	            }
	        }, function (error) { return console.error("error creating ad", error); });
	    };
	    Ad.prototype.update = function (id, mods) {
	        return this.http.put(this.baseUrl + "/" + id, JSON.stringify(mods));
	    };
	    Ad.prototype.accept = function (id) {
	        return this.review(id, true);
	    };
	    Ad.prototype.reject = function (id) {
	        return this.review(id, false);
	    };
	    Ad.prototype.review = function (id, approved) {
	        return this.http.post(this.baseUrl + "/" + id + "/review", JSON.stringify({ approved: approved }));
	    };
	    Ad.prototype.publish = function (id) {
	        return this.http.post(this.baseUrl + "/" + id + "/publish", JSON.stringify({}));
	    };
	    Ad.prototype.addNotificationHandler = function (cb) {
	        this.notificationHandlers.push(cb);
	    };
	    Ad.prototype.connectWS = function () {
	        if (this.stompClient) {
	            return;
	        }
	        var socket = new SockJS('/notification');
	        this.stompClient = Stomp.over(socket);
	        var that = this;
	        this.stompClient.connect({}, function (frame) {
	            console.log('Connected to ad notification service.');
	            that.stompClient.subscribe('/ad/accepted', function (ad) {
	                that.notificationHandlers.forEach(function (handler) {
	                    handler(ad);
	                });
	            });
	        });
	    };
	    Ad = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, user_1.User])
	    ], Ad);
	    return Ad;
	}());
	exports.Ad = Ad;


/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(62);
	var map_1 = __webpack_require__(267);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(63);
	var tryCatch_1 = __webpack_require__(268);
	var errorObject_1 = __webpack_require__(269);
	/**
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the returned observable
	 *
	 * @param {Function} project the function to create projection
	 * @param {any} [thisArg] an optional argument to define what `this` is in the project function
	 * @returns {Observable} a observable of projected values
	 */
	function map(project, thisArg) {
	    if (typeof project !== 'function') {
	        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	    }
	    return this.lift(new MapOperator(project, thisArg));
	}
	exports.map = map;
	var MapOperator = (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber) {
	        return new MapSubscriber(subscriber, this.project, this.thisArg);
	    };
	    return MapOperator;
	})();
	var MapSubscriber = (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        _super.call(this, destination);
	        this.project = project;
	        this.thisArg = thisArg;
	        this.count = 0;
	    }
	    MapSubscriber.prototype._next = function (x) {
	        var result = tryCatch_1.tryCatch(this.project).call(this.thisArg || this, x, this.count++);
	        if (result === errorObject_1.errorObject) {
	            this.error(errorObject_1.errorObject.e);
	        }
	        else {
	            this.destination.next(result);
	        }
	    };
	    return MapSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=map.js.map

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	var errorObject_1 = __webpack_require__(269);
	var tryCatchTarget;
	function tryCatcher() {
	    try {
	        return tryCatchTarget.apply(this, arguments);
	    }
	    catch (e) {
	        errorObject_1.errorObject.e = e;
	        return errorObject_1.errorObject;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	exports.tryCatch = tryCatch;
	;
	//# sourceMappingURL=tryCatch.js.map

/***/ },

/***/ 269:
/***/ function(module, exports) {

	exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(223);
	__webpack_require__(266);
	var User = (function () {
	    function User(http) {
	        var _this = this;
	        this.http = http;
	        this.baseUrl = "/api/user";
	        this.loggedIn = false;
	        this.current = {};
	        this.getCurrent().subscribe(function (user) {
	            _this.current = user;
	            _this.loggedIn = true;
	        }, function (err) {
	            console.warn("Not logged in: " + JSON.stringify(err));
	            _this.current = {};
	            _this.loggedIn = false;
	        });
	    }
	    User.prototype.isLoggedIn = function () {
	        return this.loggedIn;
	    };
	    User.prototype.getCurrent = function () {
	        return this.http.get(this.baseUrl + "/current")
	            .map(function (res) { return res.json(); });
	    };
	    User.prototype.get = function (id) {
	        return this.http.get(this.baseUrl + "/" + id)
	            .map(function (res) { return res.json(); });
	    };
	    User.prototype.hasRole = function (role) {
	        var authorities = this.current.authorities;
	        if (authorities) {
	            return authorities.find(function (descriptor) { return descriptor.authority === "ROLE_" + role; });
	        }
	        return false;
	    };
	    User = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], User);
	    return User;
	}());
	exports.User = User;


/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(223);
	var About = (function () {
	    function About(http) {
	    }
	    About = __decorate([
	        core_1.Component({
	            selector: 'about',
	            templateUrl: 'app/components/about/about.html',
	            styleUrls: ['app/components/about/about.css'],
	            providers: [],
	            directives: [],
	            pipes: []
	        }), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], About);
	    return About;
	}());
	exports.About = About;


/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var ad_1 = __webpack_require__(265);
	var user_1 = __webpack_require__(270);
	var router_1 = __webpack_require__(238);
	var Edit = (function () {
	    function Edit(router, ad, user, params) {
	        var _this = this;
	        this.router = router;
	        this.ad = ad;
	        this.user = user;
	        this.selected = { text: "", id: "0" };
	        ad.get(params.get("id")).subscribe(function (loaded) { return _this.selected = loaded; }, function (error) { return console.error("error loading ad", error); });
	    }
	    Edit.prototype.save = function () {
	        var _this = this;
	        this.ad.update(this.selected.id, { text: this.selected.text }).subscribe(function (ad) {
	            if (!_this.user.hasRole('ADMIN')) {
	                alert("Ad updated. An admin will review it again");
	            }
	            _this.router.navigate(['/MyAds', {}]);
	        }, function (err) {
	            console.error("error updating ad", err);
	            _this.router.navigate(['/MyAds', {}]);
	        });
	    };
	    Edit = __decorate([
	        core_1.Component({
	            selector: 'review',
	            templateUrl: 'app/components/edit/edit.html',
	            providers: [ad_1.Ad],
	            directives: [router_1.ROUTER_DIRECTIVES],
	            pipes: []
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, ad_1.Ad, user_1.User, router_1.RouteParams])
	    ], Edit);
	    return Edit;
	}());
	exports.Edit = Edit;


/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(238);
	var ad_list_1 = __webpack_require__(264);
	var MyAds = (function () {
	    function MyAds(params) {
	    }
	    MyAds = __decorate([
	        core_1.Component({
	            selector: 'myads',
	            templateUrl: 'app/components/myads/myads.html',
	            providers: [],
	            directives: [router_1.ROUTER_DIRECTIVES, ad_list_1.AdList],
	            pipes: []
	        }), 
	        __metadata('design:paramtypes', [router_1.RouteParams])
	    ], MyAds);
	    return MyAds;
	}());
	exports.MyAds = MyAds;


/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(238);
	var admin_list_1 = __webpack_require__(275);
	var review_1 = __webpack_require__(276);
	var ad_1 = __webpack_require__(265);
	var Admin = (function () {
	    function Admin(router, ad) {
	        this.router = router;
	        this.ad = ad;
	    }
	    Admin = __decorate([
	        core_1.Component({
	            selector: 'admin',
	            templateUrl: 'app/components/admin/admin.html',
	            providers: [],
	            directives: [router_1.ROUTER_DIRECTIVES, admin_list_1.AdminList],
	            pipes: []
	        }),
	        router_1.RouteConfig([
	            new router_1.Route({ path: '/', component: admin_list_1.AdminList, name: 'List' }),
	            new router_1.Route({ path: '/review/:id', component: review_1.Review, name: 'Review' }),
	        ]), 
	        __metadata('design:paramtypes', [router_1.Router, ad_1.Ad])
	    ], Admin);
	    return Admin;
	}());
	exports.Admin = Admin;


/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(238);
	var ad_list_1 = __webpack_require__(264);
	var AdminList = (function () {
	    function AdminList(params) {
	    }
	    AdminList = __decorate([
	        core_1.Component({
	            selector: 'admin-list',
	            templateUrl: 'app/components/admin-list/admin-list.html',
	            providers: [],
	            directives: [router_1.ROUTER_DIRECTIVES, ad_list_1.AdList],
	            pipes: []
	        }), 
	        __metadata('design:paramtypes', [router_1.RouteParams])
	    ], AdminList);
	    return AdminList;
	}());
	exports.AdminList = AdminList;


/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var ad_1 = __webpack_require__(265);
	var router_1 = __webpack_require__(238);
	var Review = (function () {
	    function Review(router, ad, params) {
	        var _this = this;
	        this.router = router;
	        this.ad = ad;
	        ad.get(params.get("id")).subscribe(function (loaded) { return _this.selected = loaded; }, function (error) { return console.error("error loading ad", error); });
	    }
	    Review.prototype.accept = function () {
	        var _this = this;
	        this.ad.accept(this.selected.id).subscribe(function (ad) {
	            _this.router.navigate(['/Admin/List', {}]);
	        }, function (err) {
	            alert("Unable to accept ad: " + JSON.stringify(err));
	            _this.router.navigate(['/Admin/List', {}]);
	        });
	    };
	    Review.prototype.reject = function () {
	        var _this = this;
	        this.ad.reject(this.selected.id).subscribe(function (ad) {
	            _this.router.navigate(['/Admin/List', {}]);
	        }, function (err) {
	            alert("Unable to reject ad: " + JSON.stringify(err));
	            _this.router.navigate(['/Admin/List', {}]);
	        });
	    };
	    Review = __decorate([
	        core_1.Component({
	            selector: 'review',
	            templateUrl: 'app/components/review/review.html',
	            providers: [],
	            directives: [router_1.ROUTER_DIRECTIVES],
	            pipes: []
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, ad_1.Ad, router_1.RouteParams])
	    ], Review);
	    return Review;
	}());
	exports.Review = Review;


/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(238);
	var ad_1 = __webpack_require__(265);
	var Public = (function () {
	    function Public(router, ad, params) {
	        var _this = this;
	        this.router = router;
	        this.ad = ad;
	        var token = params.get("token");
	        var id = params.get("id");
	        ad.getPublic(id, token).subscribe(function (loaded) { return _this.selected = loaded; }, function (error) {
	            _this.selected = { text: "Unable to load ad. Invalid token: " + token };
	            console.error("error loading ad", error);
	        });
	    }
	    Public = __decorate([
	        core_1.Component({
	            selector: 'review',
	            templateUrl: 'app/components/public/public.html',
	            providers: [],
	            directives: [router_1.ROUTER_DIRECTIVES],
	            pipes: []
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, ad_1.Ad, router_1.RouteParams])
	    ], Public);
	    return Public;
	}());
	exports.Public = Public;


/***/ }

});
//# sourceMappingURL=bundle.js.map