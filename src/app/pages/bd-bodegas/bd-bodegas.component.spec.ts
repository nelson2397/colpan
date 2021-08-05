import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdBodegasComponent } from './bd-bodegas.component';

describe('BdBodegasComponent', () => {
  let component: BdBodegasComponent;
  let fixture: ComponentFixture<BdBodegasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdBodegasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdBodegasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
