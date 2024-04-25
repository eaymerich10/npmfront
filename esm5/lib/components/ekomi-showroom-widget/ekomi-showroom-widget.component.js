import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { EkomiWidgetService } from '../../services/ekomi-widget.service';
var EkomiShowroomWidgetComponent = /** @class */ (function () {
    function EkomiShowroomWidgetComponent(ekomiWidgetService) {
        this.ekomiWidgetService = ekomiWidgetService;
    }
    EkomiShowroomWidgetComponent.prototype.ngOnInit = function () {
    };
    EkomiShowroomWidgetComponent.prototype.ngAfterViewInit = function () {
        this.ekomiWidgetService.loadScriptShowroomWidget(this.v, this.locale);
    };
    EkomiShowroomWidgetComponent.ctorParameters = function () { return [
        { type: EkomiWidgetService }
    ]; };
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
    return EkomiShowroomWidgetComponent;
}());
export { EkomiShowroomWidgetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWtvbWktc2hvd3Jvb20td2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3F1YW50aW9uLW5neC1la29taS13aWRnZXQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9la29taS1zaG93cm9vbS13aWRnZXQvZWtvbWktc2hvd3Jvb20td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBU3pFO0lBTUUsc0NBQ1Usa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDNUMsQ0FBQztJQUVMLCtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsc0RBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4RSxDQUFDOztnQkFSNkIsa0JBQWtCOztJQUx2QztRQUFSLEtBQUssRUFBRTsyREFBVztJQUNWO1FBQVIsS0FBSyxFQUFFO2dFQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFOzREQUFZO0lBSlQsNEJBQTRCO1FBTnhDLFNBQVMsQ0FBQztZQUNULCtDQUErQztZQUMvQyxRQUFRLEVBQUUsZ0NBQWdDO1lBQzFDLDhFQUFxRDs7U0FFdEQsQ0FBQztPQUNXLDRCQUE0QixDQWlCeEM7SUFBRCxtQ0FBQztDQUFBLEFBakJELElBaUJDO1NBakJZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFa29taVdpZGdldFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9la29taS13aWRnZXQuc2VydmljZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3F1YW50aW9uLWVrb21pLXNob3dyb29tLXdpZGdldCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Vrb21pLXNob3dyb29tLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZWtvbWktc2hvd3Jvb20td2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEVrb21pU2hvd3Jvb21XaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoKSB2OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVrb21pV2lkZ2V0U2VydmljZTogRWtvbWlXaWRnZXRTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVrb21pV2lkZ2V0U2VydmljZS5sb2FkU2NyaXB0U2hvd3Jvb21XaWRnZXQodGhpcy52LCB0aGlzLmxvY2FsZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=