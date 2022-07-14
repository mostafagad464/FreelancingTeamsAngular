import { Client } from "./client";
import { Project } from "./project";
import { Team } from "./team";

export class Deal {
    constructor(
        public clientId:number,
        public teamtId:number,
        public projectId:number,
        public money:number,
        public duration:number,
        public done:boolean|null,
        public client:Client|null,
        public project:Project|null,
        public team:Team|null
    ){

    }
}
/*
"clientId": 1,
"teamId": 1,
"projectId": 1,
"money": 600,
"duration": 10,
"done": null,
"client": null,
"project": null,
"team": null
*/
