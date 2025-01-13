import { Component, EventEmitter, Output } from '@angular/core';
import { Equip } from '../../Interface/Equip.interface';

@Component({
  standalone: false,
  selector: 'app-equipment-add-equip',
  templateUrl: './add-equip.component.html',
  styleUrl: './add-equip.component.css'
})

export class AddEquipComponent {

  // permite la conexcion, para emitir
  @Output()
  public onNewEquip: EventEmitter<Equip> = new EventEmitter();

  @Output()
  public onUpdateEquip: EventEmitter<Equip> = new EventEmitter();


  options = [
    { value: '1', label: 'Cardiología' },
    { value: '2', label: 'Neurología' },
    { value: '3', label: 'Radiología e Imagenología' },
    { value: '4', label: 'Ginecología y Obstetricia' },
    { value: '5', label: 'Anestesiología y Cuidados Críticos' },
  ];


  public equip: Equip = this.getEmptyEquip();
  public isEditing: boolean = false;


  // Se emplea eeste metodo para emitir un nuevo equipo
  emitEquip():void {
    if (this.isEditing) {
      this.onUpdateEquip.emit(this.equip); // Emitir evento para actualizar
    } else {
      this.onNewEquip.emit(this.equip); // Emitir evento para agregar
    }
    this.resetForm();
  }


  setEditEquip(equip: Equip): void {
    this.equip = { ...equip }; // Copia los valores del equipo
    this.isEditing = true;
  }

  private resetForm(): void {
    this.equip = this.getEmptyEquip();
    this.isEditing = false;
  }
  
  // Se limpia el formulario
  private getEmptyEquip(): Equip {
    return {
      id: '',
      nameEquip: '',
      brand: '',
      model: '',
      specialization: '',
      amount: 0,
      unitPrice: 0,
      localDateTime: ''
    };
  }
}