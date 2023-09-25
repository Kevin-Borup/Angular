import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunesComponent } from './tunes.component';

describe('TunesComponent', () => {
  let component: TunesComponent;
  let fixture: ComponentFixture<TunesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TunesComponent]
    });
    fixture = TestBed.createComponent(TunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
