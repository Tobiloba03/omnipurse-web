import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewAcademyDetailsComponent } from '../view-academy-details/view-academy-details.component';

@Component({
  selector: 'app-omnipurse-academy',
  templateUrl: './omnipurse-academy.component.html',
  styleUrls: ['./omnipurse-academy.component.css']
})
export class OmnipurseAcademyComponent implements AfterViewInit {
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
  technologies = [
    { name: 'Web', icon: 'assets/ICON/Web-dev-Icon.png' },
    { name: 'Java', icon: 'assets/ICON/Java-Dev-Icon.png' },
     { name: 'ASP.NET', icon: 'assets/ICON/dotnet-icon.png' },
    { name: 'ASP.NET Core', icon: 'assets/ICON/DotNetCore-Dev-Icon.png' },
    { name: 'C-Sharp', icon: 'assets/ICON/C-Sharp-Dev-Icon.png' },
    { name: 'Xamarin', icon: 'assets/ICON/Xamarin-Dev-Icon.png' },
    { name: 'Python', icon: 'assets/ICON/Python-Dev-Icon.png' },
    { name: 'HTML5', icon: 'assets/ICON/HTM5-Icon.png' },
    { name: 'JavaScript', icon: 'assets/ICON/JavaScript-Dev-Icon.png' },
    { name: 'TypeScript', icon: 'assets/ICON/typescript-icon.png' },
    { name: 'AngularJS', icon: 'assets/ICON/AngularJS-Dev.png' },
    { name: 'React Native', icon: 'assets/ICON/ReactNative-Dev-Icon.png' },
  ];
  constructor(private dialog: MatDialog,) { }

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

  ViewSyllabus(): void {
      this.dialog.open(ViewAcademyDetailsComponent, {
        autoFocus: false,
        width: "60vw",
        height: "80vh",
        disableClose: false,
      });
    }

    ViewPrerequisites(): void {
      this.dialog.open(ViewAcademyDetailsComponent, {
        autoFocus: false,
        width: "60vw",
        height: "80vh",
        disableClose: false,
      });
    }

    EnrollNow(): void {
      this.dialog.open(ViewAcademyDetailsComponent, {
        autoFocus: false,
        width: "60vw",
        height: "80vh",
        disableClose: false,
      });
    }

}
