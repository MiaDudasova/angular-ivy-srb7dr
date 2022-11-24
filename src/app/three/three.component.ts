import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
})
export class ThreeComponent {
  name = 'Angular ' + VERSION.major;
}
