import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent {
  name = 'Angular ' + VERSION.major;
}
