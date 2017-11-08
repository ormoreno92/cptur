import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasCotelcoComponent } from './marcas-cotelco.component';

describe('MarcasCotelcoComponent', () => {
  let component: MarcasCotelcoComponent;
  let fixture: ComponentFixture<MarcasCotelcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasCotelcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasCotelcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
