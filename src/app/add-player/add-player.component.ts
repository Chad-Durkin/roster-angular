import { Component, OnInit } from '@angular/core';
import { Roster } from '../roster.model';
import { RosterService } from '../roster.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
  providers: [RosterService]
})
export class AddPlayerComponent implements OnInit {

  constructor(private router: Router, private rosterService: RosterService) { }

  ngOnInit() {
  }

  addPlayer(name: string, role: string, height: string, weight: string, year: string, picture: string) {
    var newPlayer: Roster = new Roster(name, role, height, weight, year, picture);
    this.rosterService.addToRoster(newPlayer);
      this.router.navigate(['']);
  }

  toHome() {
    this.router.navigate(['']);
  }

}
