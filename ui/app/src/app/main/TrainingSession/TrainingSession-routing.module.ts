import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingSessionHomeComponent } from './home/TrainingSession-home.component';
import { TrainingSessionNewComponent } from './new/TrainingSession-new.component';
import { TrainingSessionDetailComponent } from './detail/TrainingSession-detail.component';

const routes: Routes = [
  {path: '', component: TrainingSessionHomeComponent},
  { path: 'new', component: TrainingSessionNewComponent },
  { path: ':id', component: TrainingSessionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TrainingSession-detail-permissions'
      }
    }
  }
];

export const TRAININGSESSION_MODULE_DECLARATIONS = [
    TrainingSessionHomeComponent,
    TrainingSessionNewComponent,
    TrainingSessionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingSessionRoutingModule { }