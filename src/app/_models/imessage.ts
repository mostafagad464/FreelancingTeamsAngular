export class IMessage {
    constructor(
        public name: string, 
        public id: number, 
        public type: string, 
        public lastMessDate: string, 
        public lastMess:string, 
        public noOfUnRead:number
    ){}
}
