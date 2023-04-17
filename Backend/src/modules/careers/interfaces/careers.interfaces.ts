import { ClassesEntity, SchoolEntity } from "../..";

export interface Careers {
  careerName: string;
  school: SchoolEntity | number;
  classes: ClassesEntity[] | number;
}
