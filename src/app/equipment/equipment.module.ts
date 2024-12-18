import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddEquipComponent } from './components/add-equip/add-equip.component';

@NgModule({
  declarations: [
    MainPageComponent,
    AddEquipComponent,
    ListComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
]
})

export class EquipmentModule {

}
