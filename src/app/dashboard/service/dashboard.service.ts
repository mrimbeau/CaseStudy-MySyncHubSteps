import {Injectable} from '@angular/core';
import {DashboardItem} from "../model/dashboarditem";
import {Http} from "@angular/http";

@Injectable()
export class DashboardService {

    public dashboard:DashboardItem;
    url:string = "http://fakesynchhub.azurewebsites.net/api/Dashboard";


    constructor(private http:Http) {
    }

    get() {
        return this.http.get(this.url, {withCredentials: true}).map(res => {
            let data = res.json();
            return data;
        });
    }
}
