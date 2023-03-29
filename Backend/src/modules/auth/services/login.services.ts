import { BaseServices } from "../../../shared/services/services";
import { Login } from "../interfaces/login.interface";
import { LoginEntity } from "../entity/login.entity";

export class LoginServices extends BaseServices {

  userEntity = new LoginEntity()
  
  constructor() {
    super()
  }

  async findByMail(email: string) {
    const users = await LoginEntity.findOneBy({email})
     return users
  }
  async createUser(user: Login) {
    this.userEntity.email = user.email;

    // Type 'Login' is missing the following properties from type 'LoginEntity': hasId, save, remove, softRemove, and 2 more.
  }
  // async findByPassword(password: string) {
  //   return await this.service(LoginEntity).findOneBy({ password });
  // }
}
