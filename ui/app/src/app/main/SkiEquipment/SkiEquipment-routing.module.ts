import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkiEquipmentHomeComponent } from './home/SkiEquipment-home.component';
import { SkiEquipmentNewComponent } from './new/SkiEquipment-new.component';
import { SkiEquipmentDetailComponent } from './detail/SkiEquipment-detail.component';

const routes: Routes = [
  {path: '', component: SkiEquipmentHomeComponent},
  { path: 'new', component: SkiEquipmentNewComponent },
  { path: ':id', component: SkiEquipmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SkiEquipment-detail-permissions'
      }
    }
  },{
    path: ':equipment_id/RentalTransaction', loadChildren: () => import('../RentalTransaction/RentalTransaction.module').then(m => m.RentalTransactionModule),
    data: {
        oPermission: {
            permissionId: 'RentalTransaction-detail-permissions'
        }
    }
}
];

export const SKIEQUIPMENT_MODULE_DECLARATIONS = [
    SkiEquipmentHomeComponent,
    SkiEquipmentNewComponent,
    SkiEquipmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkiEquipmentRoutingModule { }