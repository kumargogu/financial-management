import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoImgUrl:string="../assets/img/logo.png";

  constructor(@Inject(DOCUMENT) private document:Document){}
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }
 sidebarToggle(){
  this.document.body.classList.toggle('toggle-sidebar')
 }

}
