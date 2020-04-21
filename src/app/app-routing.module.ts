import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import {routes} from "./app.routes";
import { AppPreloadingStrategy } from './app_preloading_strategy';

//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: AppPreloadingStrategy,
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
