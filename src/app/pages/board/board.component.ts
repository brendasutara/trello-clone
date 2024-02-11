import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import { Column, ToDo } from '../../models/todo.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBox,
  faWaveSquare,
  faPlus,
  faImage,
  faAngleRight,
  faUsers,
  faGear,
  faAngleDown,
  faTableList,
  faCalendarDays,
  faStar,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { BtnComponent } from '../../components/btn/btn.component';


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
    FontAwesomeModule,
    BtnComponent
  ],
  templateUrl: './board.component.html',
  styles: [
    `
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }

    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class BoardComponent {

  //iconos
  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faPlus = faPlus;
  faImage = faImage;
  faAngleRight = faAngleRight;
  faUsers = faUsers;
  faGear = faGear;
  faAngleDown = faAngleDown;
  faTableList = faTableList;
  faCalendarDays = faCalendarDays;
  faStar = faStar;
  faLock = faLock;

  columns: Column [] = [
    {
      title: 'Cosas por hacer',
      todos: [
        {
          id: '8',
          title: 'Curso de Autentificación con Angular'
        },
        {
          id: '9',
          title: 'Curso Práctico de Angular: Construye un Clon de Trello'
        },
        {
          id: '10',
          title: 'Lab Angular: Optimización Web con Lighthouse y SSR'
        },
        {
          id: '11',
          title: 'Curso Angular: Unit Testing para Servicios'
        },
        {
          id: '12',
          title: 'Curso Angular: Unit Testing para Componentes'
        },
        {
          id: '13',
          title: 'Curso Angular: Unit Testing para Formularios'
        },
        {
          id: '14',
          title: 'Curso Angular: Unit Testing para Rutas'
        }
      ]
    },
    {
      title: 'En proceso',
      todos: [
        {
          id: '7',
          title: 'Curso de Maquetación con Angular CDK y Tailwind CSS'
        },
        {
          id: '15',
          title: 'HTML y CSS a Profundidad'
        },
        {
          id: '16',
          title: 'JavaScript a Profundidad'
        },
        {
          id: '17',
          title: 'Accesibilidad y Rendimiento'
        },
      ]
    },
    {
      title: 'Hecho',
      todos: [
        {
          id: '1',
          title: 'Curso de Entorno de Desarrollo en Windows'
        },
        {
          id: '2',
          title: 'Curso Profesional Git y GitHu'
        },
        {
          id: '3',
          title: 'Curso Frontend Developer'
        },
        {
          id: '4',
          title: 'Curso JavaScript desde Cero'
        },
        {
          id: '5',
          title: 'Curso Asincronismo con JavaScript'
        },
        {
          id: '6',
          title: 'Curso Angular 17'
        },
      ]
    }
  ]

  todos: ToDo[] = []

  doing: ToDo[] = []

  done: ToDo[] = []

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addColumn() {
    this.columns.push({
      title: 'Nuevo listado',
      todos: [],
    });
  }

  addTask() {
    this.todos.push({
      id: '1',
      title: 'Nuevo tarea',
    });
  }
}
