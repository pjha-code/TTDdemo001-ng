import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-resources',
  templateUrl: './invoice-resources.component.html',
  styleUrls: ['./invoice-resources.component.css']
})
export class InvoiceResourcesComponent implements OnInit {


  private invoiceResources: any = [
    {
      service: 'Get All',
      message: 'Gets all the invoice',
      method: 'GET',
      url: '/invoice'

    },
    {
      service: 'Get Invoice',
      message: 'Get invoice for provided invoice number',
      method: 'GET',
      url: '/invoice'

    },
    {
      service: 'Validate Invoice',
      message: 'Provide validation for invoice',
      method: 'POST',
      url: '/invoice/validateInvoice'

    },
    {
      service: 'Patch Invoice',
      message: 'Patch Invoice',
      method: 'POST',
      url: '/invoice/patch'

    }
  ];

  constructor() { }

  ngOnInit(): void {


  }

  get resources() {
    return this.invoiceResources;
  }

}
