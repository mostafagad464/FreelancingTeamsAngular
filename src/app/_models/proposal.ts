export class Proposal {
  constructor(
    public id:number,
    public teamId:number,
    public projectId:number,
    public description:string,
    public money:number|null,
    public date:Date,
    public duration:string,


    ){}
}

/* "id": 1,
    "teamId": 1,
    "projectId": 3,
    "description": "string",
    "money": 10,
    "date": "2022-06-20T00:00:00",
    "duration": "string",
    "project": null,
    "team": null
*/
