import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-solutions',
  templateUrl: './software-solutions.component.html',
  styleUrls: ['./software-solutions.component.css']
})
export class SoftwareSolutionsComponent implements OnInit {

  galleryImages = [
    {
      src: 'assets/gallery/app1.jpg',
      alt: 'Project 1',
      caption: 'Enterprise CRM Platform'
    },
    {
      src: 'assets/gallery/app2.jpg',
      alt: 'Project 2',
      caption: 'Mobile Banking App'
    },
    {
      src: 'assets/gallery/app3.jpg',
      alt: 'Project 3',
      caption: 'Custom E-commerce Platform'
    },
    {
      src: 'assets/gallery/app4.jpg',
      alt: 'Project 4',
      caption: 'IoT Dashboard'
    },
    {
      src: 'assets/gallery/app5.jpg',
      alt: 'Project 5',
      caption: 'Inventory Management System'
    },
    {
      src: 'assets/gallery/app6.jpg',
      alt: 'Project 6',
      caption: 'E-learning Platform'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  onContactClick(){
    
  }

}
