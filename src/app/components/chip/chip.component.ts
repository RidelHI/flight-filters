import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  @Input() text: string = '';
  @Output() remove = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onRemove(): void {
    this.remove.emit();
  }
}
