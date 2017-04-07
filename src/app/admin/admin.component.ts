import { Component, OnInit } from '@angular/core';
import { Roster } from '../roster.model';
import { RosterService } from '../roster.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [RosterService]
})
export class AdminComponent implements OnInit {
  playerRoster: FirebaseListObservable<any[]>;
  constructor(private rosterService: RosterService, private router: Router) { }

  ngOnInit() {
      this.playerRoster = this.rosterService.getRoster();
  }

  addPlayer() {
    this.router.navigate(['addPlayer']);
  }

  editPlayer(playerToEdit: Roster) {
    this.router.navigate(['editPlayer', playerToEdit]);
  }
}
