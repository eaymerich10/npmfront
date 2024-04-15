import { __decorate } from 'tslib';
import { RendererFactory2, ɵɵdefineInjectable, ɵɵinject, Injectable, Input, Component, NgModule } from '@angular/core';

var EkomiWidgetTypeEnum;
(function (EkomiWidgetTypeEnum) {
    EkomiWidgetTypeEnum["reputami_rank"] = "reputami_rank";
    EkomiWidgetTypeEnum["reputami_showroom"] = "reputami_showroom";
})(EkomiWidgetTypeEnum || (EkomiWidgetTypeEnum = {}));

let EkomiWidgetService = class EkomiWidgetService {
    constructor(rendererFactory) {
        this.rendererFactory = rendererFactory;
        // tslint:disable: variable-name
        // tslint:disable: no-inferrable-types
        this._ekomiShowRoomJs = false;
        this._ekomiRankJs = false;
    }
    loadScriptShowroomWidget(v, locale) {
        if (!this._ekomiShowRoomJs) {
            this.loadScript(EkomiWidgetTypeEnum.reputami_showroom, v, locale);
            this._ekomiShowRoomJs = true;
        }
    }
    loadScriptRankWidget(v, locale) {
        if (!this._ekomiRankJs) {
            this.loadScript(EkomiWidgetTypeEnum.reputami_rank, v, locale);
            this._ekomiRankJs = true;
        }
    }
    loadScript(type, v, locale) {
        const renderer = this.rendererFactory.createRenderer(null, null);
        const script = renderer.createElement('script');
        script.src = `//lite.ekomiapps.de/widget.js?type=${type}&v=${v}&locale=${locale}`;
        const head = renderer.selectRootElement('head', true);
        renderer.appendChild(head, script);
    }
    loadSmartWidget(customerId, language, widgetTokens, draftMode = false) {
        ((w) => {
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
            const scr = document.createElement('script');
            scr.setAttribute('id', 'ekomiWidgetJs');
            scr.src = 'https://sw-assets.ekomiapps.de/static_resources/widget.js';
            const head = document.getElementsByTagName('head')[0];
            head.appendChild(scr);
        })(window);
    }
    removeSmartWidgetScript() {
        const scriptEkomiwidget = document.getElementById('ekomiWidgetJs');
        scriptEkomiwidget.remove();
    }
};
EkomiWidgetService.ctorParameters = () => [
    { type: RendererFactory2 }
];
EkomiWidgetService.ɵprov = ɵɵdefineInjectable({ factory: function EkomiWidgetService_Factory() { return new EkomiWidgetService(ɵɵinject(RendererFactory2)); }, token: EkomiWidgetService, providedIn: "root" });
EkomiWidgetService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], EkomiWidgetService);

let EkomiRankWidgetComponent = class EkomiRankWidgetComponent {
    constructor(ekomiWidgetService) {
        this.ekomiWidgetService = ekomiWidgetService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.ekomiWidgetService.loadScriptRankWidget(this.v, this.locale);
    }
};
EkomiRankWidgetComponent.ctorParameters = () => [
    { type: EkomiWidgetService }
];
__decorate([
    Input()
], EkomiRankWidgetComponent.prototype, "v", void 0);
__decorate([
    Input()
], EkomiRankWidgetComponent.prototype, "locale", void 0);
__decorate([
    Input()
], EkomiRankWidgetComponent.prototype, "id", void 0);
EkomiRankWidgetComponent = __decorate([
    Component({
        // tslint:disable-next-line: component-selector
        selector: 'quantion-ekomi-rank-widget',
        template: "\r\n<div class=\"reputami_rank_widget\" [id]=\"id\"></div>\r\n",
        styles: [""]
    })
], EkomiRankWidgetComponent);

let EkomiShowroomWidgetComponent = class EkomiShowroomWidgetComponent {
    constructor(ekomiWidgetService) {
        this.ekomiWidgetService = ekomiWidgetService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.ekomiWidgetService.loadScriptShowroomWidget(this.v, this.locale);
    }
};
EkomiShowroomWidgetComponent.ctorParameters = () => [
    { type: EkomiWidgetService }
];
__decorate([
    Input()
], EkomiShowroomWidgetComponent.prototype, "v", void 0);
__decorate([
    Input()
], EkomiShowroomWidgetComponent.prototype, "locale", void 0);
__decorate([
    Input()
], EkomiShowroomWidgetComponent.prototype, "id", void 0);
EkomiShowroomWidgetComponent = __decorate([
    Component({
        // tslint:disable-next-line: component-selector
        selector: 'quantion-ekomi-showroom-widget',
        template: "\r\n<div class=\"reputami_showroom_widget\" [id]=\"id\"></div>\r\n",
        styles: [""]
    })
], EkomiShowroomWidgetComponent);

let EkomiSmartWidgetComponent = class EkomiSmartWidgetComponent {
    constructor(ekomiWidgetService) {
        this.ekomiWidgetService = ekomiWidgetService;
        // tslint:disable-next-line: no-inferrable-types
        this.draftMode = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.ekomiWidgetService.loadSmartWidget(this.customerId, this.language, this.widgetTokens, this.draftMode);
    }
    ngOnDestroy() {
        this.ekomiWidgetService.removeSmartWidgetScript();
    }
};
EkomiSmartWidgetComponent.ctorParameters = () => [
    { type: EkomiWidgetService }
];
__decorate([
    Input()
], EkomiSmartWidgetComponent.prototype, "customerId", void 0);
__decorate([
    Input()
], EkomiSmartWidgetComponent.prototype, "language", void 0);
__decorate([
    Input()
], EkomiSmartWidgetComponent.prototype, "widgetTokens", void 0);
__decorate([
    Input()
], EkomiSmartWidgetComponent.prototype, "draftMode", void 0);
EkomiSmartWidgetComponent = __decorate([
    Component({
        // tslint:disable-next-line: component-selector
        selector: 'quantion-ekomi-smart-widget',
        template: "\r\n<div id=\"widget-container\" class=\"ekomi-widget-container ekomi-widget-{{ widgetTokens }}\" ></div>\r\n",
        styles: [""]
    })
], EkomiSmartWidgetComponent);

let QuantionNgxEkomiWidgetModule = class QuantionNgxEkomiWidgetModule {
};
QuantionNgxEkomiWidgetModule = __decorate([
    NgModule({
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

/*
 * Public API Surface of quantion-ngx-ekomi-widget
 */

/**
 * Generated bundle index. Do not edit.
 */

export { EkomiRankWidgetComponent, EkomiShowroomWidgetComponent, EkomiSmartWidgetComponent, QuantionNgxEkomiWidgetModule, EkomiWidgetService as ɵa };
//# sourceMappingURL=quantion-ngx-ekomi-widget.js.map
