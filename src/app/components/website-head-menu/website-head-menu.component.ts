import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-website-head-menu',
  templateUrl: './website-head-menu.component.html',
  styleUrls: ['./website-head-menu.component.css']
})
export class WebsiteHeadMenuComponent implements OnInit {
  loggedUser: string = '';
  isLoggedIn: boolean = false;
  constructor(private ut: UtilService) { }

  ngOnInit(): void {
    this.getLoggedUser();
  }

  getLoggedUser()
  {
    debugger
    const user = localStorage.getItem("user");
    if (user === null || user === "null") {
      this.loggedUser = '';
    }
    else
    {
      this.loggedUser = user;
    }
    this.pageModerator();
  }

  pageModerator()
  {
    if(this.loggedUser !== '')
    {
      this.isLoggedIn = true;
    }
  }

}
