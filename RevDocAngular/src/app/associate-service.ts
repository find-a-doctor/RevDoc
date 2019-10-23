import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RevAssociate } from './revdoc-classes/rev-associate';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  private associateSessionUrl: string;

  constructor(private http: HttpClient) {
    this.associateSessionUrl = 'http://localhost:9000/getAssociateSession';
  }

  public getAssociateSession(): Observable<RevAssociate> {
    return this.http.get<RevAssociate>(this.associateSessionUrl);
  }

}
