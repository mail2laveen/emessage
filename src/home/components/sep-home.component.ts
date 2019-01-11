import { Component, OnInit } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import { Injectable } from "../../../node_modules/@angular/core";
import { SynechronProject } from "../../projects/models/syne-project";
import { SyneDashboardService } from "../services/syne-dashboard.service";
import { Dashboard } from "../models/dashbaoard";

@Component({
    selector: 'sep-home',
    templateUrl: '../views/sep-home.component.html'
})

@Injectable()
export class SepHomeComponent implements OnInit {
    constructor(private _dashboardService:SyneDashboardService) {
        
     }
    pageTitle:string="Home Page!!!";
    ngOnInit() { }
}