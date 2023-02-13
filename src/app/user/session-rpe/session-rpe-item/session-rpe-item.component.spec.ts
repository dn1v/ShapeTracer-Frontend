import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionRpeItemComponent } from './session-rpe-item.component';

describe('SessionRpeItemComponent', () => {
  let component: SessionRpeItemComponent;
  let fixture: ComponentFixture<SessionRpeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionRpeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionRpeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
