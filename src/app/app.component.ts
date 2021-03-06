import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { DashBoardPage } from './../pages/dash-board/dash-board';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = ShoppingListPage;
  rootPage:any = DashBoardPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

