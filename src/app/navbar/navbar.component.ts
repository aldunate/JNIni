import { Component, OnInit } from '@angular/core';
import { TokenService } from '../usuario/service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public logueado = false;
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

  ngOnInit() {
  }



}
