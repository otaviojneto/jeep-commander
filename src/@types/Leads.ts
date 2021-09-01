class Leads {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  message: string;

  constructor(
    name: string,
    email: string,
    phone: string,
    cpf: string,
    message: string,
  ) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.cpf = cpf;
    this.message = message;
  }
}

export default Leads;
