export class Register1 {
  email: string;
  firstName: string;
  lastName: string;
  phone_number: number;
  gender: string;
  nationality: string;
  dob: string;
  password: string;
  constructor(
    email,
    firstName,
    lastName,
    phone_number,
    gender,
    nationality,
    dob,
    password
  ) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone_number = phone_number;
    this.gender = gender;
    this.nationality = nationality;
    this.dob = dob;
    this.password = password;
  }
}
