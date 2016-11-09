"use strict";
var core_1 = require('@angular/core');
var feathers_service_1 = require('./feathers.service');
var AppComponent = (function () {
    function AppComponent(FeathersService, _ref) {
        this.FeathersService = FeathersService;
        this._ref = _ref;
        this._messagesService = this.FeathersService.service('messages');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messagesService.find()
            .subscribe(function (resp) {
            _this._messages = resp.data;
            _this._ref.detectChanges();
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [feathers_service_1.FeathersService, core_1.ChangeDetectorRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map