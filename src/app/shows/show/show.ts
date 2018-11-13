export class Show{
        id:string;
        name:string;
        image:{medium:"", original:""}
}
export class ShowDetail{
    public id : string;
    public name : string;
    public language : string;
    public schedule: {time:'', days};
    public status : string;
    public rating : number;
    public image : {medium:'', original:''};
    public officialSite: string;
    public summary: string;
}
