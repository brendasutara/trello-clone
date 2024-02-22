import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BtnComponent } from '../../../shared/components/btn/btn.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, BtnComponent, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
  });
  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  status: string = 'init';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  doLogin() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email, password } = this.form.getRawValue();
      // TODO
    } else {
      this.form.markAllAsTouched();
    }
  }
}
