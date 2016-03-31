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
var admin_list_1 = require('../admin-list/admin-list');
var review_1 = require('../review/review');
var ad_1 = require('../../services/ad');
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
//# sourceMappingURL=admin.js.map