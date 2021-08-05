import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BDMateriaPrimaComponent } from './bd-materia-prima.component';

describe('BDMateriaPrimaComponent', () => {
  let component: BDMateriaPrimaComponent;
  let fixture: ComponentFixture<BDMateriaPrimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BDMateriaPrimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BDMateriaPrimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
