import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'
import { ShowsRoutingModule } from './shows-routing.module';
import { ShowListComponent } from './show-list/show-list.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { ShowComponent } from './show/show.component';
import { HttpClientModule } from '@angular/common/http'; 
import {MatButtonModule} from '@angular/material'; 
import { MaterialModule } from "../material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ShowListComponent, ShowDetailComponent, ShowComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MaterialModule,
    BrowserAnimationsModule,
    ShowsRoutingModule
  ],
  exports:[
    ShowListComponent
  ]
})
export class ShowsModule { }
