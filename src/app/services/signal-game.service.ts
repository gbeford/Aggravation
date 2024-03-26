import { Injectable, signal } from '@angular/core';
import { IScore } from './score';
import { rounds } from './game-reference';

@Injectable({
  providedIn: 'root'
})
export class SignalGameService {
  players= signal(['Gina', 'Pat', 'Linda', 'Adam', 'John W', 'John T']);

  private playerData: IScore[] = [];
  _playerData = signal<IScore[]>([]);

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
      this.playerData.push({ name: x, round: '1', score: 0 });
      this._playerData.set(this.playerData)
      console.log('signal - players', this.playerData);
    });
  }


  updatePlayerRound(score: IScore): void {
    const player = this.playerData.find((r) => r.name == score.name);

    if (player) {
      player.score += score.score;
      player.round = score.round;
      // console.log('player  -->', player);
      // console.log('this.userData ------>', this.userData);
      // this._userData.next(Object.assign([], this.userData));
      this._playerData.set(this.playerData)
    }
  }

}
