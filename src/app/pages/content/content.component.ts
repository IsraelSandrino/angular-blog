import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { Location } from '@angular/common';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  photoCover:string = ""
  photoData:any = ""
  localization:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  article:any = ""
  private id:string | null = "0"

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => {
      this.id = value.get("id")
      this.setValuesToComponent(this.id)
    });
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    console.log('Dados da notícia:', result); // Verifica os dados carregados

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
    this.photoData = result.photoData
    this.localization = result.localization
    this.article = result.article
  }

  goBack(): void {
    this.location.back();
  }
}
