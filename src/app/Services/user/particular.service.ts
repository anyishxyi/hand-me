import { Injectable } from '@angular/core';
import * as data from '../../../app/user_mock.json';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Particular } from 'src/app/Entities/particular.js';

export interface IParticular {
  id: number;
  name: String;
  firstname: String;
  phone_number: String;
  email: String;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ParticularService {

  public particularList: Array<IParticular>;
  constructor(private http: HttpClient) { }

  getParticulars(): Array<IParticular> {
    this.particularList = data.particulars;
    console.log(this.particularList);
    return this.particularList;
  }

  createParticular(newParticular: Particular): Observable<Particular> {
    //console.log("In the service fucntion: ", newParticular);
    const new_particular = JSON.stringify(newParticular);
    const dataAsJSON = JSON.parse(new_particular);
    //console.log("HERE the data as JSON:", new_particular);


    return this.http.post<Particular>('http://localhost:3000/create-particular', dataAsJSON, httpOptions);
  }
}
