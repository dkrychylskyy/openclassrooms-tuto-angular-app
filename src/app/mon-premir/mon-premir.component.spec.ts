import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonPremirComponent } from './mon-premir.component';

describe('MonPremirComponent', () => {
  let component: MonPremirComponent;
  let fixture: ComponentFixture<MonPremirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonPremirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonPremirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
