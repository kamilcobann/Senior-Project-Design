import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-protrack-primary-button',
  templateUrl: './protrack-primary-button.component.html',
  styleUrls: ['./protrack-primary-button.component.scss']
})
export class ProtrackPrimaryButtonComponent {

  @Input()
  buttonText? : String;
}
