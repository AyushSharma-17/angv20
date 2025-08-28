import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tempvalid } from './tempvalid';

describe('Tempvalid', () => {
  let component: Tempvalid;
  let fixture: ComponentFixture<Tempvalid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tempvalid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tempvalid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
