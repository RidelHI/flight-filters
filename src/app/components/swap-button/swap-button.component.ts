import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swap-button',
  templateUrl: './swap-button.component.html',
  styleUrls: ['./swap-button.component.scss'],
})
export class SwapButtonComponent implements OnInit {
  constructor() {}
  swaping: boolean = false;

  ngOnInit(): void {}

  onSwap(): void {
    this.swaping = true;
    setTimeout(() => {
      this.swaping = false;
    }, 305);
  }
}
