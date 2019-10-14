import { Component, OnInit } from '@angular/core';
// import { resolve } from 'path';
// import { reject } from 'q';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Angular Openclassrooms App';
  
  constructor(){}
}
