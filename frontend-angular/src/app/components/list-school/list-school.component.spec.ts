import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSchoolComponent } from './list-school.component';

describe('ListSchoolComponent', () => {
  let component: ListSchoolComponent;
  let fixture: ComponentFixture<ListSchoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSchoolComponent]
    });
    fixture = TestBed.createComponent(ListSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
