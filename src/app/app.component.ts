import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasContainerComponent } from './components/canvas-container/canvas-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CanvasContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-playground';
}
