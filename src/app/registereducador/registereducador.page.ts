import { Component, OnInit } from '@angular/core';
import { Educador } from '../Module/educador';
import { DBService } from '../database/db.fithouse';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registereducador',
  templateUrl: './registereducador.page.html',
  styleUrls: ['./registereducador.page.scss'],
})
export class RegistereducadorPage implements OnInit {

  register : Educador;

  educadores : Educador[];

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    public toastController: ToastController,
    private dbservice: DBService
  ) {

      this.register = new Educador;


   }

  ngOnInit() {

  }
  
  salvar() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.register.email, this.register.senha)
    this.dbservice.insertInList<Educador>('educador',this.register)
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
