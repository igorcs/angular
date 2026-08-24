Criação de um formulário para cadastrar notícia

1. Crie o componente:
   ng g c nova-noticia

2. Abra o arquivo:
   src/app/nova-noticia/nova-noticia.component.ts

3. Crie o objeto para guardar os dados do formulário:
   noticia = {
     titulo: '',
     texto: '',
     imagem: '',
     data: ''
   };

4. Importe o HttpClient:
   import { HttpClient } from '@angular/common/http';

5. Injete no construtor:
   constructor(private http: HttpClient) {}

6. Crie a função para salvar:
   salvarNoticia() {
     this.http.post('/api/', this.noticia).subscribe(() => {
       console.log('Notícia salva');
     });
   }

7. Abra o arquivo:
   src/app/nova-noticia/nova-noticia.component.html

8. Crie o formulário assim:
   <form (ngSubmit)="salvarNoticia()">
     <label>Título</label>
     <input type="text" [(ngModel)]="noticia.titulo" name="titulo">

     <label>Texto</label>
     <textarea [(ngModel)]="noticia.texto" name="texto"></textarea>

     <label>Imagem</label>
     <input type="text" [(ngModel)]="noticia.imagem" name="imagem">

     <label>Data</label>
     <input type="datetime-local" [(ngModel)]="noticia.data" name="data">

     <button type="submit">Salvar</button>
   </form>

9. Certifique-se de importar FormsModule no app.module.ts:
   import { FormsModule } from '@angular/forms';

   @NgModule({
     imports: [
       BrowserModule,
       AppRoutingModule,
       FormsModule
     ]
   })

10. No arquivo app-routing.module.ts, adicione a rota:
    { path: 'nova-noticia', component: NovaNoticiaComponent }
    

11. Para acessar a rota:
    <a routerLink="/nova-noticia">Nova notícia</a>

12. Depois, teste o formulário e veja se a API recebe os dados.

Resumo:
- criar o componente
- criar o objeto noticia
- montar o formulário
- usar ngModel
- salvar com HttpClient
- criar a rota
- acessar via link

Se quiser, pode também usar um botão de enviar com (click) e router.navigate('/nova-noticia').
