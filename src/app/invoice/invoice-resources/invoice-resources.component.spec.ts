import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceResourcesComponent } from './invoice-resources.component';

describe('InvoiceResourcesComponent', () => {
  let component: InvoiceResourcesComponent;
  let fixture: ComponentFixture<InvoiceResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
