...
import { AuthGuard } from './services/auth-guard.service'; /* 01 */
...
const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SignleAppareilComponent },
   ...
];

...
  providers: [
    AppareilService,
    AuthService,
    AuthGuard /**/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

