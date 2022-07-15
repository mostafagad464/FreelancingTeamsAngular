export class Deal {
    constructor(
        public clientId:number,
        public teamId:number,
        public projectId:number,
        public money:number,
        public duration:number,
        public done:boolean
    ){
    }
}
