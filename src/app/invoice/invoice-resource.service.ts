import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceResourceService {

  private server_url = environment.server_url

  constructor(private http: HttpClient) { }

  invoices: any[] = [];

  test(resourceObj: any) {
    console.log(this.server_url + resourceObj.url + "/getAll")
    const httpHeaders: HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    this.http.get("localhost:8080/invoice/g", { headers: httpHeaders }).subscribe(data => {
      console.log(data);
    });
  }

  getAllInvoice() {
    const httpHeaders: HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    const url = this.server_url + '/invoice/getAll';

    return this.http.get(url, { headers: httpHeaders });
  }

  getInvoice(invoiceNumber: String) {
    const httpHeaders: HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    const url = this.server_url + '/invoice/getInvoice/' + invoiceNumber;
    console.log(url)
    return this.http.get(url, { headers: httpHeaders });
  }

  updateInvoice(formData: FormData) {
    const httpHeaders: HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    const url = this.server_url + '/invoice/updateInvoice';
    return this.http.post(
      url,
      formData,
      {
        headers: httpHeaders,
        reportProgress: true,
        observe: 'events'
      });
  }

}
