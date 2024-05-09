import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionCitaComponent } from './creacion-cita.component';

describe('CreacionCitaComponent', () => {
  let component: CreacionCitaComponent;
  let fixture: ComponentFixture<CreacionCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreacionCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
