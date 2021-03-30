import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateInvoiceComponent } from './validate-invoice.component';

describe('ValidateInvoiceComponent', () => {
  let component: ValidateInvoiceComponent;
  let fixture: ComponentFixture<ValidateInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
