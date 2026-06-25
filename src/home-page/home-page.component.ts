import { Component, inject } from '@angular/core';
import { Ifeatures, IprogramFeatures } from '../interfaces/IFeatures';
import { FormsModule } from '@angular/forms';
import { Ipopular } from '../interfaces/IPopular';
import { Iposts } from '../interfaces/IPosts';
import { MessagesControlService } from '../messages-control.service'
import { IPhotoReportImages } from '../interfaces/IPhotoReports';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {

  firmName: string = 'румтибет';
  focusedFeatureId: number = 0;
  selectedTour: string = '';
  selectedDate: string = '';
  selectedParticipant: string = '';
  currentDate: Date = new Date();
  focusedBlog: number = 0;
  focusedArticle: number = 0;
  public messagesControlService = inject(MessagesControlService);
  
  
  // ДЗ 17

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

  photoReportImages: IPhotoReportImages[] = [
    {
      id: 1,
      photoImage: '/images/balloons.png'
    },
    {
      id: 2,
      photoImage: '/images/items-on-map.png'
    },
    {
      id: 3,
      photoImage: '/images/tower-on-island.png'
    },
    {
      id: 4,
      photoImage: '/images/sandy-bay.png'
    },
    {
      id: 5,
      photoImage: '/images/river-in-gorge.png'
    },
    {
      id: 6,
      photoImage: '/images/items-on-vintage-map.png'
    },
  ];

  constructor(){
        
  };
  
  isNotValid(): boolean {
    return !this.selectedTour || !this.selectedDate || !this.selectedParticipant;
  }; 

  focusedFeature(featureId: number) {
    this.focusedFeatureId = featureId;
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
    this.messagesControlService.showWarn('Программа недоступна');
  };

  onProgramPriceClick() {
    this.messagesControlService.showSuccess('Стоимость отправлена на почту');
  };

  onRatingsClick() {
    this.messagesControlService.showInfo('Направления получены');
  };

  onMaterialsClick() {
    this.messagesControlService.showError('Материалы недоступны');
  };
}
