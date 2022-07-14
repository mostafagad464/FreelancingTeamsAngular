import { Team } from "./team";
import { User } from "./user"

export class TeamFreelancerMessage {
    constructor(
        public id: number,
        public userId: number,
        public teamId: number,
        public message: string,
        public date: string,
        public sender: string,
        public read: boolean,
        public deleted: boolean,

        public user: User | null,
        public team: Team | null
    ) { }
}
