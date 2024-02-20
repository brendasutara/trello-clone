import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/auth/pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'app',
    loadComponent: () => import('./modules/layout/components/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: 'boards',
        loadComponent: () => import('./modules/boards/pages/boards/boards.component').then(m => m.BoardsComponent),
      },
      {
        path: 'board',
        loadComponent: () => import('./modules/boards/pages/board/board.component').then(m => m.BoardComponent),
      },
      {
        path: 'scroll',
        loadComponent: () => import('./modules/shared/users/pages/scroll/scroll.component').then(m => m.ScrollComponent),
      },
      {
        path: 'table',
        loadComponent: () => import('./modules/shared/users/pages/table/table.component').then(m => m.TableComponent),
      },
    ]
  },
];
