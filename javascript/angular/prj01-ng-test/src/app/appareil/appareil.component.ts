import { Component, Input, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';/*01*/

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string; // OLD >> appareilStatus: string = 'allumée'; // éteint
  @Input() indexOfAppareil: number;

  constructor(private appareilService: AppareilService) { } /*02*/

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === "éteint"){
      return "red";
    } else if (this.appareilStatus === "allumee" ) {
      return "green";
    }
  }

  onSwitch() {
    if (this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.indexOfAppareil);
    } else if (this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.indexOfAppareil);
    }
  }
}
