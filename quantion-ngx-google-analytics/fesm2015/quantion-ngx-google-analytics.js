import { __decorate } from 'tslib';
import { RendererFactory2, ɵɵdefineInjectable, ɵɵinject, Injectable, InjectionToken, NgModule } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

class ConfigService {
    constructor(config = { googleAnalyticsId: null }) {
        // tslint:disable-next-line: no-inferrable-types
        this.googleAnalyticsId = '';
        this.googleAnalyticsId = config.googleAnalyticsId;
    }
}

let GoogleAnalyticsEventTrackingService = class GoogleAnalyticsEventTrackingService {
    constructor(configService, router, rendererFactory) {
        this.configService = configService;
        this.router = router;
        this.rendererFactory = rendererFactory;
    }
    trackNavigation() {
        this.loadScripts();
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd && gtag) {
                gtag('config', this.configService.googleAnalyticsId, { page_path: event.urlAfterRedirects });
            }
        });
    }
    event(gaEvent) {
        const { eventAction, eventCategory, eventLabel, eventValue } = gaEvent;
        gtag('event', eventAction, { event_category: eventCategory, event_label: eventLabel, value: eventValue });
    }
    loadScripts() {
        const renderer = this.rendererFactory.createRenderer(null, null);
        const script = renderer.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + this.configService.googleAnalyticsId;
        const head = renderer.selectRootElement('head', true);
        renderer.appendChild(head, script);
        const gaScript = renderer.createElement('script');
        gaScript.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "${this.configService.googleAnalyticsId}");`;
        renderer.appendChild(head, gaScript);
    }
};
GoogleAnalyticsEventTrackingService.ctorParameters = () => [
    { type: ConfigService },
    { type: Router },
    { type: RendererFactory2 }
];
GoogleAnalyticsEventTrackingService.ɵprov = ɵɵdefineInjectable({ factory: function GoogleAnalyticsEventTrackingService_Factory() { return new GoogleAnalyticsEventTrackingService(ɵɵinject(ConfigService), ɵɵinject(Router), ɵɵinject(RendererFactory2)); }, token: GoogleAnalyticsEventTrackingService, providedIn: "root" });
GoogleAnalyticsEventTrackingService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GoogleAnalyticsEventTrackingService);

const FOR_ROOT_OPTIONS_TOKEN = new InjectionToken('forRoot() configuration');
function ProvideConfig(config) {
    const configService = new ConfigService(config);
    return configService;
}

var GoogleAnalyticsModule_1;
let GoogleAnalyticsModule = GoogleAnalyticsModule_1 = class GoogleAnalyticsModule {
    static forRoot(config) {
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
    }
};
GoogleAnalyticsModule = GoogleAnalyticsModule_1 = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule
        ],
        providers: []
    })
], GoogleAnalyticsModule);

/*
 * Public API Surface of quantion-ngx-google-analytics
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GoogleAnalyticsEventTrackingService, GoogleAnalyticsModule, ConfigService as ɵa, FOR_ROOT_OPTIONS_TOKEN as ɵc, ProvideConfig as ɵd };
//# sourceMappingURL=quantion-ngx-google-analytics.js.map
