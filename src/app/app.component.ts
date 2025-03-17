import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from "./main-content/main-content.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export default class AppComponent {
  title = 'sakura';
}
