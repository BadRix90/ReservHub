import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerInfo } from './employer-info';

describe('EmployerInfo', () => {
  let component: EmployerInfo;
  let fixture: ComponentFixture<EmployerInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
