import {Component, OnInit} from '@angular/core';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {ModalController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(public modalCtrl: ModalController,
              public navCtrl: NavController,
              public splashScreen: SplashScreen) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.splashScreen.hide();

    setTimeout(() => {
      this.modalCtrl.dismiss();
    }, 4000);

    this.navCtrl.navigateRoot('home');
  }

  hideSplash() {
    this.modalCtrl.dismiss();
  }
}
