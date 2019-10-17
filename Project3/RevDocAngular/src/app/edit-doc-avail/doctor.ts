import { Location } from './location';

//Establishes a doctor object to mirror server side object

export class Doctor{
    npi: number;
    doctorName: string;
    experience: number;
    email: string;
    password: string;
    aboutMe: string;
    numberOfFollowers: number;
    location: Location
}