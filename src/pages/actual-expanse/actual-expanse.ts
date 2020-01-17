import { Component } from '@angular/core';
import {  NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ActualExpansePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-actual-expanse',
  templateUrl: 'actual-expanse.html',
})
export class ActualExpansePage {
  expanseTypes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
    this.initializeItems();
  }
  initializeItems() {
    this.expanseTypes = [
      'Baba',
      'Credit card',
      'Investment',
      'Kanha',
      'LIC',
      'Loan',
      'Mama',
      'Kanha',
      'LIC',
      'Loan',
      'Mama',
      'Room'
    ];
  }
  getExpTypes(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.expanseTypes = this.expanseTypes.filter((type) => {
        return (type.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Expanse updated.',
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ActualExpansePage');
  }

}
