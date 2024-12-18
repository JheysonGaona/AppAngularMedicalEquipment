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

  public equip: Equip = {
    id: '',
    nameEquip: '',
    brand: '',
    model: '',
    specialization: '',
    amount: 0,
    unitPrice: 0
  };


  // Se emplea eeste metodo para emitir un nuevo equipo
  emitEquip():void {

    this.onNewEquip.emit(this.equip);
    // *************************************************
    // Generar condiciones para evitar que el formulario
    // no acepte valores nulos o vacios del formulario
    // *************************************************



    // Se limpia el formulario
    this.equip = {
      id: '',
      nameEquip: '',
      brand: '',
      model: '',
      specialization: '',
      amount: 0,
      unitPrice: 0
    }
  }
}
