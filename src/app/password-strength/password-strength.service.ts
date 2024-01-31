import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  getPasswordStrength(password: string): string {
    if (!password) {
      return 'empty';
    } else if (password.length < 8) {
      return 'lessEightChars';
    }
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[\W_]/.test(password);

    const typesCount = [hasLetters, hasDigits, hasSymbols].filter(
      Boolean
    ).length;
    if (typesCount === 1) return 'easy';
    if (typesCount === 2) return 'medium';
    return 'strong';
  }
}
