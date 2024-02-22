import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BtnComponent } from '../../../shared/components/btn/btn.component';
import { RouterLinkWithHref } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { CustomValidators } from '@utils/validators';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, BtnComponent, RouterLinkWithHref, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(6), Validators.required]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validators: [ CustomValidators.MatchValidator('password', 'confirmPassword') ]
  });
  status: string = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  register() {
    if (this.form.valid) {
      this.status = 'loading';
      const { name, email, password } = this.form.getRawValue();
      console.log(name, email, password);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
