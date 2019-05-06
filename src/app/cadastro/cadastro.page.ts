import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Educador } from '../Module/educador';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  cadastro: Educador;
  
  

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    public toastController: ToastController
  ) {
    this.cadastro = new Educador;
   }

  ngOnInit() {
  }

  save() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.cadastro.nome, this.cadastro.cref)
    .then(result => {
      this.presentToast('Usuário criado com sucesso');
      this.backToLogin();    
      
      })
      .catch(error => {
        this.presentToast('Erro ao cadastrar usuário');
        console.log(error);
      })
      
    }
    
    async presentToast(message: string) {
      const toast = await this.toastController.create({
        message: message,
        duration: 2000
      });
      toast.present();
    }

    backToLogin() {
        this.router.navigate(['/tab1']);
      }

}
