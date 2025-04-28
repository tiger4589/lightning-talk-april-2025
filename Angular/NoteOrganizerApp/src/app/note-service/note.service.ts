import { Injectable } from '@angular/core';
import { Note } from '../note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private storageKey = 'notes';

  constructor() {}

  getNotes(): any[] {
    const notes = localStorage.getItem(this.storageKey);
    return notes ? JSON.parse(notes) : [];
  }

  getNote(id: number): Note | undefined {
    const notes = this.getNotes();
    return notes.find(note => note.id === id);
  }
 
  addNote(note: Note): void {
    const notes = this.getNotes();
    notes.push(note);
    localStorage.setItem(this.storageKey, JSON.stringify(notes));
  }

  
  updateNote(id: number, updatedNote: Note): void {
    let notes = this.getNotes();
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
      notes[index] = updatedNote;
      localStorage.setItem(this.storageKey, JSON.stringify(notes));
    }
  }
  
  deleteNote(id: number): void {
    let notes = this.getNotes();
    notes = notes.filter(note => note.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(notes));
  }
}
