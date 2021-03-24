import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="https://localhost:44320/api/auth/";

  constructor(private httpClient:HttpClient) { }

  loginModel(loginModel:LoginModel){
    return this.httpClient.post(this.apiUrl+"login",loginModel)

  }

}
