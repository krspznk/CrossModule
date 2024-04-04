import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultiplierService {

  constructor() { }
  roundArea(area: number): number {
    return Math.round(area * 100) / 100; 
  }
}
