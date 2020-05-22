import { Component, Input, Self, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

import { BaseValueAccessor } from '../../base/base-value-accessor';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
})
export class CheckboxListComponent extends BaseValueAccessor<number[]> {
  @Input()
  items: any[];

  constructor(
    @Self()
    @Optional()
    protected control: NgControl
  ) {
    super();

    this.setValueAcessor();
  }

  isChecked(id: number): boolean {
    if (!this.value) {
      return false;
    }
    return this.value.indexOf(id) > -1;
  }

  change(id: number): void {
    const copy = [...this.value];

    if (this.isChecked(id)) {
      copy.splice(copy.indexOf(id), 1);
    } else {
      copy.push(id);
    }

    this.value = copy;
  }
}
