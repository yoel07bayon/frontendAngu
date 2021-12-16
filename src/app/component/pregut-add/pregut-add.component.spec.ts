import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregutAddComponent } from './pregut-add.component';

describe('PregutAddComponent', () => {
  let component: PregutAddComponent;
  let fixture: ComponentFixture<PregutAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregutAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregutAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
