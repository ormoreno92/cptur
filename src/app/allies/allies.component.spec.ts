import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlliesComponent } from './allies.component';

describe('AlliesComponent', () => {
  let component: AlliesComponent;
  let fixture: ComponentFixture<AlliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
