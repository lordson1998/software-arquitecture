import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { Modulo1Component } from "./components/modulo1/modulo1.component";
import { Modulo2Component } from "./components/modulo2/modulo2.component";
import { Modulo3Component } from "./components/modulo3/modulo3.component";
import { Modulo4Component } from "./components/modulo4/modulo4.component";
import { Modulo5Component } from "./components/modulo5/modulo5.component";

export const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'modulo1', component: Modulo1Component},
  {path:'modulo2', component: Modulo2Component},
  {path:'modulo3', component: Modulo3Component},
  {path:'modulo4', component: Modulo4Component},
  {path:'modulo5', component: Modulo5Component},
  {path:'**', pathMatch:'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
