import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';

import { NavbarComponent } from '../../../layout/components/navbar/navbar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBox,
  faWaveSquare,
  faClock,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear
} from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FontAwesomeModule, CdkAccordionModule, RouterLinkWithHref],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
  //iconos
  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  items = [
    {
      label: 'Espacio de trabajo de Brenda Sutara',
      items: [
        {
          label: 'Tableros',
        },
        {
          label: 'Lo más destacado',
        },
        {
          label: 'Vistas',
        },
        {
          label: 'Miembros',
        },
        {
          label: 'Configuración',
        },
      ]
    }
  ];
  expanded = 0;
}
