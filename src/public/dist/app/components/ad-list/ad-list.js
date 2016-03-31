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
var ad_1 = require('../../services/ad');
var user_1 = require('../../services/user');
var router_1 = require('angular2/router');
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
//# sourceMappingURL=ad-list.js.map