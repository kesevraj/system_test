import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsService {
  url = `../../../../../assets/profile.json`;
  constructor(private http:HttpClient) { }

  getProfileList():Observable<any>{
    return this.http.get<any>(this.url)
  } 
}
