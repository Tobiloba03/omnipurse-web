import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initializeFilters();
  }

  initializeFilters(): void {
    // Add click event listeners for filter tabs
    setTimeout(() => {
      const filterTabs = document.querySelectorAll('.tab-btn');
      const blogPosts = document.querySelectorAll('.blog-post');

      filterTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          // Remove active class from all tabs
          filterTabs.forEach((t) => t.classList.remove('active'));
          // Add active class to clicked tab
          tab.classList.add('active');

          const category = tab.getAttribute('data-category');

          // Filter posts
          blogPosts.forEach((post) => {
            if (
              category === 'all' ||
              post.getAttribute('data-category') === category
            ) {
              (post as HTMLElement).style.display = 'block';
            } else {
              (post as HTMLElement).style.display = 'none';
            }
          });
        });
      });
    }, 100);
  }
}
