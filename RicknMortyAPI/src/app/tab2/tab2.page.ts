import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  public characters: any = [] 

  constructor(private apiService: ApiService) {
    this.getCharacters()
  }

  async getCharacters() {
    this.apiService.getCharacters().subscribe((res: any) => {
      this.characters = res.results
    })
  }
}
