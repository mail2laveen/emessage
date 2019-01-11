import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";
import { SynechronProject } from "../models/syne-project";



@Injectable()
export class SyneProjectsService{
    constructor(private __http: HttpClient) { }

    getAllProjects():Observable<SynechronProject[]>{
        return this.__http.get<SynechronProject[]>("http://localhost:9090/api/projects");
    }
    getSingleProject(projectId:number):Observable<SynechronProject>{
        return this.__http.get<SynechronProject>("http://localhost:9090/api/projects/"+projectId);
    }
    addNewProject(project:SynechronProject){
        return this.__http.post<string>("http://localhost:9090/api/projects",project);
    }
    goToHome(){
        return this.__http.get("http://localhost:9090/api/projects");
    }
}