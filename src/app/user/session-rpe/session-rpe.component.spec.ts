import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionRpeComponent } from './session-rpe.component';

describe('SessionRpeComponent', () => {
  let component: SessionRpeComponent;
  let fixture: ComponentFixture<SessionRpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionRpeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionRpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
