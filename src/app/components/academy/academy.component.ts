import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css']
})
export class AcademyComponent implements OnInit {
programs = [
    {
      title: 'Full-Stack Web Development',
      description: 'Master HTML, CSS, JavaScript, Angular, Typescript, .Net core, .Net web APIs, .Net MVC in our 12-week bootcamp.'
    },
    {
      title: 'Data Science & AI',
      description: 'Learn Python, data analysis, machine learning, and build intelligent models.'
    },
    {
      title: 'Mobile App Development',
      description: 'Design and build Android/iOS apps using Flutter and React Native.'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Understand AWS, Docker, Kubernetes, CI/CD and deploy scalable apps.'
    }
  ];

  formData = {
    name: '',
    email: '',
    program: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

 applyForProgram(programTitle: string) {
    this.formData.program = programTitle;
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
    
  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
