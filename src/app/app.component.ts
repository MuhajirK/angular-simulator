import { Component, inject } from '@angular/core';
import './training';
import {Colors} from '../enums/Color';
import './collection';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { MessageComponent } from '../message/message.component';
import { HomePageComponent } from '../home-page/home-page.component';


@Component({
  selector: 'app-root',
  imports: [FormsModule, HeaderComponent, FooterComponent, MessageComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  isLoading: boolean = true;
  private storage = inject(LocalStorageService);
  
  // ДЗ 15.2 создать метод внутри app.component, который проверяет, является ли переданный цвет основным
  constructor(){
   this.isBasicColor(Colors.BLACK);
   this.storage.saveVisit();

   setTimeout(() => {
      this.isLoading = false;
    }, 300);
  };

  private isBasicColor(color: Colors): boolean{
    return (color === Colors.RED || color === Colors.GREEN || color === Colors.BLUE);
  };

};