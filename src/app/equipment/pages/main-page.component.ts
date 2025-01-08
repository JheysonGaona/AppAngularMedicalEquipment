import { Component, OnInit } from '@angular/core';
import { Equip } from '../Interface/Equip.interface';
import { EquipService } from '../services/equip.service';
import { ListComponent } from '../components/list/list.component';

@Component({
    standalone: false,
    selector: 'app-equipment-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent{

    // public errorMessage: string = '';

    constructor(private equipService: EquipService){

    }

    // ngOnInit(): void {
    //     // this.showAllEquip();
    // }


    get equips(): Equip[] {
        return [...this.equipService.equips];
    }


    onDeleteEquip(id: string): void{
        this.equipService.deleteEquipById(id);
    }


    onNewEquip(equip: Equip): void{
        this.equipService.addEquip(equip);
    }


    // showAllEquip(): void{
    //     this.equipService.getListEquips().subscribe({
    //     next: (equipos: Equip[]) => {
    //         this.listComponent.equipList = equipos; // Asignar la lista de equipos
    //         console.log('Equipos cargados:', equipos);
    //     },
    //     error: (error) => {
    //         this.errorMessage = 'Error al cargar los equipos';
    //         console.error('Error al cargar los equipos:', error);
    //     }
    //     });
    // }
}