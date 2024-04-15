import { __decorate } from "tslib";
import { Injectable, RendererFactory2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ConfigService } from './config.service';
import * as i0 from "@angular/core";
import * as i1 from "./config.service";
import * as i2 from "@angular/router";
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
GoogleAnalyticsEventTrackingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GoogleAnalyticsEventTrackingService_Factory() { return new GoogleAnalyticsEventTrackingService(i0.ɵɵinject(i1.ConfigService), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i0.RendererFactory2)); }, token: GoogleAnalyticsEventTrackingService, providedIn: "root" });
GoogleAnalyticsEventTrackingService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GoogleAnalyticsEventTrackingService);
export { GoogleAnalyticsEventTrackingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWFuYWx5dGljcy1ldmVudC10cmFja2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcXVhbnRpb24tbmd4LWdvb2dsZS1hbmFseXRpY3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ29vZ2xlLWFuYWx5dGljcy1ldmVudC10cmFja2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBU2pELElBQWEsbUNBQW1DLEdBQWhELE1BQWEsbUNBQW1DO0lBRTlDLFlBQ1UsYUFBNEIsRUFDNUIsTUFBYyxFQUNkLGVBQWlDO1FBRmpDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7SUFDeEMsQ0FBQztJQUVHLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQyxJQUFJLEtBQUssWUFBWSxhQUFhLElBQUksSUFBSSxFQUFFO2dCQUMxQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQzthQUM3RjtRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUEwQjtRQUNyQyxNQUFNLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFTyxXQUFXO1FBQ2pCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxHQUFHLEdBQUcsOENBQThDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztRQUNuRyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RELFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsUUFBUSxDQUFDLElBQUksR0FBRzs7Ozs7O3dCQU1LLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWtCLEtBQUssQ0FBQztRQUNoRSxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0YsQ0FBQTs7WUFuQzBCLGFBQWE7WUFDcEIsTUFBTTtZQUNHLGdCQUFnQjs7O0FBTGhDLG1DQUFtQztJQUgvQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csbUNBQW1DLENBc0MvQztTQXRDWSxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR0FFdmVudHNJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2dhLWV2ZW50cy5pbnRlcmZhY2UnO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcclxuZGVjbGFyZSBsZXQgZ3RhZzogRnVuY3Rpb247XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVBbmFseXRpY3NFdmVudFRyYWNraW5nU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgdHJhY2tOYXZpZ2F0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkU2NyaXB0cygpO1xyXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQgJiYgZ3RhZykge1xyXG4gICAgICAgIGd0YWcoJ2NvbmZpZycsIHRoaXMuY29uZmlnU2VydmljZS5nb29nbGVBbmFseXRpY3NJZCwgeyBwYWdlX3BhdGg6IGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzIH0pO1xyXG4gICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXZlbnQoZ2FFdmVudDogR0FFdmVudHNJbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgZXZlbnRBY3Rpb24sIGV2ZW50Q2F0ZWdvcnksIGV2ZW50TGFiZWwsIGV2ZW50VmFsdWUgfSA9IGdhRXZlbnQ7XHJcbiAgICBndGFnKCdldmVudCcsIGV2ZW50QWN0aW9uLCB7IGV2ZW50X2NhdGVnb3J5OiBldmVudENhdGVnb3J5LCBldmVudF9sYWJlbDogZXZlbnRMYWJlbCwgdmFsdWU6IGV2ZW50VmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRTY3JpcHRzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcclxuICAgIGNvbnN0IHNjcmlwdCA9IHJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgc2NyaXB0LnNyYyA9ICdodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPScgKyB0aGlzLmNvbmZpZ1NlcnZpY2UuZ29vZ2xlQW5hbHl0aWNzSWQ7XHJcbiAgICBjb25zdCBoZWFkID0gcmVuZGVyZXIuc2VsZWN0Um9vdEVsZW1lbnQoJ2hlYWQnLCB0cnVlKTtcclxuICAgIHJlbmRlcmVyLmFwcGVuZENoaWxkKGhlYWQsIHNjcmlwdCk7XHJcbiAgICBjb25zdCBnYVNjcmlwdCA9IHJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgZ2FTY3JpcHQudGV4dCA9IGBcclxuICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICAgIGZ1bmN0aW9uIGd0YWcoKSB7XHJcbiAgICAgICAgZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTtcclxuICAgICAgfVxyXG4gICAgICBndGFnKFwianNcIiwgbmV3IERhdGUoKSk7XHJcbiAgICAgIGd0YWcoXCJjb25maWdcIiwgXCIkeyB0aGlzLmNvbmZpZ1NlcnZpY2UuZ29vZ2xlQW5hbHl0aWNzSWQgfVwiKTtgO1xyXG4gICAgcmVuZGVyZXIuYXBwZW5kQ2hpbGQoaGVhZCwgZ2FTY3JpcHQpO1xyXG4gIH1cclxufVxyXG4iXX0=