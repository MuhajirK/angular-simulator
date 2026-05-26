import { Component } from '@angular/core';
import './training';
import {Colors} from '../enums/Color';
import './collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  firmName: string = 'румтибет';
}


// ДЗ 15.2 создать метод внутри app.component, который проверяет, является ли переданный цвет основным

function isBasicColor(color: Colors): boolean {
  if (color === Colors.RED || color === Colors.GREEN || color === Colors.BLUE) {
    return true;
  };
  return false;
};

isBasicColor(Colors.YELLOW);


// ДЗ 15 №3-4 создать метод, который сохраняет в локальное хранилище дату последнего захода и количество посещений

class VisitTracker {
  LAST_VISIT_DATE: string = 'lastVisitDate';
  VISIT_COUNT: string = 'visitCount';
  constructor() {
    this.getVisitCount();
    this.saveVisit();
  };

  saveVisit(): void {
    const currentDate = new Date().toLocaleString();
    localStorage.setItem(this.LAST_VISIT_DATE, currentDate);
    const savedData = this.getVisitCount();
    if (savedData !== null) {
      const newData: number = Number(savedData) + 1;
      localStorage.setItem(this.VISIT_COUNT, String(newData));
    }
    else {
      localStorage.setItem(this.VISIT_COUNT, '1');
    };
  };

  getVisitCount(): string|null {
    const savedData: string|null = localStorage.getItem('visitCount');
    return savedData;
  };
};

const tracker = new VisitTracker();