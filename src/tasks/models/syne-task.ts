import{Task} from "./task"

export class SynechronTask implements Task {
    taskId:string;
    taskName:string;
    storyId:string;
    projId:string;
    DEV:number;
    QA:number;
    startDate:Date;
    endDate:Date;

}