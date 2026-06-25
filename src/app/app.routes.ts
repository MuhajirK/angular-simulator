import { Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { UsersPageComponent } from '../users-page/users-page.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: '', component: HomePageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'footer', component: FooterComponent },
  {path: 'users', component: UsersPageComponent},
  { path: '**', component: NotFoundPageComponent }
];
