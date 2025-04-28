import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}

[x: string]: any;
  title = 'NoteOrganizerApp';

  navigateToNote(id: string): void {
    if (id) {
      this.router.navigate(['/get-note', Number(id)]);
    }
  }
}
