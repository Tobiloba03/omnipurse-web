import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-omnipurse-trainings',
  templateUrl: './omnipurse-trainings.component.html',
  styleUrls: ['./omnipurse-trainings.component.css']
})
export class OmnipurseTrainingsComponent implements OnInit {
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

  onSubmit() {
    // Placeholder for API or service
    console.log('Application Submitted:', this.formData);
    alert(`Thank you ${this.formData.name}, your application for ${this.formData.program} has been received.`);
    this.formData = { name: '', email: '', program: '' };
  }

 ViewPrerequisites(){

 }

 ViewSyllabus(){
  
 }

EnrollNow(){

}

}
