import { Injectable } from '@angular/core';
import { Roster } from './roster.model';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class RosterService {
  roster: FirebaseListObservable<any[]>;
  // player: FirebaseObjectObservable<any>;

  constructor(private angularFire: AngularFire) {
    this.roster = angularFire.database.list('roster');
  }

  getRoster() {
    return this.roster;
  }

  getPlayerById(playerId: string){
    return this.angularFire.database.object('roster/' + playerId);
  }

  addToRoster(newPlayer: Roster) {
    this.roster.push(newPlayer);
  }

  updateRoster(localPlayer: Roster, playerId: string) {
    var playerInFirebase = this.getPlayerById(playerId);
    playerInFirebase.update({name: localPlayer.name, role: localPlayer.role, height: localPlayer.height, weight: localPlayer.weight, year: localPlayer.year, picture: localPlayer.picture});
  }
}
