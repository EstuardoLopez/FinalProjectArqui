import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//clase que hace con metodos para manjear la base de datos
import { ConexionService } from "../services/conexion.service";
import { NotesService } from "../services/notes.service";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StockPage } from '../pages/stock/stock';
import { HistorialPage } from '../pages/historial/historial';
import { TemperaturaPage } from '../pages/temperatura/temperatura';
import { NutricionalPage } from '../pages/nutricional/nutricional';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//librerias para afirebase
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";



export const firebaseConfig = {
  apiKey: "AIzaSyAkDtYfC8TDTY4io3ov0CYx6tA-aNnPKMU",
  authDomain: "finala2-29fbd.firebaseapp.com",
  databaseURL: "https://finala2-29fbd.firebaseio.com",
  storageBucket: "finala2-29fbd.appspot.com",
  messagingSenderId: '389972865058'
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    StockPage,
    HistorialPage,
    TemperaturaPage,
    NutricionalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StockPage,
    HistorialPage,
    TemperaturaPage,
    NutricionalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConexionService,
    NotesService
  ]
})
export class AppModule {}
