import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcardsComponent } from './prodcards.component';

describe('ProdcardsComponent', () => {
  let component: ProdcardsComponent;
  let fixture: ComponentFixture<ProdcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdcardsComponent]
    });
    fixture = TestBed.createComponent(ProdcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
