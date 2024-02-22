import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BtnComponent } from '../../../shared/components/btn/btn.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { CustomValidators } from '@utils/validators';

@Component({
  selector: 'app-recovery-form',
  standalone: true,
  imports: [CommonModule, BtnComponent, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './recovery-form.component.html',
  styleUrl: './recovery-form.component.scss'
})
export class RecoveryFormComponent {
  form = this.formBuilder.nonNullable.group(
    {
      newPassword: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [
        CustomValidators.MatchValidator('newPassword', 'confirmPassword'),
      ],
    }
  );
  status: string = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;

  constructor(private formBuilder: FormBuilder) {}

  recovery() {
    if (this.form.valid) {
      // Todo
    } else {
      this.form.markAllAsTouched();
    }
  }
}
