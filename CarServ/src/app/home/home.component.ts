import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  avis: string = '';

  envoyerAvis() {
    if (this.avis.trim() !== '') {
      alert('Votre avis a été envoyé ');
      this.avis = '';
    } else {
      alert('Veuillez saisir votre avis avant d\'envoyer.');
    }}
    

}
