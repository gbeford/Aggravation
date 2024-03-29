import { Component } from '@angular/core';
import { GameService } from '../services/game.service';
import { IRound } from '../services/round';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
  rounds: IRound[];
  rowClicked = 0;
  constructor(service: GameService) { 
    this.rounds = service.getRounds();
  }

  highlightRow(roundNumber: number) {
    if (this.rowClicked === roundNumber) this.rowClicked = -1;
    else this.rowClicked = roundNumber;
  }
}
