import { Api } from './../api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private api: Api) { }

  authenticate(user : any) {
    return this.api.post(`token`, user);
  }
}
