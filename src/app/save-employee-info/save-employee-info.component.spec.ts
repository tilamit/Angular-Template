import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEmployeeInfoComponent } from './save-employee-info.component';

describe('SaveEmployeeInfoComponent', () => {
  let component: SaveEmployeeInfoComponent;
  let fixture: ComponentFixture<SaveEmployeeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveEmployeeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveEmployeeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
