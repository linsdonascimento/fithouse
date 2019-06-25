import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'lista-alunos', loadChildren: './lista-alunos/lista-alunos.module#ListaAlunosPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'registereducador', loadChildren: './registereducador/registereducador.module#RegistereducadorPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'ficha', loadChildren: './ficha/ficha.module#FichaPageModule' },
  { path: 'mensagem', loadChildren: './mensagem/mensagem.module#MensagemPageModule' },
  { path: 'list-exercicio', loadChildren: './list-exercicio/list-exercicio.module#ListExercicioPageModule' },  { path: 'addexercicio', loadChildren: './addexercicio/addexercicio.module#AddexercicioPageModule' },

  




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
