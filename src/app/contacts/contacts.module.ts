import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { MatDialog, MatDialogModule } from '@angular/material';


@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDialogModule, 
    ContactsRoutingModule
  ],
  exports:[
    ContactFormComponent,
  ]
})
export class ContactsModule { }
