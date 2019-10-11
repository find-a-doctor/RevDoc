import { Doctor } from './doctor';
import { Time } from '@angular/common';

export class Available {

  availableId: number;
  doctor: Doctor;
  day: number;
  start: Time;
  end: Time;
  date: Date;

}
