import { Injectable, OnInit } from '@angular/core';
import { Equip } from '../Interface/Equip.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class EquipService{

    private baseUrl = 'http://localhost:8080/api/equips';
    
    constructor(private http: HttpClient) {}

    // Almacena en el padre todos los equipos registrados
    public equips: Equip[] = [];

    // Se emplea este metodo para solicitar la lista de todos los equipos medicos
    public getListEquips(): Observable<Equip[]>{
        return this.http.get<Equip[]>(this.baseUrl);
    }
    
    // Se emplea este metodo para poder agregar un nuevo equipo
    // public addEquip (equip: Equip): Observable<Equip> {
    //     this.equips.push(equip);
    //     return this.http.post<Equip>(`${this.baseUrl}`, equip);
    // }

    // Se emplea este metodo para obtener un equipo en base al id
    public getEquipById(id: string): Observable<Equip> {
        return this.http.get<Equip>(`${this.baseUrl}/${id}`);
    }
    
    // Se emplea este metodo para poder eliminar un equipo
    public deleteEquipById (id: string): Observable<void> {
        this.equips = this.equips.filter(equip => equip.id !== id);
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }

    // Se emplea este metodo para poder agregar un nuevo equipo
    public addEquip (equip: Equip): void {
        this.equips.push(equip);
        this.http.post<Equip>(`${this.baseUrl}`, equip).subscribe({
            next: response => console.log('Registro exitoso:', response),
            error: err => console.error('Error al agregar:', err)
        });
    }
}