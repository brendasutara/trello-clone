import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { BackgroundComponent } from '../../components/background/background.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BtnComponent } from '../../../shared/components/btn/btn.component';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkWithHref,
    BackgroundComponent,
    FooterComponent,
    BtnComponent,
    RegisterFormComponent,
    HeaderComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
