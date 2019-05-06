import { Component, OnInit } from '@angular/core';
import { Aluno } from '../Module/aluno';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { DBService } from '../database/db.fithouse';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.page.html',
  styleUrls: ['./lista-alunos.page.scss'],
})
export class ListaAlunosPage implements OnInit {


  ListaAlunos: Aluno[];

  loading: boolean;

  constructor(public modalController: ModalController, public dbService: DBService, public toastController: ToastController) {

  }

  async ngOnInit() {
    this.loading = true;

    await this.LoadingListaAlunos();
  }
  
  private async LoadingListaAlunos() {
    this.dbService.listWithUIDs<Aluno>('/alunos')
      .then(_ListaAlunosPage => {
        this.ListaAlunos = _ListaAlunosPage;

        this.loading = false;
      }).catch(error => {
        console.log(error);
      });

  }



  async add() {
    const modal = await this.modalController.create({
      component: Aluno
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
    this.presentToast('Contato adicionado com sucesso');
    this.LoadingListaAlunos();
  }

  remove(uid: string) {
    this.dbService.remove('/Alunos', uid)
      .then(() => {
        this.presentToast('Contato removido com sucesso');
        this.LoadingListaAlunos();
      });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }



}
