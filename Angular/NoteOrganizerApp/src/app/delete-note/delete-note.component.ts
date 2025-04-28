import { Component } from '@angular/core';
import { NoteService } from '../note-service/note.service';

@Component({
  selector: 'app-delete-note',
  standalone: true,
  imports: [],
  templateUrl: './delete-note.component.html',
  styleUrl: './delete-note.component.css'
})
export class DeleteNoteComponent {
[x: string]: any;
  constructor(private noteService: NoteService) {}

  deleteNote(id: string): void {
    this.noteService.deleteNote(Number(id));
  }
}
