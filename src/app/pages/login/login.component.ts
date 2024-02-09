import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BtnComponent } from '../../components/btn/btn.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, BtnComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {

}
