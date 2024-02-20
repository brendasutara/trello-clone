import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackgroundComponent } from '../../components/background/background.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BtnComponent } from '../../../shared/components/btn/btn.component';
import { RecoveryFormComponent } from '../../components/recovery-form/recovery-form.component';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [
    CommonModule,
    BackgroundComponent,
    FooterComponent,
    BtnComponent,
    RecoveryFormComponent,
    RouterLinkWithHref
  ],
  templateUrl: './recovery.component.html',
  styleUrl: './recovery.component.scss'
})
export class RecoveryComponent {

}
