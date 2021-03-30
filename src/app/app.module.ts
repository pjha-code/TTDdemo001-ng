import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { InvoiceResourcesComponent } from './invoice/invoice-resources/invoice-resources.component';
import { ValidateInvoiceComponent } from './invoice/validate-invoice/validate-invoice.component';
import { JumbotronComponent } from './common/jumbotron/jumbotron.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    InvoiceResourcesComponent,
    ValidateInvoiceComponent,
    JumbotronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'invoice/validateInvoice', component:ValidateInvoiceComponent },
      {path:'invoice', component: InvoiceResourcesComponent},
      { path: '', component: JumbotronComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
