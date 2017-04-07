import { Component, OnInit } from '@angular/core';
import { Roster } from '../roster.model';
import { RosterService } from '../roster.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RosterService]
})

export class HomeComponent implements OnInit {
  playerRoster: FirebaseListObservable<any[]>;
  playerRole: string = "All Roles";

  constructor(private rosterService: RosterService, private router: Router) { }

  ngOnInit() {
    this.playerRoster = this.rosterService.getRoster();
  }


  onChange(optionFromMenu) {
    this.playerRole = optionFromMenu;
  }

  playerDetails(playerId: string) {
    this.router.navigate(['player', playerId])
  }

}
