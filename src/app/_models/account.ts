import { Admin } from "./admin";
import { User } from "./user";

export class Account {
    constructor(
        public id:number,
        public identityId:number,
        public email:string,
        public userName:string,
        public firstName:string,
        public lastName:string,
        public password:string,
        public type:string,
        public admin:Admin,
        public user:User,

    ){}
}
