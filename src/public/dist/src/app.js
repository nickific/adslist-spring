"use strict";
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var seed_app_1 = require('./app/seed-app');
browser_1.bootstrap(seed_app_1.SeedApp, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS])
    .catch(function (err) { return console.error(err); });
