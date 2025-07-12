import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-overview',
  templateUrl: './services-overview.component.html',
  styleUrls: ['./services-overview.component.css'],
})
export class ServicesOverviewComponent implements OnInit {
  features = [
    {
      icon: 'assets/ICON/check.svg',
      title: 'Amazing Design',
      desc: 'Modern interfaces that drive engagement.',
    },
    {
      icon: 'assets/ICON/support.svg',
      title: '24/7 Support',
      desc: 'Around-the-clock technical support.',
    },
    {
      icon: 'assets/ICON/consult.svg',
      title: 'Expert Consults',
      desc: 'Actionable insights from professionals.',
    },
    {
      icon: 'assets/ICON/code.svg',
      title: 'Custom Development',
      desc: 'Tailored solutions for unique needs.',
    },
  ];

  services = [
    {
      title: 'IT Services',
      description:
        'Reliable and scalable IT infrastructure tailored for your business needs. We provide maintenance, security, and optimization of your IT systems.',
      image: 'assets/ServicesIMG/it-services.jpg',
      link: '/omnipurse-it-services',
    },
    {
      title: 'IT Consultations',
      description:
        'Expert advisory services to help you make the right tech decisions and investments. We turn complex IT challenges into growth opportunities.',
      image: 'assets/ServicesIMG/it-consult.jpg',
      link: '/consultation',
    },
    {
      title: 'Business Development',
      description:
        'Strategic support for expanding your reach, increasing revenue, and identifying new opportunities through digital transformation and smart analytics.',
      image: 'assets/ServicesIMG/business-dev.jpg',
      link: '/services/business-development',
    },
    {
      title: 'Software Solutions',
      description:
        'Custom software design and development that fits your workflow and goals—built for performance, scalability, and user experience.',
      image: 'assets/ServicesIMG/software.jpg',
      link: '/services/software-solutions',
    },
    {
      title: 'AI and IoT Innovations',
      description:
        'Smart technology solutions powered by Artificial Intelligence and IoT, designed to automate, optimize, and transform your operations.',
      image: 'assets/ServicesIMG/ai-iot.jpg',
      link: '/services/ai-and-iot-innovations',
    },
    {
      title: 'Academy Trainings & Internships',
      description:
        'Upskill with hands-on training and internship programs in IT, AI, and software development—built to prepare you for real-world success.',
      image: 'assets/ServicesIMG/academy.jpg',
      link: '/academy',
    },
    {
      title: 'Corporate Incorporations',
      description:
        'Launch your business with confidence. We guide you through the legal and operational steps of company formation across multiple jurisdictions.',
      image: 'assets/ServicesIMG/corporate.jpg',
      link: '/services/corporate',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
