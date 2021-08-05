import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdRecetasComponent } from './bd-recetas.component';

describe('BdRecetasComponent', () => {
  let component: BdRecetasComponent;
  let fixture: ComponentFixture<BdRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdRecetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
