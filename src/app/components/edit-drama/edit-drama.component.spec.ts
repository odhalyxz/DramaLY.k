import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDramaComponent } from './edit-drama.component';

describe('EditDramaComponent', () => {
  let component: EditDramaComponent;
  let fixture: ComponentFixture<EditDramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
