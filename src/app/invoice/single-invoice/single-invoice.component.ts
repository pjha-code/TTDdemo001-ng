import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InvoiceResourceService } from '../invoice-resource.service';
@Component({
  selector: 'app-single-invoice',
  templateUrl: './single-invoice.component.html',
  styleUrls: ['./single-invoice.component.css']
})
export class SingleInvoiceComponent implements OnInit {

  private _invoiceNumber: any;
  private _resp: any[] = [];
  private _isDisabled = true;
  private tempInvNumHolder: any;



  form: FormGroup = new FormGroup({
    invoiceNumber: new FormControl('', Validators.required)
  });

  constructor(private route: ActivatedRoute, private service: InvoiceResourceService) {
    this._invoiceNumber = route.snapshot.paramMap.get("InvoiceNumber");
  }

  ngOnInit(): void {

    if (this._invoiceNumber != null) {
      this.getInvoiceCall();
    }
  }


  getInvoiceCall() {
    this.service.getInvoice(this._invoiceNumber)
      .subscribe(data => {
        let temp = JSON.parse(JSON.stringify(data));
        this._resp = temp.items;
        console.log(this._resp);
      });
  }

  get invoiceNumber() {
    return this._invoiceNumber;
  }

  get resp() {
    return this._resp;
  }

  get isDisabled() {
    return this._isDisabled
  }

  onKeyUp(inputField: HTMLInputElement) {

    if (inputField.value.length < 5)
      this._isDisabled = true;
    else {
      this._isDisabled = false;
      this.tempInvNumHolder = inputField.value;
    }
  }

  onSubmit() {
    this._invoiceNumber = this.tempInvNumHolder;
    this.getInvoiceCall();
  }

}
