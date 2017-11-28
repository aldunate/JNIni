import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Response } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { Output } from '@angular/core/src/metadata/directives';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  public mensaje = 'Welcome';
  public passwordClass = 'form-control';
  public usuarioClass = 'form-control';
  formCorrecto = false;
  nombre: string;
  password: string;
  password2: string;

  usuarioMensaje = '';
  passwordMensaje = '';
  params: URLSearchParams;

  constructor(private http: HttpClient, private usuarioService: UsuarioService, private router: Router) { }
  ngOnInit() { }
  RegristoRespuesta(response: object) {
    this.router.navigate(['']);
  }

  usuarioRespuesta(response: object) {
    if (response !== null) {
      this.usuarioMensaje = 'El usuario ya existe';
    } else {
      this.usuarioMensaje = '';
    }
  }
  usuarioChange(event: Object) {
    if (this.nombre !== '') {
      this.usuarioService.usuarioExiste(this.nombre, this.usuarioRespuesta.bind(this));
    }
  }

  passwordChange(event: Object) {
    if (this.password !== '' && this.password2 !== '') {
      if (this.password === this.password2) {
        this.passwordClass = 'form-control  ng-valid';
        this.formCorrecto = true;
        this.passwordMensaje = '';
      } else {
        this.passwordClass = 'form-control  ng-invalid'; // No funciona
        this.formCorrecto = false;
        this.passwordMensaje = 'Las contraseñas no coinciden';
      }
    }
  }

  onSubmit() {
    if (this.formCorrecto) {
      this.http.post('http://localhost:57989/api/registro', {
        'password': this.password,
        'Nombre': this.nombre
      })
        .subscribe((response) => this.RegristoRespuesta(response));
    }
  }

}
