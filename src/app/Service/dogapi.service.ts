import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogapiService {

  constructor(private http:HttpClient ) { }

 dogapi()
 {
  return this.http.get('https://dog.ceo/dog-api/#google_vignette ');
 }

}
