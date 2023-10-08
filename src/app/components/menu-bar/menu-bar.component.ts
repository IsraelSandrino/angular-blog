import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  photoLogo:string = "https://raelsandrini.com/wp-content/uploads/2023/07/nav-logo.png"
  linkedin:string = "https://linkedin.com/in/isandrino"
  gitHub:string = "https://github.com/IsraelSandrino"
  mailTo:string = "mailto:isandrino99@gmail.com"
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faEnvelope = faEnvelope;

  constructor(){
  }

  ngOnInit(): void {
  }
}
