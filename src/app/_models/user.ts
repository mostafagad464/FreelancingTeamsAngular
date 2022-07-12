import { Account } from "./account";
import { Admin } from "./admin";
import { Freelancer } from "./freelancer";

export class User {
    constructor(
        public id:number,
        public replySpeed:number,
        public birthDate:Date,
        public phone:number,
        public registerDate:Date,
        public country:string,
        public state:string,
        public image:string,
        public rate:number,
        public Bio:string,
        public client:boolean,
        public freelancer:boolean,
        public adminValidated:number,
        public WalletId:number,
        public Validated:boolean,
        public idNavigation:Account,
        public freelancerNavigation:Freelancer
    ){}

}
