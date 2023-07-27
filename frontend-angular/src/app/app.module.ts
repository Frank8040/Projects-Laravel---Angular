import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSchoolComponent } from './components/add-school/add-school.component';
import { EditSchoolComponent } from './components/edit-school/edit-school.component';
import { ListSchoolComponent } from './components/list-school/list-school.component';
import { FormsModule } from '@angular/forms';
import { SchoolService } from './services/school.service';

@NgModule({
  declarations: [
    AppComponent,
    AddSchoolComponent,
    EditSchoolComponent,
    ListSchoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [SchoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
