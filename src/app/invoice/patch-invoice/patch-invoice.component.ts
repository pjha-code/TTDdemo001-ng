import { trigger, useAnimation } from '@angular/animations';
import { HttpClient, HttpEventType, HttpHeaders, HttpEvent, HttpResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { InvoiceResourceService } from '../invoice-resource.service';
import { FileValidators } from './file.validators';
import { progressBar/*, test*/ } from './patch-invoice-animation';


@Component({
  selector: 'app-patch-invoice',
  templateUrl: './patch-invoice.component.html',
  styleUrls: ['./patch-invoice.component.css'],
  animations: [
    progressBar,
    // test
  ]
})
export class PatchInvoiceComponent implements OnDestroy {

  private f: any;

  constructor(private service: InvoiceResourceService) { }

  private _isTouched = false;
  private _isFileSizeCorrect = true;
  private _progress: any;
  private _progress_percent!: String;
  prgSts: string = "upldg";
  // testStr = 's1';
  private _headers: any[] = [];
  private _validRecorList: any[] = [];
  private _invalidRecorList: any[] = [];
  private _displaySpinner = false;
  private _subscription!: Subscription;

  form: FormGroup = new FormGroup({
    file: new FormControl('', FileValidators.fileExtensionCheck)
  });

  get isTouched(): boolean {
    return this._isTouched;
  }

  get isFileSizeCorrect(): boolean {
    return this._isFileSizeCorrect;
  }

  get progress() {
    return this._progress;
  }

  get progressPercent() {
    return this._progress_percent;
  }

  get file() {
    return this.form.get('file');
  }

  get headers() {
    return this._headers;
  }

  get validRecorList() {
    return this._validRecorList;
  }

  get invalidRecorList() {
    return this._invalidRecorList;
  }

  get displaySpinner() {
    return this._displaySpinner;
  }

  onFocusOut(event: any) {
    this._isTouched = true;
    const files = event.target.files;

    if (files[0]?.size) {
      const sz = files[0]?.size / 1024;
      if (sz > 500) {
        this._isFileSizeCorrect = false;
      }
      else {
        this._isFileSizeCorrect = true;
        this.f = files[0];
      }
    }
  }

  submit() {
    this._displaySpinner = true;
    const formData = new FormData();
    const httpHeaders: HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    formData.append('file', this.f, this.form.get('file')?.value);

    this._headers = [];
    this._invalidRecorList = [];
    this._validRecorList = [];

    this._subscription = this.service.updateInvoice(formData).subscribe((event: HttpEvent<any> | any) => {
      const type = event.type;

      // console.log(event);
      if (type === HttpEventType.UploadProgress) {

        this._progress = Math.round(event.total / event.loaded * 100);
        this._progress_percent = this._progress + '%';
        this.prgSts = 'upldg';

      } else if (type === HttpEventType.Response) {

        this.prgSts = 'upldd';
        let tempRespArr: any[] = (JSON.parse(JSON.stringify(event.body))).response;


        tempRespArr.forEach((element, index) => {
          if (index == 0)
            this._headers = element.response
          else if (element.valid === true)
            this._validRecorList.push(element);
          else
            this._invalidRecorList.push(element)
        });

      }
    });
  }
  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }
}
