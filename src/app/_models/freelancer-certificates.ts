export class FreelancerCertificates {

    constructor(
        public FreelancerId: number,
        public Title: string,
        public Link:string,
        public Organization: string,
        public Date : Date | string,
        public Description :string,
        public Specialization: string

    ){}
}
