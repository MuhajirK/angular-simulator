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
  private readonly LAST_VISIT_DATE: string = 'lastVisitDate';
  private readonly VISIT_COUNT: string = 'visitCount';

  constructor(){
    this.isBasicColor(Colors.BLACK);
    this.saveVisit();
  }


  // ДЗ 15.2 создать метод внутри app.component, который проверяет, является ли переданный цвет основным

  isBasicColor(color: Colors): boolean{
    return (color === Colors.RED || color === Colors.GREEN || color === Colors.BLUE) 
  }
  
  
  // ДЗ 15 №3-4 создать метод, который сохраняет в локальное хранилище дату последнего захода и количество посещений

  saveVisit(): void {
    const currentDate = new Date().toLocaleString();
    localStorage.setItem(this.LAST_VISIT_DATE, currentDate);
    const savedCount = this.getVisitCount();
    if (savedCount !== null) {
      const newCount: number = Number(savedCount) + 1;
      localStorage.setItem(this.VISIT_COUNT, String(newCount));
    }
    else {
      localStorage.setItem(this.VISIT_COUNT, '1');
    };
  };

  getVisitCount(): string|null {
    return localStorage.getItem(this.VISIT_COUNT);
  };
}