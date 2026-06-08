import { Component } from '@angular/core';
import './training';
import {Colors} from '../enums/Color';
import './collection';
import { Ifeatures, IprogramFeatures } from '../interfaces/IFeatures';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  firmName: string = 'румтибет';
  private readonly LAST_VISIT_DATE: string = 'lastVisitDate';
  private readonly VISIT_COUNT: string = 'visitCount';

  
  // ДЗ 16 №1 Для вёрстки блока №2 используйте конструкцию @for. Добавить анимацию при наведении на блоки
  
  focusedFeatureId: number = 0;
  selectedTour: string = '';
  selectedDate: string = '';
  selectedParticipant: string = '';
  currentDate: Date = new Date();
  clicksCount: number = 0;
  isDateActive: boolean = true;
  inputValue: string = '';
  isLoading: boolean = true;


  features: Ifeatures[] = [
    {
      id: 1,
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: '/images/guide-icon.svg'
    },
    {
      id: 2,
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: '/images/safety-icon.svg'
    },
    {
      id: 3,
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: '/images/prise-icon.svg'
    },
  ];

  programFeatureImages: IprogramFeatures[] = [
    {
      id: 1,
      image: '/images/drink-with-view.png'
    },
    {
      id: 2,
      image: '/images/man-on-top.png'
    },
    {
      id: 3,
      image: '/images/man-on-snowbike.png'
    },
    {
      id: 4,
      image: '/images/mountain-valley-river.png'
    }
  ];

  constructor(){
    this.isBasicColor(Colors.BLACK);
    this.saveVisit();
    this.startTimer()

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  };

  isNotValid(): boolean {
    return !this.selectedTour || !this.selectedDate || !this.selectedParticipant;
  }; 

  focusedFeature(featureId: number) {
    this.focusedFeatureId = featureId;
  };

  private startTimer() {
    setInterval(() => {
        this.currentDate = new Date()
    }, 1000);
  };

  increaseCount():number {
    return this.clicksCount ++;
  };

  decreaseCount():number {
    return this.clicksCount --;
  };

  showTask() {
    this.isDateActive = !this.isDateActive;
  };


  // ДЗ 15.2 создать метод внутри app.component, который проверяет, является ли переданный цвет основным

  private isBasicColor(color: Colors): boolean{
    return (color === Colors.RED || color === Colors.GREEN || color === Colors.BLUE);
  }
  
  
  // ДЗ 15 №3-4 создать метод, который сохраняет в локальное хранилище дату последнего захода и количество посещений

  private saveVisit(): void {
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

  private getVisitCount(): string|null {
    return localStorage.getItem(this.VISIT_COUNT);
  };
};