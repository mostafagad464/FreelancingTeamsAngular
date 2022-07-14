export class Experience {
    constructor(
        public FreelancerId: number,
        public JobTitle: string,
        public CompanyName:string,
        public StartDate: Date,
        public EndDate : Date,
        public CurrentlyWorking : boolean,
        public JobKind: string,
        public Summary : string

    ){}
}
