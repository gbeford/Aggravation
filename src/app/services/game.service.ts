import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

//https://www.tektutorialshub.com/angular/angular-subject-example/

export interface IScore {
  score: number;
  name: string;
  round: string;
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  rounds: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
  ];
  players: string[] = ['Gina', 'Pat', 'Linda', 'Adam', 'John W', 'John T'];

  private _userData = new BehaviorSubject<IScore[]>([]);
  readonly userData$: Observable<IScore[]> = this._userData.asObservable();
  private userData: IScore[] = [];

  constructor() {
    this.setupPlayers();
    console.log('here');
  }

  getRounds() {
    return this.rounds;
  }

  getPlayers() {
    return this.players;
  }

  // set up initial player, round and score
  setupPlayers() {
    this.players.forEach((x) => {
      this.userData.push({ name: x, round: '1', score: 0 });
    });
    this._userData.next(Object.assign([], this.userData));
  }

  addUserRound(score: IScore): void {
    const player = this.userData.find((r) => r.name == score.name);
 
    if (player) {
      player.score += score.score;
      player.round = score.round;
      // console.log('player  -->', player);
      // console.log('this.userData ------>', this.userData);
      this._userData.next(Object.assign([], this.userData));
    }
  }
}
