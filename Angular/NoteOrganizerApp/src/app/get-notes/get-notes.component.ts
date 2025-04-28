import { Component } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note-service/note.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-get-notes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './get-notes.component.html',
  styleUrl: './get-notes.component.css'
})
export class GetNotesComponent {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }
}
