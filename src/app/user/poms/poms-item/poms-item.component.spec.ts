import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomsItemComponent } from './poms-item.component';

describe('PomsItemComponent', () => {
  let component: PomsItemComponent;
  let fixture: ComponentFixture<PomsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PomsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
