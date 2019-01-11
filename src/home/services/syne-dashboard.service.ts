import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";
import { SynechronProject } from "../../projects/models/syne-project";
import { Dashboard } from "../models/dashbaoard";


@Injectable()
export class SyneDashboardService {
    constructor(private __http: HttpClient) { }

    getAllProjects():Observable<SynechronProject[]>{
        return this.__http.get<SynechronProject[]>("http://localhost:9090/api/projects");
    }
    getSingleProject(projectId:string):Observable<SynechronProject>{
        return this.__http.get<SynechronProject>("http://localhost:9090/api/projects/"+projectId);
    }
    getDashboardInfo(projectId:string):Observable<Dashboard>{
        return this.__http.get<Dashboard>("http://localhost:9090/api/dashboard/"+projectId);
    }
    addNewProject(project:SynechronProject){
        return this.__http.post<string>("http://localhost:9090/api/projects",project);
    }
    goToHome(){
        return this.__http.get("http://localhost:9090/api/projects");
    }
}