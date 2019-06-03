import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'lista-alunos', loadChildren: './lista-alunos/lista-alunos.module#ListaAlunosPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },  { path: 'educador', loadChildren: './educador/educador.module#EducadorPageModule' },
  { path: 'registereducador', loadChildren: './registereducador/registereducador.module#RegistereducadorPageModule' },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
