import { effect, Injectable, signal } from '@angular/core';
import { IScore } from '../score';
import { rounds } from '../game-reference';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SignalGameService {
  players = signal(['Gina', 'Pat', 'Linda', 'Adam', 'John W', 'John T']);
  playerData = signal<IScore[]>([]);
  playerRound = signal(rounds);

  constructor(localStorage: LocalStorageService) {
    this.setupPlayers();
    this.loadFromLocalStorage();
    // Synchronize with localStorage whenever the signal changes
     this.syncLocalStorage();
    // effect(() => {
    //   localStorage.setItem('playerData', JSON.stringify(this.playerData()));
    // });
    console.log('here signal service');
  }

  // set up initial player, round and score then set the signal
  setupPlayers() {
    const data: IScore[] = [];
    this.players().forEach((x) => {
      data.push({ name: x, round: '1', score: 0 });
    });
    this.playerData.set(data);
  }

  updatePlayerRound(score: IScore): void {
    this.playerData.update((value) => {
      // ! It tells TypeScript that even though something looks like it could be null, it can trust that it's not:
      const player = value.find((r) => r.name == score.name)!;
      player.score += score.score;
      player.round = score.round;
      return value;
    });
    console.log('updatePlayerRound() ------>', this.playerData());
  }

  private syncLocalStorage() {
    effect(() => {
      localStorage.setItem('playerData', JSON.stringify(this.playerData()));
    });
  }

   loadFromLocalStorage() {
    const storedValue = localStorage.getItem('playerData');
    if (storedValue) {
      this.playerData.set(JSON.parse(storedValue) as IScore[]);
    }
  }
}
