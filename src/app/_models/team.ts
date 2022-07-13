import { Deal } from "./deal";
import { Review } from "./review";
import { TeamMember } from "./team-member"

export class Team {
    constructor(
        public id: number,
        public logo:string | null,
        public webSite : string,
        public isVerfied : boolean,
        public creationDate: Date,
        public description : string,
        public rate : number ,
        public leaderId: number,
        public walletId: number,
        public name:string,
        public deals:Deal[],
        public reviews:Review[],
        public teamMembers: TeamMember[]

    ){}
}
