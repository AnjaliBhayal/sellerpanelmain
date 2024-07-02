import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { CoreMenuItem } from '@core/types';
import { CoreMenu } from '@core1/types/core-menu';
import { menu } from 'app/menu/menu';

@Component({
  selector: '[core-menu-vertical-item]',
  templateUrl: './item.component.html'
}) 
export class CoreMenuVerticalItemComponent {
  @Input()
  item: CoreMenuItem;
  // menuItems: CoreMenu[] = menu;
  activeUrl: string = '';
  
  activeItem = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeUrl = event.urlAfterRedirects;
      }
    });
  }

  getIconSrc(item: CoreMenu): string {
    return this.activeUrl === '/' + item.url ? item.activeIcon : item.icon;
  }
}
