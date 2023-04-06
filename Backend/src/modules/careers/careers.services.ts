import { BaseServices } from "../../shared/services/baseServices";
import { CareersEntity } from "./careers.entity";

export class CareersServices extends BaseServices<CareersEntity>{
    protected career = new CareersEntity();
    constructor() {
        super(CareersEntity);
    }

   
}