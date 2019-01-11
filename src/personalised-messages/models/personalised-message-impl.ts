import{IpersonalisedMessage} from "./personalised-message"
import{ITemplate} from "./template"

export class PersonalisedMessage implements IpersonalisedMessage {

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