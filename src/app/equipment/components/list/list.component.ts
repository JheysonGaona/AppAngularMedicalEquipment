import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Equip } from '../../Interface/Equip.interface';
import { AddEquipComponent } from '../add-equip/add-equip.component';

@Component({
  standalone: false,
  selector: 'app-equipment-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent{

  // Arreglo de equipos
  @Input()
  public equipList: Equip[] = [];

  // Evento que emite al padre una emision
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // Evento que emite al padre una emision
  @Output()
  public onEdit: EventEmitter<Equip> = new EventEmitter();


  // Metodo que permite eliminar un equipo del arreglo
  onDeleteEqip(id?: string):void {
    // se activa el evento
    this.onDelete.emit(id);
  }


  onEditEquip(equip: Equip): void {
    this.onEdit.emit(equip);
  }
}