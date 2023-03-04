import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomsModalComponent } from './poms-modal.component';

describe('PomsModalComponent', () => {
  let component: PomsModalComponent;
  let fixture: ComponentFixture<PomsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PomsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
