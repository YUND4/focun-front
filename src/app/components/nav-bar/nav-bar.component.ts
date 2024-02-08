import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/auth/auth.service';
import { UserService } from '@core/user/user.service';
import { User } from '@core/user/user.types';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'layout-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public isMenuOpen = false;
  public isDropdownOpen = false;
  public user: User;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _userService: UserService,
    private _authUser: AuthService
  ) {
  }

  get authenticated(): boolean {
    return this._authUser.isAuthenticated
  }

  ngOnInit(): void {
    this._userService.user$
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe((user: User) => {
            this.user = user;
        });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toogleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen
  }

}
