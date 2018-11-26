import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  appareils = [
   {
      name: "Machine à laver 000",
      status:"éteint"
   },
   {
     name: "Frigo 000",
     status: "allumee"
    },
    {
      name: "Ordinateur 000",
      status: "allumee"
    }
  ];


  statusOne ="éteint";
  statusTwo="allumee";
  statusTree ="éteint";



  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('On allume tout ! ...');
    
  }
}
