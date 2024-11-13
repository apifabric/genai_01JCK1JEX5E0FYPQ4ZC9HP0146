import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalTransactionHomeComponent } from './home/RentalTransaction-home.component';
import { RentalTransactionNewComponent } from './new/RentalTransaction-new.component';
import { RentalTransactionDetailComponent } from './detail/RentalTransaction-detail.component';

const routes: Routes = [
  {path: '', component: RentalTransactionHomeComponent},
  { path: 'new', component: RentalTransactionNewComponent },
  { path: ':id', component: RentalTransactionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'RentalTransaction-detail-permissions'
      }
    }
  }
];

export const RENTALTRANSACTION_MODULE_DECLARATIONS = [
    RentalTransactionHomeComponent,
    RentalTransactionNewComponent,
    RentalTransactionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalTransactionRoutingModule { }