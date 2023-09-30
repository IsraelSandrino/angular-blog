import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-relevant-card',
  templateUrl: './relevant-card.component.html',
  styleUrls: ['./relevant-card.component.css']
})
export class RelevantCardComponent implements OnInit {

  @Input()
  Id:string = "0"
  @Input()
  photoCover:string = ""
  @Input()
  photoData:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""

  constructor() {}

  ngOnInit(): void {}
}
