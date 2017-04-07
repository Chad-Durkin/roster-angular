export class Roster {
  public games: number = 0;
  public assists: number = 0;
  public points: number = 0;
  public rebounds: number = 0;
  public blocks: number = 0;
  public steals: number = 0;
  public turnovers: number = 0;
  public fieldGoalAttempts: number = 0;
  public fieldGoalslMade: number = 0;
  public threePointAttempts: number = 0;
  public threePointsMade: number = 0;
  public freeThrowAttempts: number = 0;
  public freeThrowsMade: number = 0;

  constructor(public name: string, public role: string, public height: string, public weight: string, public year: string, public picture: string) { }
}
