import { Account } from "./account";
import { Admin } from "./admin";
import { Client } from "./client";
import { Freelancer } from "./freelancer";
import { Wallet } from "./wallet";

export class User {
    constructor(
        public id: number,
        public birthDate: string | null,
        public replySpeed:	number,
        public phone: number,
        public registerDate: string,
        public country: string,
        public state: string,
        public image: string,
        public rate: number,
        public activeStatus: boolean,
        public bio: string,
        public client: boolean,
        public freelancer: boolean,
        public adminValidated: number | null,
        public walletId: number | null,
        public validated: boolean,
        public adminValidatedNavigation: Admin | null,
        public idNavigation: Account | null,
        public wallet: Wallet | null,
        public clientNavigation: Client | null,
        public freelancerNavigation: Freelancer | null
        // public complains: [],
        // public userCredits: [],
        // public userLanguages: [],
        // public userSocials: []
    ){}
}
