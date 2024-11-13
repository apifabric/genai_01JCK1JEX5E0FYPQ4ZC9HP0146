import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'HotChocolateBar-new',
  templateUrl: './HotChocolateBar-new.component.html',
  styleUrls: ['./HotChocolateBar-new.component.scss']
})
export class HotChocolateBarNewComponent {
  @ViewChild("HotChocolateBarForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}