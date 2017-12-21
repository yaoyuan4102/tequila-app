import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Store} from '@ngrx/store';
import {AppStore} from '../../app/app.store';
import {LoginAction} from '../../services/user/user.action';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private phone: string;
  private password: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private store: Store<AppStore>) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.store.dispatch(new LoginAction(this.phone, this.password));
  }

}
