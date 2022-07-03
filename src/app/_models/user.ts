import { Freelancer } from "./freelancer";

export class User {
    constructor(
        public id: number,
        public birthDate:Date,
        public replySpeed : number,
        public phone :number,
        public registerDate : Date,
        public country : string,
        public state : string,
        public image : string,
        public rate : number,
        public activeStatus : boolean,
        public bio : string,
        public client : boolean,
        public freelancer : boolean,
        public adminValidated : number,
        public walletId : number,
        public validated : boolean,
        public  freelancerNavigation:Freelancer
        

    ){}
}
