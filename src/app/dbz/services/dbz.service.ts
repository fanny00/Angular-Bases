import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    
    // Arreglo
    private _personajes: Personaje[] = [
        {
        nombre: 'Goku',
        poder: 15000
        },
        {
        nombre: 'Vegeta',
        poder: 8500
        }
    ];
  
    get personajes(): Personaje[]{
       // return this._personajes;
       return [...this._personajes];
    }
    constructor() {
        console.log('Servicio Inicializado');
    }
}