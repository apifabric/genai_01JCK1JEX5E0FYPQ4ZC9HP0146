import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './HotChocolateBar-card.component.html',
  styleUrls: ['./HotChocolateBar-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.HotChocolateBar-card]': 'true'
  }
})

export class HotChocolateBarCardComponent {


}