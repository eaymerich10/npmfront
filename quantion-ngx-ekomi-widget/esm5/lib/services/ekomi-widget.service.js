import { __decorate } from "tslib";
import { Injectable, RendererFactory2 } from '@angular/core';
import { EkomiWidgetTypeEnum } from '../enums/ekomi-widget-type.enum';
import * as i0 from "@angular/core";
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
        { type: RendererFactory2 }
    ]; };
    EkomiWidgetService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EkomiWidgetService_Factory() { return new EkomiWidgetService(i0.ɵɵinject(i0.RendererFactory2)); }, token: EkomiWidgetService, providedIn: "root" });
    EkomiWidgetService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], EkomiWidgetService);
    return EkomiWidgetService;
}());
export { EkomiWidgetService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWtvbWktd2lkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9xdWFudGlvbi1uZ3gtZWtvbWktd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Vrb21pLXdpZGdldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQUt0RTtJQU9FLDRCQUNVLGVBQWlDO1FBQWpDLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQU4zQyxnQ0FBZ0M7UUFDaEMsc0NBQXNDO1FBQzlCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztJQUtsQyxDQUFDO0lBRUwscURBQXdCLEdBQXhCLFVBQXlCLENBQVMsRUFBRSxNQUFjO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxpREFBb0IsR0FBcEIsVUFBcUIsQ0FBUyxFQUFFLE1BQWM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELHVDQUFVLEdBQVYsVUFBVyxJQUF5QixFQUFFLENBQVMsRUFBRSxNQUFjO1FBQzdELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxHQUFHLEdBQUcsd0NBQXVDLElBQUksV0FBUSxDQUFDLGdCQUFhLE1BQVMsQ0FBQztRQUN4RixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RELFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCw0Q0FBZSxHQUFmLFVBQWdCLFVBQWtCLEVBQUUsUUFBZ0IsRUFBRSxZQUFvQixFQUFFLFNBQTBCO1FBQTFCLDBCQUFBLEVBQUEsaUJBQTBCO1FBQ3BHLENBQUMsVUFBQyxDQUFDO1lBQ0Qsb0NBQW9DO1lBQ3BDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLHFCQUFxQixDQUFDO1lBQ3JILENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxVQUFVLENBQUM7WUFDOUIsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxRQUFRLENBQUM7WUFDMUIsSUFBSSxPQUFNLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsS0FBSyxXQUFXLEVBQUU7Z0JBQ25ELENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFlBQVksQ0FBQzthQUN4RTtpQkFBTTtnQkFDTCxDQUFDLENBQUMsb0JBQW9CLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNuRDtZQUVELElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDeEMsR0FBRyxDQUFDLEdBQUcsR0FBRywyREFBMkQsQ0FBQztZQUN0RSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCxvREFBdUIsR0FBdkI7UUFDRSxJQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbkUsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Z0JBbEQwQixnQkFBZ0I7OztJQVJoQyxrQkFBa0I7UUFIOUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGtCQUFrQixDQTREOUI7NkJBbEVEO0NBa0VDLEFBNURELElBNERDO1NBNURZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVrb21pV2lkZ2V0VHlwZUVudW0gfSBmcm9tICcuLi9lbnVtcy9la29taS13aWRnZXQtdHlwZS5lbnVtJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRWtvbWlXaWRnZXRTZXJ2aWNlIHtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZTogdmFyaWFibGUtbmFtZVxuICAvLyB0c2xpbnQ6ZGlzYWJsZTogbm8taW5mZXJyYWJsZS10eXBlc1xuICBwcml2YXRlIF9la29taVNob3dSb29tSnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZWtvbWlSYW5rSnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MlxuXG4gICkgeyB9XG5cbiAgbG9hZFNjcmlwdFNob3dyb29tV2lkZ2V0KHY6IHN0cmluZywgbG9jYWxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2Vrb21pU2hvd1Jvb21Kcykge1xuICAgICB0aGlzLmxvYWRTY3JpcHQoRWtvbWlXaWRnZXRUeXBlRW51bS5yZXB1dGFtaV9zaG93cm9vbSwgdiwgbG9jYWxlKTtcbiAgICAgdGhpcy5fZWtvbWlTaG93Um9vbUpzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBsb2FkU2NyaXB0UmFua1dpZGdldCh2OiBzdHJpbmcsIGxvY2FsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9la29taVJhbmtKcykge1xuICAgICB0aGlzLmxvYWRTY3JpcHQoRWtvbWlXaWRnZXRUeXBlRW51bS5yZXB1dGFtaV9yYW5rLCB2LCBsb2NhbGUpO1xuICAgICB0aGlzLl9la29taVJhbmtKcyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbG9hZFNjcmlwdCh0eXBlOiBFa29taVdpZGdldFR5cGVFbnVtLCB2OiBzdHJpbmcsIGxvY2FsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgICBjb25zdCBzY3JpcHQgPSByZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuc3JjID0gYC8vbGl0ZS5la29taWFwcHMuZGUvd2lkZ2V0LmpzP3R5cGU9JHsgdHlwZSB9JnY9JHsgdiB9JmxvY2FsZT0keyBsb2NhbGUgfWA7XG4gICAgY29uc3QgaGVhZCA9IHJlbmRlcmVyLnNlbGVjdFJvb3RFbGVtZW50KCdoZWFkJywgdHJ1ZSk7XG4gICAgcmVuZGVyZXIuYXBwZW5kQ2hpbGQoaGVhZCwgc2NyaXB0KTtcbiAgfVxuXG4gIGxvYWRTbWFydFdpZGdldChjdXN0b21lcklkOiBzdHJpbmcsIGxhbmd1YWdlOiBzdHJpbmcsIHdpZGdldFRva2Vuczogc3RyaW5nLCBkcmFmdE1vZGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgICgodykgPT4ge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGU6IG5vLXN0cmluZy1saXRlcmFsXG4gICAgICB3WydfZWtvbWlXaWRnZXRzU2VydmVyVXJsJ10gPSAoZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonID8gJ2h0dHBzOicgOiAnaHR0cDonKSArICcvL3dpZGdldHMuZWtvbWkuY29tJztcbiAgICAgIHdbJ19jdXN0b21lcklkJ10gPSBjdXN0b21lcklkO1xuICAgICAgd1snX2Vrb21pRHJhZnRNb2RlJ10gPSBkcmFmdE1vZGU7XG4gICAgICB3WydfbGFuZ3VhZ2UnXSA9IGxhbmd1YWdlO1xuICAgICAgaWYgKHR5cGVvZih3WydfZWtvbWlXaWRnZXRUb2tlbnMnXSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdbJ19la29taVdpZGdldFRva2VucyddW3dbJ19la29taVdpZGdldFRva2VucyddLmxlbmd0aF0gPSB3aWRnZXRUb2tlbnM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3WydfZWtvbWlXaWRnZXRUb2tlbnMnXSA9IG5ldyBBcnJheSh3aWRnZXRUb2tlbnMpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzY3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Vrb21pV2lkZ2V0SnMnKTtcbiAgICAgIHNjci5zcmMgPSAnaHR0cHM6Ly9zdy1hc3NldHMuZWtvbWlhcHBzLmRlL3N0YXRpY19yZXNvdXJjZXMvd2lkZ2V0LmpzJztcbiAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzY3IpO1xuICAgIH0pKHdpbmRvdyk7XG4gIH1cblxuICByZW1vdmVTbWFydFdpZGdldFNjcmlwdCgpOiB2b2lkIHtcbiAgICBjb25zdCBzY3JpcHRFa29taXdpZGdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdla29taVdpZGdldEpzJyk7XG4gICAgc2NyaXB0RWtvbWl3aWRnZXQucmVtb3ZlKCk7XG4gIH1cblxufVxuIl19