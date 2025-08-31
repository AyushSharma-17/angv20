import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveVal } from './reactive-val';

describe('ReactiveVal', () => {
  let component: ReactiveVal;
  let fixture: ComponentFixture<ReactiveVal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveVal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveVal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
