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
}
