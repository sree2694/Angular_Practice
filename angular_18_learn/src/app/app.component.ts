import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_learn';
  @HostListener('window:scroll')
  onScroll() {
    console.log("Scrolling")
  }
  @HostListener('contextmenu')
  orRightClick(event: any) {
   // event.preventDefault();
  }

}
