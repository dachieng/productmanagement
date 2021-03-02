import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  starWidth!: number;

  @Input() rating!: number;

  @Output()  ratingClicked = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{

    this.starWidth = this.rating * 75 / 5


  }

  onClick(){
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`)
  }

}
