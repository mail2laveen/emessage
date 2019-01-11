import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { Template } from "../models/template";

@Pipe({
    name:"firstLetter"
})
export class FirstLetter implements PipeTransform {
    transform(value: Template[], ...args: any[]): Template[] {
        if(!value) return value;
        
        let filter:string=args[0]?args[0].toLocaleLowerCase():null;
        
        return filter?value.filter((template)=>
        template.tittle.toLocaleLowerCase().startsWith(filter)):value;
            }
        }