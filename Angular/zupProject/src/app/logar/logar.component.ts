import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {

  usuario: Usuario = new Usuario()
  listaUsuarios: Usuario[]

  idUsuario: number

  constructor(public usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit() {
    this.encontreTodos()
  }

  encontreTodos(){
    this.usuarioService.buscarTodos().subscribe((resp: Usuario [])=>{
      this.listaUsuarios = resp
    })
  }

  encontreId(){
    this.usuarioService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario)=>{
      this.usuario = resp
    })
  }
}
