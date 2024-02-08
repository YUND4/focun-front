import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, ReplaySubject, tap } from 'rxjs';
import { User } from '@core/user/user.types';
import { BASE_URL } from '@core/constants/api.constants';
import { AuthService } from '@core/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class UserService
{
    private _user: ReplaySubject<User> = new ReplaySubject<User>(1);

    private _anonymus_user: User = {
        id: "",
        email: "",
        name: "",
        last_name: ""
      }
    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */
    set user(value: User)
    {
        // Store the value
        this._user.next(value);
    }

    get user$(): Observable<User>
    {
        return this._user.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the current logged in user data
     */
    get(): Observable<User>
    {
        return this._httpClient.get<User>(`${BASE_URL}/me/`).pipe(
            tap((response) => {
                this._user.next(response);
            }),
            catchError(error => {
                console.error(error);
                this._user.next(this._anonymus_user);
                return of(null);
            })
        );
    }

    /**
     * Update the user
     *
     * @param user
     */
    update(user: User): Observable<any>
    {
        return this._httpClient.put<User>('/me/', {user}).pipe(
            map((response) => {
                this._user.next(response);
            })
        );
    }
}
