import { Component } from '@angular/core';
import { Equip } from '../Interface/Equip.interface';
import { EquipService } from '../services/equip.service';

@Component({
    standalone: false,
    selector: 'app-equipment-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor(private equipService: EquipService){

    }

    get equips(): Equip[] {
        return [...this.equipService.equips];
    }


    onDeleteEquip(id: string): void{
        this.equipService.deleteCharacterById(id);
    }


    onNewEquip(equip: Equip): void{
        this.equipService.addEquip(equip);
    }
}