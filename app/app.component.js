"use strict";
var core_1 = require('@angular/core');
var rxjs_1 = require('rxjs');
var feathers_service_1 = require('./feathers.service');
var AppComponent = (function () {
    function AppComponent(FeathersService, _ref, _zone) {
        this.FeathersService = FeathersService;
        this._ref = _ref;
        this._zone = _zone;
        this._messagesService = this.FeathersService.service('messages');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messagesService.find()
            .subscribe(function (resp) {
            _this._zone.run(function () {
                _this._messages = resp;
            });
        });
    };
    AppComponent.prototype.create = function () {
        var text = 'Text' + Math.random().toString(36).substr(2, 5);
        this._messagesService.create({
            text: text
        });
    };
    AppComponent.prototype.remove = function (id) {
        this._messagesService.remove(id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', rxjs_1.Observable)
    ], AppComponent.prototype, "_messages", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [feathers_service_1.FeathersService, core_1.ChangeDetectorRef, core_1.NgZone])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map