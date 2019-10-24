import { logging } from 'protractor';
import { Doctor } from './doctor';
import { RevAssociate } from './rev-associate';

export class Followers {

  followerId: number;
  doctor: Doctor;
  revAssociate: RevAssociate;
  followDate: Date;

}
