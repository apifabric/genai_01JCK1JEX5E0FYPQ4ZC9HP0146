import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHomeComponent } from './home/Customer-home.component';
import { CustomerNewComponent } from './new/Customer-new.component';
import { CustomerDetailComponent } from './detail/Customer-detail.component';

const routes: Routes = [
  {path: '', component: CustomerHomeComponent},
  { path: 'new', component: CustomerNewComponent },
  { path: ':id', component: CustomerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Customer-detail-permissions'
      }
    }
  },{
    path: ':customer_id/HotChocolateBar', loadChildren: () => import('../HotChocolateBar/HotChocolateBar.module').then(m => m.HotChocolateBarModule),
    data: {
        oPermission: {
            permissionId: 'HotChocolateBar-detail-permissions'
        }
    }
},{
    path: ':customer_id/RentalTransaction', loadChildren: () => import('../RentalTransaction/RentalTransaction.module').then(m => m.RentalTransactionModule),
    data: {
        oPermission: {
            permissionId: 'RentalTransaction-detail-permissions'
        }
    }
},{
    path: ':customer_id/TrainingSession', loadChildren: () => import('../TrainingSession/TrainingSession.module').then(m => m.TrainingSessionModule),
    data: {
        oPermission: {
            permissionId: 'TrainingSession-detail-permissions'
        }
    }
}
];

export const CUSTOMER_MODULE_DECLARATIONS = [
    CustomerHomeComponent,
    CustomerNewComponent,
    CustomerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }