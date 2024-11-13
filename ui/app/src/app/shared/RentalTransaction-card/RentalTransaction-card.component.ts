import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './RentalTransaction-card.component.html',
  styleUrls: ['./RentalTransaction-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.RentalTransaction-card]': 'true'
  }
})

export class RentalTransactionCardComponent {


}