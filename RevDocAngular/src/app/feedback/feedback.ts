import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Feedback {

    BmRating : number;
    WtRating : number;
    OvRating : number;
    Comment : string;
}
