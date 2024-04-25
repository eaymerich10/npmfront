import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { EkomiWidgetService } from '../../services/ekomi-widget.service';
let EkomiShowroomWidgetComponent = class EkomiShowroomWidgetComponent {
    constructor(ekomiWidgetService) {
        this.ekomiWidgetService = ekomiWidgetService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.ekomiWidgetService.loadScriptShowroomWidget(this.v, this.locale);
    }
};
EkomiShowroomWidgetComponent.ctorParameters = () => [
    { type: EkomiWidgetService }
];
__decorate([
    Input()
], EkomiShowroomWidgetComponent.prototype, "v", void 0);
__decorate([
    Input()
], EkomiShowroomWidgetComponent.prototype, "locale", void 0);
__decorate([
    Input()
], EkomiShowroomWidgetComponent.prototype, "id", void 0);
EkomiShowroomWidgetComponent = __decorate([
    Component({
        // tslint:disable-next-line: component-selector
        selector: 'quantion-ekomi-showroom-widget',
        template: "\r\n<div class=\"reputami_showroom_widget\" [id]=\"id\"></div>\r\n",
        styles: [""]
    })
], EkomiShowroomWidgetComponent);
export { EkomiShowroomWidgetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWtvbWktc2hvd3Jvb20td2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3F1YW50aW9uLW5neC1la29taS13aWRnZXQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9la29taS1zaG93cm9vbS13aWRnZXQvZWtvbWktc2hvd3Jvb20td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBU3pFLElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTRCO0lBTXZDLFlBQ1Usa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDNUMsQ0FBQztJQUVMLFFBQVE7SUFDUixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4RSxDQUFDO0NBRUYsQ0FBQTs7WUFWK0Isa0JBQWtCOztBQUx2QztJQUFSLEtBQUssRUFBRTt1REFBVztBQUNWO0lBQVIsS0FBSyxFQUFFOzREQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFO3dEQUFZO0FBSlQsNEJBQTRCO0lBTnhDLFNBQVMsQ0FBQztRQUNULCtDQUErQztRQUMvQyxRQUFRLEVBQUUsZ0NBQWdDO1FBQzFDLDhFQUFxRDs7S0FFdEQsQ0FBQztHQUNXLDRCQUE0QixDQWlCeEM7U0FqQlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVrb21pV2lkZ2V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Vrb21pLXdpZGdldC5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAncXVhbnRpb24tZWtvbWktc2hvd3Jvb20td2lkZ2V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZWtvbWktc2hvd3Jvb20td2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9la29taS1zaG93cm9vbS13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWtvbWlTaG93cm9vbVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHY6IHN0cmluZztcclxuICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZztcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWtvbWlXaWRnZXRTZXJ2aWNlOiBFa29taVdpZGdldFNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWtvbWlXaWRnZXRTZXJ2aWNlLmxvYWRTY3JpcHRTaG93cm9vbVdpZGdldCh0aGlzLnYsIHRoaXMubG9jYWxlKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==