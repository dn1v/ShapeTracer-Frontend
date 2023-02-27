import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyweightFormComponent } from './bodyweight-form.component';

describe('BodyweightFormComponent', () => {
  let component: BodyweightFormComponent;
  let fixture: ComponentFixture<BodyweightFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyweightFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyweightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
