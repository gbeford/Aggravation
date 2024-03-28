import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignalGameService } from '../../services/signal-game.service';
import { IScore } from '../../services/score';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-signal-dashboard',
  standalone: true,
  imports: [AsyncPipe, CommonModule, RouterModule, MatCardModule, MatIconModule],
  templateUrl: './signal-dashboard.component.html',
  styleUrl: './signal-dashboard.component.scss'
})
export class SignalDashboardComponent {
  title = 'Aggravation';
  scoreList: IScore[] = [];

  constructor(private service: SignalGameService) {
    this.scoreList = service.playerData().sort((firstItem, secondItem) => firstItem.name.localeCompare(secondItem.name));
  }

  ngOnInit(): void {

  }
}
