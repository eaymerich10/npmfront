(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('quantion-ngx-ekomi-widget', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['quantion-ngx-ekomi-widget'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
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
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var EkomiWidgetTypeEnum;
    (function (EkomiWidgetTypeEnum) {
        EkomiWidgetTypeEnum["reputami_rank"] = "reputami_rank";
        EkomiWidgetTypeEnum["reputami_showroom"] = "reputami_showroom";
    })(EkomiWidgetTypeEnum || (EkomiWidgetTypeEnum = {}));

    var EkomiWidgetService = /** @class */ (function () {
        function EkomiWidgetService(rendererFactory) {
            this.rendererFactory = rendererFactory;
            // tslint:disable: variable-name
            // tslint:disable: no-inferrable-types
            this._ekomiShowRoomJs = false;
            this._ekomiRankJs = false;
        }
        EkomiWidgetService.prototype.loadScriptShowroomWidget = function (v, locale) {
            if (!this._ekomiShowRoomJs) {
                this.loadScript(EkomiWidgetTypeEnum.reputami_showroom, v, locale);
                this._ekomiShowRoomJs = true;
            }
        };
        EkomiWidgetService.prototype.loadScriptRankWidget = function (v, locale) {
            if (!this._ekomiRankJs) {
                this.loadScript(EkomiWidgetTypeEnum.reputami_rank, v, locale);
                this._ekomiRankJs = true;
            }
        };
        EkomiWidgetService.prototype.loadScript = function (type, v, locale) {
            var renderer = this.rendererFactory.createRenderer(null, null);
            var script = renderer.createElement('script');
            script.src = "//lite.ekomiapps.de/widget.js?type=" + type + "&v=" + v + "&locale=" + locale;
            var head = renderer.selectRootElement('head', true);
            renderer.appendChild(head, script);
        };
        EkomiWidgetService.prototype.loadSmartWidget = function (customerId, language, widgetTokens, draftMode) {
            if (draftMode === void 0) { draftMode = false; }
            (function (w) {
                // tslint:disable: no-string-literal
                w['_ekomiWidgetsServerUrl'] = (document.location.protocol === 'https:' ? 'https:' : 'http:') + '//widgets.ekomi.com';
                w['_customerId'] = customerId;
                w['_ekomiDraftMode'] = draftMode;
                w['_language'] = language;
                if (typeof (w['_ekomiWidgetTokens']) !== 'undefined') {
                    w['_ekomiWidgetTokens'][w['_ekomiWidgetTokens'].length] = widgetTokens;
                }
                else {
                    w['_ekomiWidgetTokens'] = new Array(widgetTokens);
                }
                var scr = document.createElement('script');
                scr.setAttribute('id', 'ekomiWidgetJs');
                scr.src = 'https://sw-assets.ekomiapps.de/static_resources/widget.js';
                var head = document.getElementsByTagName('head')[0];
                head.appendChild(scr);
            })(window);
        };
        EkomiWidgetService.prototype.removeSmartWidgetScript = function () {
            var scriptEkomiwidget = document.getElementById('ekomiWidgetJs');
            scriptEkomiwidget.remove();
        };
        EkomiWidgetService.ctorParameters = function () { return [
            { type: core.RendererFactory2 }
        ]; };
        EkomiWidgetService.ɵprov = core.ɵɵdefineInjectable({ factory: function EkomiWidgetService_Factory() { return new EkomiWidgetService(core.ɵɵinject(core.RendererFactory2)); }, token: EkomiWidgetService, providedIn: "root" });
        EkomiWidgetService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], EkomiWidgetService);
        return EkomiWidgetService;
    }());

    var EkomiRankWidgetComponent = /** @class */ (function () {
        function EkomiRankWidgetComponent(ekomiWidgetService) {
            this.ekomiWidgetService = ekomiWidgetService;
        }
        EkomiRankWidgetComponent.prototype.ngOnInit = function () {
        };
        EkomiRankWidgetComponent.prototype.ngAfterViewInit = function () {
            this.ekomiWidgetService.loadScriptRankWidget(this.v, this.locale);
        };
        EkomiRankWidgetComponent.ctorParameters = function () { return [
            { type: EkomiWidgetService }
        ]; };
        __decorate([
            core.Input()
        ], EkomiRankWidgetComponent.prototype, "v", void 0);
        __decorate([
            core.Input()
        ], EkomiRankWidgetComponent.prototype, "locale", void 0);
        __decorate([
            core.Input()
        ], EkomiRankWidgetComponent.prototype, "id", void 0);
        EkomiRankWidgetComponent = __decorate([
            core.Component({
                // tslint:disable-next-line: component-selector
                selector: 'quantion-ekomi-rank-widget',
                template: "\r\n<div class=\"reputami_rank_widget\" [id]=\"id\"></div>\r\n",
                styles: [""]
            })
        ], EkomiRankWidgetComponent);
        return EkomiRankWidgetComponent;
    }());

    var EkomiShowroomWidgetComponent = /** @class */ (function () {
        function EkomiShowroomWidgetComponent(ekomiWidgetService) {
            this.ekomiWidgetService = ekomiWidgetService;
        }
        EkomiShowroomWidgetComponent.prototype.ngOnInit = function () {
        };
        EkomiShowroomWidgetComponent.prototype.ngAfterViewInit = function () {
            this.ekomiWidgetService.loadScriptShowroomWidget(this.v, this.locale);
        };
        EkomiShowroomWidgetComponent.ctorParameters = function () { return [
            { type: EkomiWidgetService }
        ]; };
        __decorate([
            core.Input()
        ], EkomiShowroomWidgetComponent.prototype, "v", void 0);
        __decorate([
            core.Input()
        ], EkomiShowroomWidgetComponent.prototype, "locale", void 0);
        __decorate([
            core.Input()
        ], EkomiShowroomWidgetComponent.prototype, "id", void 0);
        EkomiShowroomWidgetComponent = __decorate([
            core.Component({
                // tslint:disable-next-line: component-selector
                selector: 'quantion-ekomi-showroom-widget',
                template: "\r\n<div class=\"reputami_showroom_widget\" [id]=\"id\"></div>\r\n",
                styles: [""]
            })
        ], EkomiShowroomWidgetComponent);
        return EkomiShowroomWidgetComponent;
    }());

    var EkomiSmartWidgetComponent = /** @class */ (function () {
        function EkomiSmartWidgetComponent(ekomiWidgetService) {
            this.ekomiWidgetService = ekomiWidgetService;
            // tslint:disable-next-line: no-inferrable-types
            this.draftMode = false;
        }
        EkomiSmartWidgetComponent.prototype.ngOnInit = function () {
        };
        EkomiSmartWidgetComponent.prototype.ngAfterViewInit = function () {
            this.ekomiWidgetService.loadSmartWidget(this.customerId, this.language, this.widgetTokens, this.draftMode);
        };
        EkomiSmartWidgetComponent.prototype.ngOnDestroy = function () {
            this.ekomiWidgetService.removeSmartWidgetScript();
        };
        EkomiSmartWidgetComponent.ctorParameters = function () { return [
            { type: EkomiWidgetService }
        ]; };
        __decorate([
            core.Input()
        ], EkomiSmartWidgetComponent.prototype, "customerId", void 0);
        __decorate([
            core.Input()
        ], EkomiSmartWidgetComponent.prototype, "language", void 0);
        __decorate([
            core.Input()
        ], EkomiSmartWidgetComponent.prototype, "widgetTokens", void 0);
        __decorate([
            core.Input()
        ], EkomiSmartWidgetComponent.prototype, "draftMode", void 0);
        EkomiSmartWidgetComponent = __decorate([
            core.Component({
                // tslint:disable-next-line: component-selector
                selector: 'quantion-ekomi-smart-widget',
                template: "\r\n<div id=\"widget-container\" class=\"ekomi-widget-container ekomi-widget-{{ widgetTokens }}\" ></div>\r\n",
                styles: [""]
            })
        ], EkomiSmartWidgetComponent);
        return EkomiSmartWidgetComponent;
    }());

    var QuantionNgxEkomiWidgetModule = /** @class */ (function () {
        function QuantionNgxEkomiWidgetModule() {
        }
        QuantionNgxEkomiWidgetModule = __decorate([
            core.NgModule({
                declarations: [
                    EkomiRankWidgetComponent,
                    EkomiShowroomWidgetComponent,
                    EkomiSmartWidgetComponent
                ],
                imports: [],
                exports: [
                    EkomiRankWidgetComponent,
                    EkomiShowroomWidgetComponent,
                    EkomiSmartWidgetComponent
                ]
            })
        ], QuantionNgxEkomiWidgetModule);
        return QuantionNgxEkomiWidgetModule;
    }());

    exports.EkomiRankWidgetComponent = EkomiRankWidgetComponent;
    exports.EkomiShowroomWidgetComponent = EkomiShowroomWidgetComponent;
    exports.EkomiSmartWidgetComponent = EkomiSmartWidgetComponent;
    exports.QuantionNgxEkomiWidgetModule = QuantionNgxEkomiWidgetModule;
    exports.ɵa = EkomiWidgetService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=quantion-ngx-ekomi-widget.umd.js.map
