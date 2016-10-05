import {DashboardComponent} from './dashboard.component';
import {NgModule} from "@angular/core";
import {MaterialModule} from "@angular/material";
import {DashboardService} from "./service/dashboard.service";

@NgModule({
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    imports: [MaterialModule],
    providers: [DashboardService]
})
export class DashboardModule {
}
;
