import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders,HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StaticsDataService {

  baseApiUrl ='http://localhost:8080/api';
  parkingUserData ='/eParking/staticsData/all'

  constructor(private http: HttpClient) { }

  getParkingUserData(): Observable<any[]>{
    return this.http.get<any[]>(this.baseApiUrl+this.parkingUserData)
   }

}
