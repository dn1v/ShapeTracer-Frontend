import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionRpeModalComponent } from './session-rpe-modal.component';

describe('SessionRpeModalComponent', () => {
  let component: SessionRpeModalComponent;
  let fixture: ComponentFixture<SessionRpeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionRpeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionRpeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
