import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex-blog';
  vtitle = "1rst post";

  listPosts = [
    {
      title: "mon 1er post ( actu )",
      content: " le content du 1er poste c'est l'actu ... ",
      loveIts: 5,
      created_at: new Date(),
    },
    {
      title: "mon 2eme post ( sport )",
      content: " le content du 2eme poste est pour le sport",
      loveIts: 0,
      created_at: new Date(),
    },
    {
      title: "mon 3eme post ( mode )",
      content: " le content du 3eme poste est pour la mode",
      loveIts: -3,
      created_at: new Date(),
    },
    {
      title: "mon 4eme post ( politique )",
      content: " le content du 4eme poste est pour la politique",
      loveIts: 2,
      created_at: new Date(),
    } 
  ]
}
