import { Component } from '@angular/core';
import { GameService } from '../services/game.service';
import { IRound } from '../services/round';


@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
  rounds: IRound[];
  constructor(service: GameService) { 
    this.rounds = service.getRounds(); 
  }
}
