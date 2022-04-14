export interface Supplier {
  CNPJ: string;
  corporateName: string;
  fantasyName: string;
  telephone: string;
  completeName: string;
  email: string;
  cellphone: string;
  password: string;
}

export class CreateSupplierDto {
  CNPJ: string;
  cellphone: string;
  completeName: string;
  corporateName: string;
  email: string;
  fantasyName: string;
  password: string;
  telephone: string;

  constructor({
    CNPJ,
    cellphone,
    completeName,
    corporateName,
    email,
    fantasyName,
    password,
    telephone,
  }: Supplier) {
    this.CNPJ = CNPJ;
    this.cellphone = cellphone;
    this.completeName = completeName;
    this.corporateName = corporateName;
    this.email = email;
    this.fantasyName = fantasyName;
    this.password = password;
    this.telephone = telephone;
  }
}
