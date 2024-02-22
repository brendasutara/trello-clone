import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BtnComponent } from '../../../shared/components/btn/btn.component';
import { RouterLinkWithHref } from '@angular/router';
import { BackgroundComponent } from '../../components/background/background.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    BtnComponent,
    RouterLinkWithHref,
    BackgroundComponent,
    FooterComponent,
    LoginFormComponent,
    HeaderComponent
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {

}
