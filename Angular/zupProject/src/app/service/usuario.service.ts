import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario = new Usuario ()
  constructor(private http: HttpClient) { }


  cadastrar(usuario: Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>("http://localhost:8080/cadastro/cadastrando", usuario)
  }

  buscarTodos() : Observable<Usuario[]>{
    return this.http.get<Usuario[]>("http://localhost:8080/cadastro")
  }

  getByIdUsuario(id:number) : Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/cadastro/${id}`)
  }

}
