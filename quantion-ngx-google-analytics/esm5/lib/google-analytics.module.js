import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleAnalyticsEventTrackingService } from './services/google-analytics-event-tracking.service';
import { FOR_ROOT_OPTIONS_TOKEN, ProvideConfig } from './config/ga-config';
import { ConfigService } from './services/config.service';
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
export { GoogleAnalyticsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWFuYWx5dGljcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9xdWFudGlvbi1uZ3gtZ29vZ2xlLWFuYWx5dGljcy8iLCJzb3VyY2VzIjpbImxpYi9nb29nbGUtYW5hbHl0aWNzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFZMUQ7SUFBQTtJQWtCQSxDQUFDOzhCQWxCWSxxQkFBcUI7SUFDekIsNkJBQU8sR0FBZCxVQUFlLE1BQW9CO1FBQ2pDLE9BQU87WUFDTCxRQUFRLEVBQUUsdUJBQXFCO1lBQy9CLFNBQVMsRUFBRTtnQkFDVCxtQ0FBbUM7Z0JBQ25DO29CQUNFLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsVUFBVSxFQUFFLGFBQWE7b0JBQ3pCLElBQUksRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUMvQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBakJVLHFCQUFxQjtRQVJqQyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsRUFBRTtZQUNoQixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTthQUNiO1lBQ0QsU0FBUyxFQUFFLEVBQ1Y7U0FDRixDQUFDO09BQ1cscUJBQXFCLENBa0JqQztJQUFELDRCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgR29vZ2xlQW5hbHl0aWNzRXZlbnRUcmFja2luZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2dvb2dsZS1hbmFseXRpY3MtZXZlbnQtdHJhY2tpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IEZPUl9ST09UX09QVElPTlNfVE9LRU4sIFByb3ZpZGVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9nYS1jb25maWcnO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZSc7XHJcbmltcG9ydCB7IE1vZHVsZUNvbmZpZyB9IGZyb20gJy4vaW50ZXJmYWNlcy9tb2R1bGUtY29uZmlnLmludGVyZmFjZSc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR29vZ2xlQW5hbHl0aWNzTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEdvb2dsZUFuYWx5dGljc01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgR29vZ2xlQW5hbHl0aWNzRXZlbnRUcmFja2luZ1NlcnZpY2UsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogRk9SX1JPT1RfT1BUSU9OU19UT0tFTixcclxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IENvbmZpZ1NlcnZpY2UsXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBQcm92aWRlQ29uZmlnLFxyXG4gICAgICAgICAgZGVwczogW0ZPUl9ST09UX09QVElPTlNfVE9LRU5dXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=