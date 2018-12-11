import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service'; /*01*/
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signle-appareil',
  templateUrl: './signle-appareil.component.html',
  styleUrls: ['./signle-appareil.component.scss']
})
export class SignleAppareilComponent implements OnInit {

  name: string = 'Appareil'; /*03*/
  status: string = 'Statut';

  constructor(private appareilService: AppareilService, private route : ActivatedRoute) { }/*02*/

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id).name;
    this.status = this.appareilService.getAppareilById(+id).status;
  }
  
}
