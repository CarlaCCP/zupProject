import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { environment } from 'src/environments/environment.prod';
import { env } from 'process';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario()
  senha: string
  
  env = environment;
  
  cpf = env.cpf
  constructor(public usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }


  cadastrando() {
    if (this.usuario.nome == null || this.usuario.email == null || this.usuario.cpf == null || this.usuario.dataNascimento == null) {
      window.alert('Todos os campos são obrigatórios')
    } else {
      this.usuarioService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        window.alert("Usuario cadastrado com sucesso")
        this.router.navigate(['/logar'])
      })

    }
  }


}
