import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {LoginModule} from './login/login.module';
import { ContactsModule } from './contacts/contacts.module'
import { ShowsModule } from './shows/shows.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './login/auth.guard';
import { LoginService } from './login/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    
   ],
  imports: [
    BrowserModule,
    LoginModule,
    ShowsModule,
    ContactsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,    
    AppRoutingModule,
    MatDialogModule,
    
  ],
  providers:[AuthGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
