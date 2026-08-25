import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('Coding_master');
  showSurprise = false;
  hugging = false;

  brotherName = 'ROHAN';
  sisterName = 'POOJA';

  openSurprise() {
    this.showSurprise = !this.showSurprise;

    if (this.showSurprise) {
      this.hugging = true;

      setTimeout(() => {
        this.hugging = false;
      }, 2200);
    }
  }

  reloadPage() {
    window.location.reload();
  }
}
