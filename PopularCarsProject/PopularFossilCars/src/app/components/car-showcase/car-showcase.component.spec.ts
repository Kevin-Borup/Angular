import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShowcaseComponent } from './car-showcase.component';

describe('CarShowcaseComponent', () => {
  let component: CarShowcaseComponent;
  let fixture: ComponentFixture<CarShowcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarShowcaseComponent]
    });
    fixture = TestBed.createComponent(CarShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
