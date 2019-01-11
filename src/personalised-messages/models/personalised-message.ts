import{ITemplate} from "./template"

 export interface IpersonalisedMessage {
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