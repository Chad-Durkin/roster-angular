import { Component, OnInit } from '@angular/core';
import { Roster } from '../roster.model';
import { RosterService } from '../roster.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [RosterService]
})

export class EditPlayerComponent implements OnInit {
  playerId: string;
  player: FirebaseObjectObservable<any>;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private rosterService: RosterService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = urlParameters['id'];
    });
    this.player = this.rosterService.getPlayerById(this.playerId);
  }

  editPlayer(name: string, role: string, height: string, weight: string, year: string, picture: string, games: number, assists: number, points: number, rebounds: number, blocks: number, steals: number, turnovers: number) {
    var editPlayer: Roster = new Roster(name, role, height, weight, year, picture, games, assists, points, rebounds, blocks, steals, turnovers);

    this.rosterService.updateRoster(editPlayer, this.playerId);
      this.router.navigate(['']);
  }


    toHome() {
      this.router.navigate(['']);
    }
}
