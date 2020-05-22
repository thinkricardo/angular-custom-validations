import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss'],
})
export class CheckboxListComponent implements OnInit {
  @Input()
  items: any[];

  constructor() {}

  ngOnInit(): void {}
}
