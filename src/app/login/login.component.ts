import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UsuarioService } from '../service/usuario.service';
import { Route } from '../app.route';
import { Router } from '@angular/router/src/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mensaje = 'Welcome';
  public passwordClass = 'form-control';
  public usuarioClass = 'form-control';
  formCorrecto = false;
  usuarioMensaje = '';
  passwordMensaje = '';
  params: URLSearchParams;
  router: Router;
  usuario: any =  '';

  constructor(private http: HttpClient, public usuarioService: UsuarioService) {
    this.usuario.nombre = '';
    this.usuario.password = '';
  }

  ngOnInit() { }

  onSubmit() {
    this.usuarioService.login(this.usuario.nombre, this.usuario.password, this.RegristoRespuesta);
  }

  RegristoRespuesta(usuario: any) {
    console.log(this.usuario);
    this.usuario.id = usuario.id;
    this.usuario.nombre = usuario.nombre;
    this.router.navigate(['']);
  }




}
