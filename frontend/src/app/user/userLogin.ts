export class UserLogin{

  emailId: string;
  password: string;

  constructor(email: string, password: string){
    this.emailId = email;
    this.password = password;
  }
}
