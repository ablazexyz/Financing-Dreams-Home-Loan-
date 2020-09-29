export class Register{
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: number;
  gender: string;
  nationality: string;
  dateOfBirth: Date;

  constructor(firstName: string, lastName: string, email: string, password: string, phoneNumber: number,
              gender: string, nationality: string, dateOfBirth: Date){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.gender = gender;
    this.nationality = nationality;
    this.dateOfBirth = dateOfBirth;
  }

}
