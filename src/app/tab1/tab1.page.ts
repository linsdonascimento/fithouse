import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import{ Aluno } from '../Module/aluno';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

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
        this.router.navigate(['/lista-alunos']);
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
    this.router.navigate(['/login']);
  }
  

}
