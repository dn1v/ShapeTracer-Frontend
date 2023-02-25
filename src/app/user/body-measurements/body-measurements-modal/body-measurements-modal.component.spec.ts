import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMeasurementsModalComponent } from './body-measurements-modal.component';

describe('BodyMeasurementsModalComponent', () => {
  let component: BodyMeasurementsModalComponent;
  let fixture: ComponentFixture<BodyMeasurementsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyMeasurementsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyMeasurementsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
