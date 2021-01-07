import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../model/usuarioLogin';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit() {
  }

  entrar(){
    this.usuarioService.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp
      localStorage.setItem('token', this.usuarioLogin.token)
      this.router.navigate(['/inicial'])
    })
  }
}
