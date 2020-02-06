import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  hideLogReg(){
    if (this.router.url === '/home') {
      return true;
    }else{
      return false;
    }
  }
  
}
