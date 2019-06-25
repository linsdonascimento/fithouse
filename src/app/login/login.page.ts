import { Component, OnInit } from '@angular/core';
import { Aluno } from '../Module/aluno';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  aluno : Aluno;
  
 
  

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    public toastController: ToastController
  ) {
    this.aluno = new Aluno
   }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.aluno.email, this.aluno.senha)
      .then(result => {
        this.router.navigate(['/menu']);
      }).catch(error => {
        this.presentToast('E-mail e/ou senha inválido(s).');
        delete this.aluno.senha;
      });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  newAluno() {
    this.router.navigate(['/registereducador']);
  }
  OnInit() {
  }

}
