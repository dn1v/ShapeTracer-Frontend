import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMeasurementsItemComponent } from './body-measurements-item.component';

describe('BodyMeasurementsItemComponent', () => {
  let component: BodyMeasurementsItemComponent;
  let fixture: ComponentFixture<BodyMeasurementsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyMeasurementsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyMeasurementsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
