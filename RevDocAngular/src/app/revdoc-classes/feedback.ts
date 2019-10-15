import { Appointment } from './appointment';

export class Feedback {

  feedbackId: number;
  bedsideMannerRating: number;
  waitTimeRating: number;
  overallRating: boolean;
  comments: string;
  appointment: Appointment;

}
