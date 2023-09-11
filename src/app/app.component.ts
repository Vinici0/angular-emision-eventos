import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Contador App';
  public content: number = 0;

  incrementar(value:number):void {
    this.content += value;
  }

  decrementar(value:number):void {
    this.content -= value;
  }

  reset():void {
    this.content = 0;
  }
}
