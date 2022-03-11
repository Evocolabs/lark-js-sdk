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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LarkAPIClient = exports.LarkAPIError = void 0;
var taro_axios_1 = __importDefault(require("taro-axios"));
var TOKEN_RENEW_TIME_AHEAD = 120;
var LarkAPIError = /** @class */ (function (_super) {
    __extends(LarkAPIError, _super);
    function LarkAPIError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        return _this;
    }
    return LarkAPIError;
}(Error));
exports.LarkAPIError = LarkAPIError;
var LarkAPIClient = /** @class */ (function () {
    function LarkAPIClient(appId, appSecret, apiEndpoint, internal) {
        if (internal === void 0) { internal = true; }
        this.appId = appId;
        this.appSecret = appSecret;
        this.apiEndpoint = apiEndpoint;
        this.internal = internal;
    }
    Object.defineProperty(LarkAPIClient.prototype, "appBaseCredentials", {
        get: function () {
            return { app_id: this.appId, app_secret: this.appSecret };
        },
        enumerable: false,
        configurable: true
    });
    LarkAPIClient.prototype.fetchAppAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, _a, app_access_token, expire;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = this.internal
                            ? this.appBaseCredentials
                            : __assign(__assign({}, this.appBaseCredentials), { app_ticket: this.appTicket });
                        return [4 /*yield*/, this.post("auth/v3/app_access_token/" + (this.internal ? 'internal/' : ''), data)];
                    case 1:
                        _a = _b.sent(), app_access_token = _a.app_access_token, expire = _a.expire;
                        this.appAccessToken = app_access_token;
                        this.appAccessTokenExpires =
                            Date.now() + expire * 1000 - TOKEN_RENEW_TIME_AHEAD * 1000;
                        return [2 /*return*/];
                }
            });
        });
    };
    LarkAPIClient.prototype.getAppAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var expired;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expired = this.appAccessTokenExpires && Date.now() > this.appAccessTokenExpires;
                        if (!(!this.appAccessToken || expired)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fetchAppAccessToken()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.appAccessToken];
                }
            });
        });
    };
    LarkAPIClient.prototype.fetchTenantAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, _a, _b, _c, tenant_access_token, expire;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.internal) return [3 /*break*/, 1];
                        _a = this.appBaseCredentials;
                        return [3 /*break*/, 3];
                    case 1:
                        _b = {};
                        return [4 /*yield*/, this.getAppAccessToken()];
                    case 2:
                        _a = (_b.app_access_token = _d.sent(),
                            _b.tenant_key = this.tenantKey,
                            _b);
                        _d.label = 3;
                    case 3:
                        data = _a;
                        return [4 /*yield*/, this.post("auth/v3/tenant_access_token/" + (this.internal ? 'internal/' : ''), data)];
                    case 4:
                        _c = _d.sent(), tenant_access_token = _c.tenant_access_token, expire = _c.expire;
                        this.tenantAccessToken = tenant_access_token;
                        this.tenantAccessTokenExpires =
                            Date.now() + expire * 1000 - TOKEN_RENEW_TIME_AHEAD * 1000;
                        return [2 /*return*/];
                }
            });
        });
    };
    LarkAPIClient.prototype.getTenantAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var expired;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expired = this.tenantAccessTokenExpires &&
                            Date.now() > this.tenantAccessTokenExpires;
                        if (!(!this.tenantAccessToken || expired)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fetchTenantAccessToken()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.tenantAccessToken];
                }
            });
        });
    };
    LarkAPIClient.prototype.get = function (path, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, taro_axios_1.default.get("" + this.apiEndpoint + path, {
                            headers: { Authorization: "Bearer " + accessToken },
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, handleResponse(response)];
                }
            });
        });
    };
    LarkAPIClient.prototype.post = function (path, data, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, taro_axios_1.default.post("" + this.apiEndpoint + path, data, {
                            headers: { Authorization: "Bearer " + accessToken },
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, handleResponse(response)];
                }
            });
        });
    };
    LarkAPIClient.prototype.postFormData = function (path, formData, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contentType = typeof formData === 'object' && '_boundary' in formData
                            ? "multipart/form-data; boundary=" + formData._boundary
                            : 'multipart/form-data';
                        return [4 /*yield*/, taro_axios_1.default.post("" + this.apiEndpoint + path, formData, {
                                headers: {
                                    Authorization: "Bearer " + accessToken,
                                    'Content-Type': contentType,
                                },
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, handleResponse(response)];
                }
            });
        });
    };
    LarkAPIClient.prototype.download = function (path, responseType, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, taro_axios_1.default.get("" + this.apiEndpoint + path, {
                            responseType: responseType,
                            headers: {
                                Authorization: "Bearer " + accessToken,
                            },
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    return LarkAPIClient;
}());
exports.LarkAPIClient = LarkAPIClient;
function handleResponse(response) {
    return __awaiter(this, void 0, void 0, function () {
        var data, code, msg;
        return __generator(this, function (_a) {
            data = response.data;
            if (!data || typeof data !== 'object' || !('code' in data)) {
                throw new LarkAPIError(500, 'Unknown error');
            }
            code = data.code, msg = data.msg;
            if (code !== 0) {
                throw new LarkAPIError(code, msg);
            }
            if ('data' in data) {
                return [2 /*return*/, data.data];
            }
            return [2 /*return*/, data];
        });
    });
}
