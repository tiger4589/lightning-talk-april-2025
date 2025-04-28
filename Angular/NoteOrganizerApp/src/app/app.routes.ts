import { Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { DeleteNoteComponent } from './delete-note/delete-note.component';
import { GetNoteComponent } from './get-note/get-note.component';
import { GetNotesComponent } from './get-notes/get-notes.component';
import { UpdateNoteComponent } from './update-note/update-note.component';

export const routes: Routes = [
    { path: 'add-note', component: AddNoteComponent },
  { path: 'delete-note', component: DeleteNoteComponent },
  { path: 'update-note', component: UpdateNoteComponent },
  { path: 'get-note/:id', component: GetNoteComponent }, // Uses route parameter for ID
  { path: 'get-notes', component: GetNotesComponent },
  { path: '', redirectTo: '/get-notes', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/get-notes' }
];
