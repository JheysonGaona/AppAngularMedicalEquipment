import { Component, OnInit, ViewChild } from '@angular/core';
import { Equip } from '../Interface/Equip.interface';
import { EquipService } from '../services/equip.service';
import { ListComponent } from '../components/list/list.component';
import { AddEquipComponent } from '../components/add-equip/add-equip.component';

@Component({
    standalone: false,
    selector: 'app-equipment-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent{

    @ViewChild(AddEquipComponent) addEquipComponent!: AddEquipComponent;

    constructor(private equipService: EquipService){

    }

    ngOnInit(): void {
        this.showAllEquip();
    }


    get equips(): Equip[] {
        return [...this.equipService.equips];
    }


    onDeleteEquip(id: string): void{
        // this.equipService.deleteEquipById(id);
        this.equipService.deleteEquipById(id).subscribe({
            next: response => console.log('Registro eliminado de manera exitosa:', response),
            error: err => console.error('Error al eliminar:', err)
        });
    }


    onEditEquip(equip: Equip): void{
        // this.equipService.deleteEquipById(id);
        this.addEquipComponent.setEditEquip(equip);
    }


    onNewEquip(equip: Equip): void{
        this.equipService.addEquip(equip).subscribe({
            next: response => console.log('Registro exitoso:', response),
            error: err => console.error('Error al agregar:', err)
        });
    }

    onUpdateEquip(equip: Equip): void {
        this.equipService.updateEquip(equip).subscribe({
            next: updatedEquip => console.log('Registro actualizado con éxito:', updatedEquip),
            error: err => console.error('Error al actualizar:', err)
        });
    }

    showAllEquip(): void{
        this.equipService.getListEquips().subscribe({
            next: (equips: Equip[]) => {
                this.equipService.equips = equips;
                console.log('Equipos cargados:', equips);
            },
            error: (error) => {
                console.error('Error al cargar los equipos:', error);
            }
        });
    }
}