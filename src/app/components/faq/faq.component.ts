import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     document.querySelectorAll('.faq-item').forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.faq-item').forEach((el) => el.classList.remove('open'));
      item.classList.toggle('open');
    });
  });
  }

  

}
