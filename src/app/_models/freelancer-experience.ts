export class FreelancerExperience {
        constructor(
            public FreelancerId: number,
            public JobTitle: string,
            public CompanyName:string,
            public StartDate: Date | string,
            public EndDate : Date | string,
            public CurrentlyWorking : boolean | string,
            public JobKind: string,
            public Summary : string
    
        ){}   
}
