import { logging } from 'protractor';
import { Doctor } from './doctor';
import { RevAssociate } from './rev-associate';

export class Followers {

  followersId: number;
  doctor: Doctor;
  revAssociate: RevAssociate;
  followDate: Date;

}
