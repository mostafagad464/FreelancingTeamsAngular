import { Account } from "./account"

export class AccountMessage {
    constructor(

        public id: number,
        public senderId: number,
        public recieverId: number,
        public message: string,
        public date: string,
        public read: boolean,
        public deleted: boolean,

        public reciever: Account | null,
        public sender: Account | null

    ) {

    }
}
