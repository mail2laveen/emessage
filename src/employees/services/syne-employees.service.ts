import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";
import { SynechronEmployee } from "../models/syne-employee";



@Injectable()
export class SyneEmployeesService{
    constructor(private __http: HttpClient) { }

    getAllEmployees():Observable<SynechronEmployee[]>{
        return this.__http.get<SynechronEmployee[]>("http://localhost:9090/api/employees");
    }
    getSingleEmployee(employeeId:number):Observable<SynechronEmployee>{
        return this.__http.get<SynechronEmployee>("http://localhost:9090/api/employees/"+employeeId);
    }
    addNewEmployee(employee:SynechronEmployee){
        return this.__http.post<string>("http://localhost:9090/api/employees",employee);
    }
    updateEmployee(employee:SynechronEmployee){
        return this.__http.post<string>("http://localhost:9090/api/updateEmployee",employee);
    }
    goToHome(){
        return this.__http.get("http://localhost:9090/api/employees");
    }
}