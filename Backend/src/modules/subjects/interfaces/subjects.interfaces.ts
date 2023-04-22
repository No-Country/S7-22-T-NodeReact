import { SchoolEntity, CareersEntity, ClassesEntity } from "../../";

export interface Subjects {
  school: SchoolEntity[];
  career: CareersEntity[];
  class: ClassesEntity[];
}
