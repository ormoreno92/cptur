import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriningDetailComponent } from './trining-detail.component';

describe('TriningDetailComponent', () => {
  let component: TriningDetailComponent;
  let fixture: ComponentFixture<TriningDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriningDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriningDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
