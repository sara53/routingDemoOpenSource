import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: Iuser | undefined;
  constructor() {}
  login(username: string, password: string) {
    this.currentUser = {
      username: username,
      password: password,
    };
  }

  get isLoggedIn(): boolean {
    if (this.currentUser?.username && this.currentUser.password) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    this.currentUser = undefined;
  }
}
