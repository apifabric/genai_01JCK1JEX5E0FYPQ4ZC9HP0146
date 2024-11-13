import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'TrainingSession-new',
  templateUrl: './TrainingSession-new.component.html',
  styleUrls: ['./TrainingSession-new.component.scss']
})
export class TrainingSessionNewComponent {
  @ViewChild("TrainingSessionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}