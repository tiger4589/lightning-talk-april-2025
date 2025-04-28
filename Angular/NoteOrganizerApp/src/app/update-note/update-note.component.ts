import { Component } from '@angular/core';
import { NoteService } from '../note-service/note.service';
import { Note } from '../note';

@Component({
  selector: 'app-update-note',
  standalone: true,
  imports: [],
  templateUrl: './update-note.component.html',
  styleUrl: './update-note.component.css'
})
export class UpdateNoteComponent {
  constructor(private noteService: NoteService) {}

  updateNote(id: string, title: string, content: string): void {
    const updatedNote: Note = {
      id: Number(id),
      title,
      content,
      dateCreated: new Date() 
    };
    this.noteService.updateNote(Number(id), updatedNote);
  }
}
