import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { Template } from "../models/template";

@Pipe({
    name:"joinDate"
})
export class JoinDate implements PipeTransform {
    transform(value: Template[], ...args: any[]): Template[] {
        if(!value) return value;
        
        let filter:string=args[0]?args[0]:null;
        
        return filter?value.filter((template)=>
            template.tittle===(filter)):value;
            }
        }