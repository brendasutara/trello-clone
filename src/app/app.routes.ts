import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { BoardsComponent } from './pages/boards/boards.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'boards',
    component: BoardsComponent
  }
];
