import { Injectable, signal } from '@angular/core';
import { IScore } from './score';
import { rounds } from './game-reference';

@Injectable({
  providedIn: 'root'
})
export class SignalGameService {
  players = signal(['Gina', 'Pat', 'Linda', 'Adam', 'John W', 'John T']);
  playerData = signal<IScore[]>([]);
  playerRound = signal(rounds);

  constructor() {
    this.setupPlayers();
    console.log('here signal service');
  }

  // set up initial player, round and score
  setupPlayers() {
    const data: IScore[] = [];
    this.players().forEach((x) => {
      data.push({ name: x, round: '1', score: 0 });
    });
    this.playerData.set(data);
  }

  updatePlayerRound(score: IScore): void {
    this.playerData.update(value => {
      const player = value.find((r) => r.name == score.name)!; // ! It tells TypeScript that even though something looks like it could be null, it can trust you that it's not:

      player.score += score.score;
      player.round = score.round;
      return value;
    })
  }

}
