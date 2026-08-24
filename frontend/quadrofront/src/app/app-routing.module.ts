import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaNoticiasComponent } from './lista-noticias/lista-noticias.component';
import { DetalheNoticiaComponent } from './detalhe-noticia/detalhe-noticia.component';
import { NovaNoticiaComponent } from './nova-noticia/nova-noticia.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';

const routes: Routes = [
  { path: '', component: ListaNoticiasComponent },
  { path: 'detalhes', component: DetalheNoticiaComponent },
  { path: 'nova-noticia', component: NovaNoticiaComponent },
  { path: 'first-component', component: FirstComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
