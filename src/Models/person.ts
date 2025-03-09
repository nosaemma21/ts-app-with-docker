export interface Person {
 name: string;
 age: number;
 dateOfBirth: string;
 gender: Gender;
}

export enum Gender{
 Male = "male",
 Female  = "female"
}