import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantifySelectComponent } from './quantify-select.component';

describe('QuantifySelectComponent', () => {
  let component: QuantifySelectComponent;
  let fixture: ComponentFixture<QuantifySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantifySelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantifySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
