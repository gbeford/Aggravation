import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signal-dashboard',
  standalone: true,
  imports: [AsyncPipe, CommonModule, RouterModule],
  templateUrl: './signal-dashboard.component.html',
  styleUrl: './signal-dashboard.component.scss'
})
export class SignalDashboardComponent {
  title = 'Aggravation';
  // scoreList$: Observable <IScore[]> = of([]);

  constructor(private service: GameService) { }

  ngOnInit(): void {
    //  this.scoreList$ = this.service.userData$;
  }
}
