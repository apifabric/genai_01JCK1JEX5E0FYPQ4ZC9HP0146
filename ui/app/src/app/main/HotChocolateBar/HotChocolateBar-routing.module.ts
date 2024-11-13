import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotChocolateBarHomeComponent } from './home/HotChocolateBar-home.component';
import { HotChocolateBarNewComponent } from './new/HotChocolateBar-new.component';
import { HotChocolateBarDetailComponent } from './detail/HotChocolateBar-detail.component';

const routes: Routes = [
  {path: '', component: HotChocolateBarHomeComponent},
  { path: 'new', component: HotChocolateBarNewComponent },
  { path: ':id', component: HotChocolateBarDetailComponent,
    data: {
      oPermission: {
        permissionId: 'HotChocolateBar-detail-permissions'
      }
    }
  }
];

export const HOTCHOCOLATEBAR_MODULE_DECLARATIONS = [
    HotChocolateBarHomeComponent,
    HotChocolateBarNewComponent,
    HotChocolateBarDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotChocolateBarRoutingModule { }