import { RendererFactory2 } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from './config.service';
import { GAEventsInterface } from '../interfaces/ga-events.interface';
export declare class GoogleAnalyticsEventTrackingService {
    private configService;
    private router;
    private rendererFactory;
    constructor(configService: ConfigService, router: Router, rendererFactory: RendererFactory2);
    trackNavigation(): void;
    event(gaEvent: GAEventsInterface): void;
    private loadScripts;
}
