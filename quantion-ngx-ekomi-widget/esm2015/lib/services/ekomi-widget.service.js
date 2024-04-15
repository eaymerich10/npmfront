import { __decorate } from "tslib";
import { Injectable, RendererFactory2 } from '@angular/core';
import { EkomiWidgetTypeEnum } from '../enums/ekomi-widget-type.enum';
import * as i0 from "@angular/core";
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
EkomiWidgetService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EkomiWidgetService_Factory() { return new EkomiWidgetService(i0.ɵɵinject(i0.RendererFactory2)); }, token: EkomiWidgetService, providedIn: "root" });
EkomiWidgetService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], EkomiWidgetService);
export { EkomiWidgetService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWtvbWktd2lkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9xdWFudGlvbi1uZ3gtZWtvbWktd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Vrb21pLXdpZGdldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQUt0RSxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQU83QixZQUNVLGVBQWlDO1FBQWpDLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQU4zQyxnQ0FBZ0M7UUFDaEMsc0NBQXNDO1FBQzlCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztJQUtsQyxDQUFDO0lBRUwsd0JBQXdCLENBQUMsQ0FBUyxFQUFFLE1BQWM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELG9CQUFvQixDQUFDLENBQVMsRUFBRSxNQUFjO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsSUFBeUIsRUFBRSxDQUFTLEVBQUUsTUFBYztRQUM3RCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsR0FBRyxHQUFHLHNDQUF1QyxJQUFLLE1BQU8sQ0FBRSxXQUFZLE1BQU8sRUFBRSxDQUFDO1FBQ3hGLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGVBQWUsQ0FBQyxVQUFrQixFQUFFLFFBQWdCLEVBQUUsWUFBb0IsRUFBRSxZQUFxQixLQUFLO1FBQ3BHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNMLG9DQUFvQztZQUNwQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxxQkFBcUIsQ0FBQztZQUNySCxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsVUFBVSxDQUFDO1lBQzlCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLFNBQVMsQ0FBQztZQUNqQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFDO1lBQzFCLElBQUksT0FBTSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssV0FBVyxFQUFFO2dCQUNuRCxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFZLENBQUM7YUFDeEU7aUJBQU07Z0JBQ0wsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbkQ7WUFFRCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQ3hDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsMkRBQTJELENBQUM7WUFDdEUsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsdUJBQXVCO1FBQ3JCLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuRSxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBRUYsQ0FBQTs7WUFwRDRCLGdCQUFnQjs7O0FBUmhDLGtCQUFrQjtJQUg5QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csa0JBQWtCLENBNEQ5QjtTQTVEWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFa29taVdpZGdldFR5cGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvZWtvbWktd2lkZ2V0LXR5cGUuZW51bSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEVrb21pV2lkZ2V0U2VydmljZSB7XG5cbiAgLy8gdHNsaW50OmRpc2FibGU6IHZhcmlhYmxlLW5hbWVcbiAgLy8gdHNsaW50OmRpc2FibGU6IG5vLWluZmVycmFibGUtdHlwZXNcbiAgcHJpdmF0ZSBfZWtvbWlTaG93Um9vbUpzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Vrb21pUmFua0pzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTJcblxuICApIHsgfVxuXG4gIGxvYWRTY3JpcHRTaG93cm9vbVdpZGdldCh2OiBzdHJpbmcsIGxvY2FsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9la29taVNob3dSb29tSnMpIHtcbiAgICAgdGhpcy5sb2FkU2NyaXB0KEVrb21pV2lkZ2V0VHlwZUVudW0ucmVwdXRhbWlfc2hvd3Jvb20sIHYsIGxvY2FsZSk7XG4gICAgIHRoaXMuX2Vrb21pU2hvd1Jvb21KcyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbG9hZFNjcmlwdFJhbmtXaWRnZXQodjogc3RyaW5nLCBsb2NhbGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fZWtvbWlSYW5rSnMpIHtcbiAgICAgdGhpcy5sb2FkU2NyaXB0KEVrb21pV2lkZ2V0VHlwZUVudW0ucmVwdXRhbWlfcmFuaywgdiwgbG9jYWxlKTtcbiAgICAgdGhpcy5fZWtvbWlSYW5rSnMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRTY3JpcHQodHlwZTogRWtvbWlXaWRnZXRUeXBlRW51bSwgdjogc3RyaW5nLCBsb2NhbGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gICAgY29uc3Qgc2NyaXB0ID0gcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnNyYyA9IGAvL2xpdGUuZWtvbWlhcHBzLmRlL3dpZGdldC5qcz90eXBlPSR7IHR5cGUgfSZ2PSR7IHYgfSZsb2NhbGU9JHsgbG9jYWxlIH1gO1xuICAgIGNvbnN0IGhlYWQgPSByZW5kZXJlci5zZWxlY3RSb290RWxlbWVudCgnaGVhZCcsIHRydWUpO1xuICAgIHJlbmRlcmVyLmFwcGVuZENoaWxkKGhlYWQsIHNjcmlwdCk7XG4gIH1cblxuICBsb2FkU21hcnRXaWRnZXQoY3VzdG9tZXJJZDogc3RyaW5nLCBsYW5ndWFnZTogc3RyaW5nLCB3aWRnZXRUb2tlbnM6IHN0cmluZywgZHJhZnRNb2RlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICAoKHcpID0+IHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlOiBuby1zdHJpbmctbGl0ZXJhbFxuICAgICAgd1snX2Vrb21pV2lkZ2V0c1NlcnZlclVybCddID0gKGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyA/ICdodHRwczonIDogJ2h0dHA6JykgKyAnLy93aWRnZXRzLmVrb21pLmNvbSc7XG4gICAgICB3WydfY3VzdG9tZXJJZCddID0gY3VzdG9tZXJJZDtcbiAgICAgIHdbJ19la29taURyYWZ0TW9kZSddID0gZHJhZnRNb2RlO1xuICAgICAgd1snX2xhbmd1YWdlJ10gPSBsYW5ndWFnZTtcbiAgICAgIGlmICh0eXBlb2Yod1snX2Vrb21pV2lkZ2V0VG9rZW5zJ10pICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3WydfZWtvbWlXaWRnZXRUb2tlbnMnXVt3WydfZWtvbWlXaWRnZXRUb2tlbnMnXS5sZW5ndGhdID0gd2lkZ2V0VG9rZW5zO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd1snX2Vrb21pV2lkZ2V0VG9rZW5zJ10gPSBuZXcgQXJyYXkod2lkZ2V0VG9rZW5zKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2NyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3Iuc2V0QXR0cmlidXRlKCdpZCcsICdla29taVdpZGdldEpzJyk7XG4gICAgICBzY3Iuc3JjID0gJ2h0dHBzOi8vc3ctYXNzZXRzLmVrb21pYXBwcy5kZS9zdGF0aWNfcmVzb3VyY2VzL3dpZGdldC5qcyc7XG4gICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc2NyKTtcbiAgICB9KSh3aW5kb3cpO1xuICB9XG5cbiAgcmVtb3ZlU21hcnRXaWRnZXRTY3JpcHQoKTogdm9pZCB7XG4gICAgY29uc3Qgc2NyaXB0RWtvbWl3aWRnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWtvbWlXaWRnZXRKcycpO1xuICAgIHNjcmlwdEVrb21pd2lkZ2V0LnJlbW92ZSgpO1xuICB9XG5cbn1cbiJdfQ==