import { Component, OnInit, Input, Output } from '@angular/core';
import { TokenService } from './usuario/service/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  @Output() public logueado = false;
  constructor(private tokenService: TokenService) {
    this.auth();
  }

  auth() {
    this.tokenService.leer();
    if (this.tokenService.token === undefined) {
      this.logueado = false;
    } else {
      this.logueado = true;
    }
  }

  logout() {
    this.tokenService.remove();
    this.auth();
  }

  ngOnInit() {
  }


  info() { }

}

