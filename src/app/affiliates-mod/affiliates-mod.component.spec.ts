import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatesModComponent } from './affiliates-mod.component';

describe('AffiliatesModComponent', () => {
  let component: AffiliatesModComponent;
  let fixture: ComponentFixture<AffiliatesModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliatesModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliatesModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
