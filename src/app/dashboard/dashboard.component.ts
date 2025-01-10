import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { GameService } from '../services/game.service';
import { Observable, of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { IScore } from '../services/score';

@Component({
    selector: 'app-dashboard',
    imports: [AsyncPipe, CommonModule, RouterModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  title = 'Aggravation';
  scoreList$: Observable<IScore[]> = of([]);

  constructor(private service: GameService) { }

  ngOnInit(): void {
    this.scoreList$ = this.service.userData$;
  }
}
