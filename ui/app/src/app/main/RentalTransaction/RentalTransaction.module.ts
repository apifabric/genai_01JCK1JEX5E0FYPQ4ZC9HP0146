import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {RENTALTRANSACTION_MODULE_DECLARATIONS, RentalTransactionRoutingModule} from  './RentalTransaction-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    RentalTransactionRoutingModule
  ],
  declarations: RENTALTRANSACTION_MODULE_DECLARATIONS,
  exports: RENTALTRANSACTION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RentalTransactionModule { }