import { Component } from '@angular/core';
import { NoteService } from '../note-service/note.service';
import { Note } from '../note';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent {
  constructor(private noteService: NoteService) {}

  addNote(title: string, content: string): void {
    const newNote: Note = {
      id: Date.now(),
      title,
      content,
      dateCreated: new Date()
    };
    this.noteService.addNote(newNote);
  }
}
