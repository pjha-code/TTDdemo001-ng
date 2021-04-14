import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { InvoiceResourcesComponent } from './invoice/invoice-resources/invoice-resources.component';
import { ValidateInvoiceComponent } from './invoice/validate-invoice/validate-invoice.component';
import { JumbotronComponent } from './common/jumbotron/jumbotron.component';
import { RouterModule } from '@angular/router';
import { PatchInvoiceComponent } from './invoice/patch-invoice/patch-invoice.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    InvoiceResourcesComponent,
    ValidateInvoiceComponent,
    JumbotronComponent,
    PatchInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'invoice/validateInvoice', component: ValidateInvoiceComponent },
      { path: 'invoice/patch', component: PatchInvoiceComponent },
      { path: 'invoice', component: InvoiceResourcesComponent },
      { path: '', component: JumbotronComponent }
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
