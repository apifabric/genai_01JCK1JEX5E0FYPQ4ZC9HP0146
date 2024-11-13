import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {HOTCHOCOLATEBAR_MODULE_DECLARATIONS, HotChocolateBarRoutingModule} from  './HotChocolateBar-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    HotChocolateBarRoutingModule
  ],
  declarations: HOTCHOCOLATEBAR_MODULE_DECLARATIONS,
  exports: HOTCHOCOLATEBAR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HotChocolateBarModule { }