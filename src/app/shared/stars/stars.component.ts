import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})

export class StarsComponent implements OnInit, OnChanges {
  
  @Input() rate=0;
  cropwidth=0;
  constructor() {}

  ngOnChanges(){
    // this.cropwidth=this.rate *80/5;
  }
  ngOnInit(): void {
    this.cropwidth=this.rate *80/5;
    
  }

  // @Output() onStarClicked :EventEmitter<number> = new EventEmitter<number>();

  starClicked()
  {
    // this.onStarClicked.emit(this.rate);
  }
}
