import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;
  myCondition = "sdsqdf";
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 3000
      );
    });
    
    appareils: any[];
    
    ngOnInit(): void {
      this.appareils = this.AppareilService.appareils;
    }
  constructor(private AppareilService : AppareilService){
    setTimeout(
      () => this.isAuth = true, 4000
    );
  }

  onAllumer(){
   this.AppareilService.switchOnAll();
  }

  onEteindre() {
    this.AppareilService.switchOffAll();
  }

}
