import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  public characters: any = [];
  private loading: any;
  constructor(private apiService: ApiService, private loadingController: LoadingController) {
    this.getCharacters()
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 2000
    });
    return await this.loading.present();
}

  async getCharacters() {
    this.apiService.getCharacters().subscribe((res: any) => {
      this.presentLoading()
      this.characters = res.results
    })
  }
}
