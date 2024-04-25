import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { EkomiWidgetService } from '../../services/ekomi-widget.service';
let EkomiRankWidgetComponent = class EkomiRankWidgetComponent {
    constructor(ekomiWidgetService) {
        this.ekomiWidgetService = ekomiWidgetService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.ekomiWidgetService.loadScriptRankWidget(this.v, this.locale);
    }
};
EkomiRankWidgetComponent.ctorParameters = () => [
    { type: EkomiWidgetService }
];
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
export { EkomiRankWidgetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWtvbWktcmFuay13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcXVhbnRpb24tbmd4LWVrb21pLXdpZGdldC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Vrb21pLXJhbmstd2lkZ2V0L2Vrb21pLXJhbmstd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBUXpFLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBTW5DLFlBQ1Usa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDNUMsQ0FBQztJQUVMLFFBQVE7SUFDUixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRSxDQUFDO0NBRUYsQ0FBQTs7WUFWK0Isa0JBQWtCOztBQUx2QztJQUFSLEtBQUssRUFBRTttREFBVztBQUNWO0lBQVIsS0FBSyxFQUFFO3dEQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFO29EQUFZO0FBSlQsd0JBQXdCO0lBTnBDLFNBQVMsQ0FBQztRQUNULCtDQUErQztRQUMvQyxRQUFRLEVBQUUsNEJBQTRCO1FBQ3RDLDBFQUFpRDs7S0FFbEQsQ0FBQztHQUNXLHdCQUF3QixDQWlCcEM7U0FqQlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVrb21pV2lkZ2V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Vrb21pLXdpZGdldC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdxdWFudGlvbi1la29taS1yYW5rLXdpZGdldCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Vrb21pLXJhbmstd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9la29taS1yYW5rLXdpZGdldC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFa29taVJhbmtXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoKSB2OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVrb21pV2lkZ2V0U2VydmljZTogRWtvbWlXaWRnZXRTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVrb21pV2lkZ2V0U2VydmljZS5sb2FkU2NyaXB0UmFua1dpZGdldCh0aGlzLnYsIHRoaXMubG9jYWxlKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==