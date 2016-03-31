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
//# sourceMappingURL=edit.js.map