import { Component } from '@angular/core';
import { DatePipe, } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ILinks } from '../interfaces/ILinks';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ DatePipe, FormsModule, RouterLink, RouterLinkActive ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  firmName: string = 'румтибет';
  inputValue: string = '';
  currentDate: Date = new Date();
  clicksCount: number = 0;
  isDateActive: boolean = true;

  navLinks: ILinks[] = [
    {
      id: 1,
      title: 'Главная',
      path: 'home-page'
    },
    {
      id: 2,
      title: 'Пользователи',
      path: 'users'
    }
  ];

  constructor(){
      
    this.startTimer();
  
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

}
