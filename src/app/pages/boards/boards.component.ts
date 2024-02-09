import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

}
