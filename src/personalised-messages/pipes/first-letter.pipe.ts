import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { IpersonalisedMessage } from "../models/personalised-message";

@Pipe({
    name:"firstLetter"
})
export class FirstLetter implements PipeTransform {
    transform(value: IpersonalisedMessage[], ...args: any[]): IpersonalisedMessage[] {
        if(!value) return value;
        
        let filter:string=args[0]?args[0].toLocaleLowerCase():null;
        
        return filter?value.filter((msg)=>
            msg.message.toLocaleLowerCase().startsWith(filter)):value;
            }
        }