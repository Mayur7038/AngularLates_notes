import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { mySerive } from './myService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interceptors';


 service : any = inject(mySerive)


 constructor(){
 }
  async test(){
    let res = await this.service.test().toPromise();

  }
}
