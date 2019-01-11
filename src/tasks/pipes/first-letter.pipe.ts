import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { Task } from "../models/task";

@Pipe({
    name:"firstLetter"
})
export class FirstLetter implements PipeTransform {
    transform(value: Task[], ...args: any[]): Task[] {
        if(!value) return value;
        
        let filter:string=args[0]?args[0].toLocaleLowerCase():null;
        
        return filter?value.filter((pask)=>
            pask.taskName.toLocaleLowerCase().startsWith(filter)):value;
            }
        }