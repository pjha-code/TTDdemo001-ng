import { Component, OnInit } from '@angular/core';
import { InvoiceResourceService } from '../invoice-resource.service';

@Component({
  selector: 'app-invoice-list-viewer',
  templateUrl: './invoice-list-viewer.component.html',
  styleUrls: ['./invoice-list-viewer.component.css']
})
export class InvoiceListViewerComponent implements OnInit {

  private invoiceList: any[] = [];
  x: any;
  constructor(private service: InvoiceResourceService) {
    service.getAllInvoice().subscribe(data => {
      this.invoiceList = JSON.parse(JSON.stringify(data));
    });

  }

  get invoices() {
    return this.invoiceList;
  }

  ngOnInit(): void {

  }

}
