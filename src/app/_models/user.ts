export class User {
    constructor(
        public Id: number,
        public BirthDate:Date,
        public ReplySpeed : number,
        public Phone :number,
        public RegisterDate : Date,
        public Country : string,
        public State : string,
        public Image : File,
        public Rate : number,
        public ActiveStatus : boolean,
        public Bio : string,
        public Client : boolean,
        public Freelancer : boolean,
        public AdminValidated : number,
        public WalletId : number,
        public Validated : boolean

    ){}
}
