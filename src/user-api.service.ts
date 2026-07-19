import { inject, Injectable } from '@angular/core';
import {User} from '../src/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  http = inject (HttpClient);

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  } 
}
