import { Component } from '@angular/core';
import { Result } from '../input/result';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  receivedFormData: Result[]=[];
  onReceiveFormData(formData: Result[]) {
    this.receivedFormData = formData;
    console.log("Received data:", this.receivedFormData);
  }
  constructor() {}

}
