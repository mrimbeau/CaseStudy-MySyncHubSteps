import {Injectable} from '@angular/core';
import {DashboardItem} from "../model/dashboarditem";
import {Http} from "@angular/http";
import {ConfigurationService, ServiceBase} from "./../../shared";

@Injectable()
export class DashboardService extends ServiceBase<DashboardItem> {

  public dashboard:DashboardItem;

  constructor(http:Http, private configuration:ConfigurationService) {
    super(http, 'DashboardService:DashboardItem');
  }

  protected getServiceUrl():string {
    return this.configuration.dashboardUrl;
  }
}
