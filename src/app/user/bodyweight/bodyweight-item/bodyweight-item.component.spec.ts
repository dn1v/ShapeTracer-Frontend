import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyweightItemComponent } from './bodyweight-item.component';

describe('BodyweightItemComponent', () => {
  let component: BodyweightItemComponent;
  let fixture: ComponentFixture<BodyweightItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyweightItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyweightItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
