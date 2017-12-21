import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Actions, Effect} from "@ngrx/effects";
import {UserActionTypes} from "./user.reducer";
import {UserService } from './user.service';
import {LoginAction} from "./user.action";

@Injectable()
export class UserEffects {

  constructor(private actions: Actions,
              private userService: UserService) {
  }

  @Effect()
  login = this.actions.ofType(UserActionTypes.USER_LOGIN)
    .map( (action: LoginAction) => action)
    .switchMap(action =>
      this.userService
        .login(action.phone, action.password)
        .map(response => ({ type: UserActionTypes.USER_LOGIN_SUCCESS, user: response }))
        .catch(() => Observable.of({ type: UserActionTypes.USER_LOGIN_ERROR }))
    );
}
