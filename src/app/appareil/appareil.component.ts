import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName : string;
  @Input() appareilStatus : string;
  @Input() indexOfAppareil : number;

  constructor(private AppareilService : AppareilService) { }

  ngOnInit() {
    console.log(this.appareilName);
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor(){
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  onSwitchOn(){
    this.AppareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff(){
    this.AppareilService.switchOffOne(this.indexOfAppareil);
  }

}
