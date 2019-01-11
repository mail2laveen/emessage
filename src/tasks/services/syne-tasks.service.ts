import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";
import { SynechronTask } from "../models/syne-task";



@Injectable()
export class SyneTasksService{
    constructor(private __http: HttpClient) { }

    getAllTasks():Observable<SynechronTask[]>{
        return this.__http.get<SynechronTask[]>("http://localhost:9090/api/tasks");
    }
    getSingleTask(taskId:number):Observable<SynechronTask>{
        return this.__http.get<SynechronTask>("http://localhost:9090/api/tasks/"+taskId);
    }
    addNewTask(task:SynechronTask){
        return this.__http.post<string>("http://localhost:9090/api/tasks",task);
    }
    updateTask(task:SynechronTask){
        return this.__http.post<string>("http://localhost:9090/api/updateTask",task);
    }
    goToHome(){
        return this.__http.get("http://localhost:9090/api/tasks");
    }
}