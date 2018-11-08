import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componet/navbar/navbar.component';
import { FooterComponent } from './componet/footer/footer.component';
import { FormAdditemComponent } from './componet/form-additem/form-additem.component';
import { FormRemitemComponent } from './componet/form-remitem/form-remitem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FormAdditemComponent,
    FormRemitemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
