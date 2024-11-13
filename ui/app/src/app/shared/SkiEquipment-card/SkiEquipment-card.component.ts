import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SkiEquipment-card.component.html',
  styleUrls: ['./SkiEquipment-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SkiEquipment-card]': 'true'
  }
})

export class SkiEquipmentCardComponent {


}