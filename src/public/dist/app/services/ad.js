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
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
var user_1 = require('./user');
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
//# sourceMappingURL=ad.js.map