import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usg } from './usg';

describe('Usg', () => {
  let component: Usg;
  let fixture: ComponentFixture<Usg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
