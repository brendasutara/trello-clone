import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html'
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color = 'apple';

  constructor() { }

  ngOnInit(): void {
  }

  get colors() {
    return {
      'bg-green-apple': this.color === 'apple',
      'hover:bg-green-apple-light': this.color === 'apple',
      'bg-blue-600': this.color === 'primary',
      'hover:bg-blue-800': this.color === 'primary',
      'bg-red-700': this.color === 'red',
      'hover:bg-red-800': this.color === 'red',
      'bg-white/30': this.color === "white",
      'hover:bg-white/50': this.color === "white",
    };
  }
}
