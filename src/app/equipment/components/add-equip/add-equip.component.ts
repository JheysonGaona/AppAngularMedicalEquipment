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


  options = [
    { value: '1', label: 'Cardiología' },
    { value: '2', label: 'Neurología' },
    { value: '3', label: 'Radiología e Imagenología' },
    { value: '4', label: 'Ginecología y Obstetricia' },
    { value: '5', label: 'Anestesiología y Cuidados Críticos' },
  ];

  
  public equip: Equip = {
    id: '',
    nameEquip: '',
    brand: '',
    model: '',
    specialization: '',
    amount: 0,
    unitPrice: 0,
    localDateTime: ''
  };


  // Se emplea eeste metodo para emitir un nuevo equipo
  emitEquip():void {

    this.onNewEquip.emit(this.equip);
    // *************************************************
    // Generar condiciones para evitar que el formulario
    // no acepte valores nulos o vacios del formulario
    // *************************************************


    /*
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
    */
  }
}
