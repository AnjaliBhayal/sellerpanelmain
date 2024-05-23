import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletOfferComponent } from './outlet-offer.component';

describe('OutletOfferComponent', () => {
  let component: OutletOfferComponent;
  let fixture: ComponentFixture<OutletOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
