import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './btn.component.html'
})
export class BtnComponent {
  @Input() disabled = false;
  @Input() loading = false;
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: 'apple' | 'primary' | 'danger' | 'white' | 'grayLight' = 'primary';

  faSpinner = faSpinner;

  mapColors = {
    apple: {
      'bg-green-apple': true,
      'hover:bg-green-apple-light': true,
      'text-white': true
    },
    primary: {
      'bg-blue-600': true,
      'hover:bg-blue-800': true,
      'text-white': true
    },
    danger: {
      'bg-red-700': true,
      'hover:bg-red-800': true,
      'text-white': true
    },
    white: {
      'bg-white/30': true,
      'hover:bg-white/50': true,
      'text-gray-700': true
    },
    grayLight: {
      'bg-gray-300/60': true,
      'hover:bg-gray-300': true,
      'text-gray-700': true
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  get colors() {
    const colors = this.mapColors[this.color];
    if (colors) {
      return colors;
    }
    return {};
  }
}
