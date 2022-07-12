import { Freelancer } from "./freelancer";

export class UserAccount {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string, 
        public email: string,
        public password: string,
        public registerDate : Date,
        public status : string,
        public country : string,
        public state : string,
        public freelancer : Freelancer,
    ){}
}
