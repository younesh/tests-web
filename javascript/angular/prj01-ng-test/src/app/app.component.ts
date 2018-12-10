import { Component, OnInit /*01*/} from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit /*02*/ {
  // title = 'prj01-ng-test';
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 3000
    );
  });



  statusOne ="éteint";
  statusTwo="allumee";
  statusTree ="éteint";


  appareils: any[]; /*03*/
  constructor(private appareilService : AppareilService ) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() { /*04*/
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }
}
