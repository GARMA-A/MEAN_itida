import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { D1AssignmentInfoCardComponent } from './d1-assignment-info-card/d1-assignment-info-card';

@Component({
  selector: 'app-root',
  imports: [D1AssignmentInfoCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('assignments');
}
