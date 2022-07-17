export class Complain {
    constructor(
        // public id: number,
        public type: string,
        public description: string,
        public complainingUserId: number | null,
        public complainingTeamId: number | null,
        public adminHandlerId: number | null

    ) { }
}
