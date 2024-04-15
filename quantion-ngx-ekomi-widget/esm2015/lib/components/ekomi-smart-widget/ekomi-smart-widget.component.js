import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { EkomiWidgetService } from '../../services/ekomi-widget.service';
let EkomiSmartWidgetComponent = class EkomiSmartWidgetComponent {
    constructor(ekomiWidgetService) {
        this.ekomiWidgetService = ekomiWidgetService;
        // tslint:disable-next-line: no-inferrable-types
        this.draftMode = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.ekomiWidgetService.loadSmartWidget(this.customerId, this.language, this.widgetTokens, this.draftMode);
    }
    ngOnDestroy() {
        this.ekomiWidgetService.removeSmartWidgetScript();
    }
};
EkomiSmartWidgetComponent.ctorParameters = () => [
    { type: EkomiWidgetService }
];
__decorate([
    Input()
], EkomiSmartWidgetComponent.prototype, "customerId", void 0);
__decorate([
    Input()
], EkomiSmartWidgetComponent.prototype, "language", void 0);
__decorate([
    Input()
], EkomiSmartWidgetComponent.prototype, "widgetTokens", void 0);
__decorate([
    Input()
], EkomiSmartWidgetComponent.prototype, "draftMode", void 0);
EkomiSmartWidgetComponent = __decorate([
    Component({
        // tslint:disable-next-line: component-selector
        selector: 'quantion-ekomi-smart-widget',
        template: "\r\n<div id=\"widget-container\" class=\"ekomi-widget-container ekomi-widget-{{ widgetTokens }}\" ></div>\r\n",
        styles: [""]
    })
], EkomiSmartWidgetComponent);
export { EkomiSmartWidgetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWtvbWktc21hcnQtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3F1YW50aW9uLW5neC1la29taS13aWRnZXQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9la29taS1zbWFydC13aWRnZXQvZWtvbWktc21hcnQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBUXpFLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBUXBDLFlBQ1Usa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFKaEQsZ0RBQWdEO1FBQ3ZDLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFJaEMsQ0FBQztJQUVMLFFBQVE7SUFDUixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdHLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDcEQsQ0FBQztDQUVGLENBQUE7O1lBZCtCLGtCQUFrQjs7QUFQdkM7SUFBUixLQUFLLEVBQUU7NkRBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFOzJEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTsrREFBc0I7QUFFckI7SUFBUixLQUFLLEVBQUU7NERBQTRCO0FBTnpCLHlCQUF5QjtJQU5yQyxTQUFTLENBQUM7UUFDVCwrQ0FBK0M7UUFDL0MsUUFBUSxFQUFFLDZCQUE2QjtRQUN2Qyx5SEFBa0Q7O0tBRW5ELENBQUM7R0FDVyx5QkFBeUIsQ0F1QnJDO1NBdkJZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVrb21pV2lkZ2V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Vrb21pLXdpZGdldC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdxdWFudGlvbi1la29taS1zbWFydC13aWRnZXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9la29taS1zbWFydC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Vrb21pLXNtYXJ0LXdpZGdldC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFa29taVNtYXJ0V2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSBjdXN0b21lcklkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGFuZ3VhZ2U6IHN0cmluZztcclxuICBASW5wdXQoKSB3aWRnZXRUb2tlbnM6IHN0cmluZztcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWluZmVycmFibGUtdHlwZXNcclxuICBASW5wdXQoKSBkcmFmdE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVrb21pV2lkZ2V0U2VydmljZTogRWtvbWlXaWRnZXRTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVrb21pV2lkZ2V0U2VydmljZS5sb2FkU21hcnRXaWRnZXQodGhpcy5jdXN0b21lcklkLCB0aGlzLmxhbmd1YWdlLCB0aGlzLndpZGdldFRva2VucywgdGhpcy5kcmFmdE1vZGUpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmVrb21pV2lkZ2V0U2VydmljZS5yZW1vdmVTbWFydFdpZGdldFNjcmlwdCgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19