import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomPipe } from './custom.pipes';
import {GiveLength} from "./give.length.pipe"
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet , CustomPipe , GiveLength , CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  modelValue = "test"
  arry = [1,2,3,4,5,65]

  myDate = new Date()
}
