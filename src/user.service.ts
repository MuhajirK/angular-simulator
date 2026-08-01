import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { UserApiService } from './user-api.service';
import { User } from '../src/interfaces';
import { MessagesControlService } from './messages-control.service';
import { LoadingServiceService } from './loading-service.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  private usersSubject = new BehaviorSubject<User[]>([]);
  public users$ = this.usersSubject.asObservable();

  private userApiService = inject(UserApiService);
  private messageService = inject(MessagesControlService);
  private loaderService = inject(LoadingServiceService);


  setUsers(users: User[]): void {
    this.usersSubject.next(users);
  }

  getUsers(): User[] {
    return this.usersSubject.getValue();
  }

  loadUsers(): Observable<User[]> {
   this.loaderService.showLoading();

    return this.userApiService.getUsers().pipe(
      tap((users: User[]) => {
        this.usersSubject.next(users);
        this.messageService.showSuccess('Данные пользователей загружены успешно');
      }),
      
      catchError((error: any) => {
        this.messageService.showError(
          'Не удалось загрузить данные пользователей. Попробуйте позже.'
        );
        this.usersSubject.next([]);
        return of([]);
      }),
      
      finalize(() => {
        this.loaderService.hideLoading();
      })
    );
  };
};

