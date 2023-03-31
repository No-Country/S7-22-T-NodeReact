import { BaseServices } from "../../shared/services/services";
import { UserRolesEntity } from "./userRoles.entity";

export class UserRolesServices extends BaseServices<UserRolesEntity>{
    protected userRole = new UserRolesEntity();

    constructor(){
        super();
    }

    async getServices(): Promise<UserRolesEntity[]> {
        return await UserRolesEntity.find();
    }

    async getServicesById(id: number): Promise<UserRolesEntity | null> {
        const userRole = UserRolesEntity.findOneBy({ id });
        return userRole;
    }

    async postService(data: UserRolesEntity): Promise<UserRolesEntity | null> {
        const userRole = UserRolesEntity.create(data);
        return userRole;
    }

    async putService(id: number, data: UserRolesEntity): Promise<UserRolesEntity | null> {
        await UserRolesEntity.update({id}, data);
        return this.userRole;
    }

    async deleteService(id: number): Promise<UserRolesEntity | null> {
        const userRole = await UserRolesEntity.findOneBy({id});
        userRole?.remove();
        return userRole;
    }
}