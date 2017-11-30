
import { Injectable } from '@angular/core';
import * as Cookies from 'es-cookie';
import { Output } from '@angular/core/src/metadata/directives';

@Injectable()
export class TokenService {

    public token: string;
    public exp: Date;
    public crea: Date;
    constructor() {
        this.leer();
    }
    leer() {
        this.expiro();
        this.token = Cookies.get('joindernote');
        if (this.token !== undefined) {
            localStorage.setItem('token', this.token);
        } else {
            this.remove();
        }
    }
    expiro() {
        if (this.exp <= new Date()) {
            this.remove();
        }
    }
    remove() {
        Cookies.remove('joindernote');
        localStorage.removeItem('token');
        this.token = undefined;
        this.exp = undefined;
        this.crea = undefined;
    }
    create(token: any) {
        this.rellena(token);
        Cookies.set('joindernote', this.token, { expires: 1, path: '' });
        localStorage.setItem('token', this.token);
    }
    rellena(token: any) {
        this.token = token.Nombre;
        this.exp = new Date(token.FechaExp);
        this.crea = new Date(token.FechaCrea);
    }
}
