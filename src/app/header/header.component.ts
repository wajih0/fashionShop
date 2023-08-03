import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  showLoginForm = false; // Variable pour contrôler l'affichage du formulaire de connexion

  // Fonction pour afficher le formulaire de connexion
  showLogin() {
    this.showLoginForm = true;
  }
 

  }








