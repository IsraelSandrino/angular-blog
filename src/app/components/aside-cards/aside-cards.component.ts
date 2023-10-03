import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-cards',
  templateUrl: './aside-cards.component.html',
  styleUrls: ['./aside-cards.component.css']
})
export class AsideCardsComponent implements OnInit {
  @Input()
  Id:string = "0"
  @Input()
  photoData:string = ""
  @Input()
  cardTitle:string = ""

  constructor() {}

  ngOnInit(): void {}
}
