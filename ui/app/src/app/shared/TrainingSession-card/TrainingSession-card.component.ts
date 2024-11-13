import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TrainingSession-card.component.html',
  styleUrls: ['./TrainingSession-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TrainingSession-card]': 'true'
  }
})

export class TrainingSessionCardComponent {


}