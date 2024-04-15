import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { EkomiWidgetService } from '../../services/ekomi-widget.service';
var EkomiSmartWidgetComponent = /** @class */ (function () {
    function EkomiSmartWidgetComponent(ekomiWidgetService) {
        this.ekomiWidgetService = ekomiWidgetService;
        // tslint:disable-next-line: no-inferrable-types
        this.draftMode = false;
    }
    EkomiSmartWidgetComponent.prototype.ngOnInit = function () {
    };
    EkomiSmartWidgetComponent.prototype.ngAfterViewInit = function () {
        this.ekomiWidgetService.loadSmartWidget(this.customerId, this.language, this.widgetTokens, this.draftMode);
    };
    EkomiSmartWidgetComponent.prototype.ngOnDestroy = function () {
        this.ekomiWidgetService.removeSmartWidgetScript();
    };
    EkomiSmartWidgetComponent.ctorParameters = function () { return [
        { type: EkomiWidgetService }
    ]; };
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
    return EkomiSmartWidgetComponent;
}());
export { EkomiSmartWidgetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWtvbWktc21hcnQtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3F1YW50aW9uLW5neC1la29taS13aWRnZXQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9la29taS1zbWFydC13aWRnZXQvZWtvbWktc21hcnQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBUXpFO0lBUUUsbUNBQ1Usa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFKaEQsZ0RBQWdEO1FBQ3ZDLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFJaEMsQ0FBQztJQUVMLDRDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsbURBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdHLENBQUM7SUFFRCwrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDcEQsQ0FBQzs7Z0JBWjZCLGtCQUFrQjs7SUFQdkM7UUFBUixLQUFLLEVBQUU7aUVBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFOytEQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTttRUFBc0I7SUFFckI7UUFBUixLQUFLLEVBQUU7Z0VBQTRCO0lBTnpCLHlCQUF5QjtRQU5yQyxTQUFTLENBQUM7WUFDVCwrQ0FBK0M7WUFDL0MsUUFBUSxFQUFFLDZCQUE2QjtZQUN2Qyx5SEFBa0Q7O1NBRW5ELENBQUM7T0FDVyx5QkFBeUIsQ0F1QnJDO0lBQUQsZ0NBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXZCWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFa29taVdpZGdldFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9la29taS13aWRnZXQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAncXVhbnRpb24tZWtvbWktc21hcnQtd2lkZ2V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZWtvbWktc21hcnQtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9la29taS1zbWFydC13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWtvbWlTbWFydFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCkgY3VzdG9tZXJJZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhbmd1YWdlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgd2lkZ2V0VG9rZW5zOiBzdHJpbmc7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbmZlcnJhYmxlLXR5cGVzXHJcbiAgQElucHV0KCkgZHJhZnRNb2RlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBla29taVdpZGdldFNlcnZpY2U6IEVrb21pV2lkZ2V0U2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5la29taVdpZGdldFNlcnZpY2UubG9hZFNtYXJ0V2lkZ2V0KHRoaXMuY3VzdG9tZXJJZCwgdGhpcy5sYW5ndWFnZSwgdGhpcy53aWRnZXRUb2tlbnMsIHRoaXMuZHJhZnRNb2RlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5la29taVdpZGdldFNlcnZpY2UucmVtb3ZlU21hcnRXaWRnZXRTY3JpcHQoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==