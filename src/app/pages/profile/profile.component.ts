import {Component, OnInit} from '@angular/core';
import {MyAuthService} from "../../my-auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileJson: string = null;

  constructor(public myAuth: MyAuthService) {}

  ngOnInit() {
    this.myAuth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
  }
}
