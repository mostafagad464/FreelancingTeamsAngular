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
        public budgetFrom: number,
        public budgetTo : number,
        public blientId : number,
        public teamId : number,
        public reviews:Review,
    ){}
}
