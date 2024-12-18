import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Equip } from '../../Interface/Equip.interface';

@Component({
  standalone: false,
  selector: 'app-equipment-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  // Arreglo de equipos
  @Input()
  public equipList: Equip[] = [];


  // Evento que emite al padre una emision
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  // Metodo que permite eliminar un equipo del arreglo
  onDeleteEqip(id?: string):void {
    // *************************************************
    // Validar que el index no sea un valor nulo o vacio
    // *************************************************


    // se activa el evento
    this.onDelete.emit(id);
  }
}