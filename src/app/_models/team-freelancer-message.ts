import { Team } from "./team";
import { User } from "./user"

export class TeamFreelancerMessage {
    constructor(
        public Id: number,
        public UserId: number,
        public TeamId: number,
        public Message: string,
        public Date: string,
        public Sender: string,
        public Read: boolean,
        public Deleted: boolean,

        public User: User,
        public Team: Team
    ) { }
}
