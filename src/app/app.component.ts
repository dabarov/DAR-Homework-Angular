import { Component } from '@angular/core';
import { NavItem } from './shared/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DAR-Homework-Angular';

  navItemsFromApp: NavItem[] = [
    {
      title: 'Users',
      enabled: true,
      url: '/users',
    },
    {
      title: 'Videos',
      enabled: false,
      url: '/videos',
    },
    {
      title: 'Room',
      enabled: true,
      url: '',
    },
  ];

  sideNavItemsFromApp: NavItem[] = [
    {
      title: 'Dashboard',
      enabled: true,
      url: '/dashboard',
    },
    {
      title: 'Statistics',
      enabled: true,
      url: '/stats',
    },
    {
      title: 'Settings',
      enabled: true,
      url: '/settings',
    },
  ];
}
