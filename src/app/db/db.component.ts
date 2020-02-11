import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.scss']
})
export class DbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   openNav() {
    document.getElementById('mySidenav').style.width = '200px';
    document.getElementById('main').style.marginLeft = '250px';

  }
  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }
}
