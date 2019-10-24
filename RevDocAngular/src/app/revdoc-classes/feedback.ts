import { Appointment } from './appointment';

export class Feedback {

  feedbackId: number;
  bedsideMannerRating: number;
  waitTimeRating: number;
  overallRating: number;
  //OverallRating is a number, not a boolean
  comments: string;
  appointment: Appointment;

}
