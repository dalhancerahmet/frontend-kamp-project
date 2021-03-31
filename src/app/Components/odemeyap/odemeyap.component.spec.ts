import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdemeyapComponent } from './odemeyap.component';

describe('OdemeyapComponent', () => {
  let component: OdemeyapComponent;
  let fixture: ComponentFixture<OdemeyapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdemeyapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdemeyapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
