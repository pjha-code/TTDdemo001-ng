import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchInvoiceComponent } from './patch-invoice.component';

describe('PatchInvoiceComponent', () => {
  let component: PatchInvoiceComponent;
  let fixture: ComponentFixture<PatchInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
