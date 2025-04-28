import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNotesComponent } from './get-notes.component';

describe('GetNotesComponent', () => {
  let component: GetNotesComponent;
  let fixture: ComponentFixture<GetNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
