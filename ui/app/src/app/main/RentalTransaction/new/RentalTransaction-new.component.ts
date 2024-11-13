import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'RentalTransaction-new',
  templateUrl: './RentalTransaction-new.component.html',
  styleUrls: ['./RentalTransaction-new.component.scss']
})
export class RentalTransactionNewComponent {
  @ViewChild("RentalTransactionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}