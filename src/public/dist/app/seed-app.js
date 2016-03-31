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
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var home_1 = require('./components/home/home');
var about_1 = require('./components/about/about');
var edit_1 = require('./components/edit/edit');
var myads_1 = require('./components/myads/myads');
var admin_1 = require('./components/admin/admin');
var public_1 = require('./components/public/public');
var ad_1 = require('./services/ad');
var user_1 = require('./services/user');
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
//# sourceMappingURL=seed-app.js.map