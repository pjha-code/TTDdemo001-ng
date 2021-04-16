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
import { InvoiceResourceService } from './invoice/invoice-resource.service';
import { InvoiceListViewerComponent } from './invoice/invoice-list-viewer/invoice-list-viewer.component';
import { SingleInvoiceComponent } from './invoice/single-invoice/single-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    InvoiceResourcesComponent,
    ValidateInvoiceComponent,
    JumbotronComponent,
    PatchInvoiceComponent,
    InvoiceListViewerComponent,
    SingleInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'invoice/validateInvoice', component: ValidateInvoiceComponent },
      { path: 'invoice/updateInvoice', component: PatchInvoiceComponent },
      { path: 'invoice/getAll', component: InvoiceListViewerComponent },
      { path: 'invoice/getInvoice/:InvoiceNumber', component: SingleInvoiceComponent },
      { path: 'invoice/getInvoice', component: SingleInvoiceComponent },
      { path: 'invoice', component: InvoiceResourcesComponent },
      { path: '', component: JumbotronComponent }
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    InvoiceResourceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
