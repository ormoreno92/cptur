import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateResultComponent } from './affiliate-result.component';

describe('AffiliateResultComponent', () => {
  let component: AffiliateResultComponent;
  let fixture: ComponentFixture<AffiliateResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliateResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
