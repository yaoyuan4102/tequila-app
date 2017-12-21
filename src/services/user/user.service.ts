import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  private apiHost: string = 'http://tequila.io/';

  constructor(private http: Http) {
  }

  public login(phone: string, password: string): Observable<any> {
    return this.http.post(this.apiHost + "api/v1/auth/login", {
      phone: phone,
      password: password
    }).map((response) => {
      return response.json();
    })
      .catch((err) => {
        throw Observable.throw(err);
      });
  }
}
