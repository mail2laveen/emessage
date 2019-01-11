import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { Storie } from "../models/storie";

@Pipe({
    name:"firstLetter"
})
export class FirstLetter implements PipeTransform {
    transform(value: Storie[], ...args: any[]): Storie[] {
        if(!value) return value;
        
        let filter:string=args[0]?args[0].toLocaleLowerCase():null;
        
        return filter?value.filter((pask)=>
            pask.storyName.toLocaleLowerCase().startsWith(filter)):value;
            }
        }