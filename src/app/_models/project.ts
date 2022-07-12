import { Review } from "./review";

export class Project {
    constructor(
        public id: number,
        public postingDate:Date,
        public title : string,
        public state : number,
        public aVGBid: number,
        public description : string,
        public duration : string,
        public budgetForm: number,
        public budgetTo : number,
        public teamId : number,
        public reviews:Review
    ){}
}
