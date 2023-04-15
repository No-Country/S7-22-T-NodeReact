export class StudentActivitiesDto{
    constructor(
        public commissionId: number,
        public studentId: number,
        public uploadLink: string,
        public rated:boolean,
        public activityNote:number
    ){}
}