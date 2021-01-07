import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LogarComponent } from './logar/logar.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

const routes: Routes = [

{path: 'cadastrar',component: CadastrarComponent},
{path: 'logar',component: LogarComponent},
{path: 'inicial', component: PaginaInicialComponent},
{path: '', redirectTo: 'inicial', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
