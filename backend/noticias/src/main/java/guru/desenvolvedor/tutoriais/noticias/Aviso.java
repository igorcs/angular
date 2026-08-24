package guru.desenvolvedor.tutoriais.noticias;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Aviso {

  @Id
  //@GeneratedValue(strategy=GenerationType.AUTO)
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  private String titulo;
  private String resumo;
  private String thumb;
  private String imagem;
  private String texto;
  private Date data;

  protected Aviso() {}



  public Aviso(String titulo, String resumo, String thumb, String imagem, String texto, Date data) {
	super();
	this.titulo = titulo;
	this.resumo = resumo;
	this.thumb = thumb;
	this.imagem = imagem;
	this.texto = texto;
	this.data = data;
  }


  	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Aviso [id=");
		builder.append(id);
		builder.append(", titulo=");
		builder.append(titulo);
		builder.append(", resumo=");
		builder.append(resumo);
		builder.append(", thumb=");
		builder.append(thumb);
		builder.append(", imagem=");
		builder.append(imagem);
		builder.append(", texto=");
		builder.append(texto);
		builder.append(", data=");
		builder.append(data);
		builder.append("]");
		return builder.toString();
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getTitulo() {
		return titulo;
	}



	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}



	public String getResumo() {
		return resumo;
	}



	public void setResumo(String resumo) {
		this.resumo = resumo;
	}



	public String getThumb() {
		return thumb;
	}



	public void setThumb(String thumb) {
		this.thumb = thumb;
	}



	public String getImagem() {
		return imagem;
	}



	public void setImagem(String imagem) {
		this.imagem = imagem;
	}



	public String getTexto() {
		return texto;
	}



	public void setTexto(String texto) {
		this.texto = texto;
	}



	public Date getData() {
		return data;
	}



	public void setData(Date data) {
		this.data = data;
	}


}