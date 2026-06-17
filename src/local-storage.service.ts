import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  
  private readonly LAST_VISIT_DATE = 'lastVisitDate';
  private readonly VISIT_COUNT = 'visitCount';

  setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  };

  getItem<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    if (!data) return null;
    return JSON.parse(data) as T;
  };

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clearAll(): void {
    localStorage.clear();
  }

  getVisitCount(): number | null {
    return this.getItem<number>(this.VISIT_COUNT);
  };

  getLastVisitDate(): string | null {
    return this.getItem<string>(this.LAST_VISIT_DATE);
  };

  saveVisit(): void {
    const currentDate = new Date().toLocaleString();
    this.setItem<string>(this.LAST_VISIT_DATE, currentDate);
    const savedCount = this.getVisitCount();
    const newCount = savedCount ? savedCount + 1 : 1;
    this.setItem<number>(this.VISIT_COUNT, newCount);
  };
};
