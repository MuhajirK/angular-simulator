import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from '../user.service';
import { User } from '../interfaces';

@Component({
  selector: 'app-users-page',
  imports: [CommonModule],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent implements OnInit, OnDestroy {
  public users$!: Observable<User[]>;
  private destroy$ = new Subject<void>();

  private userService = inject(UserService);

  ngOnInit(): void {
    this.users$ = this.userService.users$.pipe(
      takeUntil(this.destroy$)
    );

    this.userService.loadUsers().subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}