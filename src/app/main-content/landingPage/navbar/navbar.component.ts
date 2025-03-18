import { Component } from '@angular/core';
import { LandingPageComponent } from "../landingPage.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LandingPageComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
