import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { content } from '../../library/animation/loder.animations';

@Component({
  selector: 'app-empty-layout-frame',
  templateUrl: 'empty-layout-frame.component.html',
  styleUrls: ['empty-layout-frame.component.scss'],
  animations: [content],
})
export class EmptyLayoutFrameComponent {
  contentState: string = 'active';

  public getRouterOutletState(outlet: RouterOutlet): any {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
