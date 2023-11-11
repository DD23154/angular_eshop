import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../user';
import { Observable, catchError, tap, throwError, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'assets/users_list.json';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: number): Observable<User | undefined> {
    return this.getUsers()
      .pipe(
        map((users: User[]) => users.find(p => p.userID === id))
      );
  }
}