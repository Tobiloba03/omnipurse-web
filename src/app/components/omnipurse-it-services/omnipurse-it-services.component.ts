import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-omnipurse-it-services',
  templateUrl: './omnipurse-it-services.component.html',
  styleUrls: ['./omnipurse-it-services.component.css']
})
export class OmnipurseItServicesComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToFAQ() {
    this.router.navigate(['/faq']);
  }

}
