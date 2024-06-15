import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMedicineComponent } from './stock-medicine.component';

describe('StockMedicineComponent', () => {
  let component: StockMedicineComponent;
  let fixture: ComponentFixture<StockMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockMedicineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
