import { Component } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note-service/note.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-get-note',
  standalone: true,
  imports: [NgIf],
  templateUrl: './get-note.component.html',
  styleUrl: './get-note.component.css'
})
export class GetNoteComponent {
  note: Note | undefined;

  constructor(private noteService: NoteService) {}

  getNote(id: string): void {
    this.note = this.noteService.getNote(Number(id));
  }
}
