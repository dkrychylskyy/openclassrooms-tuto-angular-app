import { Component } from '@angular/core';
import { resolve } from 'path';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Openclassrooms App';
  isAuth = false;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 3000
    );
  });

  appareils = [
    {
      name : "Machin à lavé",
      status : 'allumé'
    },
    {
      name : "Télévision",
      status : "allumé"
    },
    {
      name : "Ordinateur",
      status : 'éteint'
    }
  ];

  constructor(){
    setTimeout(
      () => this.isAuth = true, 4000
    );
  }

  onAllumer(){
    console.log("On allume tout");
  }
}
