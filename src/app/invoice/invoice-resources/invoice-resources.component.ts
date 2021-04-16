import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { InvoiceResourceService } from '../invoice-resource.service';

@Component({
  selector: 'app-invoice-resources',
  templateUrl: './invoice-resources.component.html',
  styleUrls: ['./invoice-resources.component.css']
})
export class InvoiceResourcesComponent implements OnInit {

  @Input() res_url: any;

  private invoiceResources: any = [
    [
      {
        service: 'Get All',
        message: 'Gets all the invoice',
        method: 'GET',
        url: '/invoice/getAll'

      },
      {
        service: 'Get Invoice',
        message: 'Get invoice for provided invoice number',
        method: 'GET',
        url: '/invoice/getInvoice'

      },
      {
        service: 'Validate Invoice',
        message: 'Provide validation for invoice',
        method: 'POST',
        url: '/invoice/validateInvoice'

      }
    ],
    [
      {
        service: 'Update Invoice',
        message: 'Updates the Invoice with provided file',
        method: 'POST',
        url: '/invoice/updateInvoice'

      }
    ]
  ];

  constructor(private service: InvoiceResourceService, private http: HttpClient) {

  }

  ngOnInit(): void {


  }

  get resources() {
    return this.invoiceResources;
  }

  test(res: any) {

    console.log(this.res_url);
  }

}
