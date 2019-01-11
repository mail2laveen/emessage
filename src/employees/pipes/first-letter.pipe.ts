import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { Employee } from "../models/employee";

@Pipe({
    name:"firstLetter"
})
export class FirstLetter implements PipeTransform {
    transform(value: Employee[], ...args: any[]): Employee[] {
        if(!value) return value;
        
        let filter:string=args[0]?args[0].toLocaleLowerCase():null;
        
        return filter?value.filter((employee)=>
            employee.employeeName.toLocaleLowerCase().startsWith(filter)):value;
            }
        }