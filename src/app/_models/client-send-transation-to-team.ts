export class ClientSendTransationToTeam {
    constructor(
        public ClientId: number,
        public TeamId:number,
        public TransactionId :number,
        public Done : boolean

    ){}
    
}
