import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveAtr } from './directive-atr';

describe('DirectiveAtr', () => {
  let component: DirectiveAtr;
  let fixture: ComponentFixture<DirectiveAtr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveAtr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveAtr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
