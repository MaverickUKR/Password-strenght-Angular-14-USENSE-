import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PasswordStrengthService } from './password-strength.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent implements OnChanges {
  @Input() password: string = '';
  strength: string = '';

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['password']) {
      this.strength = this.passwordStrengthService.getPasswordStrength(
        this.password
      );
    }
  }
}
