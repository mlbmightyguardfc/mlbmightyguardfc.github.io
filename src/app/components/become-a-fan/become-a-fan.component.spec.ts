import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAFanComponent } from './become-a-fan.component';

describe('BecomeAFanComponent', () => {
  let component: BecomeAFanComponent;
  let fixture: ComponentFixture<BecomeAFanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomeAFanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecomeAFanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
