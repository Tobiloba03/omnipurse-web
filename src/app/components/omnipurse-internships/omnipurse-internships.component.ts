import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-omnipurse-internships',
  templateUrl: './omnipurse-internships.component.html',
  styleUrls: ['./omnipurse-internships.component.css']
})
export class OmnipurseInternshipsComponent implements AfterViewInit {
@ViewChild('carousel') carousel!: ElementRef;
testimonials = [
    {
      image: 'assets/iMG/student-testimonial1.jpg',
      message: `I am delighted that you have taken the time to visit our website. It means you are considering a meaningful and lasting investment in your child's future and that is something we do not take lightly.

At Beautiful Beginning Academy, we are more than a school. We are a caring, committed community where each child is known, supported, and inspired to reach their highest potential.

I invite you to explore all we offer and discover how we can partner with you to give your child a strong, confident start in life.`,
      name: 'Dr. Rosemary Nasa-Okolie',
      title: 'Batch 1 Alumnus',
    },
    {
      image: 'assets/iMG/student-testimonial2.jpg',
      message: `Same message duplicated for scroll testing.`, // You can change this
      name: 'Mary Bassey',
      title: 'Enrollee Batch 2',
    },
  ];
  constructor() { }

  ngAfterViewInit() {
    this.autoScroll();
  }

   scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -320, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 320, behavior: 'smooth' });
  }

  autoScroll() {
    setInterval(() => {
      this.scrollRight();
    }, 5000); // Every 5 seconds
  }

}
