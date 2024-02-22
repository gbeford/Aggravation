import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { GameService, IScore } from '../services/game.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  // providers:[GameService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  title = 'Aggravation';
  scoreList$: Observable <IScore[]> = of([]);

  constructor(private service: GameService) {}

  ngOnInit(): void {
    this.scoreList$ = this.service.userData$;
    this.service.userData$.subscribe(data => {
      console.log('data', data);
    }); // Here you have that name
    //   // You can filter it like (.pipe(filter(name => !!name)) is you don't want undefined value
 
  }


}
