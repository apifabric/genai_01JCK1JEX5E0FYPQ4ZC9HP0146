import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Customer', loadChildren: () => import('./Customer/Customer.module').then(m => m.CustomerModule) },
    
        { path: 'HotChocolateBar', loadChildren: () => import('./HotChocolateBar/HotChocolateBar.module').then(m => m.HotChocolateBarModule) },
    
        { path: 'Instructor', loadChildren: () => import('./Instructor/Instructor.module').then(m => m.InstructorModule) },
    
        { path: 'RentalTransaction', loadChildren: () => import('./RentalTransaction/RentalTransaction.module').then(m => m.RentalTransactionModule) },
    
        { path: 'SkiEquipment', loadChildren: () => import('./SkiEquipment/SkiEquipment.module').then(m => m.SkiEquipmentModule) },
    
        { path: 'TrainingSession', loadChildren: () => import('./TrainingSession/TrainingSession.module').then(m => m.TrainingSessionModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }