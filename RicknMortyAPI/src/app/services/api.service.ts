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