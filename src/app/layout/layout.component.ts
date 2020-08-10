import { Component } from '@angular/core';
import { NavItem } from '../shared/types';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  logoPathFromApp = '../assets/logo.svg';

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
      url: '/room',
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
