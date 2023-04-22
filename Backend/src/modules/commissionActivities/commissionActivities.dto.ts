import { Timestamp } from "typeorm";

export class CarrersDto{
    constructor(
        public description: string,
        public issuedDate: Timestamp,
        public expiryDate: Timestamp
    ){}
}