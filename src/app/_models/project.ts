import { Review } from "./review";

export class Project {
    constructor(
        public id: number,
        public postingDate:Date,
        public title : string,
        public state : string,
        public avgBid: number,
        public description : string,
        public duration : number,
        public minBudget: number,
        public maxBudget : number,
        public clientId : number,
    ){}
}
