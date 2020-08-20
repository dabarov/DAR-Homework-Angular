import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../shared/types';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  navItems: NavItem[] = [];

  @Input()
  logoPath: string = '';

  isLoggedIn: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((val) => (this.isLoggedIn = val));
  }

  logout() {
    this.authService.logout();
  }
}
