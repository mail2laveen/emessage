import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { Project } from "../models/project";

@Pipe({
    name:"joinDate"
})
export class JoinDate implements PipeTransform {
    transform(value: Project[], ...args: any[]): Project[] {
        if(!value) return value;
        
        let filter:Date=args[0]?args[0]:null;
        
        return filter?value.filter((project)=>
            project.startDate===(filter)):value;
            }
        }