import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signall } from './signall';

describe('Signall', () => {
  let component: Signall;
  let fixture: ComponentFixture<Signall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
