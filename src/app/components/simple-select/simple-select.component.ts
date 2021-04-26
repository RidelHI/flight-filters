import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-select',
  templateUrl: './simple-select.component.html',
  styleUrls: ['./simple-select.component.scss'],
})
export class SimpleSelectComponent implements OnInit {
  @Input() data: string[] = [];
  @Output() selected = new EventEmitter();
  itemSelected: string = '';

  constructor() {}

  ngOnInit(): void {
    if (this.data.length > 0) {
      this.itemSelected = this.data[0];
    }
  }

  onSelectItem(item: string) {
    console.log(item);
    this.itemSelected = item;
  }
}
