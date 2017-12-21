import {User} from "./user";
import {UserActionTypes} from './user.reducer';
import {Action} from '@ngrx/store';

export class LoginAction implements Action {
  type = UserActionTypes.USER_LOGIN;
  user: User;
  error: boolean;

  constructor(public phone: string,
              public password: string) {

  }
}
