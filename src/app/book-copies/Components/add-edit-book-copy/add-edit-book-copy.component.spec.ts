import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBookCopyComponent } from './add-edit-book-copy.component';

describe('AddEditBookCopyComponent', () => {
  let component: AddEditBookCopyComponent;
  let fixture: ComponentFixture<AddEditBookCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBookCopyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBookCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
