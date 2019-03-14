import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { QuoteTextComponent } from './components/quote-text/quote-text.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserService } from './components/user/user.service';
import { MovieService } from './movie.service';
import { Route } from '@angular/compiler/src/core';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    QuoteTextComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    UserService,MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
