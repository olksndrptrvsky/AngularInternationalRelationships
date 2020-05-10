import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexesComponent} from "./indexes/indexes.component";
import {IndexDetailsComponent} from "./index-details/index-details.component";
import {LoginComponent} from "./login/login.component";
import {CreateQueryComponent} from "./create-query/create-query.component";


const routes: Routes = [
  { path: '', redirectTo: '/indexes', pathMatch: 'full' },
  { path: 'indexes', component: IndexesComponent },
  { path: 'indexes/:name/:hierarchy', component: IndexDetailsComponent },
  { path: 'indexes/:name', component: IndexDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createQuery', component: CreateQueryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
