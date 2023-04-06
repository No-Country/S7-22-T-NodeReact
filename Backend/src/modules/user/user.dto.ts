export class UserDto {
  
  public name: string;
  public lastName: string;
  public phone: number;
  public dni: string;
  public address: string;
  public email: string;

  constructor(name: string, lastName: string, phone: number, dni: string, address: string, email: string) {
    this.name = name;
    this.lastName = lastName;
    this.phone = phone;
    this.dni = dni;
    this.address = address;
    this.email = email;
  }
}
