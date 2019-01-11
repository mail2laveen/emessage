import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";
import { SynechronStorie } from "../models/syne-storie";



@Injectable()
export class SyneStoriesService{
    constructor(private __http: HttpClient) { }

    getAllStories():Observable<SynechronStorie[]>{
        return this.__http.get<SynechronStorie[]>("http://localhost:9090/api/stories");
    }
    getSingleStorie(storieId:number):Observable<SynechronStorie>{
        return this.__http.get<SynechronStorie>("http://localhost:9090/api/stories/"+storieId);
    }
    addNewStorie(storie:SynechronStorie){
        return this.__http.post<string>("http://localhost:9090/api/stories",storie);
    }
    goToHome(){
        return this.__http.get("http://localhost:9090/api/stories");
    }
}