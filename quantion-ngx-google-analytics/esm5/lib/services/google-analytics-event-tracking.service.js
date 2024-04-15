import { __decorate } from "tslib";
import { Injectable, RendererFactory2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ConfigService } from './config.service';
import * as i0 from "@angular/core";
import * as i1 from "./config.service";
import * as i2 from "@angular/router";
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
    GoogleAnalyticsEventTrackingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GoogleAnalyticsEventTrackingService_Factory() { return new GoogleAnalyticsEventTrackingService(i0.ɵɵinject(i1.ConfigService), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i0.RendererFactory2)); }, token: GoogleAnalyticsEventTrackingService, providedIn: "root" });
    GoogleAnalyticsEventTrackingService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GoogleAnalyticsEventTrackingService);
    return GoogleAnalyticsEventTrackingService;
}());
export { GoogleAnalyticsEventTrackingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWFuYWx5dGljcy1ldmVudC10cmFja2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcXVhbnRpb24tbmd4LWdvb2dsZS1hbmFseXRpY3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ29vZ2xlLWFuYWx5dGljcy1ldmVudC10cmFja2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBU2pEO0lBRUUsNkNBQ1UsYUFBNEIsRUFDNUIsTUFBYyxFQUNkLGVBQWlDO1FBRmpDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7SUFDeEMsQ0FBQztJQUVHLDZEQUFlLEdBQXRCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNoQyxJQUFJLEtBQUssWUFBWSxhQUFhLElBQUksSUFBSSxFQUFFO2dCQUMxQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQzthQUM3RjtRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLG1EQUFLLEdBQVosVUFBYSxPQUEwQjtRQUM3QixJQUFBLGlDQUFXLEVBQUUscUNBQWEsRUFBRSwrQkFBVSxFQUFFLCtCQUFVLENBQWE7UUFDdkUsSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQUVPLHlEQUFXLEdBQW5CO1FBQ0UsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLEdBQUcsR0FBRyw4Q0FBOEMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDO1FBQ25HLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbkMsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxRQUFRLENBQUMsSUFBSSxHQUFHLHlMQU1LLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLFNBQU0sQ0FBQztRQUNoRSxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkFsQ3dCLGFBQWE7Z0JBQ3BCLE1BQU07Z0JBQ0csZ0JBQWdCOzs7SUFMaEMsbUNBQW1DO1FBSC9DLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxtQ0FBbUMsQ0FzQy9DOzhDQWpERDtDQWlEQyxBQXRDRCxJQXNDQztTQXRDWSxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR0FFdmVudHNJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2dhLWV2ZW50cy5pbnRlcmZhY2UnO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcclxuZGVjbGFyZSBsZXQgZ3RhZzogRnVuY3Rpb247XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVBbmFseXRpY3NFdmVudFRyYWNraW5nU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgdHJhY2tOYXZpZ2F0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkU2NyaXB0cygpO1xyXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQgJiYgZ3RhZykge1xyXG4gICAgICAgIGd0YWcoJ2NvbmZpZycsIHRoaXMuY29uZmlnU2VydmljZS5nb29nbGVBbmFseXRpY3NJZCwgeyBwYWdlX3BhdGg6IGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzIH0pO1xyXG4gICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXZlbnQoZ2FFdmVudDogR0FFdmVudHNJbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgZXZlbnRBY3Rpb24sIGV2ZW50Q2F0ZWdvcnksIGV2ZW50TGFiZWwsIGV2ZW50VmFsdWUgfSA9IGdhRXZlbnQ7XHJcbiAgICBndGFnKCdldmVudCcsIGV2ZW50QWN0aW9uLCB7IGV2ZW50X2NhdGVnb3J5OiBldmVudENhdGVnb3J5LCBldmVudF9sYWJlbDogZXZlbnRMYWJlbCwgdmFsdWU6IGV2ZW50VmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRTY3JpcHRzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcclxuICAgIGNvbnN0IHNjcmlwdCA9IHJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgc2NyaXB0LnNyYyA9ICdodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPScgKyB0aGlzLmNvbmZpZ1NlcnZpY2UuZ29vZ2xlQW5hbHl0aWNzSWQ7XHJcbiAgICBjb25zdCBoZWFkID0gcmVuZGVyZXIuc2VsZWN0Um9vdEVsZW1lbnQoJ2hlYWQnLCB0cnVlKTtcclxuICAgIHJlbmRlcmVyLmFwcGVuZENoaWxkKGhlYWQsIHNjcmlwdCk7XHJcbiAgICBjb25zdCBnYVNjcmlwdCA9IHJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgZ2FTY3JpcHQudGV4dCA9IGBcclxuICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICAgIGZ1bmN0aW9uIGd0YWcoKSB7XHJcbiAgICAgICAgZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTtcclxuICAgICAgfVxyXG4gICAgICBndGFnKFwianNcIiwgbmV3IERhdGUoKSk7XHJcbiAgICAgIGd0YWcoXCJjb25maWdcIiwgXCIkeyB0aGlzLmNvbmZpZ1NlcnZpY2UuZ29vZ2xlQW5hbHl0aWNzSWQgfVwiKTtgO1xyXG4gICAgcmVuZGVyZXIuYXBwZW5kQ2hpbGQoaGVhZCwgZ2FTY3JpcHQpO1xyXG4gIH1cclxufVxyXG4iXX0=