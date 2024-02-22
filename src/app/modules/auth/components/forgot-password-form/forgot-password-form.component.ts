import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BtnComponent } from '../../../shared/components/btn/btn.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-form',
  standalone: true,
  imports: [CommonModule, BtnComponent, ReactiveFormsModule, BtnComponent],
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.scss'
})
export class ForgotPasswordFormComponent {
  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
  });
  status: string = 'init';
  emailSent = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  sendLink() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email } = this.form.getRawValue();
      // TODO: Connect
    } else {
      this.form.markAllAsTouched();
    }
  }
}
