import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Available } from './available';

// sends the information to the server side

@Injectable({
    providedIn: 'root'
})
export class AvailableService{
    private updateUrl: string;
    private removeUrl: string;

    constructor(private http:HttpClient){
        this.updateUrl="http://localhost:5500/updateHours";
        this.removeUrl="http://localhost:5500/removeHours";
    }

    public update(available:Available){
        console.log(available.date);
        console.log(available.day);
        console.log(available.end);
        console.log(available.start)
        return this.http.put<Available>(this.updateUrl,available);
    }

    public remove(available:Available){
        return this.http.put<Available>(this.removeUrl,available);
    }
}