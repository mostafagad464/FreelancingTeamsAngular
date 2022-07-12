import { Admin } from "./admin";

export class Account {
    constructor(
        public id: number,
        public identityId: string | null,
        public email: string,
        public username: string,
        public firstName: string,
        public lastName: string,
        public password: string,
        public type: string,
        public admin: Admin | null
    ){}
}
