import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'SkiEquipment-new',
  templateUrl: './SkiEquipment-new.component.html',
  styleUrls: ['./SkiEquipment-new.component.scss']
})
export class SkiEquipmentNewComponent {
  @ViewChild("SkiEquipmentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}