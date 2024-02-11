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
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';


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
          title: 'Curso de Autentificación con Angular',
          description: '¡Implementa el sistema de autenticación para tu clon de Trello! Aprende las mejores estrategias de autenticación para Single Page Applications (SPA) con Angular y JSON Web Tokens (JWT) junto a tu profesor Nicolas Molina.'
        },
        {
          id: '9',
          title: 'Curso Práctico de Angular: Construye un Clon de Trello',
          description: '¡Construye un clon de Trello replicando TODAS sus funcionalidades! Transforma las interacciones de los usuarios en consultas a la API. Descubre el algoritmo para ordenar tareas optimizando las consultas HTTP. Pon en práctica todo lo que sabes de Angular junto al profesor Nicolas Molina.'
        },
        {
          id: '10',
          title: 'Lab Angular: Optimización Web con Lighthouse y SSR',
          description: 'En este laboratorio entrenarás para tu primer día de trabajo como Angular Developer. Nicolas Molina te entregará una landing page hecha con Angular. Tu misión, si decides aceptarla, será optimizar las dependencias, animaciones y tiempo de carga, además de transformar el proyecto de Single Page Application (SPA) a Server Side Rendering (SSR). ¿Aceptas el reto, Platzinauta?'
        },
        {
          id: '11',
          title: 'Curso Angular: Unit Testing para Servicios',
          description: '¡Aprende a desarrollar pruebas unitarias en Angular! Integra las herramientas y metodologías para hacer testing con el ecosistema Angular. Prueba servicios, dependencias, consultas HTTP y automatiza sets de testing con GitHub Actions junto a tu profesor Nicolas Molina.'
        },
        {
          id: '12',
          title: 'Curso Angular: Unit Testing para Componentes',
          description: '¡Aprende Unit Testing para Componentes en Angular! Debuggea tu proyecto y aplica pruebas a componentes con directivas, pipes, promesas y dependencias con tu profesor Nicolas Molina.'
        },
        {
          id: '13',
          title: 'Curso Angular: Unit Testing para Formularios',
          description: 'Avanza en tu carrera de desarrollo con Angular aplicando Unit Testing en formularios. Conoce qué son los testing helpers, pruebas a fields, validadores y más.'
        },
        {
          id: '14',
          title: 'Curso Angular: Unit Testing para Rutas',
          description: 'Continúa tu crecimiento desarrollando con Angular y crea pruebas unitarias a las rutas. Aplica test de integración continua con GitHub Actions a una tienda en línea de la mano de tu profesor Nicolas Molina.'
        }
      ]
    },
    {
      title: 'En proceso',
      todos: [
        {
          id: '7',
          title: 'Curso de Maquetación con Angular CDK y Tailwind CSS',
          description: '¡Maqueta un clon de Trello en Angular usando CDK y Tailwind CSS! Usa componentes interactivos, trabaja con drag and drop, listas y tablas. Descubre cómo mejorar en la UX de tu proyecto junto al profesor Nicolas Molina.'
        },
        {
          id: '15',
          title: 'HTML y CSS a Profundidad',
          description: 'Aprende HTML y CSS desde cero, sin conocimientos previos. Conoce todo sobre etiquetas HTML, semántica, CSS, como dar estilos a los elementos de tu sitio web, medidas EM/REM, modelo de caja y mucho más. Aprenderás todo lo que necesitas para empezar en el desarrollo web online y a construir sitios para internet de manera eficiente.'
        },
        {
          id: '16',
          title: 'JavaScript a Profundidad',
          description: 'En este curso aprenderás la diferencia del costo temporal y el espacial de cada algoritmo que diseñes. Esto te dará una ventaja en el uso de recursos de cómputo y eficiencia en velocidad dentro de tus programas. Aprende esto junto a tu profesor Marcelo Arias.'
        },
        {
          id: '17',
          title: 'Accesibilidad y Rendimiento',
          description: 'Domina el consumo de API REST con JavaScript. Aprende a optimizar el tiempo de carga de tu proyecto PlatziMovies. Crea loading skeletons para mejorar la UX de tu aplicación, implementa scroll infinito y usa Local Storage para aumentar la velocidad de respuesta de tu aplicación junto a tu profesor JuanDC.'
        },
      ]
    },
    {
      title: 'Hecho',
      todos: [
        {
          id: '1',
          title: 'Curso de Entorno de Desarrollo en Windows',
          description: '¡Prepara tu computadora para trabajar como web developer profesional! Instala y configura correctamente WSL (Windows Subsystem for Linux), máquinas virtuales, tus llaves SSH y tu editor de código Visual Studio Code. Crea un repositorio en GitHub y haz tu primer commit junto a tu profesor Ricardo Celis.'
        },
        {
          id: '2',
          title: 'Curso Profesional Git y GitHub',
          description: 'Deja de versionar tus proyectos usando tu propio sistema de control de versiones. Mejor usa Git, el sistema de control de versiones por excelencia que utiliza la industria tecnológica. Aprende a trabajar con git, conceptos básicos, clonar un repositorio y gestionar tus proyectos alojándolos en tu repositorio local y en GitHub.'
        },
        {
          id: '3',
          title: 'Curso Frontend Developer',
          description: 'Domina las bases de HTML y CSS. Conoce la anatomía de un documento HTML, sus elementos y las propiedades de CSS. Maqueta las pantallas principales de tu página web con responsive design. ¡Conviertete en Frontend Developer con Platzi!'
        },
        {
          id: '4',
          title: 'Curso JavaScript desde Cero',
          description: 'Desarrolla las habilidades para crear grandes aplicaciones y páginas web dinámicas. Aprende desde la manipulación de variables, tipos de datos, string y números hasta el control de flujo de condicionales y bucles.'
        },
        {
          id: '5',
          title: 'Curso Asincronismo con JavaScript',
          description: 'Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!'
        },
        {
          id: '6',
          title: 'Curso Angular 17',
          description: 'Construye aplicaciones web sofisticadas y dinámicas con Angular, uno de los frameworks que está revolucionando el mundo. Aprenderás a crear aplicaciones con componentes reutilizables, por medio de las herramientas de desarrollo y testing que ofrece Angular.'
        },
      ]
    }
  ]

  todos: ToDo[] = []

  doing: ToDo[] = []

  done: ToDo[] = []

  constructor(
    private dialog: Dialog
  ) { }

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

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '760px',
      maxWidth: '50%',
      data: {
        todo: todo,
      }
    });
    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
  }
}
