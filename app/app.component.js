"use strict";
var core_1 = require("@angular/core");
var feathers_service_1 = require('./feathers.service');
var AppComponent = (function () {
    function AppComponent(FeathersService) {
        this.FeathersService = FeathersService;
        this._messagesService = this.FeathersService.service('messages');
        this._messages = this._messagesService.find().map(function (resp) { return resp.data; });
    }
    AppComponent.prototype.diocane = function () {
        console.log(this._messages);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [feathers_service_1.FeathersService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map