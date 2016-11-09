"use strict";
var feathers = require('feathers/client');
var socketio = require('feathers-socketio/client');
var hooks = require('feathers-hooks');
var rx = require('feathers-reactive');
var core_1 = require('@angular/core');
var nativescript_socketio_1 = require('nativescript-socketio');
var RxJS = require('rxjs');
var FeathersService = (function () {
    function FeathersService() {
        this.socket = new nativescript_socketio_1.SocketIO('http://localhost:3030', null);
        this.socket.connect();
        this.app = feathers()
            .configure(hooks())
            .configure(socketio(this.socket))
            .configure(rx(RxJS));
    }
    FeathersService.prototype.service = function (name) {
        return this.app.service(name);
    };
    FeathersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FeathersService);
    return FeathersService;
}());
exports.FeathersService = FeathersService;
//# sourceMappingURL=feathers.service.js.map