import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componet/navbar/navbar.component';
import { FooterComponent } from './componet/footer/footer.component';
import { FormAdditemComponent } from './componet/form-additem/form-additem.component';
import { FormRemitemComponent } from './componet/form-remitem/form-remitem.component';
import { ListitemsComponent } from './componet/form-listitems/listitems.component';
import { BorrowitemComponent } from './componet/form-borrowitem/borrowitem.component';
import { ReturnitemComponent } from './componet/item-returnitem/returnitem.component';
import { ReportgenComponent } from './componet/form-reportgen/reportgen.component';
import { FormReportgenComponent } from './componet/form-reportgen/form-reportgen.component';
import { FormReturnitemComponent } from './componet/form-returnitem/form-returnitem.component';
import { FormBorrowitemComponent } from './componet/form-borrowitem/form-borrowitem.component';
import { FormListitemsComponent } from './componet/form-listitems/form-listitems.component';
import { FormRemitemsComponent } from './componet/form-remitems/form-remitems.component';

const appRoutes: Routes = [
  { path: 'componet/form-additem', component: FormAdditemComponent },
  { path: 'componet/form-borrowitem', component: FormBorrowitemComponent },
  { path: 'componet/form-listitems', component: FormListitemsComponent },
  { path: 'componet/form-remitems', component: FormRemitemsComponent },
  { path: 'componet/form-reportgen', component: FormReportgenComponent },
  { path: 'componet/form-returnitem', component: FormReturnitemComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FormAdditemComponent,
    FormBorrowitemComponent,
    FormListitemsComponent,
    FormRemitemsComponent,
    FormReportgenComponent,
    FormReturnitemComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
      ),
      BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



