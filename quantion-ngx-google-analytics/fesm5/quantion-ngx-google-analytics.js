import { __decorate } from 'tslib';
import { RendererFactory2, ɵɵdefineInjectable, ɵɵinject, Injectable, InjectionToken, NgModule } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

var ConfigService = /** @class */ (function () {
    function ConfigService(config) {
        if (config === void 0) { config = { googleAnalyticsId: null }; }
        // tslint:disable-next-line: no-inferrable-types
        this.googleAnalyticsId = '';
        this.googleAnalyticsId = config.googleAnalyticsId;
    }
    return ConfigService;
}());

var GoogleAnalyticsEventTrackingService = /** @class */ (function () {
    function GoogleAnalyticsEventTrackingService(configService, router, rendererFactory) {
        this.configService = configService;
        this.router = router;
        this.rendererFactory = rendererFactory;
    }
    GoogleAnalyticsEventTrackingService.prototype.trackNavigation = function () {
        var _this = this;
        this.loadScripts();
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd && gtag) {
                gtag('config', _this.configService.googleAnalyticsId, { page_path: event.urlAfterRedirects });
            }
        });
    };
    GoogleAnalyticsEventTrackingService.prototype.event = function (gaEvent) {
        var eventAction = gaEvent.eventAction, eventCategory = gaEvent.eventCategory, eventLabel = gaEvent.eventLabel, eventValue = gaEvent.eventValue;
        gtag('event', eventAction, { event_category: eventCategory, event_label: eventLabel, value: eventValue });
    };
    GoogleAnalyticsEventTrackingService.prototype.loadScripts = function () {
        var renderer = this.rendererFactory.createRenderer(null, null);
        var script = renderer.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + this.configService.googleAnalyticsId;
        var head = renderer.selectRootElement('head', true);
        renderer.appendChild(head, script);
        var gaScript = renderer.createElement('script');
        gaScript.text = "\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag(\"js\", new Date());\n      gtag(\"config\", \"" + this.configService.googleAnalyticsId + "\");";
        renderer.appendChild(head, gaScript);
    };
    GoogleAnalyticsEventTrackingService.ctorParameters = function () { return [
        { type: ConfigService },
        { type: Router },
        { type: RendererFactory2 }
    ]; };
    GoogleAnalyticsEventTrackingService.ɵprov = ɵɵdefineInjectable({ factory: function GoogleAnalyticsEventTrackingService_Factory() { return new GoogleAnalyticsEventTrackingService(ɵɵinject(ConfigService), ɵɵinject(Router), ɵɵinject(RendererFactory2)); }, token: GoogleAnalyticsEventTrackingService, providedIn: "root" });
    GoogleAnalyticsEventTrackingService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GoogleAnalyticsEventTrackingService);
    return GoogleAnalyticsEventTrackingService;
}());

var FOR_ROOT_OPTIONS_TOKEN = new InjectionToken('forRoot() configuration');
function ProvideConfig(config) {
    var configService = new ConfigService(config);
    return configService;
}

var GoogleAnalyticsModule = /** @class */ (function () {
    function GoogleAnalyticsModule() {
    }
    GoogleAnalyticsModule_1 = GoogleAnalyticsModule;
    GoogleAnalyticsModule.forRoot = function (config) {
        return {
            ngModule: GoogleAnalyticsModule_1,
            providers: [
                GoogleAnalyticsEventTrackingService,
                {
                    provide: FOR_ROOT_OPTIONS_TOKEN,
                    useValue: config
                },
                {
                    provide: ConfigService,
                    useFactory: ProvideConfig,
                    deps: [FOR_ROOT_OPTIONS_TOKEN]
                }
            ]
        };
    };
    var GoogleAnalyticsModule_1;
    GoogleAnalyticsModule = GoogleAnalyticsModule_1 = __decorate([
        NgModule({
            declarations: [],
            imports: [
                CommonModule
            ],
            providers: []
        })
    ], GoogleAnalyticsModule);
    return GoogleAnalyticsModule;
}());

/*
 * Public API Surface of quantion-ngx-google-analytics
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GoogleAnalyticsEventTrackingService, GoogleAnalyticsModule, ConfigService as ɵa, FOR_ROOT_OPTIONS_TOKEN as ɵc, ProvideConfig as ɵd };
//# sourceMappingURL=quantion-ngx-google-analytics.js.map
