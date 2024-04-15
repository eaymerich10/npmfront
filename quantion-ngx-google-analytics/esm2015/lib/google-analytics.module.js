var GoogleAnalyticsModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleAnalyticsEventTrackingService } from './services/google-analytics-event-tracking.service';
import { FOR_ROOT_OPTIONS_TOKEN, ProvideConfig } from './config/ga-config';
import { ConfigService } from './services/config.service';
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
export { GoogleAnalyticsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWFuYWx5dGljcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9xdWFudGlvbi1uZ3gtZ29vZ2xlLWFuYWx5dGljcy8iLCJzb3VyY2VzIjpbImxpYi9nb29nbGUtYW5hbHl0aWNzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBWTFELElBQWEscUJBQXFCLDZCQUFsQyxNQUFhLHFCQUFxQjtJQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQW9CO1FBQ2pDLE9BQU87WUFDTCxRQUFRLEVBQUUsdUJBQXFCO1lBQy9CLFNBQVMsRUFBRTtnQkFDVCxtQ0FBbUM7Z0JBQ25DO29CQUNFLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsVUFBVSxFQUFFLGFBQWE7b0JBQ3pCLElBQUksRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUMvQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBbEJZLHFCQUFxQjtJQVJqQyxRQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsRUFBRTtRQUNoQixPQUFPLEVBQUU7WUFDUCxZQUFZO1NBQ2I7UUFDRCxTQUFTLEVBQUUsRUFDVjtLQUNGLENBQUM7R0FDVyxxQkFBcUIsQ0FrQmpDO1NBbEJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEdvb2dsZUFuYWx5dGljc0V2ZW50VHJhY2tpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9nb29nbGUtYW5hbHl0aWNzLWV2ZW50LXRyYWNraW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGT1JfUk9PVF9PUFRJT05TX1RPS0VOLCBQcm92aWRlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZ2EtY29uZmlnJztcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29uZmlnLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNb2R1bGVDb25maWcgfSBmcm9tICcuL2ludGVyZmFjZXMvbW9kdWxlLWNvbmZpZy5pbnRlcmZhY2UnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdvb2dsZUFuYWx5dGljc01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBHb29nbGVBbmFseXRpY3NNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEdvb2dsZUFuYWx5dGljc0V2ZW50VHJhY2tpbmdTZXJ2aWNlLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEZPUl9ST09UX09QVElPTlNfVE9LRU4sXHJcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBDb25maWdTZXJ2aWNlLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogUHJvdmlkZUNvbmZpZyxcclxuICAgICAgICAgIGRlcHM6IFtGT1JfUk9PVF9PUFRJT05TX1RPS0VOXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19