import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTuneComponent } from './new-tune.component';

describe('NewTuneComponent', () => {
  let component: NewTuneComponent;
  let fixture: ComponentFixture<NewTuneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTuneComponent]
    });
    fixture = TestBed.createComponent(NewTuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
