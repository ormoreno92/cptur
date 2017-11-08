import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsResultComponent } from './events-result.component';

describe('EventsResultComponent', () => {
  let component: EventsResultComponent;
  let fixture: ComponentFixture<EventsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
