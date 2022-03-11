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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feishu = exports.Lark = exports.DEFAULT_FEISHU_API_ENDPOINT = exports.DEFAULT_LARK_API_ENDPOINT = void 0;
var client_1 = require("./client");
var api_1 = require("./api");
exports.DEFAULT_LARK_API_ENDPOINT = 'https://open.larksuite.com/open-apis/';
exports.DEFAULT_FEISHU_API_ENDPOINT = 'https://open.feishu.cn/open-apis/';
var Lark = /** @class */ (function () {
    function Lark(appId, appSecret, apiEndpoint, internal) {
        if (apiEndpoint === void 0) { apiEndpoint = exports.DEFAULT_LARK_API_ENDPOINT; }
        if (internal === void 0) { internal = true; }
        this.appId = appId;
        this.appSecret = appSecret;
        this.apiEndpoint = apiEndpoint;
        this.internal = internal;
        this.client = new client_1.LarkAPIClient(this.appId, this.appSecret, this.apiEndpoint, this.internal);
        this.authen = new api_1.AuthenAPI(this.client);
        this.contact = new api_1.ContactAPI(this.client);
        this.userGroup = new api_1.UserGroupAPI(this.client);
        this.app = new api_1.AppAPI(this.client);
        this.bot = new api_1.BotAPI(this.client);
        this.message = new api_1.MessageAPI(this.client);
        this.notify = new api_1.NotifyAPI(this.client);
    }
    return Lark;
}());
exports.Lark = Lark;
var Feishu = /** @class */ (function (_super) {
    __extends(Feishu, _super);
    function Feishu(appId, appSecret, apiEndpoint, internal) {
        if (apiEndpoint === void 0) { apiEndpoint = exports.DEFAULT_FEISHU_API_ENDPOINT; }
        if (internal === void 0) { internal = true; }
        return _super.call(this, appId, appSecret, apiEndpoint, internal) || this;
    }
    return Feishu;
}(Lark));
exports.Feishu = Feishu;
