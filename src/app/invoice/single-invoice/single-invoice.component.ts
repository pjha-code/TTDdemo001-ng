import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { InvoiceResourceService } from '../invoice-resource.service';
@Component({
  selector: 'app-single-invoice',
  templateUrl: './single-invoice.component.html',
  styleUrls: ['./single-invoice.component.css']
})
export class SingleInvoiceComponent implements OnInit, OnDestroy {

  private _invoiceNumber: any;
  private _resp: any[] = [];
  private _isDisabled = true;
  private tempInvNumHolder: any;
  private _subscription!: Subscription;
  private _displaySpinner = false;


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

  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }

  getInvoiceCall() {
    this._displaySpinner = true;
    this._subscription = this.service.getInvoice(this._invoiceNumber)
      .subscribe(data => {
        let temp = JSON.parse(JSON.stringify(data));
        this._resp = temp.items;
        console.log(this._resp);
        if (this._resp.length == 0) {
          this._displaySpinner = false;
        }
      });
  }

  get invoiceNumber() {
    return this._invoiceNumber;
  }

  get resp() {
    return this._resp;
  }

  get isDisabled() {
    return this._isDisabled;
  }

  get displaySpinner() {
    return this._displaySpinner;
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
