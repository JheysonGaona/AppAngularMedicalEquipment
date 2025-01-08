import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPageEquipComponent } from './equipment/pages/info-page-equip/info-page-equip.component';
import { MainPageComponent } from './equipment/pages/main-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainPageComponent,
  },
  {
    path: 'info',
    component: InfoPageEquipComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
