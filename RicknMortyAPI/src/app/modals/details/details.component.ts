import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  imports: [IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton],
})

export class DetailsComponent {

@Input() character: any;

  constructor(private modalController : ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }

}
