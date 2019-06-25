import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'lista-alunos',
      url: '/lista-alunos',
      
    },
    {
      title: 'Lista de Exerccio',
      url: '/list-exercicio',
      
    },
    {
      title: 'Adicionar Exercicio',
      url: '/addexercicio',
      
    },
    {
      title: 'Perfil',
      url: '/perfil',
     
    },
  
    {
      title: 'Mensagens',
      url: '/mensagens',
      
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
