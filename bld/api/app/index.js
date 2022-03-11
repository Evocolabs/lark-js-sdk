"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppAPI = void 0;
var _api_1 = require("../@api");
var manage_1 = require("./manage");
var store_1 = require("./store");
var AppAPI = /** @class */ (function (_super) {
    __extends(AppAPI, _super);
    function AppAPI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.manage = new manage_1.AppManageAPI(_this.client);
        _this.store = new store_1.AppStoreAPI(_this.client);
        return _this;
    }
    return AppAPI;
}(_api_1.LarkAPI));
exports.AppAPI = AppAPI;
__exportStar(require("./manage"), exports);
__exportStar(require("./store"), exports);
