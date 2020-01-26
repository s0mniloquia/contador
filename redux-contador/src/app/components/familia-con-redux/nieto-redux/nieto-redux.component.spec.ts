import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NietoReduxComponent } from './nieto-redux.component';

describe('NietoReduxComponent', () => {
  let component: NietoReduxComponent;
  let fixture: ComponentFixture<NietoReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NietoReduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NietoReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
