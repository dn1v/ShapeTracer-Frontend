import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POMSComponent } from './poms.component';

describe('POMSComponent', () => {
  let component: POMSComponent;
  let fixture: ComponentFixture<POMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ POMSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(POMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
