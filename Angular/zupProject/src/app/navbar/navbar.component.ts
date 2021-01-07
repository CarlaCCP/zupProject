import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
    public usuario: UsuarioService) { }

  ngOnInit(): void {
  }

  sair(){
    this.router.navigate(['/login'])
    localStorage.clear()
  }
}
