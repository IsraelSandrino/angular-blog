import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside-cards',
  templateUrl: './aside-cards.component.html',
  styleUrls: ['./aside-cards.component.css']
})
export class AsideCardsComponent implements OnInit {
  @Input()
  Id: string = "0"
  @Input()
  photoData: string = ""
  @Input()
  cardTitle: string = ""

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}

  navigateToNews(id: string): void {
    this.router.navigate(['/content', id]);
  }
}
