import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceListViewerComponent } from './invoice-list-viewer.component';

describe('InvoiceListViewerComponent', () => {
  let component: InvoiceListViewerComponent;
  let fixture: ComponentFixture<InvoiceListViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceListViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceListViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
