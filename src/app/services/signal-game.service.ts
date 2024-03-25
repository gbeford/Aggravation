import { Injectable, signal } from '@angular/core';
import { IScore } from './score';
import { rounds } from './game-reference';

@Injectable({
  providedIn: 'root'
})
export class SignalGameService {
  players: string[] = ['Gina', 'Pat', 'Linda', 'Adam', 'John W', 'John T'];

  private userData: IScore[] = [];
  _signalUserData = signal<IScore[]>([]);
  private signalUserData: IScore[] = [];


  constructor() {
    this.setupPlayers();
    console.log('here signal service');
  }

  getRounds() {
    return rounds;
  }

  getPlayers() {
    return this.players;
  }

  // set up initial player, round and score
  setupPlayers() {
    this.players.forEach((x) => {
      this.userData.push({ name: x, round: '1', score: 0 });
      this._signalUserData.set(this.signalUserData)
      console.log('signal - players', this.signalUserData);
    });
  }


  addUserRound(score: IScore): void {
    const player = this.userData.find((r) => r.name == score.name);

    if (player) {
      player.score += score.score;
      player.round = score.round;
      // console.log('player  -->', player);
      // console.log('this.userData ------>', this.userData);
      // this._userData.next(Object.assign([], this.userData));
    }
  }

}
