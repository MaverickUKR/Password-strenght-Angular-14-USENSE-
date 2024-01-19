import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  passwordControl = new FormControl('');

  getPasswordStrength(): string {
    const password = this.passwordControl.value;
    if (!password) {
      return 'empty';
    } else if (password.length < 8) {
      return 'lessEightChars';
    } else if (/[a-zA-Z]/.test(password) && /[0-9]/.test(password) && /[^a-zA-Z0-9]/.test(password)) {
      return 'strong';
    } else if ((/[a-zA-Z]/.test(password) && /[0-9]/.test(password)) || (/[a-zA-Z]/.test(password) && /[^a-zA-Z0-9]/.test(password)) || (/[0-9]/.test(password) && /[^a-zA-Z0-9]/.test(password))) {
      return 'medium';
    }
    return "easy"
  }
}