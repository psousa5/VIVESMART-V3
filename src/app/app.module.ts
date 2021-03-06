import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { TabPage } from '../pages/tab/tab';
import { UsuariosubpreferenciaPage } from '../pages/usuariosubpreferencia/usuariosubpreferencia';
import { LogrosPage } from '../pages/logros/logros';
import { PerfilPage } from '../pages/perfil/perfil';
import { TipsPage } from '../pages/tips/tips';

import { Detallenoticiapromocion } from '../pages/detallenoticiapromocion/detallenoticiapromocion';
import { CredencialPage } from '../pages/credencial/credencial';


import { Alertaganar } from '../pages/alertaganar/alertaganar';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

//import { Push } from '@ionic-native/push';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    TabPage,
    UsuariosubpreferenciaPage,
    LogrosPage,
    PerfilPage,
    TipsPage,
    Detallenoticiapromocion,
    Alertaganar,
    CredencialPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    BrowserModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    TabPage,
    UsuariosubpreferenciaPage,
    LogrosPage,
    PerfilPage,
    TipsPage,
    Detallenoticiapromocion,
    Alertaganar,
    CredencialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
