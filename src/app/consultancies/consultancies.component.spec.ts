import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultanciesComponent } from './consultancies.component';

describe('ConsultanciesComponent', () => {
  let component: ConsultanciesComponent;
  let fixture: ComponentFixture<ConsultanciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultanciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
