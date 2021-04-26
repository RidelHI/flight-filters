import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chips-container',
  templateUrl: './chips-container.component.html',
  styleUrls: ['./chips-container.component.scss'],
})
export class ChipsContainerComponent implements OnInit {
  @Input() chips: string[] = [];
  @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}

  onRemove(pos: number): void {
    this.chips.splice(pos, 1);
  }
}
