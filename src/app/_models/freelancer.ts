import { Team } from "./team";

export class Freelancer {
    constructor(
        public id: number,
        public activeStatus:boolean,
        public numberOfClients:number,
        public phone : number,
        public aVGHourlyRate :number,
        public image : File |null,
        public birthday: Date,
        public availableMoney : number,
        public totalMoney : number,
        public bio : string,
        public userId : number,
        public adminId : number,
        public walletId : number,
        public identityVerfication :number,
        public teams:Team[], 
        public specialization:string
    ){}
}
