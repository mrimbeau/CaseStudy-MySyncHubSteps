import {Component, OnInit} from '@angular/core';
import {DashboardItem} from "./model/dashboarditem";
import {DashboardService} from "./service/dashboard.service";
import {Http} from "@angular/http";
import {ConfigurationService} from "../shared/configuration.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dashboard:DashboardItem;

  constructor(private dashboardService:DashboardService) {
  }

  ngOnInit() {
    this.dashboardService.get().subscribe(result => {
      this.dashboard = result[0];
    });
  }

}
