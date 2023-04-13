import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNameComponent } from './add-name.component';

describe('AddNameComponent', () => {
  let component: AddNameComponent;
  let fixture: ComponentFixture<AddNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
