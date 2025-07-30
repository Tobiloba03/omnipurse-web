import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JoinOurTeamComponent } from '../join-our-team/join-our-team.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  JoinOurTeam(): void {
        this.dialog.open(JoinOurTeamComponent, {
          autoFocus: false,
          width: "60vw",
          height: "80vh",
          disableClose: false,
        });
      }

}
