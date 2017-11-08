import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressViewComponent } from './press-view.component';

describe('PressViewComponent', () => {
  let component: PressViewComponent;
  let fixture: ComponentFixture<PressViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
