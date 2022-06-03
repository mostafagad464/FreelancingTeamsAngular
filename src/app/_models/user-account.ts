export class UserAccount {
    constructor(
        public Id: number,
        public FName: string,
        public LName: string, 
        public Email: string,
        public Password: string,
        public RegisterDate : Date,
        public Status : string,
        public Country : string,
        public State : string

    ){}
}
