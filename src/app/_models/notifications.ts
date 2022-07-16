
export class Notifications {

    constructor(public id:number, 
        public description:string, 
        public type:string, 
        public type_id:number, 
        public accepted:boolean, 
        public read:boolean, 
        public date:Date
        ){}
}
