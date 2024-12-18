import { Injectable } from '@angular/core';
import { Equip } from '../Interface/Equip.interface';

@Injectable({
    providedIn: 'root'
})

export class EquipService {
    
    // Almacena en el padre todos los equipos registrados
    public equips: Equip[] = [];
    
        
    // Se emplea este metodo para poder agregar un nuevo equipo
    public addEquip (equip: Equip): void {
        this.equips.push(equip);
    }
    
    // Se emplea este metodo para poder eliminar un equipo
    public deleteCharacterById (id: string): void {
        this.equips = this.equips.filter(equip => equip.id !== id);
    }
}