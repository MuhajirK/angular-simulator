import { Component, inject, OnInit } from '@angular/core';
import './training';
import {Colors} from '../enums/Color';
import './collection';
import { Ifeatures, IprogramFeatures } from '../interfaces/IFeatures';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgTemplateOutlet } from '@angular/common';
import { Ipopular } from '../interfaces/IPopular';
import { Iposts } from '../interfaces/IPosts';
import { IMessages } from '../interfaces/IMessages';
import { MessageStatus } from '../enums/Messages'
import { MessagesControlService } from '../messages-control.service'
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, DatePipe, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  firmName: string = 'румтибет';
  

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
  focusedBlog: number = 0;
  focusedArticle: number = 0;
  
  
  // ДЗ 17

  messages: IMessages[] = [];
  public messagesControlService = inject(MessagesControlService);
  private storage = inject(LocalStorageService);


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

  popularImages: Ipopular[] = [
    {
      id: 1,
      image: '/images/lake-near-mountains.png',
      title: 'Озеро возле гор',
      subtitle: 'романтическое приключение',
      starImage: '/images/star.svg',
      gradeValue: 4.9,
      prise: 480
    },
    {
      id: 2,
      image: '/images/night-in-mountains.png',
      title: 'Ночь в горах',
      subtitle: 'в компании друзей',
      starImage: '/images/star.svg',
      gradeValue: 4.5,
      prise: 500
    },
    {
      id: 3,
      image: '/images/stretching-in-mountains.png',
      title: 'Растяжка в горах',
      subtitle: 'для тех, кто забоится о себе',
      starImage: '/images/star.svg',
      gradeValue: 5.0,
      prise: 230
    }
  ];

  blogPosts: Iposts[] = [
    {
      id: 1,
      image: '/images/italy-image.png',
      title: 'Красивая Италия, какая она в реальности?',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      postDate: this.currentDate.toLocaleDateString(),
      articleInfo: 'читать статью'
    },
    {
      id: 2,
      image: '/images/plane-over-sea.png',
      title: 'Долой сомнения! Весь мир открыт для вас!',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...',
      postDate: this.currentDate.toLocaleDateString('ru-RU').replace(/\./g, '/'),
      articleInfo: 'читать статью'
    },
    {
      id: 3,
      image: '/images/traveling-alone.png',
      title: 'Как подготовиться к путешествию в одиночку? ',
      description: 'Для современного мира базовый вектор развития предполагает.',
      postDate: this.currentDate.toLocaleDateString(),
      articleInfo: 'читать статью'
    },
    {
      id: 4,
      image: '/images/taj-mahal.png',
      title: 'Индия ... летим?',
      description: 'Для современного мира базовый.',
      postDate: this.currentDate.toLocaleDateString(),
      articleInfo: 'читать статью'
    },
  ];

  constructor(){
    this.isBasicColor(Colors.BLACK);
    this.storage.saveVisit();
    this.startTimer();

    setTimeout(() => {
      this.isLoading = false;
    }, 300);
  };

  ngOnInit(): void {
    this.messagesControlService.registrOnChanges(() => {
      this.messages = this.messagesControlService.getMessages()
    });
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
  };

  focusedTitle(blogPostId: number) {
    this.focusedBlog = blogPostId;
  };

  focusedArticleLink(blogPostId: number) {
    this.focusedArticle = blogPostId;
  };

  clearHighlight() {
    this.focusedBlog = 0;
    this.focusedArticle = 0;
  };

  onFindProgramClick() {
    this.messagesControlService.addMessage('Программа недоступна', MessageStatus.WARN);
  };

  onProgramPriceClick() {
    this.messagesControlService.addMessage('Стоимость отправлена на почту', MessageStatus.INFO);
  };

  onRatingsClick() {
    this.messagesControlService.addMessage('Направления получены', MessageStatus.SUCCESS);
  };

  onMaterialsClick() {
    this.messagesControlService.addMessage('Материалы недоступны', MessageStatus.ERROR);
  };

  onCloseMessage(msgid: number){
    this.messagesControlService.closeMessage(msgid);
  };
};