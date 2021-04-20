import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { InvoiceResourceService } from '../invoice-resource.service';

@Component({
  selector: 'app-invoice-list-viewer',
  templateUrl: './invoice-list-viewer.component.html',
  styleUrls: ['./invoice-list-viewer.component.css']
})
export class InvoiceListViewerComponent implements OnInit, OnDestroy {

  private invoiceList: any[] = [];
  private _displaySpinner = true;
  private subscription!: Subscription;

  constructor(private service: InvoiceResourceService) { }

  get invoices() {
    return this.invoiceList;
  }

  get displaySpinner() {
    return this._displaySpinner;
  }

  ngOnInit(): void {
    this.subscription = this.service.getAllInvoice().subscribe(data => {
      this._displaySpinner = false;
      this.invoiceList = JSON.parse(JSON.stringify(data));
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}