import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IScore {
  score: number;
  name: string;
  round: string;
}

export interface IRound {
  roundNumber: number;
  title: string;
  qualifier?: string;
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  rounds: IRound[] = [
    {
      roundNumber: 1,
      title: '2 Sets of 3',
    },
    {
      roundNumber: 2,
      title: '2 Runs of 3',
      qualifier: 'Same Suit',
    },
    {
      roundNumber: 3,
      title: 'Set of 3',
      qualifier: 'Run of 4',
    },
    {
      roundNumber: 4,
      title: '2 Sets of 4',
    },
    {
      roundNumber: 5,
      title: 'Set of 3',
      qualifier: 'Run of 5',
    },
    {
      roundNumber: 6,
      title: '3 Sets of 3',
    },
    {
      roundNumber: 7,
      title: 'Run of 7',
    },
    {
      roundNumber: 8,
      title: 'Set of 3',
      qualifier: 'Run of 6',
    },
    {
      roundNumber: 9,
      title: '2 Runs of 4',
      qualifier: 'Same Suit',
    },
    {
      roundNumber: 10,
      title: '2 Sets of 5',
    },
    {
      roundNumber: 11,
      title: 'Run of 8',
    },
    {
      roundNumber: 12,
      title: 'Set of 6',
      qualifier: 'Run of 3',
    },
    {
      roundNumber: 13,
      title: 'Set of 5',
      qualifier: 'Run of 5',
    },
    {
      roundNumber: 14,
      title: 'Run of 9',
      qualifier: 'Same Suit',
    },
    {
      roundNumber: 15,
      title: 'Set of 10',
    },
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
