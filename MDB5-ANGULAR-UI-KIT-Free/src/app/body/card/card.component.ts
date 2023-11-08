import { Component, Input } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data: any;


  constructor() { }

  ngOnInit() {
    console.log(this.data);
    
  }

  

}
