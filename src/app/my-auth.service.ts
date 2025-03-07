import {Injectable} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {filter} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyAuthService {

  private _failedEmail = false;
  private _otherFailure = false;
  isAuthenticated$ = this.auth.isAuthenticated$;
  isLoading$ = this.auth.isLoading$;
  user$ = this.auth.user$;

  constructor(private auth: AuthService) {
    this.user$.pipe(
      filter(user => !!user)
    ).subscribe(() => {
      this._failedEmail = false;
      this._otherFailure = false;
    });
    this.auth.error$.subscribe((error) => {
      if (error.message === 'No account for email.') {
        this._failedEmail = true;
      } else {
        this._otherFailure = true;
      }
    });
  }

  login(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({ returnTo: document.location.origin });
  }

  get failedEmail(): boolean {
    return this._failedEmail;
  }

  get otherFailure(): boolean {
    return this._otherFailure;
  }

}
