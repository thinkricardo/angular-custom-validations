import { ControlValueAccessor, NgControl } from '@angular/forms';

export abstract class BaseValueAccessor<T> implements ControlValueAccessor {
  protected abstract control: NgControl;

  private currentValue: T;
  private isDisabled = false;

  onChange = (value: T) => {};
  onTouched = () => {};

  setValueAcessor() {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  get value(): T {
    return this.currentValue;
  }
  set value(newValue: T) {
    if (this.currentValue !== newValue) {
      this.currentValue = newValue;
      //this.onChange(this.currentValue);
    }
  }

  writeValue(newValue: T): void {
    this.currentValue = newValue;
  }

  registerOnChange(fn: (value: T) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (this.isDisabled !== isDisabled) {
      this.isDisabled = isDisabled;
    }
  }
}
