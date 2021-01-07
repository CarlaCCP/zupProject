import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario()
  senha: string
  constructor( public usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  conferirSenha(event: any){
    this.senha = event.target.value
  }

  cadastrar(){
    if (this.senha === this.usuario.senha){
      this.usuarioService.cadastrar(this.usuario).subscribe((resp:Usuario) =>{
        this.usuario = resp
        this.router.navigate(['/login'])
        window.alert('Usuario cadastrado com sucesso')
      })
    } else {
      window.alert("Suas senhas não conferem")
    }
  }
}
