import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { Task } from "../models/task";

@Pipe({
    name:"joinDate"
})
export class JoinDate implements PipeTransform {
    transform(value: Task[], ...args: any[]): Task[] {
        if(!value) return value;
        
        let filter:Date=args[0]?args[0]:null;
        
        return filter?value.filter((task)=>
            task.startDate===(filter)):value;
            }
        }