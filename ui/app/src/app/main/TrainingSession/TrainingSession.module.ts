import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TRAININGSESSION_MODULE_DECLARATIONS, TrainingSessionRoutingModule} from  './TrainingSession-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TrainingSessionRoutingModule
  ],
  declarations: TRAININGSESSION_MODULE_DECLARATIONS,
  exports: TRAININGSESSION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrainingSessionModule { }