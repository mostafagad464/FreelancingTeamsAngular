export class Project {
    constructor(
        public Id: number,
        public PostingDate:Date,
        public Title : string,
        public State : number,
        public AVGBid: number,
        public Description : string,
        public Duration : string,
        public BudgetFrom: number,
        public BudgetTo : number,
        public ClientId : number

    ){}
}
