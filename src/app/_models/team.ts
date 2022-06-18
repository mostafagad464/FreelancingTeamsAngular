export class Team {
    constructor(
        public Id: number,
        public Logo:File,
        public WebSite : string,
        public IsVerified : boolean,
        public CreationDate: Date,
        public Description : string,
        public Rate : number ,
        public LeaderId: number,
        public WalletId: number

    ){}
}
