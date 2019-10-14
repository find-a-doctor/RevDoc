import { Appointment } from './appointment';

export class Feedback {

  feedbackId: number;
  bedsideMannerRating: number;
  waitTimeRating: number;
  overallRating: number;
  comments: string;
  appointment: Appointment;

}
