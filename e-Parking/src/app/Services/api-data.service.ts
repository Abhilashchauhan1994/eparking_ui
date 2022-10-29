import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders,HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserDetails } from '../MOdels/user-details';
import { VehicleDetails } from '../Models/vehicle-details';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

    baseApiUrl ='http://localhost:8080/api';
    /*User Api*/
    createuserAPi ='/eParking/create/User';
    findallusersApi ='/eParking/userDetails/all';
    updateUsersApi ='/eParking/UpdateUser/';
    deleteUserAPi ='/eParking/deleteUser/'
    /*Vehicle Api */
    createVehicleApi='/eParking/create/vehicle';
    /*Parking Api */
    findAllParking ='/eParking/ParkingDetails/all'
  /* headers = new HttpHeaders().set('content-type','application/json').set('Access-Control-Allow-Origin':'*');*/


  constructor(private http: HttpClient) { }

    createUser(userData): Observable<UserDetails[]>{
      console.log(userData);
      let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'});
      console.log(headers);
      const resp = null;
      this.http.post<UserDetails[]>(this.baseApiUrl+this.createuserAPi, userData,{'headers':headers}).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )
      return resp;
    }

    getAllUser(): Observable<UserDetails[]>{
     return this.http.get<UserDetails[]>(this.baseApiUrl+this.findallusersApi)
    }

    deleteUser(userid): Observable<UserDetails[]>{
      let newUrl = this.baseApiUrl+this.deleteUserAPi+userid;
      return this.http.delete<UserDetails[]>(newUrl);
    }

    updateUser(userid,userData): Observable<UserDetails[]>{
      let newUrl = this.baseApiUrl+this.updateUsersApi+userid;
      return this.http.put<UserDetails[]>(newUrl,userData);
    }

    /*Vehicle Api Function*/
    createVehicle(vehicleDetails): Observable<VehicleDetails[]>{
      let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'});
      console.log(headers);
      const resp = null;
      this.http.post<VehicleDetails[]>(this.baseApiUrl+this.createVehicleApi, vehicleDetails,{'headers':headers}).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )
      return resp;
    }
    /*End*/

    /*PArking Functions*/
    getAllparkingDetails(): Observable<any[]>{
      return this.http.get<any[]>(this.baseApiUrl+this.findAllParking)
     }
    /*End*/

}
