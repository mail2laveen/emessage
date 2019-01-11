import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { Storie } from "../models/storie";

@Pipe({
    name:"joinDate"
})
export class JoinDate implements PipeTransform {
    transform(value: Storie[], ...args: any[]): Storie[] {
        if(!value) return value;
        
        let filter:Date=args[0]?args[0]:null;
        
        return filter?value.filter((storie)=>
            storie.startDate===(filter)):value;
            }
        }