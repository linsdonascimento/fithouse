import { Component, OnInit } from '@angular/core';
import { exercicio } from '../Module/exercicio';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { DBService } from '../database/db.fithouse';

@Component({
  selector: 'app-addexercicio',
  templateUrl: './addexercicio.page.html',
  styleUrls: ['./addexercicio.page.scss'],
})
export class AddexercicioPage implements OnInit {

  ResistrarExercicio:exercicio;
  exercicios : exercicio[];

  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    public toastController: ToastController,
    private dbService:DBService) {

      this.ResistrarExercicio = new exercicio();
      

     }

  ngOnInit() {
  }
  

  salvar() {
    if (this.ResistrarExercicio) {
      this.insert();
    }
  }

  private insert() {
    this.dbService.insertInList<exercicio>('/exercicio',this.ResistrarExercicio)
      .then(() => {
        this.presentToast('Registrado com sucesso')
        this.router.navigate(["/home"]);
      }).catch(error => {
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



  
}
