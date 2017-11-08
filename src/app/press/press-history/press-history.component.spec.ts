import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressHistoryComponent } from './press-history.component';

describe('PressHistoryComponent', () => {
  let component: PressHistoryComponent;
  let fixture: ComponentFixture<PressHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
