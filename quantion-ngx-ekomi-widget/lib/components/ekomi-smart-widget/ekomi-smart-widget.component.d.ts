import { OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { EkomiWidgetService } from '../../services/ekomi-widget.service';
export declare class EkomiSmartWidgetComponent implements OnInit, AfterViewInit, OnDestroy {
    private ekomiWidgetService;
    customerId: string;
    language: string;
    widgetTokens: string;
    draftMode: boolean;
    constructor(ekomiWidgetService: EkomiWidgetService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
