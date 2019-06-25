import { Component, OnInit } from '@angular/core';
import { exercicio } from '../Module/exercicio';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, ModalController } from '@ionic/angular';
import { DBService } from '../database/db.fithouse';

@Component({
  selector: 'app-list-exercicio',
  templateUrl: './list-exercicio.page.html',
  styleUrls: ['./list-exercicio.page.scss'],
})
export class ListExercicioPage implements OnInit {

  ListExercicio: exercicio;
  Exercicios: exercicio[];
  loading: boolean;
  

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    public toastController: ToastController,
    public dbservice: DBService,
    public modalController: ModalController,

  ) { }

  async ngOnInit() {
    this.loading = true;

    await this.LoadingListaExercicio();
  }

  
  private async LoadingListaExercicio() {
    this.dbservice.listWithUIDs<exercicio>('/exercicio')
      .then(ListExercicioPage => {
      this.Exercicios = ListExercicioPage;


        this.loading = false;
      }).catch(error => {
        console.log(error);
      });

  }
  async add() {
    const modal = await this.modalController.create({
      component: exercicio
    });

    modal.onDidDismiss()
      .then(result => {
        if (result.data) {
          this.confirmAdd();
        }
      });

    return await modal.present();
  }

  private confirmAdd() {
    this.presentToast('Adicionado a Lista');
    this.LoadingListaExercicio();
  }


  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }



  backToLogin() {
      this.router.navigate(['/ficha']);
    }
  
}
