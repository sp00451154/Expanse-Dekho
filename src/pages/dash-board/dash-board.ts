import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ActualExpansePage } from '../actual-expanse/actual-expanse';
import { ExpectedExpansePage } from './../expected-expanse/expected-expanse';

/**
 * Generated class for the DashBoardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-dash-board',
  templateUrl: 'dash-board.html',
})
export class DashBoardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad DashBoardPage');
  }
  navigateToActualShoppingPage() {
    // Navigate the user to the AddShoppingPage
    this.navCtrl.push(ActualExpansePage);
  }
  navigateToExpectedShoppingPage() {
    // Navigate the user to the AddShoppingPage
    this.navCtrl.push(ExpectedExpansePage);
  }

}
