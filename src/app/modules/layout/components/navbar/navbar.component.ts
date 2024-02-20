import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BtnComponent } from '../../../shared/components/btn/btn.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faInfoCircle, faCircleQuestion, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, BtnComponent, OverlayModule, FontAwesomeModule, RouterLinkWithHref],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faCircleQuestion = faCircleQuestion;
  faChevronDown = faChevronDown;

  isOpen = false;
  isOpenEspaciodeTrabajo = false;
  isOpenReciente = false;
}
