import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactvalid } from './reactvalid';

describe('Reactvalid', () => {
  let component: Reactvalid;
  let fixture: ComponentFixture<Reactvalid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactvalid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactvalid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
