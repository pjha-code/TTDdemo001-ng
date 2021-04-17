import { trigger, useAnimation } from '@angular/animations';
import { HttpClient, HttpEventType, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InvoiceResourceService } from '../invoice-resource.service';
import { FileValidators } from './file.validators';
import { progressBar } from './patch-invoice-animation';

@Component({
  selector: 'app-patch-invoice',
  templateUrl: './patch-invoice.component.html',
  styleUrls: ['./patch-invoice.component.css'],
  animations: [
    progressBar
  ]
})
export class PatchInvoiceComponent {
  private f: any;

  constructor(private service: InvoiceResourceService) { }

  private _isTouched = false;
  private _isFileSizeCorrect = true;
  private _progress: any;
  private _progress_percent!: String;
  prgSts: string = "ul";
  // private _resp: any[] = [];
  private _headers: any[] = [];
  private _validRecorList: any[] = [];
  private _invalidRecorList: any[] = [];

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

  // get resp() {
  //   return this._resp;
  // }

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
    const formData = new FormData();
    const httpHeaders: HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    formData.append('file', this.f, this.form.get('file')?.value);
    this.service.updateInvoice(formData).subscribe((event: HttpEvent<any> | any) => {
      const type = event.type;

      // console.log(event);
      if (type === HttpEventType.UploadProgress) {

        this._progress = Math.round(event.total / event.loaded * 100);
        this._progress_percent = this._progress + '%';
        this.prgSts = 'ul';

      } else if (type === HttpEventType.Response) {

        this.prgSts = 'u';
        let tempRespArr: any[] = (JSON.parse(JSON.stringify(event.body))).response;


        tempRespArr.forEach((element, index) => {
          if (index == 0)
            this._headers = element.response
          else if (element.valid === true)
            this._validRecorList.push(element);
          else
            this._invalidRecorList.push(element)
        });
        console.log(this._headers)
        console.log(this._invalidRecorList)
        console.log(this._validRecorList)

        // this._headers = this._resp[0].response;
      }
    });
  }


}
