import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNoteComponent } from './get-note.component';

describe('GetNoteComponent', () => {
  let component: GetNoteComponent;
  let fixture: ComponentFixture<GetNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
