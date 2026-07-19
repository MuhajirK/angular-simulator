import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { LoadingServiceService } from '../loading-service.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { debounceTime, Subject, Subscription, takeUntil, tap } from 'rxjs';


@Component({
  selector: 'app-loading-page',
  imports: [CommonModule],
  templateUrl: './loading-page.component.html',
  styleUrl: './loading-page.component.scss',
})
export class LoadingPageComponent implements OnInit, OnDestroy {

  loadingService = inject(LoadingServiceService);
  isLoaderVisible: boolean = false;
  private loaderSubscription!: Subscription;

  ngOnInit(): void {
    this.loaderSubscription = this.loadingService.loading$
    .pipe(
      tap((state: boolean) => {
        this.isLoaderVisible = state;
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.loaderSubscription.unsubscribe();
  }

}
