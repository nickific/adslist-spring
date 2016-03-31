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
var router_1 = require('angular2/router');
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
//# sourceMappingURL=review.js.map