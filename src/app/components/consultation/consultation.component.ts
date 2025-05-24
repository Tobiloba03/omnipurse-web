import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css'],
})
export class ConsultationComponent {
  eName: string = '';
  eEmail: string = '';
  ePhone: string = '';
  eScheduleDate: string = '';
  eScheduleTime: string = '';
  eIsCompany: string = '';
  isBusy: boolean = false;
  testimonials = [
    {
      name: 'Alice Johnson',
      feedback: 'Truly insightful consultation. Highly recommend!',
    },
    {
      name: 'Mark Smith',
      feedback: 'Professional and helpful. Cleared all my doubts.',
    },
    {
      name: 'Nina Patel',
      feedback: 'Gave me clarity and confidence in my decisions.',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.liveChat();
  }

  bookNow() {
    // Logic for opening a booking modal or redirecting to a booking form
    alert('Booking feature coming soon!');
  }

  goToFAQ() {
    this.router.navigate(['/faq']);
  }

  bookConsultation() {}

  liveChat() {
    // Inject Tawk.to script
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/68284ee23cb2bd190f12ce64/1iren89oj';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
  }
}
