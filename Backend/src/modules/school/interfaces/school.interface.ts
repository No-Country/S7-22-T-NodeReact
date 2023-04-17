import { CareersEntity } from "../../";

export interface School {
  schoolName: string;
  emailDomain: string;
  careers: CareersEntity[];
}
