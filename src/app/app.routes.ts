import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/auth/pages/login/login.component').then(m => m.LoginComponent),
    title: 'Iniciar sesión'
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./modules/auth/pages/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent),
    title: 'Olvidaste tu contraseña?'
  },
  {
    path: 'register',
    loadComponent: () => import('./modules/auth/pages/register/register.component').then(m => m.RegisterComponent),
    title: 'Registrarse'
  },
  {
    path: 'recovery',
    loadComponent: () => import('./modules/auth/pages/recovery/recovery.component').then(m => m.RecoveryComponent),
    title: 'Recuperar contraseña'
  },
  {
    path: 'app',
    loadComponent: () => import('./modules/layout/components/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: 'boards',
        loadComponent: () => import('./modules/boards/pages/boards/boards.component').then(m => m.BoardsComponent),
        title: 'Tableros'
      },
      {
        path: 'board',
        loadComponent: () => import('./modules/boards/pages/board/board.component').then(m => m.BoardComponent),
        title: 'Tablero Ruta Angular'
      },
      {
        path: 'scroll',
        loadComponent: () => import('./modules/shared/users/pages/scroll/scroll.component').then(m => m.ScrollComponent),
        title: 'Virtual scrolling'
      },
      {
        path: 'table',
        loadComponent: () => import('./modules/shared/users/pages/table/table.component').then(m => m.TableComponent),
        title: 'Table'
      },
    ]
  },
];
