import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
})
export class RangeComponent implements OnInit {
  @Input() value: number = 0;
  @Output() updateValue = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onIncrement(): void {
    this.updateValue.emit(++this.value);
  }

  onDecrement(): void {
    if (this.value > 0) {
      this.updateValue.emit(--this.value);
    }
  }
}
