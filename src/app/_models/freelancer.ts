export class Freelancer {
    constructor(
        public Id: number,
        public ActiveStatus:boolean,
        public NumberOfClients:number,
        public Phone : number,
        public AVGHourlyRate :number,
        public Image : File,
        public Birthday: Date,
        public AvailableMoney : number,
        public TotalMoney : number,
        public Bio : string,
        public UserId : number,
        public AdminId : number,
        public WalletId : number,
        public IdentityVerfication :number /////////////



    ){}
}
