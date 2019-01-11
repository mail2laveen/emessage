import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Group } from "../models/group";



@Injectable()
export class GroupService{
    constructor(private __http: HttpClient) { }

    getAllGroups():Observable<Group[]>{
        return this.__http.get<Group[]>("http://localhost:8080/group");
    }
    getSingleGroup(groupId:number):Observable<Group>{
        return this.__http.get<Group>("http://localhost:8080/group"+groupId);
    }
    addNewGroup(group:Group){
        console.log(group);
        return this.__http.post<string>("http://localhost:8080/group",group);
    }
    updateGroup(group:Group){
        return this.__http.post<string>("http://localhost:8080/group",group);
    }
    goToHome(){
        return this.__http.get("http://localhost:8080/group");
    }
}