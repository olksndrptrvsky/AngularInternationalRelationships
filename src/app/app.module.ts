import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { IndexesComponent } from './indexes/indexes.component';
import { IndexDetailsComponent } from './index-details/index-details.component';
import { CreateQueryComponent } from './create-query/create-query.component';
import { AuthInterceptor } from "./interceptors/AuthInterceptor";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    IndexesComponent,
    IndexDetailsComponent,
    CreateQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
