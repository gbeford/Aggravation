import { Component } from '@angular/core';
import { GameService } from '../services/game.service';


@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
  rounds: string[];
  constructor(service: GameService) { this.rounds = service.getRounds(); }
}
