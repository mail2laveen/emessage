import{ImobileMessage} from "./mobile-message"
import{ITemplate} from "./template"

export class MobileMessage implements ImobileMessage {

    messageId:string;
    senderId:string;
    smsType:string;
    smsMethod:string;
    mobile:string;
    message:string;
    isRemoveDuplicates:boolean;
    count:number;
    template:ITemplate;
    date:Date;
    scheduleDate:Date;

}