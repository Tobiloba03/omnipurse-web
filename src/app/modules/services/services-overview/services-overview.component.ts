import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-overview',
  templateUrl: './services-overview.component.html',
  styleUrls: ['./services-overview.component.css']
})
export class ServicesOverviewComponent implements OnInit {
features = [
  { icon: 'assets/icons/design.svg', title: 'Amazing Design', desc: 'Modern interfaces that drive engagement.' },
  { icon: 'assets/icons/support.svg', title: '24/7 Support', desc: 'Around-the-clock technical support.' },
  { icon: 'assets/icons/consult.svg', title: 'Expert Consults', desc: 'Actionable insights from professionals.' },
  { icon: 'assets/icons/development.svg', title: 'Custom Development', desc: 'Tailored solutions for unique needs.' }
];

services = [
  { title: 'IT Services', description: 'Reliable and scalable IT infrastructure tailored for your business needs. We provide maintenance, security, and optimization of your IT systems.', image: 'assets/images/it-services.jpg', link: '/services/it-services' },
  { title: 'IT Consultations', description: 'Expert advisory services to help you make the right tech decisions and investments. We turn complex IT challenges into growth opportunities.', image: 'assets/images/it-consult.jpg', link: '/services/it-consultations' },
  { title: 'Business Development', description: 'Strategic support for expanding your reach, increasing revenue, and identifying new opportunities through digital transformation and smart analytics.', image: 'assets/images/business-dev.jpg', link: '/services/business-development' },
  { title: 'Software Solutions', description: 'Custom software design and development that fits your workflow and goals—built for performance, scalability, and user experience.', image: 'assets/images/software.jpg', link: '/services/software-solutions' },
  { title: 'AI and IoT Innovations', description: 'Smart technology solutions powered by Artificial Intelligence and IoT, designed to automate, optimize, and transform your operations.', image: 'assets/images/ai-iot.jpg', link: '/services/ai-iot' },
  { title: 'Academy Trainings & Internships', description: 'Upskill with hands-on training and internship programs in IT, AI, and software development—built to prepare you for real-world success.', image: 'assets/images/academy.jpg', link: '/services/academy' },
  { title: 'Corporate Incorporations', description: 'Launch your business with confidence. We guide you through the legal and operational steps of company formation across multiple jurisdictions.', image: 'assets/images/corporate.jpg', link: '/services/corporate' }
];
  constructor() { }

  ngOnInit(): void {
  }

}
