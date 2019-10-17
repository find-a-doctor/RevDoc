import { Doctor } from './doctor';
import { Time } from '@angular/common';

// Two classes used to set up information transfer

export class AvailableInput{
    doctor: Doctor;
    day: number;
    start: Time;
    end: Time;
    date: Date;
}

export class Available{
    doctor: Doctor;
    day: string;
    start: string;
    end: string;
    date: string;
}