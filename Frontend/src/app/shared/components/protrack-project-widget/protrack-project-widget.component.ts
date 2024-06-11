import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-protrack-project-widget',
  templateUrl: './protrack-project-widget.component.html',
  styleUrls: ['./protrack-project-widget.component.scss']
})
export class ProtrackProjectWidgetComponent {

  @Input() count?:Number
  @Input() innerText?:String
}
