export class UserDto {
  constructor(
    public name: string,
    public lastName: string,
    public phone: number,
    public dni: string,
    public address: string,
    public email: string
  ) {}
}
