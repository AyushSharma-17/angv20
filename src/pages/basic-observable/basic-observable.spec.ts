import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicObservable } from './basic-observable';

describe('BasicObservable', () => {
  let component: BasicObservable;
  let fixture: ComponentFixture<BasicObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicObservable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicObservable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
