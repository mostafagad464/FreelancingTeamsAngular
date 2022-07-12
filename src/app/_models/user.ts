<<<<<<< HEAD
export class User {
    constructor(
        public Id: number,
        public BirthDate:Date,
        public ReplySpeed : number,
        public Phone :number,
        public RegisterDate : Date,
        public Country : string,
        public State : string,
        public Image : File,
        public Rate : number,
        public ActiveStatus : boolean,
        public Bio : string,
        public Client : boolean,
        public Freelancer : boolean,
        public AdminValidated : number,
        public WalletId : number,
        public Validated : boolean

    ){}
=======
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

>>>>>>> FreelancingTeamsAngular/EMBranch
}
