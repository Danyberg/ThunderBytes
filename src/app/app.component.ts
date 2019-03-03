import { Component, ViewChild } from '@angular/core';
import {Nav, Platform, ModalController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {Provider} from "../providers/provider/provider";
import {SettingsPage} from "../pages/settings/settings";
import {MachinePage} from "../pages/machine/machine";
import { SplashPage } from '../pages/splash/splash';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;


  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private provider: Provider,
              private modalCtrl: ModalController
              ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Machine', component: MachinePage },
      { title: 'Settings', component: SettingsPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.


      this.statusBar.styleDefault();

      let splash = this.modalCtrl.create(SplashPage);
      splash.present();
    });


  }



  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  googleLogout(){
    this.provider.logout();
    this.nav.setRoot(LoginPage);
  }
}
