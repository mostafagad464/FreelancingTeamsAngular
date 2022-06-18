export class Complain {
    constructor(
        public Id: number,
        public Type:number,
        public Description :string,
        public ClientId : number,
        public FreelancerId : number,
        public TeamId : number ,
        public AdminHandlerId: number

    ){}
}
