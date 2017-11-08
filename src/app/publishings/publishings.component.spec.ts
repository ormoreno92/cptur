import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingsComponent } from './publishings.component';

describe('PublishingsComponent', () => {
  let component: PublishingsComponent;
  let fixture: ComponentFixture<PublishingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
