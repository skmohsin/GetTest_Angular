import { Injectable } from '@angular/core';
import { IUser } from '../../models/user.model';
import {Api} from '../api'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private api: Api) { }

  getUsers = () => {
    return this.api.get(`users`);
  }
}
