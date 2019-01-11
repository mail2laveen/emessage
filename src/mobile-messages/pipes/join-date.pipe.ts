import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { ImobileMessage } from "../models/mobile-message";

@Pipe({
    name:"joinDate"
})
export class JoinDate implements PipeTransform {
    transform(value: ImobileMessage[], ...args: any[]): ImobileMessage[] {
        if(!value) return value;
        
        let filter:Date=args[0]?args[0]:null;
        
        return filter?value.filter((msg)=>
            msg.scheduleDate===(filter)):value;
            }
        }