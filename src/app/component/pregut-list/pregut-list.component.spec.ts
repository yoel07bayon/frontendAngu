import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregutListComponent } from './pregut-list.component';

describe('PregutListComponent', () => {
  let component: PregutListComponent;
  let fixture: ComponentFixture<PregutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregutListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
