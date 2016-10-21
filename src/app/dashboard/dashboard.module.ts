import {DashboardComponent} from './dashboard.component';
import {NgModule} from "@angular/core";
import {MaterialModule} from "@angular/material";
import {DashboardService} from "./service/dashboard.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    imports: [MaterialModule, SharedModule],
    providers: [DashboardService]
})
export class DashboardModule {}

