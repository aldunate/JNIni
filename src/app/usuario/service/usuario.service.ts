import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { HttpHandler } from '@angular/common/http/src/backend';

@Injectable()
export class UsuarioService {

  public id: string;
  public nombre: string;

  constructor(private http: HttpClient, private tokenInterceptor: TokenInterceptor) { }

  login(usuario, password, respuesta) {
    this.http.post('http://localhost:57989/api/login', {
      'password': password,
      'Nombre': usuario
    })
      .subscribe((response) => respuesta(response));
  }

  registro(usuario, password, respuesta) {
    this.http.post('http://localhost:57989/api/registro', {
      'password': password,
      'Nombre': usuario
    })
      .subscribe((response) => respuesta(response));
  }

  usuarioExiste(nombre, respuesta) {
    this.http.get('http://localhost:57989/api/registro',
      { params: new HttpParams().set('nombre', nombre) }
    )
      .subscribe((response) => respuesta(response));
  }



}
