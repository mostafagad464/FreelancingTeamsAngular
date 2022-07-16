

export class Complain {
  public ClientId : number=0;
  public FreelancerId : number=0;
  public TeamId : number=0 ;
  public id: number=0;
    constructor(

        public type:number|string,
        public description :string,

        public adminHandlerId: number|null,
        public complainingUserId:number|null,
        public complainingTeamId:number|null



    ){}
}



