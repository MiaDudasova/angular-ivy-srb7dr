import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent {
  name = 'Angular ' + VERSION.major;
}
