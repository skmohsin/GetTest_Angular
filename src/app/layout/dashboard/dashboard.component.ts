import { ResponseWrapper } from "./../../shared/ResponseWrapper";
import { DashboardService } from "./../../shared/services/dashboard.service";
import { Component, OnInit } from "@angular/core";
import { THROW_IF_NOT_FOUND } from "@angular/core/src/di/injector";
import { IDashboard } from "src/app/models/dashboard.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  dashboard: IDashboard;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboard = this.getDashboard();
    console.log(this.dashboard);
  }

  getDashboard() {
    return this.dashboardService.getDashboard();
  }
}
