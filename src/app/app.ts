import { Component, signal } from '@angular/core';
import { TrainingList } from './training-list/training-list';

@Component({
  imports: [TrainingList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TP5');
}
