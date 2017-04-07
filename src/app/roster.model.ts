export class Roster {
  public fieldGoalAttempts: number = 0;
  public fieldGoalslMade: number = 0;
  public threePointAttempts: number = 0;
  public threePointsMade: number = 0;
  public freeThrowAttempts: number = 0;
  public freeThrowsMade: number = 0;

  constructor(public name: string, public role: string, public height: string, public weight: string, public year: string, public picture: string, public games = 0, public assists = 0, public points = 0, public rebounds = 0, public blocks = 0, public steals = 0, public turnovers = 0) { }
}
