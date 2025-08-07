import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User{
  name :string ,
  email:string,
  phoneNumber: string
}

@Injectable({
  providedIn: 'root'
})



export class UserService {

  api="http://localhost:5000/user"
   
  constructor(private http :HttpClient) { }

  getData() : Observable<User[]>{
    return this.http.get<User[]>(`${this.api}/getData`)
  }

  get(id:string | null) : Observable<User> {
    return this.http.get<User>(`${this.api}/get/${id}`)
  }

  addData(user: Partial<User>) : Observable<User> {
    console.log(user)
    return this.http.post<any>(`${this.api}/postData` , user);
  }

  deleteData(id:string) : Observable<any>{
    return this.http.delete(`${this.api}/deleteData/${id}`)
  }

  updateData(user :any) : Observable<any> {
    return this.http.put<User>(`${this.api}/updateData/${user._id}` , user);
  } 
}
