export class Complain {
    constructor(
        public id: number,
        public type:number,
        public description :string,
        public ClientId : number,
        public FreelancerId : number,
        public TeamId : number ,
        public adminHandlerId: number,
        public complainingUserId:number,
        public complainingTeamId:number

    ){}
}
