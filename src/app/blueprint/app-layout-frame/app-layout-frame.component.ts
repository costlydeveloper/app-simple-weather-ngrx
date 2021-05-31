import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from '../../library/animation/fade-in-out.animation';

@Component({
  selector: 'app-app-layout-frame',
  templateUrl: './app-layout-frame.component.html',
  styleUrls: ['./app-layout-frame.component.scss'],
  animations: [fadeAnimation],
})
export class AppLayoutFrameComponent {
  contentState: string = 'active';

  public getRouterOutletState(outlet: RouterOutlet): any {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public onRouterOutletActivate(event: any): void {}
}
