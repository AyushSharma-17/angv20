import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeNewC } from './pipe-new-c';

describe('PipeNewC', () => {
  let component: PipeNewC;
  let fixture: ComponentFixture<PipeNewC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeNewC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeNewC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
