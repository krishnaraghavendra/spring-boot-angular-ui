import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {PATH_CONSTANTS} from "../app-routing.module";

export const HOME_PATH_CONSTATNTS = {
  HOME: PATH_CONSTANTS.HOME,
  NEW_DELEGATION: PATH_CONSTANTS.HOME + PATH_CONSTANTS.SLASH + "newdelegation",
  START_NEW_DELEGATION: PATH_CONSTANTS.HOME + PATH_CONSTANTS.SLASH + "startdelegation" + PATH_CONSTANTS.SLASH
};
const homeRoutes: Routes = [
  {
    path: HOME_PATH_CONSTATNTS.HOME,
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {
}
