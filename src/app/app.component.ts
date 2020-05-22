import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  colorsList: any[] = [
    { id: 1, name: 'Black' },
    { id: 2, name: 'White' },
    { id: 3, name: 'Yellow' },
    { id: 4, name: 'Green' },
    { id: 5, name: 'Blue' },
    { id: 6, name: 'Pink' },
    { id: 7, name: 'Red' },
  ];

  colorsSelected: number[] = [4, 7];
}
