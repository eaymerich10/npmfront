import { RendererFactory2 } from '@angular/core';
import { EkomiWidgetTypeEnum } from '../enums/ekomi-widget-type.enum';
export declare class EkomiWidgetService {
    private rendererFactory;
    private _ekomiShowRoomJs;
    private _ekomiRankJs;
    constructor(rendererFactory: RendererFactory2);
    loadScriptShowroomWidget(v: string, locale: string): void;
    loadScriptRankWidget(v: string, locale: string): void;
    loadScript(type: EkomiWidgetTypeEnum, v: string, locale: string): void;
    loadSmartWidget(customerId: string, language: string, widgetTokens: string, draftMode?: boolean): void;
    removeSmartWidgetScript(): void;
}
