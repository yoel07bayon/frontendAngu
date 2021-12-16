import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioListComponent } from './inicio-list.component';

describe('InicioListComponent', () => {
  let component: InicioListComponent;
  let fixture: ComponentFixture<InicioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
