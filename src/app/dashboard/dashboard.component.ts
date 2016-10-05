import {Component, OnInit} from '@angular/core';
import {DashboardItem} from "./model/dashboarditem";
import {DashboardService} from "./service/dashboard.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private dashboard:DashboardItem;

    constructor(private service:DashboardService) {
    }

    ngOnInit() {
        this.service.get().subscribe(result => {
            this.dashboard = result[0]
        });
    }

}
