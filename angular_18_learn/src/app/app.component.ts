import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AttributeDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_learn';
}
