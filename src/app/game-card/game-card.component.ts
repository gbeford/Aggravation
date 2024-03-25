import { Component } from '@angular/core';
import { GameService, IRound } from '../services/game.service';


@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
  rounds: IRound[];
  constructor(service: GameService) { this.rounds = service.getRounds(); }
}
