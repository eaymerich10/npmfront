import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { EkomiWidgetService } from '../../services/ekomi-widget.service';
var EkomiRankWidgetComponent = /** @class */ (function () {
    function EkomiRankWidgetComponent(ekomiWidgetService) {
        this.ekomiWidgetService = ekomiWidgetService;
    }
    EkomiRankWidgetComponent.prototype.ngOnInit = function () {
    };
    EkomiRankWidgetComponent.prototype.ngAfterViewInit = function () {
        this.ekomiWidgetService.loadScriptRankWidget(this.v, this.locale);
    };
    EkomiRankWidgetComponent.ctorParameters = function () { return [
        { type: EkomiWidgetService }
    ]; };
    __decorate([
        Input()
    ], EkomiRankWidgetComponent.prototype, "v", void 0);
    __decorate([
        Input()
    ], EkomiRankWidgetComponent.prototype, "locale", void 0);
    __decorate([
        Input()
    ], EkomiRankWidgetComponent.prototype, "id", void 0);
    EkomiRankWidgetComponent = __decorate([
        Component({
            // tslint:disable-next-line: component-selector
            selector: 'quantion-ekomi-rank-widget',
            template: "\r\n<div class=\"reputami_rank_widget\" [id]=\"id\"></div>\r\n",
            styles: [""]
        })
    ], EkomiRankWidgetComponent);
    return EkomiRankWidgetComponent;
}());
export { EkomiRankWidgetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWtvbWktcmFuay13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcXVhbnRpb24tbmd4LWVrb21pLXdpZGdldC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Vrb21pLXJhbmstd2lkZ2V0L2Vrb21pLXJhbmstd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBUXpFO0lBTUUsa0NBQ1Usa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDNUMsQ0FBQztJQUVMLDJDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsa0RBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRSxDQUFDOztnQkFSNkIsa0JBQWtCOztJQUx2QztRQUFSLEtBQUssRUFBRTt1REFBVztJQUNWO1FBQVIsS0FBSyxFQUFFOzREQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFO3dEQUFZO0lBSlQsd0JBQXdCO1FBTnBDLFNBQVMsQ0FBQztZQUNULCtDQUErQztZQUMvQyxRQUFRLEVBQUUsNEJBQTRCO1lBQ3RDLDBFQUFpRDs7U0FFbEQsQ0FBQztPQUNXLHdCQUF3QixDQWlCcEM7SUFBRCwrQkFBQztDQUFBLEFBakJELElBaUJDO1NBakJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFa29taVdpZGdldFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9la29taS13aWRnZXQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAncXVhbnRpb24tZWtvbWktcmFuay13aWRnZXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9la29taS1yYW5rLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZWtvbWktcmFuay13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWtvbWlSYW5rV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCkgdjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBla29taVdpZGdldFNlcnZpY2U6IEVrb21pV2lkZ2V0U2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5la29taVdpZGdldFNlcnZpY2UubG9hZFNjcmlwdFJhbmtXaWRnZXQodGhpcy52LCB0aGlzLmxvY2FsZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=