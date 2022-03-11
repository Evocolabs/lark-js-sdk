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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUserAPI = exports.Gender = exports.EmployeeType = void 0;
var _api_1 = require("../@api");
var query_string_1 = __importDefault(require("query-string"));
var EmployeeType;
(function (EmployeeType) {
    EmployeeType[EmployeeType["fulltime"] = 1] = "fulltime";
    EmployeeType[EmployeeType["intern"] = 2] = "intern";
    EmployeeType[EmployeeType["outsourced"] = 3] = "outsourced";
    EmployeeType[EmployeeType["labor"] = 4] = "labor";
    EmployeeType[EmployeeType["consultant"] = 5] = "consultant";
})(EmployeeType = exports.EmployeeType || (exports.EmployeeType = {}));
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 1] = "male";
    Gender[Gender["female"] = 2] = "female";
})(Gender = exports.Gender || (exports.Gender = {}));
var ContactUserAPI = /** @class */ (function (_super) {
    __extends(ContactUserAPI, _super);
    function ContactUserAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactUserAPI.prototype.getInfos = function (idsType, ids) {
        return __awaiter(this, void 0, void 0, function () {
            var tenant_access_token, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.getTenantAccessToken()];
                    case 1:
                        tenant_access_token = _a.sent();
                        query = ids.map(function (id) { return idsType + "=" + encodeURIComponent(id); }).join('&');
                        return [4 /*yield*/, this.client.get("contact/v1/user/batch_get?" + query, tenant_access_token)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactUserAPI.prototype.getDepartmentUserList = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var idType, id, restOptions, tenant_access_token, query;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        idType = options.idType, id = options.id, restOptions = __rest(options, ["idType", "id"]);
                        return [4 /*yield*/, this.client.getTenantAccessToken()];
                    case 1:
                        tenant_access_token = _b.sent();
                        query = query_string_1.default.stringify(__assign((_a = {}, _a[idType] = id, _a), restOptions));
                        return [4 /*yield*/, this.client.get("contact/v1/department/user/list?" + query, tenant_access_token)];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    ContactUserAPI.prototype.getDepartmentUserDetailList = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var id_type, id, restOptions, tenant_access_token, query;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id_type = options.id_type, id = options.id, restOptions = __rest(options, ["id_type", "id"]);
                        return [4 /*yield*/, this.client.getTenantAccessToken()];
                    case 1:
                        tenant_access_token = _b.sent();
                        query = query_string_1.default.stringify(__assign((_a = {}, _a[id_type] = id, _a), restOptions));
                        return [4 /*yield*/, this.client.get("contact/v1/department/user/detail/list?" + query, tenant_access_token)];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    ContactUserAPI.prototype.add = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var tenant_access_token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.getTenantAccessToken()];
                    case 1:
                        tenant_access_token = _a.sent();
                        return [2 /*return*/, this.client.post('contact/v1/user/add', options, tenant_access_token)];
                }
            });
        });
    };
    ContactUserAPI.prototype.delete = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var tenant_access_token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.getTenantAccessToken()];
                    case 1:
                        tenant_access_token = _a.sent();
                        return [4 /*yield*/, this.client.post('contact/v1/user/delete', options, tenant_access_token)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactUserAPI.prototype.update = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var tenant_access_token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.getTenantAccessToken()];
                    case 1:
                        tenant_access_token = _a.sent();
                        return [4 /*yield*/, this.client.post('contact/v1/user/update', options, tenant_access_token)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactUserAPI.prototype.getRoleList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tenant_access_token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.getTenantAccessToken()];
                    case 1:
                        tenant_access_token = _a.sent();
                        return [2 /*return*/, this.client.get('contact/v2/role/list', tenant_access_token)];
                }
            });
        });
    };
    ContactUserAPI.prototype.getRoleMembers = function (roleId, pageSize, pageToken) {
        if (pageSize === void 0) { pageSize = 20; }
        return __awaiter(this, void 0, void 0, function () {
            var query, tenant_access_token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = query_string_1.default.stringify({
                            role_id: roleId,
                            page_size: pageSize,
                            page_token: pageToken,
                        });
                        return [4 /*yield*/, this.client.getTenantAccessToken()];
                    case 1:
                        tenant_access_token = _a.sent();
                        return [2 /*return*/, this.client.get("contact/v2/role/members?" + query, tenant_access_token)];
                }
            });
        });
    };
    ContactUserAPI.prototype.getUserIdsByMobilesOrEmails = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, emails, _b, mobiles, tenant_access_token, emailQueries, mobileQueries, query;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = options.emails, emails = _a === void 0 ? [] : _a, _b = options.mobiles, mobiles = _b === void 0 ? [] : _b;
                        return [4 /*yield*/, this.client.getTenantAccessToken()];
                    case 1:
                        tenant_access_token = _c.sent();
                        emailQueries = emails.map(function (email) { return "emails=" + encodeURIComponent(email); });
                        mobileQueries = mobiles.map(function (mobile) { return "mobiles=" + encodeURIComponent(mobile); });
                        query = emailQueries.concat(mobileQueries).join('&');
                        return [2 /*return*/, this.client.get("user/v1/batch_get_id?" + query, tenant_access_token)];
                }
            });
        });
    };
    ContactUserAPI.prototype.getUserIdsByUnionIds = function (unionIds) {
        return __awaiter(this, void 0, void 0, function () {
            var tenant_access_token, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.getTenantAccessToken()];
                    case 1:
                        tenant_access_token = _a.sent();
                        query = unionIds
                            .map(function (unionId) { return "union_ids=" + encodeURIComponent(unionId); })
                            .join('&');
                        return [2 /*return*/, this.client.get("user/v1/union_id/batch_get/list?" + query, tenant_access_token)];
                }
            });
        });
    };
    ContactUserAPI.prototype.search = function (query, pageSize, pageToken) {
        if (pageSize === void 0) { pageSize = 20; }
        return __awaiter(this, void 0, void 0, function () {
            var tenant_access_token, _query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.getTenantAccessToken()];
                    case 1:
                        tenant_access_token = _a.sent();
                        _query = query_string_1.default.stringify({
                            query: query,
                            page_size: pageSize,
                            page_token: pageToken,
                        });
                        return [2 /*return*/, this.client.get("search/v1/user?" + _query, tenant_access_token)];
                }
            });
        });
    };
    return ContactUserAPI;
}(_api_1.LarkAPI));
exports.ContactUserAPI = ContactUserAPI;
