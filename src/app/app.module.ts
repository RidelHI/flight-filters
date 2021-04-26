import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './components/flights/flights.component';
import { SimpleSelectComponent } from './components/simple-select/simple-select.component';
import { MatMenuModule } from '@angular/material/menu';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuantifySelectComponent } from './components/quantify-select/quantify-select.component';
import { RangeComponent } from './components/range/range.component';
import { MatButtonModule } from '@angular/material/button';
import { ChipComponent } from './components/chip/chip.component';
import { ChipsContainerComponent } from './components/chips-container/chips-container.component';
import { MatIconModule } from '@angular/material/icon';
import { SearchSelectComponent } from './components/search-select/search-select.component';
import { SwapButtonComponent } from './components/swap-button/swap-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    SimpleSelectComponent,
    QuantifySelectComponent,
    RangeComponent,
    ChipComponent,
    ChipsContainerComponent,
    SearchSelectComponent,
    SwapButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
