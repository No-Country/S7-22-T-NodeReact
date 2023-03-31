import { Column, Entity } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { UserRoles } from "./interfaces/userRoles.interface";

@Entity()
export class UserRolesEntity extends BaseEntityApp implements UserRoles{
    @Column()
    userID: number;
    
    @Column()
    roleId: number;
}