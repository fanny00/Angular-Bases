import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  // personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(){}

  // get personajes():Personaje[] {
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje( argumento: Personaje ){
  //   this.personajes.push( argumento );
  // }

  // constructor( public dbzService: DbzService ) {
  //  // this.personajes = this.dbzService.personajes;
  // }
}
