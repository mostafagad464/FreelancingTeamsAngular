export class Review {
    constructor(
        public clientId: number,
        public teamId:number,
        public projectId:number,
        public rate:number,
        public content:string,
        public date:Date,
        public fromClient:string
    ){}
}
