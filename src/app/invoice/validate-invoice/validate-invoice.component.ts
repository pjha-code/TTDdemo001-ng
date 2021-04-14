import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-validate-invoice',
  templateUrl: './validate-invoice.component.html',
  styleUrls: ['./validate-invoice.component.css']
})
export class ValidateInvoiceComponent implements OnInit {



  constructor() { }


  resp = `
  {
    responseCode:200,
    responseStatus:OK
  }
  `;

  ngOnInit(): void {
  }
}
