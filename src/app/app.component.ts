import { Component, OnInit, Input, Output } from '@angular/core';
import { TokenService } from './usuario/service/token.service';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public _subscription: any;
  public logueado = false;
  constructor(private tokenService: TokenService) {
    this.tokenService.leer();
    this._subscription = tokenService.onLoguin.subscribe((value) => {
      this.logueado = value;
    });
  }

  logout() {
    this.tokenService.remove();
  }

  ngOnInit() {
  }


  info() { }

}

