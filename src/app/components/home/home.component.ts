import { Component, OnInit } from '@angular/core';

@Component({
  selector: '                                                                                                                                                                                                                                                                                                                      ',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = [
    { position: 1, name: 'Hydrogen' },
    { position: 2, name: 'Helium' },
  ];
  constructor() { }

  ngOnInit(): void {
  }
//
}
