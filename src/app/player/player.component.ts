import { Component, OnInit } from '@angular/core';
import { Roster } from '../roster.model';
import { RosterService } from '../roster.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [RosterService]
})
export class PlayerComponent implements OnInit {
  playerId: string;
  player: FirebaseObjectObservable<any>;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private rosterService: RosterService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = urlParameters['id'];
    });
    this.player = this.rosterService.getPlayerById(this.playerId);
  }

}
