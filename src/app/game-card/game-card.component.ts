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
  color: string = '';
  colorIndex = 0;
  constructor(service: GameService) { 
    this.rounds = service.getRounds();
  }

  getColor(): string {
    const colorsArray = ['#fe6100', '#785ef0', '#dc267f'];
    this.color = colorsArray[this.colorIndex];
    this.colorIndex++;
    if (this.colorIndex > 2) this.colorIndex = 0;
    return this.color;
  }

  toggleOpacity(roundNumber: number): void {
    const list = document.querySelectorAll('div.round-container');
    list.forEach((element) => {
      element.classList.remove('opaque');
    });
    const selectedElement = document.getElementById(`round-container-${roundNumber}`);
    selectedElement?.classList.add('opaque');
  }
}
