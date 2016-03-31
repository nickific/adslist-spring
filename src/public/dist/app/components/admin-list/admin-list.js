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
var ad_list_1 = require('../ad-list/ad-list');
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
//# sourceMappingURL=admin-list.js.map