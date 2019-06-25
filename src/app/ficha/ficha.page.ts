import { Component, OnInit } from '@angular/core';
import { Aluno } from '../Module/aluno';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { ListaAlunosPage } from '../lista-alunos/lista-alunos.page';
import { ListExercicioPage } from '../list-exercicio/list-exercicio.page';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.page.html',
  styleUrls: ['./ficha.page.scss'],
})
export class FichaPage implements OnInit {

  

    aluno : ListaAlunosPage;

    exercicio :ListExercicioPage;
  Aluno: Aluno;
    
   
    
  
    constructor(
      private router: Router,
      private afAuth: AngularFireAuth,
      public toastController: ToastController
    ) {
      this.Aluno = new Aluno;
      
     }



  ngOnInit() {
  }

  newAluno() {
    this.router.navigate(['/lista-alunos']);
  }

  newExercicio(){
    this.router.navigate(['/list-exercicio'])
  }

}
