import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PAGE_ROUTES} from './pages/page-routes';

const routes: Routes = PAGE_ROUTES;

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
