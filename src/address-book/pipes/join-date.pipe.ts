import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { Group } from "../models/group";

@Pipe({
    name:"joinDate"
})
export class JoinDate implements PipeTransform {
    transform(value: Group[], ...args: any[]): Group[] {
        if(!value) return value;
        
        let filter:string=args[0]?args[0]:null;
        
        return filter?value.filter((group)=>
            group.groupName===(filter)):value;
            }
        }