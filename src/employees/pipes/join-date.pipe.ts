import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { Employee } from "../models/employee";

@Pipe({
    name:"joinDate"
})
export class JoinDate implements PipeTransform {
    transform(value: Employee[], ...args: any[]): Employee[] {
        if(!value) return value;
        
        let filter:Date=args[0]?args[0]:null;
        
        return filter?value.filter((employee)=>
            employee.joinDate===(filter)):value;
            }
        }