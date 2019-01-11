import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Template } from "../models/template";



@Injectable()
export class TemplateService{
    constructor(private __http: HttpClient) { }

    getAllTemplates():Observable<Template[]>{
        return this.__http.get<Template[]>("http://localhost:8080/templates");
    }
    getSingleTemplate(templateId:number):Observable<Template>{
        return this.__http.get<Template>("http://localhost:8080/templates"+templateId);
    }
    addNewTemplate(template:Template){
        return this.__http.post<string>("http://localhost:8080/templates",template);
    }
    updateTemplate(template:Template){
        return this.__http.post<string>("http://localhost:8080/templates",template);
    }
    goToHome(){
        return this.__http.get("http://localhost:8080/templates");
    }
}