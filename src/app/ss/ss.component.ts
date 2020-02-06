import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ss',
  templateUrl: './ss.component.html',
  styleUrls: ['./ss.component.scss']
})
export class SsComponent implements OnInit {
  navbar;
  constructor() { }

  ngOnInit() {
  }
  dropdown(){
    this.navbar=!this.navbar;
  }
}
