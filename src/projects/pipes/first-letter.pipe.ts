import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { Project } from "../models/project";

@Pipe({
    name:"firstLetter"
})
export class FirstLetter implements PipeTransform {
    transform(value: Project[], ...args: any[]): Project[] {
        if(!value) return value;
        
        let filter:string=args[0]?args[0].toLocaleLowerCase():null;
        
        return filter?value.filter((project)=>
            project.projName.toLocaleLowerCase().startsWith(filter)):value;
            }
        }