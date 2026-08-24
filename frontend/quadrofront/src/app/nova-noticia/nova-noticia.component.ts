import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nova-noticia',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nova-noticia.component.html',
  styleUrl: './nova-noticia.component.css'
})
export class NovaNoticiaComponent {

  constructor(private location: Location,private http: HttpClient) { }

noticia = {
  titulo: '',
  resumo: '',
  thumb: '',
  imagem: '',
  texto: '',
  data: ''
};

  salvarNoticiaTeste() {
    this.http.post('/api/', this.noticia).subscribe(() => {
       console.log('Notícia salva');
    });
  }

  salvarNoticia() {
  const payload = {
    titulo: this.noticia.titulo,
    resumo: this.noticia.resumo,
    thumb: this.noticia.thumb,
    imagem: this.noticia.imagem,
    texto: this.noticia.texto,
	data: this.noticia.data ? new Date(this.noticia.data).toISOString() : null
    //data: new Date(this.noticia.data).toISOString()
  };

  this.http.post('/api/', payload).subscribe({
    next: () => console.log('Notícia salva'),
    error: (err) => console.error('Erro ao salvar noticia:', err)
  });
}

  voltar(): void {
    this.location.back();
  }

}
