import {Router, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

export const PATH_CONSTANTS = {
  SLASH: '/',
  USER: 'user',
  HOME: 'home'
};


const routes: Routes = [
  {
    path: '',
    redirectTo: PATH_CONSTANTS.SLASH + PATH_CONSTANTS.HOME,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigateByUrl(PATH_CONSTANTS.HOME);
    };
  }
}
