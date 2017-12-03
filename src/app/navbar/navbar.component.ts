import { Component, OnInit, Input } from '@angular/core';
import { TokenService } from '../usuario/service/token.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // logueado: any;

  // @Input() public logueadoChild;
  constructor(private tokenService: TokenService, private appComp: AppComponent) {
    // this.tokenService.logueado

    /*subscribe((logueado) => {
      this.logueado = logueado;
    });*/
  }

  /*ngOnDestroy() {
    //prevent memory leak when component destroyed
    this._subscription.unsubscribe();
  }*/

  /*auth() {
    this.tokenService.leer();
    if (this.tokenService.token === undefined) {
      this.logueadoChild = false;
    } else {
      this.logueadoChild = true;
    }
  }*/

  logout() {
    this.appComp.logout();
  }
  ngOnInit() { }


}




