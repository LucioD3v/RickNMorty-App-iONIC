import { Component } from '@angular/core';
import { ApiService, Character } from '../services/api.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { DetailsComponent } from '../modals/details/details.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  public characters: Character[] = [];
  private loading: any;
  searchTerm: string = '';

  constructor(private apiService: ApiService, private loadingController: LoadingController, private modalController: ModalController) {
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

  //openDetails
  openDetails(character: Character) {
    this.modalController.create({
      component: DetailsComponent,
      componentProps: {
        character
      }
    }).then((modal) => modal.present())
    console.log(character)
  }
}
