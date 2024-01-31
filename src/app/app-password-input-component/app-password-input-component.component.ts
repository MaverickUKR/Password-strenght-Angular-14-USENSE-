import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-input-component',
  templateUrl: './app-password-input-component.component.html',
  styleUrls: ['./app-password-input-component.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ]
})
export class PasswordInputComponent implements ControlValueAccessor {
  password: string = '';
  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(val: any): void {
    this.password = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  updateValue(val: string) {
    this.password = val;
    this.onChange(val);
    this.onTouch();
  }
}

