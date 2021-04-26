import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quantify-select',
  templateUrl: './quantify-select.component.html',
  styleUrls: ['./quantify-select.component.scss'],
})
export class QuantifySelectComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() title: string = '';
  @Input() footerText: string = '';

  total: number = 0;
  maxText: string = '';
  maxValue: number = 0;

  constructor() {}

  ngOnInit(): void {}

  getTotal() {
    this.total = 0;
    this.maxValue = 0;
    this.data.forEach((item: any) => {
      this.total += item.count;
      if (item.count > this.maxValue) {
        this.maxValue = item.count;
        this.maxText = item.title;
      }
    });

    return this.total === 1
      ? `${this.total} ${this.maxText}`
      : `${this.total} ${this.title}`;
  }

  onChangeValue(item: any, newValue: number) {
    item.count = newValue;
  }
}
