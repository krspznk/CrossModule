import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Result } from './result';
import { MultiplierService } from '../multiplier.service';
import { Point} from '../figures/point';
import { Circle} from '../figures/circle';
import { Ellipse} from '../figures/ellipse';
import { Ring} from '../figures/ring';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent  implements OnInit {
  @Output() formData = new EventEmitter<Result[]>();
  dataForm!: FormGroup;
  lastRings: Ring[] = [];
  lastCircles: Circle[] = [];
  lastEllipses: Ellipse[] = [];

  constructor(
    private fb: FormBuilder,
    private multiplierService: MultiplierService) { }

  ngOnInit() {
    this.dataForm = this.fb.group({
      circle: ['0', [Validators.required, Validators.min(0)]],
      ring: ['0', [Validators.required, Validators.min(0)]],
      ellipse: ['0', [Validators.required, Validators.min(0)]],
  });}

  onSubmit() {
    if (this.dataForm.valid) {
      const formDataValue = this.dataForm.value;

      for (let i = 0; i < formDataValue.circle; i++) {
        const center = new Point(
          this.getRandomInt(1, 10),
          this.getRandomInt(1, 10)
        );
        const radius = this.getRandomInt(1, 5);
        const circle = new Circle(center, radius);
        this.lastCircles.push(circle);
      }
  
      for (let i = 0; i < formDataValue.ring; i++) {
        const center = new Point(
          this.getRandomInt(1, 10),
          this.getRandomInt(1, 10)
        );
        const radius = this.getRandomInt(5, 10);
        const innerRadius = this.getRandomInt(1, 4);
        const ring = new Ring(center, radius, innerRadius);
        this.lastRings.push(ring);
      }
  
      for (let i = 0; i < formDataValue.ellipse; i++) {
        const center = new Point(
          this.getRandomInt(1, 10),
          this.getRandomInt(1, 10)
        );
        const a = this.getRandomInt(1, 5);
        const b = this.getRandomInt(1, 5);
        const ellipse = new Ellipse(center, a, b);
        this.lastEllipses.push(ellipse);
      }
    }
    this.getResults()
  }

  getResults(): void {
    const results: Result[] = [];

    for (let i = 0; i < this.lastCircles.length; i++) {
      results.push({
        type: 'Circle',
        data: this.lastCircles[i].toString(),
        area: this.multiplierService.roundArea(this.lastCircles[i].calculateArea()),
      });
    }

    for (let i = 0; i < this.lastRings.length; i++) {
      results.push({
        type: 'Ring',
        data: this.lastRings[i].toString(),
        area: this.multiplierService.roundArea(this.lastRings[i].calculateArea()),
      });
    }

    for (let i = 0; i < this.lastEllipses.length; i++) {
      results.push({
        type: 'Ellipse',
        data: this.lastEllipses[i].toString(),
        area: this.multiplierService.roundArea(this.lastEllipses[i].calculateArea()),
      });
    }

    this.formData.emit(results);
  }
  
  replaceCenter(){

    for (let i = 0; i < this.lastCircles.length; i++) {
      this.lastCircles[i].resetCenter(this.getRandomInt(10, 20), this.getRandomInt(10, 20))
    }

    for (let i = 0; i < this.lastRings.length; i++) {
      this.lastRings[i].resetCenter(this.getRandomInt(10, 20), this.getRandomInt(10, 20))

    }

    for (let i = 0; i < this.lastEllipses.length; i++) {
      this.lastEllipses[i].resetCenter(this.getRandomInt(10, 20), this.getRandomInt(10, 20))

    }

    this.getResults()

  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}