import { User } from "./user";

export class Account {
    constructor(
        public id: number,
        public identityId:number |null,
        public email:string,
        public username: string,
        public password: string,
        public firstName:string,
        public lastName:string,
        public type:string,
        public user:User
    ){}
}