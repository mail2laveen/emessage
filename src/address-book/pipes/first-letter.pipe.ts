import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { Group } from "../models/group";

@Pipe({
    name:"firstLetter"
})
export class FirstLetter implements PipeTransform {
    transform(value: Group[], ...args: any[]): Group[] {
        if(!value) return value;
        
        let filter:string=args[0]?args[0].toLocaleLowerCase():null;
        
        return filter?value.filter((group)=>
            group.groupName.toLocaleLowerCase().startsWith(filter)):value;
            }
        }