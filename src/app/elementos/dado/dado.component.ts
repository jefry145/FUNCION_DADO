import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {
   number = 0
   num_ramdon(){
      this.number = Math.round((Math.random()*6));
   }
}
