import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

year:Date=new Date();


  scrollTop(){
    window.scroll({
      top:0,
      left:0,
      behavior:'smooth'
    })
  }

}
