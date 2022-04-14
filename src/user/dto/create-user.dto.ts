export interface User {
  completeName: string;
  gender: string;
  birthday: string;
  CPF: string;
  telephone: string;
  email: string;
  password: string;
}

export class CreateUserDto {
  completeName: string;
  gender: string;
  birthday: string;
  CPF: string;
  telephone: string;
  email: string;
  password: string;

  constructor({
    completeName,
    CPF,
    gender,
    birthday,
    telephone,
    email,
    password,
  }: User) {
    this.completeName = completeName;
    this.CPF = CPF;
    this.gender = gender;
    this.birthday = birthday;
    this.telephone = telephone;
    this.email = email;
    this.password = password;
  }
}
