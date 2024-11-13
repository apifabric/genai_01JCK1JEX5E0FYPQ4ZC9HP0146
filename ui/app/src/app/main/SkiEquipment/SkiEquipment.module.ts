import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SKIEQUIPMENT_MODULE_DECLARATIONS, SkiEquipmentRoutingModule} from  './SkiEquipment-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SkiEquipmentRoutingModule
  ],
  declarations: SKIEQUIPMENT_MODULE_DECLARATIONS,
  exports: SKIEQUIPMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkiEquipmentModule { }