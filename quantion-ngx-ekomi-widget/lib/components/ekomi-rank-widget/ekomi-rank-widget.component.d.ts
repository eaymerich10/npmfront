import { OnInit, AfterViewInit } from '@angular/core';
import { EkomiWidgetService } from '../../services/ekomi-widget.service';
export declare class EkomiRankWidgetComponent implements OnInit, AfterViewInit {
    private ekomiWidgetService;
    v: string;
    locale: string;
    id: string;
    constructor(ekomiWidgetService: EkomiWidgetService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
