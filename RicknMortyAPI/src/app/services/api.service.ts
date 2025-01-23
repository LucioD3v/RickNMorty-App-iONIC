import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient ) { }

  getCharacters() {
    return this.httpClient.get('https://rickandmortyapi.com/api/character')
  }
}

//Tipo de dato que se espera en la respuesta de la API
export interface Character { name: string }