import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNameComponent } from './list-name.component';

describe('ListNameComponent', () => {
  let component: ListNameComponent;
  let fixture: ComponentFixture<ListNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
