import {Component, Inject, OnInit} from '@angular/core';
import {faPowerOff, faUser} from '@fortawesome/free-solid-svg-icons';
import {DOCUMENT} from '@angular/common';
import {MyAuthService} from '../../my-auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isCollapsed = true;
  faUser = faUser;
  faPowerOff = faPowerOff;

  constructor(
    public myAuth: MyAuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit() {}

  loginWithRedirect() {
    this.myAuth.login();
  }

  logout() {
    this.myAuth.logout();
  }
}
