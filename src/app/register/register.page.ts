import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import{ Aluno } from '../Module/aluno';
import { DBService } from '../database/db.fithouse';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  register: Aluno;

  alunos : Aluno[];


  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    public toastController: ToastController,
    private dbservice: DBService
    
  ) {
    this.register = new Aluno;
   }

  ngOnInit() {
  }

  salvar() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.register.email, this.register.senha)
    this.dbservice.insertInList<Aluno>('alunos',this.register)
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
        this.router.navigate(['/login']);
      }

}
